import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import '../assets/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

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
        starCount,
        last_update
    } = props.course;

    //Update 'Enroll Now' button when clicked
    const [enrollText, setEnrollText] = useState('Enroll Now')
    const updatedText = (text) => setEnrollText(text);

    // Validation on click 'Enroll Now' whether a course is enrolled or not
    const runOnclick = () => {
        if (enrollText === 'Enrolled') {
            alert('You have already enrolled this course.');
        } else {
            props.enroll(props.course);
            updatedText('Enrolled');
        }
    }

    return (
        <>
            <Card>
                <Card.Img variant="top" src={img} className="w-100" />
                <Card.Body className="text-left">
                    <Card.Title> <h2> {name} </h2> </Card.Title>
                    <Card.Text> Category: <strong> {category.join(', ')} </strong> </Card.Text>
                    <Card.Text> Instructor: <i> {instructor} </i></Card.Text>
                    <Card.Text className="text-dark font-weight-bold">  {star}
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                        <FontAwesomeIcon className="text-warning" icon={faStarHalf} />
                        <FontAwesomeIcon className="text-warning" icon={faStarHalf} />
                        <span className="font-weight-normal">({starCount})</span>
                    </Card.Text>
                    <Card.Text> {enrolled} students enrolled </Card.Text>
                    <Card.Text>
                        Price: ${price}
                        <del className="text-secondary"> ${(price * 1.5).toFixed(2)}</del>
                    </Card.Text>
                    <Card.Text> {bestSeller ? <Badge variant="success">Best Seller</Badge> : ''}  </Card.Text>
                    <Button
                        variant="outline-primary"
                        onClick={() => runOnclick()}>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        {enrollText}
                    </Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Course updated {last_update} days ago</small>
                </Card.Footer>
            </Card>
        </>
    );
};

export default Course;