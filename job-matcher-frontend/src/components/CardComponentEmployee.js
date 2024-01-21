import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/CardComponent.css';


function CardComponentEmployee({ applicant }) {
  return (
    <Card style={{ width: '80%', textAlign: 'center' }}>
  {/* <Card.Img variant="top" src={user.resume} style={{ maxWidth: '100%', height: 'auto' }} /> */}
  {/* <Card.Img variant="top" src={job.image_url} style={{ maxWidth: '100px', height: 'auto' ,display: 'block', margin: '0 auto',}} /> */}
  <Card.Body className="d-flex flex-column align-items-center">
    <br/>
    <Card.Title className="company-title"><strong>Name: </strong>{applicant.first_name} {applicant.last_name}</Card.Title>
    {/* <Card.Link
            href={`data:${applicant.resume.contentType};base64,${applicant.resume.data.toString('base64')}`}
            target="_blank"
          >
            View Resume
          </Card.Link> */}
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
