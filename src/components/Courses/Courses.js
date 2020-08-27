import React, { useState } from 'react';
import '../assets/css/bootstrap.min.css';
import fakeData from '../../fakeData/index';
import Course from '../Course/Course';
import { CardColumns } from 'react-bootstrap';
import Enroll from '../Enroll/Enroll';


const Courses = () => {
    // Slice 15 courses from the data
    const first15 = fakeData.slice(0, 15);
    // console.log(first15);
    const [courses, setCourses] = useState(first15);
    // console.log(courses);

    // Store the enrolled courses
    const [enrolled, setEnrolled] = useState([]);

    const handleEnroll = course => {
        const newEnrolled = [...enrolled, course];
        setEnrolled(newEnrolled);
        // console.log(newEnrolled);
    }

    return (
        <div className="container">
            <Enroll enrolled={enrolled}></Enroll>
            <CardColumns>
                {
                    courses.map(course => <Course key={course.id} course={course} enroll={handleEnroll}></Course>)
                }
            </CardColumns>
        </div>
    );
};

export default Courses;