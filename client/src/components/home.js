import React from 'react';
import '../index.css';
import { Jumbotron, ButtonToolbar } from 'react-bootstrap';
import Signup from '../containers/signup.js';
import Login from '../containers/login.js';


export default function Home() {
    return (
        <Jumbotron className="jumbotron">
            <h1>Project Management Tool</h1>
            <p>
                Please sign-up or log-in to start using this Tool!
            </p>
            <p >
                <ButtonToolbar >
                    <Signup />
                    <Login />
                </ButtonToolbar>
            </p>
        </Jumbotron>
    );
}
