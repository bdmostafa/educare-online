import React from 'react';
import {Card, Button } from 'react-bootstrap';
import '../assets/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    // console.log(props.course);
    // Destructuring the course object and taking all the properties
    const {
        name,
        img,
        category,
        bestSeller,
        enrolled,
        instructor,
        price,
        star,
        last_update
    } = props.course;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} className="w-100" />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text>  Category: {category} </Card.Text>
                    <Card.Text> <small> Instructor:  {instructor} </small> </Card.Text>
                    <Card.Text> Start: {star} </Card.Text>
                    <Card.Text> Enrolled ({enrolled}) </Card.Text>
                    <Card.Text> Price: {price} </Card.Text>
                    <Card.Text> {bestSeller} </Card.Text>
                    <Button variant="outline-primary" onClick={() => props.enroll(props.course)}> <FontAwesomeIcon icon={faGraduationCap} /> Enroll Now</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Course updated {last_update} days ago</small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Course;