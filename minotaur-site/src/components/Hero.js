import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/esm/ListGroup';

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
                <Container className="test">
                    <ListGroup horizontal className="justify-content-center">
                        <ListGroup.Item className="test">Monday</ListGroup.Item>
                        <ListGroup.Item>10-6</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal className="justify-content-center">
                        <ListGroup.Item className="test">Tuesday</ListGroup.Item>
                        <ListGroup.Item>10-6</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal className="justify-content-center">
                        <ListGroup.Item className="test">Wednesday</ListGroup.Item>
                        <ListGroup.Item>10-6</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal className="justify-content-center">
                        <ListGroup.Item className="padding-2">Thursday</ListGroup.Item>
                        <ListGroup.Item>10-6</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal className="justify-content-center">
                        <ListGroup.Item className="">Friday</ListGroup.Item>
                        <ListGroup.Item>10-6</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal className="justify-content-center">
                        <ListGroup.Item className="">Saturday</ListGroup.Item>
                        <ListGroup.Item>10-6</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal className="justify-content-center">
                        <ListGroup.Item className="">Sunday</ListGroup.Item>
                        <ListGroup.Item>10-6</ListGroup.Item>
                    </ListGroup>
                </Container>
            </Container>
        </Jumbotron>

    );
}

export default Hero;