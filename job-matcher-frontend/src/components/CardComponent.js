import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import logo from '../images/logo.jpeg';
import '../css/CardComponent.css';

function CardComponent({ job }) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={logo} style={{ maxWidth: '100%', height: 'auto' }} />
      <Card.Body>
        <br/>
        <Card.Title className="company-title"><strong>Company: </strong>{job.company}</Card.Title>
        <Card.Text className="card-description">
          {job.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="list-item">
          <strong>Job Type: </strong> {job.job_type ? job.job_type : '-'}
        </ListGroup.Item>
        <ListGroup.Item className="list-item"> 
          <strong>Min Salary: </strong> {job.min_salary_usd ? job.min_salary_usd : '-'}
        </ListGroup.Item>
        <ListGroup.Item className="list-item">
          <strong>Max Salary: </strong> {job.max_salary_usd ? job.max_salary_usd : '-'}
        </ListGroup.Item>
        <ListGroup.Item className="list-item">
          <strong>Degree Required: </strong> {job.degree_required ? 'Yes' : 'No'}
        </ListGroup.Item>
        <ListGroup.Item className="list-item">
          <strong>Technologies :</strong> {job.technologies ? job.technologies.join(', ') : 'N/A'}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardComponent;
