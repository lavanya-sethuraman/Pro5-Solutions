import React from 'react';
import '../index.css';
import { Button } from 'react-bootstrap';

export class DeleteProject extends React.Component {

  delete = () => {
    this.props.deleteProject(this.props.project);
  }

  render() {
    return (
      <Button bsStyle="danger" bsSize="small" className="buttons" onClick={this.delete}>Delete</Button>
    );
  }

}


export default DeleteProject;




