import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import '../assets/css/bootstrap.min.css';
import logo from '../../components/images/logo.png';


const Header = () => {
    return (
        <div className="container-fluid">
            <Jumbotron >
                <img className="w-50 mb-3" src={logo} alt="" />
                <h2>The world's largest online education platform</h2>
                <p>
                    Build skills with courses, certificates, and degrees online from world-class universities and companies.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default Header;