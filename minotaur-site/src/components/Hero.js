import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Table from 'react-bootstrap/esm/Table';

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
                        <ListGroup.Item className="">Monday 10-6</ListGroup.Item>
                        <ListGroup.Item className="">Tuesday 10-6</ListGroup.Item>
                        <ListGroup.Item className="">Wednesday 10-6</ListGroup.Item>
                        <ListGroup.Item className="">Thursday 10-6</ListGroup.Item>
                        <ListGroup.Item className="">Friday 10-6</ListGroup.Item>
                        <ListGroup.Item className="">Saturday 10-6</ListGroup.Item>
                        <ListGroup.Item className="">Sunday 10-6</ListGroup.Item>
                    </ListGroup>
                    <Row className="justify-content-center py-5">
                        <Col md={2} sm={4}>
                            <Table striped bordered size="sm">
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td>10-6</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>10-6</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    
        </Jumbotron>

    );
}

export default Hero;