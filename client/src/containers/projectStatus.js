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
  render() {
   const project = this.props.project;
   let hours;
    return (
        <div>
            <Button bsStyle="info" className="center" onClick={this.handleShow}>Status</Button>

            
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>Project Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h1>End Date <Label>{project.projectName}</Label> </h1>
                      <h3>Start Date <Label>{project.startDate}</Label> </h3>
                            <h3>End Date <Label>{project.endDate}</Label> </h3>
                            <h3>Hours left <Label>{hours}</Label> </h3>
                        
                </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                        <Button bsStyle="primary" onClick={this.update}>Save</Button>
                    </Modal.Footer>
                </Modal>
            
        </div>
    );
  }

}

const mapStateToProps = state => ({
  project: state.projectManager.project
});

export default connect(mapStateToProps)(ProjectStatus);


