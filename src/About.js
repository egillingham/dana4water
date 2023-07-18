import React from "react";
import "./carousel.css";

export default function About() {
    return (
        <div>
            <div className="container marketing">
                <div className="row featurette">
                    <div className="col-md-12">
                        <h2 className="featurette-heading">Passion for Water and Public Service</h2>
                        <p className="lead">Dana has dedicated her entire career to ensuring that there is water when you turn on the tap.</p>
                        <p className="lead">Dana’s interest and passion in water started in college, where she graduated from San Diego State University with a degree in civil engineering, emphasis in water resources. Knowing that using water wisely in our homes and businesses is critically important, her first job out of college was developing water conservation programs for the City of Los Angeles Department of Water and Power. She next moved to Santa Barbara to work at the Goleta Water District as an engineer to get experience in water facility planning. Dana returned to Solana Beach in 1988 to work at the San Diego County Water Authority and further expand her knowledge of the water resources issues facing the San Diego region.</p>
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-12">
                        <p className="lead">For her 30 plus years at the San Diego County Water Authority, Dana worked collaboratively with other local water agencies to develop water supply plans, programs and policies for the San Diego region. Knowing there are times when droughts may limit supply availability, she developed and managed a regional drought response plan, to minimize supply cutbacks to customers. Before retiring in 2019 as Water Resources Manager, she also advocated for state regulations and legislation to ensure a safe supply of water for the San Diego region while minimizing the cost to water ratepayers.</p>
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-10">
                        <h2 className="featurette-heading">Passion for Community</h2>
                        <p className="lead">Dana grew up in Solana Beach, moving to the area in 1969 at the age of eight and attending the local schools. She left the community to go to college and returned in 1988 with her fiancé, Doug Gillingham, to work and raise a family. She and Doug have two wonderful daughters. When the girls were young, Dana supported the local community in various ways, such as serving on the Solana Vista School Site Council and managing her daughter’s soccer team.</p>
                    </div>
                    <div className="col-md-2 pt-5">
                        <figure className="figure">
                            <img className="rounded featurette-image img-fluid mx-auto featurette-image-small" src="https://dana4water-images.s3.us-east-2.amazonaws.com/public/dana-and-daughters.jpg"
                                 alt="Dana and her daughters"/>
                            <figcaption className="figure-caption">Dana and her daughters, Elizabeth and Erin</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-10">
                        <p className="lead">After retirement, Dana has been focusing her efforts on learning more about social issues facing our San Diego region. She volunteers for Voices for Children as a trained Court Appointed Special Advocate (CASA) for a foster youth, she assists the League of Women Voters of California on legislation related to immigrant communities, volunteers at the Unitarian Universalist Fellowship of San Dieguito, and leads book discussion groups as part of the organization Showing Up for Racial Justice – North San Diego County. Dana has found this volunteer work engaging, but her passion for serving the public in water never left her. She is excited about the opportunity to again utilize her water experience and knowledge to serve the public on the Santa Fe Irrigation District Board.</p>
                    </div>
                    <div className="col-md-2 pt-5">
                        <figure className="figure">
                            <img className="rounded featurette-image img-fluid mx-auto featurette-image-small" src="https://dana4water-images.s3.us-east-2.amazonaws.com/public/dana-casa.jpg"
                                 alt="Dana joining the Casa Program"/>
                            <figcaption className="figure-caption">Dana and her husband, Doug, at her CASA training graduation</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}
