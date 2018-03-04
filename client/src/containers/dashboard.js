import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchProjectManager } from '../actions/project-manager';
import {Panel,Label,PageHeader,Button} from 'react-bootstrap';
import CreateProject from './createProject.js';
import ProjectStatus from '../containers/projectStatus';


export class Dashboard extends React.Component {

  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(fetchProjectManager());
  }

    
    render() {

      if (!this.props.loggedIn) {
        return <Redirect to="/" />;
      }
      const project = this.props.projectManager.project;
      
      let projectDetails;
      if (project.length !== 0) {
        projectDetails = project.map((item, index) => (
          <Panel bsStyle="info" key={index}>
            <Panel.Heading>
              <Panel.Title componentClass="h3">{item.projectName}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <h3>Client Name <Label>{item.clientName}</Label> </h3>
              <h3>Project Description <Label>{item.description}</Label> </h3>
              <h3>Technology Used <Label>{item.technology}</Label> </h3>
              <h3>Duration <Label>{item.duration}</Label> </h3>
              <h3>Hours <Label>{item.hours}</Label> </h3>
              <h3>Project Cost <Label>{item.cost}</Label> </h3>
              <h3>Project Document <Label>{item.document}</Label> </h3>
            </Panel.Body>
            <Panel.Footer><ProjectStatus project={item} /></Panel.Footer>
          </Panel>
        ));
        }
        

      return (
        <div>
        <PageHeader>Ongoing Projects <small>PM</small></PageHeader>
        {projectDetails}
        <CreateProject />
      </div>
      );
    }
  }
  
  const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    loggedIn: currentUser !== null,
    userName: currentUser ? state.auth.currentUser.userName : '',
    name: currentUser
      ? `${currentUser.fullName}`
      : '',
    projectManager: state.projectManager
  };
};

export default connect(mapStateToProps)(Dashboard);