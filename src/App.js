import React from "react";
import "./carousel.css";
import Home from './Home';
import About from "./About";
import Issues from "./Issues";
import EmailForm from "./Contact";
import Endorsements from "./Endorsements";
import BoundaryLine from "./BoundaryLine";
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
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About Dana</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/issues">Issues</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/boundary-line">Division #2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
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
                    <Route path="/issues">
                        <Issues />
                    </Route>
                    <Route path="/endorsements">
                        <Endorsements />
                    </Route>
                    <Route path="/boundary-line">
                        <BoundaryLine />
                    </Route>
                    <Route path="/contact">
                        <EmailForm />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </header>
        </Router>
    )
}
