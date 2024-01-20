import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import logo from '../images/logo.jpeg';
import '../css/CardComponent.css';

function CardComponent() {
  return (
    <Card style={{ width: '48rem' }}>
      <Card.Img variant="top" src={logo} style={{ maxWidth: '100%', height: 'auto' }} />
      <Card.Body>
        <Card.Title className="company-title"><strong>Company: </strong>YYYY</Card.Title>
        <Card.Text className="card-description">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="list-item">
          <strong>Job Type: </strong>X
        </ListGroup.Item>
        <ListGroup.Item className="list-item">
          <strong>Min Salary: </strong>0
        </ListGroup.Item>
        <ListGroup.Item className="list-item">
          <strong>Max Salary: </strong>1000
        </ListGroup.Item>
        <ListGroup.Item className="list-item">
          <strong>Job Type: </strong>Full-time
        </ListGroup.Item>
        <ListGroup.Item className="list-item">
          <strong>Degree Required: </strong>Masters
        </ListGroup.Item>
        <ListGroup.Item className="list-item">
          <strong>Technologies :</strong>C, C++
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardComponent;
