import React from "react";
import "./carousel.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <header>
                <nav className="navbar navbar-expand-md fixed-top navbar-custom">
                    <a className="navbar-brand" href="/">Dana4Water</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About Dana</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </header>
        </Router>
    )
}

function Home() {
    return (
        <div>
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active"
                         style={{backgroundImage: "url(https://dana4water-images.s3.us-east-2.amazonaws.com/public/dana-flowers-wide-top.jpg)"}}
                    >
                        <div className="carousel-caption text-left">
                            <h1 className="main-h1">Dana Friehauf</h1>
                            <h2 style={{color: "#181C37"}}>Santa Fe Irrigation District<br/>Board Member - Nov 3</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container marketing">
                <div className="row featurette">
                    <div>
                        <h1>Vote for Dana Friehauf</h1>
                        <h2 className="text-muted"> Santa Fe Irrigation District Board Member Division #2</h2>
                        <p className="lead featurette-main-lead">The Santa Fe Irrigation District Board of Directors will be making critical decisions over the next few years that will impact water rates and the long-term sustainability of our water supplies.  The Board needs someone with proven water experience, knowledge, and vision to guide the agency through these major decisions.  I am that person! </p>
                    </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Experience</h2>
                        <p className="lead">I have over 30 years of public sector experience in water supply policy and planning, with an extensive knowledge of water issues and a clear understanding of how to provide a long-term affordable sustainable water supply to the community of Solana Beach.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" src="https://dana4water-images.s3.us-east-2.amazonaws.com/public/dana-on-tv.jpg"/>
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Knowledge</h2>
                        <p className="lead">If elected, I will also fight to ensure equitable and fair water rates for our community. I was often the only private citizen from Solana Beach speaking out at recent District rate setting hearings and workshops, countering public testimony calling for a rate structure that would have caused major water rate increases for Solana Beach residents and discouraged efficient water use.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto"
                             alt="Generic placeholder image"/>
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Vision</h2>
                        <p className="lead">I am also devoted to the Solana Beach community, having grown up here and returned in 1988 to work for the San Diego County Water Authority and raise a family near my parents. If elected, I am excited to engage with the community and hear your thoughts on the critical decisions facing the District in the coming years.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto"
                             alt="Generic placeholder image"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}
