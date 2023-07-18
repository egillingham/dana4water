import React from "react";
import "./carousel.css";

export default function Home() {
    return (
        <div>
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active"
                         style={{backgroundImage: "url(https://dana4water-images.s3.us-east-2.amazonaws.com/public/dana-flowers-wide-top.jpg)"}}
                    >
                        <div className="carousel-caption text-left">
                            <h1 className="main-h1">Dana Friehauf</h1>
                            <div className="rounded main-h2">
                                <h2 className="p-2">Santa Fe Irrigation District<br/>Board Member</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container marketing">
                <div className="row featurette">
                    <div className="col-md-12">
                        <h1>Dana Friehauf</h1>
                        <h2 className="text-muted"> Santa Fe Irrigation District Board Member <a href="/boundary-line">Division #2</a></h2>
                        <p className="lead featurette-main-lead">I am honored and thrilled to have been elected to the Santa Fe Irrigation District Board on November 3, 2020.  I want to personally thank all those who supported and voted for me. I commit to working diligently to represent you on the Board and promise to use my water knowledge, wisdom and vision for the District to ensure that our community has an affordable and sustainable water supply. Please <a href="/contact"><u>contact me</u></a> if you have any concerns or questions regarding your water service and rates.</p>
                    </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-8">
                        <h2 className="featurette-heading">Experience</h2>
                        <p className="lead">Over 30 years of public sector experience in the field of water resources. As a Water Resources Manager at the San Diego County Water Authority, oversaw development of plans and policies to help ensure a reliable water supply for the San Diego region. As a private citizen, has been attending Santa Fe Irrigation District Board meetings, hearings and workshops advocating for water rates that are fair and equitable for Solana Beach ratepayers. Is dedicated to the Solana Beach community, having grown up here and returned in 1988 to work and raise a family.</p>
                    </div>
                    <div className="col-md-4 pt-5">
                        <img className="rounded featurette-image img-fluid mx-auto" src="https://dana4water-images.s3.us-east-2.amazonaws.com/public/dana-presenting-square.jpg"
                             alt="Dana Presenting"/>
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-8 order-md-2">
                        <h2 className="featurette-heading">Knowledge</h2>
                        <p className="lead">Has an extensive knowledge of local and state water issues along with a clear understanding of how to provide communities with an affordable water supply. Understands the specific cost and supply challenges the District faces in meeting its mission of providing a safe and reliable water supply. The District is highly reliant on expensive imported supplies, whose costs are going to continue to increase and be passed on to the residents and businesses in our community.</p>
                    </div>
                    <div className="col-md-4 pt-5 order-md-1">
                        <img className="rounded featurette-image img-fluid mx-auto" src="https://dana4water-images.s3.us-east-2.amazonaws.com/public/lake-hodges-square.jpg"
                             alt="Lake Hodges"/>
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-8">
                        <h2 className="featurette-heading">Vision</h2>
                        <p className="lead">Create an affordable locally sustainable water supply portfolio for our community. A portfolio that will include cost-effective local supply projects, such as potable reuse, to reduce reliance on expensive imported supplies, provide more long-term cost certainty and lessens rate impacts to customers. Future water rates must also continue to be fair and equitable to the rate payers of Solana Beach. In the District’s budgeting process, savings should be achieved through cost efficiencies and not just deferral of projects and programs. Decision making at the District must be conducted in an open and transparent manner, ensuring that the community has ample opportunity to provide input on actions that could impact their water rates and supply reliability.</p>
                    </div>
                    <div className="col-md-4 pt-5">
                        <img className="rounded featurette-image img-fluid mx-auto" src="https://dana4water-images.s3.us-east-2.amazonaws.com/public/sb-scenic.jpg"
                             alt="San Elijo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
