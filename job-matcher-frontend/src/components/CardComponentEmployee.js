import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import logo from '../images/logo.jpeg';
import '../css/CardComponent.css';

function CardComponentEmployee({ applicant }) {
  return (
    <Card style={{ width: '100%' }}>
      {/* <Card.Img variant="top" src={user.resume} style={{ maxWidth: '100%', height: 'auto' }} /> */}
      <Card.Body>
        <br/>
        <Card.Title className="company-title"><strong>Name: </strong>{applicant.first_name} {applicant.last_name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="list-item">
          <strong>Email: </strong> {applicant.email}
        </ListGroup.Item>
        <ListGroup.Item className="list-item">
          <strong>Job Title: </strong> {applicant.title}
        </ListGroup.Item>
        <ListGroup.Item className="list-item">
          <strong>Job Id: </strong> {applicant.job_id}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardComponentEmployee;
