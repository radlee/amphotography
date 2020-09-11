import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

export default class JumboTwo extends Component {

    render() {


        return (
           
            <Jumbotron id="about" className="jumbotron-three">
            <Container>
               
               <Row>
               <Col sm="4">
                <h1><span className="band">Outdoor and FreeStyle Shoot</span></h1>
               </Col>
               <Col xs="12" sm="4"></Col>
               <Col sm="4"></Col>
               </Row>
           
           </Container>
         </Jumbotron>
       
        );
      }
};