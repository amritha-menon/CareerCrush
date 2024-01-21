import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/CardComponent.css';
import resume from '../images/test_res1.png';


function CardComponentEmployee({ applicant }) {

  return (
    <Card style={{ width: '80%', textAlign: 'center' }}>
        <Card.Img variant="top" src={resume} style={{ maxWidth: '80%', height: 'auto' ,display: 'block', margin: '0 auto',}} />
  {/* <Card.Body className="d-flex flex-column align-items-center"> */}
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
