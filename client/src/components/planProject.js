import React from 'react';
import '../index.css';
import { Button, Modal, Form, FormGroup,FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

export class PlanProject extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          show: false,
          task:"",
          hours:0,
          validationTask:"",
          validationHours:"",
          validationError1:"",
          validationError2:""
        };
        this.taskHours=0;
      }
    
      handleClose = () => {
        this.setState({ show: false });
      }
    
      handleShow = () => {
        this.setState({ show: true });
      }
      

  plan = () => {
    let entry = {task:this.state.task,hours:this.state.hours,status:false};

    if(entry.task == ""){
      this.setState({ validationTask:"error", validationError1:"Cannot be blank"});
      this.handleShow();
    } else if( entry.hours > parseInt(this.props.project.totalHours)-this.taskHours){
      this.setState({ validationHours:"error", validationError2:"more than total Hours"});
      this.handleShow();
    } else if( entry.hours == 0 || entry.hours ==""){
      this.setState({ validationHours:"error", validationError2:"cannot be 0 or blank"});
      this.handleShow();
    }
    
    else{
    let tasks = this.props.project.tasks;
    tasks.push(entry);
    this.handleClose();
    this.setState({task:"",hours:0})
    let values = Object.assign({},this.props.project,{tasks:tasks});
    this.props.planProject(values);
    }
  }

  render() {
    let tasks = this.props.project.tasks;
    if (typeof(tasks) !== 'undefined') {
      this.taskHours=0;
      tasks.forEach((task) => {
       this.taskHours+=parseInt(task.hours);
      });
    }
    return (
        <div className="buttons">
      <Button bsStyle="primary" bsSize="small" className="buttons bottom" onClick={this.handleShow}>Add task</Button>
      <Modal show={this.state.show} onHide={this.handleClose}>
          
            <Modal.Header closeButton>
              <Modal.Title>Project Tasks</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
              <FormGroup controlId="formControlsTask" validationState={this.state.validationTask}>
                <ControlLabel>Task</ControlLabel>
                <FormControl type="text" placeholder="Add Task"
                onChange={(e) => {this.setState({task:e.currentTarget.value}); } }
                 />
              </FormGroup>
              <HelpBlock>{this.state.validationError1}</HelpBlock>

              <FormGroup controlId="formControlsHours" validationState={this.state.validationHours}>
                <ControlLabel>Hours</ControlLabel>
                <FormControl type="Number" min="1" max={this.props.project.totalHours} 
                placeholder={parseInt(this.props.project.totalHours)-this.taskHours} 
                onChange={(e) => {this.setState({hours:e.currentTarget.value})} } 
                />
              </FormGroup>
              <HelpBlock>{this.state.validationError2}</HelpBlock>

            <Button bsStyle="success" bsSize="small" className="center" onClick={this.plan}>Add</Button>
            <Button  bsStyle="primary" bsSize="small" className="buttons" onClick={this.handleClose}>close</Button>

            </Form>
            </Modal.Body>
            </Modal>
      </div>
    );
  }

}
PlanProject.defaultProps = {
  project:[{}]
};

export default PlanProject;

