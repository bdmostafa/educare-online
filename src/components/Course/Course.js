import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import '../assets/css/bootstrap.min.css';

const Course = (props) => {
    console.log(props.course)
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
                    <Card.Text> Category: {category} </Card.Text>
                    <Card.Text>Instructor: {instructor} </Card.Text>
                    <Card.Text> Start: {star} </Card.Text>
                    <Card.Text> Enrolled ({enrolled}) </Card.Text>
                    <Card.Text> Price: {price} </Card.Text>
                    <Card.Text> {bestSeller} </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated {last_update} mins ago</small>
                </Card.Footer>
            </Card>

        </div>
    );
};

export default Course;