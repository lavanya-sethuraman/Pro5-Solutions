import React from 'react';
import '../index.css';
import {Panel} from 'react-bootstrap';
import CreateProject from './createProject.js';


export class Dashboard extends React.Component {
    
    render() {
    
      return (
        <div>
        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Name1</Panel.Title>
          </Panel.Heading>
          <Panel.Body>Content2</Panel.Body>
        </Panel>
        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Name2</Panel.Title>
          </Panel.Heading>
          <Panel.Body>Content2</Panel.Body>
        </Panel>
        <CreateProject />
      </div>
      );
    }
  }
  
  export default Dashboard;
