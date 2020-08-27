import React, { useState } from 'react';
import '../assets/css/bootstrap.min.css';
import fakeData from '../../fakeData/index';
import Course from '../Course/Course';
import { CardColumns } from 'react-bootstrap';


const Courses = () => {
    const first15 = fakeData.slice(0, 15);
    // console.log(first15);
    const [courses, setCourses] = useState(first15);
    // console.log(courses);

    return (
        <div className="container">
            <CardColumns>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </CardColumns>
        </div>
    );
};

export default Courses;