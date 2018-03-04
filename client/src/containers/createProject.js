import React from 'react';
import '../index.css';
import { Button, Modal, Form, FormGroup,FormControl, ControlLabel } from 'react-bootstrap';


export class CreateProject extends React.Component {

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
      <div>
        <Button bsStyle="success" bsSize="large" className="center" onClick={this.handleShow}>Create Project</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <div>
            <Modal.Header closeButton>
              <Modal.Title>Project Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
              <FormGroup controlId="formControlsName">
                <ControlLabel>Project Name</ControlLabel>
                <FormControl type="text" placeholder="Project Name" />
              </FormGroup>

              <FormGroup controlId="formControlsClient">
                <ControlLabel>Client Name</ControlLabel>
                <FormControl type="text" placeholder="Client Name" />
              </FormGroup>

              <FormGroup controlId="formControlsDesc">
                <ControlLabel>Description</ControlLabel>
                <FormControl componentClass="textarea" type="textArea" placeholder="Description" />
              </FormGroup>

              <FormGroup controlId="formControlsTech">
                <ControlLabel>Technology Used</ControlLabel>
                <FormControl componentClass="textarea" type="textarea" placeholder="Technology Used" />
              </FormGroup>

              <FormGroup controlId="formControlsDuration">
                <ControlLabel>Duration</ControlLabel>
                <FormControl type="Number" min="1" max="52" placeholder="Number of Weeks" />
              </FormGroup>

              <FormGroup controlId="formControlsHours">
                <ControlLabel>Hours per Week</ControlLabel>
                <FormControl type="Number" min="1" max="40" placeholder="Hours" />
              </FormGroup>

              <FormGroup controlId="formControlsCost">
                <ControlLabel>Project Cost</ControlLabel>
                <FormControl type="Number" min="0" placeholder="Cost" />
              </FormGroup>

              <FormGroup controlId="formControlsFile">
                <ControlLabel>Document</ControlLabel>
                <FormControl type="File" placeholder="Choose File" />
              </FormGroup>

            <Button bsStyle="success" bsSize="large" className="center" onClick={this.handleClose}>Create</Button>

            </Form>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    );
  }

}

export default CreateProject;

