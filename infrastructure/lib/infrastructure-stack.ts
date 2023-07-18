import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3'
import * as s3Deployment from '@aws-cdk/aws-s3-deployment'
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as origins from '@aws-cdk/aws-cloudfront-origins';
import * as acm from '@aws-cdk/aws-certificatemanager';
import * as route53 from '@aws-cdk/aws-route53';
import targets = require('@aws-cdk/aws-route53-targets');
import { ViewerProtocolPolicy } from "@aws-cdk/aws-cloudfront";


export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const domain = "dana4water.com";

    const dana4waterBucket = new s3.Bucket(this, "dana4water-website", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
      bucketName: domain
    });

    const dana4waterHostedZone = route53.HostedZone.fromHostedZoneAttributes(this, "dana4waterHostedZone",
        {hostedZoneId: "Z06680433DVKNKBJV1B8", zoneName: domain}
    );
    const dana4WaterCertificate = acm.Certificate.fromCertificateArn(this, "dana4waterCert",
        "arn:aws:acm:us-east-1:189803052433:certificate/e208cadd-dd67-4a5e-bd4e-7e661af61792"
    );

    const dana4awsCloudFront = new cloudfront.Distribution(this, 'dana4waterCloudFront', {
      defaultBehavior: {
        origin: new origins.S3Origin(dana4waterBucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS
      },
      domainNames: [domain],
      certificate: dana4WaterCertificate,
      errorResponses: [
        {httpStatus: 404, responseHttpStatus: 200, responsePagePath: "/index.html"}
      ]
    });

    new s3Deployment.BucketDeployment(this, "deployStaticWebsite", {
      sources: [s3Deployment.Source.asset("../build")],
      destinationBucket: dana4waterBucket,
      distribution: dana4awsCloudFront,
      distributionPaths: ['/*'],
    });

    new route53.ARecord(this, "cloudFrontRecord", {
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(dana4awsCloudFront)),
      zone: dana4waterHostedZone,
    });

    new route53.AaaaRecord(this, "cloudFrontIp6Record", {
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(dana4awsCloudFront)),
      zone: dana4waterHostedZone,
    });
  }
}
