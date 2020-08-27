import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Enroll = (props) => {
    const courses = props.enrolled;

    const total = courses.reduce((acc, cur) => acc + cur.price, 0);

    const vat = total * .12;

    const grandTotal = total + vat;

    // To fix number and 2 decimal places
    const formatNumber = num => Number(num.toFixed(2));

    return (
        <div>
            <div className="row bg-primary mb-5 p-3">
                <div className="col-md-6">
                    <h1 className='text-white'>Order Summary</h1>
                </div>
                <div className='col-md-6'>
                    <Dropdown>
                        <Dropdown.Toggle variant="info btn-lg" id="dropdown-basic">
                            <FontAwesomeIcon className='text-light' icon={faShoppingCart} /> <span className="badge badge-light">{props.enrolled.length}</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                courses.map((course, idx) =>
                                    <Dropdown.Item key={course.id}>
                                        {idx + 1}. {course.name} - ${course.price}
                                    </Dropdown.Item>
                                )
                            }
                            <Dropdown.Divider />
                            <Dropdown.Item className="text-right">Courses: ${formatNumber(total)}</Dropdown.Item>
                            <Dropdown.Item className="text-right">VAT (12%): ${formatNumber(vat)}</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="text-right font-weight-bold">Total: ${formatNumber(grandTotal)}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default Enroll;