import React from 'react';
import '../index.css';
import {Button, Modal, Form, FormGroup,Col, FormControl,ControlLabel } from 'react-bootstrap';


export class Signup extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      
      return (
        <div className="buttons">
          <Button bsStyle="info" bsSize="large" className="center" onClick={this.handleShow}>Sign-up</Button>    
  
          <Modal show={this.state.show} onHide={this.handleClose}>
          <div className="jumbotron">
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <Form horizontal>
                  <FormGroup controlId="formHorizontalName">
                      <Col componentClass={ControlLabel} sm={2}>
                        Name
                      </Col>
                      <Col sm={10}>
                        <FormControl type="text" placeholder="Name" />
                      </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                      <Col componentClass={ControlLabel} sm={2}>
                        Email
                      </Col>
                      <Col sm={10}>
                        <FormControl type="email" placeholder="Email" />
                      </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                      <Col componentClass={ControlLabel} sm={2}>
                        Password
                      </Col>
                      <Col sm={10}>
                        <FormControl type="password" placeholder="Password" />
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col smOffset={2} sm={10}>
                        <Button bsStyle="info" bsSize="large" onClick={this.handleClose}>Sign in</Button>
                      </Col>
                    </FormGroup>
                  </Form>
             
            </Modal.Body>
            </div>
          </Modal>
        </div>
      );
    }
  }
  
  export default Signup;
