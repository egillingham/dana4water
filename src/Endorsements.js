import React from "react";
import "./carousel.css";

export default function Endorsements() {
    return (
        <div>
            <div className="pb-5">
                <div className="text-center">
                    <img className="img-fluid"
                         src="https://dana4water-images.s3.us-east-2.amazonaws.com/public/san-elijo-wide.jpg"
                         alt="San Elijo"/>
                </div>
            </div>
            <div className="container marketing">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Endorsements from Solana Beach Community</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="featurette-heading">Jewel Edson</h2>
                        <div className="lead">Solana Beach City Mayor</div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="featurette-heading">Mike Hogan</h2>
                        <div className="lead">Santa Fe Irrigation District Board Chair</div>
                        <div className="lead">San Diego County Water Authority Board Member</div>
                        <div className="lead">Metropolitan Water District Board Member</div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="featurette-heading">Kristi Becker</h2>
                        <div className="lead">Solana Beach City Councilmember</div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="featurette-heading">Andy Menshek</h2>
                        <div className="lead">Santa Fe Irrigation District Board Member</div>
                        <div className="lead">Former Fire Battalion Chief, Cal-Fire</div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="featurette-heading">Kelly Harless</h2>
                        <div className="lead">Solana Beach City Councilmember</div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="featurette-heading">Alan Smerican</h2>
                        <div className="lead">Former Santa Fe Irrigation District Board Member</div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="featurette-heading">David Zito</h2>
                        <div className="lead">Solana Beach City Councilmember</div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="featurette-heading">Bud Irvin</h2>
                        <div className="lead">Former Santa Fe Irrigation District Board Member</div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="featurette-heading">Lesa Heebner</h2>
                        <div className="lead">Solana Beach City Incoming Mayor</div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="featurette-heading">Frank Belock</h2>
                        <div className="lead">Former City of San Diego Water Department Director</div>
                        <div className="lead">Former San Diego County Water Authority Deputy General Manager</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
