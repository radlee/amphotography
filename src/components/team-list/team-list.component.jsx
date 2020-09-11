import React from 'react';
import { ListGroup, ListGroupItem, Alert, Media } from 'reactstrap';
import origin from '../../media/origin.jpg';
import mp from '../../media/mp.jpg';
import coding from '../../media/coding.jpg';


const TeamList = (props) => {
    return (
        <div id="services" className="container">
            <br />
            <h1 className="h1">Extra Projects</h1>
            <hr className="heading-horizon" />
            <br />
            <ListGroup className="team" flush>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={coding} height="64px" alt="web dev" />
                        </Media>
                        <Media body>
                            <Media className="media-heading" heading>
                                Web Development and Mentoring
                            </Media>
                            <h5>Using the latest Technology tools</h5>
                            Among the many great leaning platforms out there, we focus on 2 great leaning platforms we know will make you like programming;
                            If you like music, you will like Sonic Pi and if you like telling a computer what to do for you then Codecademy will set you up straight to it.
                        </Media>
                    </Media>
                </ListGroupItem>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={mp} height="64px" alt="photography" />
                        </Media>
                        <Media body>
                            <Media className="media-heading" heading>
                                Cenceptual Photography
                            </Media>
                            <h5>Desired place of photoshoot is no sweat. </h5>
                            Friendly-Photographer. Aselmo Mafanga Photography
                        </Media>
                    </Media>
                </ListGroupItem>
                <ListGroupItem>
                    <Media>
                        <Media className="profile-pic" left>
                            <Media className="Media" object src={origin} height="64px" alt="mobile solutions" />
                        </Media>
                        <Media body>
                            <Media className="media-heading" heading>
                                Mobile Apps Solving Problems
                            </Media>
                            <h5><em>"The Idea of using the Internet with Things is Fascinating."</em></h5>
                            Android Based Applications. Transform the way we use Smartphones.
                        </Media>
                    </Media>
                </ListGroupItem>
            </ListGroup>

            <hr className="my-2"/>

            <div>
                <Alert color="success">
                    <h4 className="alert-heading">The Origins</h4>
                    <p>
                    The Main Purpose behind the name ORIGIN2020 is not only because of its original name design. But it's existense was founded with the driving force or desire production that it must be a platform for creators for everyone. Everyone likely being the community.
                    </p>
                    <hr />
                    <p className="mb-0">
                    Whenever you need to, be sure to contact us with regards to building revolutionary solutions.
                    </p>
                </Alert>
            </div>
 

        </div>
    );
}

export default TeamList;