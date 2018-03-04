import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { Button, Modal,Panel,Label} from 'react-bootstrap';

export class ProjectStatus extends React.Component {

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
  
  update = () =>{
    this.handleClose();
  }
  delete = () =>{
   this.props.deleteProject(this.props.project);
  }
  render() {
   let hours;
   
    return (
        <div>
         
            <Button bsStyle="info" bsSize="small" onClick={this.handleShow}>Status</Button>
            <Button bsStyle="primary" bsSize="small" className="buttons" onClick={this.update}>Update</Button>
            <Button bsStyle="danger" bsSize="small" className="buttons" onClick={this.delete}>Delete</Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Project Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                           <h3>Start Date <Label>{this.props.project.startDate}</Label> </h3>
                            <h3>End Date <Label>{this.props.project.endDate}</Label> </h3>
                            <h3>Hours left <Label>{hours}</Label> </h3>
                        
                </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.update}>Save</Button>
                    </Modal.Footer>
                </Modal>
            
        </div>
    );
  }

}



// const mapStateToProps = state => ({
//   project: state.projectManager.project
// });

export default ProjectStatus;




