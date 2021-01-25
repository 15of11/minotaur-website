import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Table from 'react-bootstrap/esm/Table';
import moment from 'moment';
import ReactTimeSlotCalendar from 'react-timeslot-calendar';

import '../App.css';
import SimpleTable from './SimpleTable';

function Hero(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0" >
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                        
                    </Col>
                </Row>
            </Container>
            
            <br></br>
                    <ListGroup  as="h5" variant="flush" style={{width: '100%'}}>
                        <SimpleTable></SimpleTable>
                        
                    </ListGroup>
                    
                    
        </Jumbotron>

    );
}

export default Hero;