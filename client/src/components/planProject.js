import React from 'react';
import '../index.css';
import { Button, Modal, Form, FormGroup,FormControl, ControlLabel } from 'react-bootstrap';

export class PlanProject extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          show: false,
          task:"",
          hours:0
        };
      }
    
      handleClose = () => {
        this.setState({ show: false });
      }
    
      handleShow = () => {
        this.setState({ show: true });
      }
      

  plan = () => {
    let entry = {task:this.state.task,hours:this.state.hours};
    let tasks = this.props.project.tasks;
    tasks.push(entry);
    this.handleClose();
    this.setState({task:"",hours:0})
    let values = Object.assign({},this.props.project,{tasks:tasks});
    this.props.planProject(values);
  }

  render() {
      
    return (
        <div className="buttons">
      <Button bsStyle="primary" bsSize="small" className="buttons" onClick={this.handleShow}>Project planning</Button>
      <Modal show={this.state.show} onHide={this.handleClose}>
          
            <Modal.Header closeButton>
              <Modal.Title>Project Tasks</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
              <FormGroup controlId="formControlsTask">
                <ControlLabel>Task</ControlLabel>
                <FormControl type="text" placeholder="Add Task"
                onChange={(e) => this.setState({task:e.currentTarget.value})  }
                 />
              </FormGroup>

              <FormGroup controlId="formControlsHours">
                <ControlLabel>Hours</ControlLabel>
                <FormControl type="Number" min="1" max={this.props.project.totalHours} placeholder={this.props.project.totalHours} 
                onChange={(e) => this.setState({hours:e.currentTarget.value}) } 
                />
              </FormGroup>


            <Button bsStyle="success" bsSize="small" className="center" onClick={this.plan}>Add</Button>

            </Form>
            </Modal.Body>
            </Modal>
      </div>
    );
  }

}


export default PlanProject;

