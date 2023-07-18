import React from "react";
import "./carousel.css";

export default function BoundaryLine() {
    return (
        <div>
            <div className="container marketing">
                <div className="text-center">
                    <div className="text-center">
                        <h1 className="featurette-heading">Where in Solana Beach is Division #2?</h1>
                    </div>
                </div>
                <div className="text-center py-5">
                    <img className="img-fluid"
                         src="https://dana4water-images.s3.us-east-2.amazonaws.com/public/solana-beach-division-2-boundaries.png"
                         alt="Division 2 Boundaries"/>
                </div>
            </div>
        </div>
    );
}
