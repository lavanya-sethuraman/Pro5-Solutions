import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchProjectManager, deleteProject, updateProject } from '../actions/project-manager';
import {Panel,Label,PageHeader,Button,PanelGroup} from 'react-bootstrap';
import CreateProject from './createProject.js';
import DeleteProject from '../components/deleteProject';
import UpdateProject from '../components/updateProject';



export class Dashboard extends React.Component {

  componentDidMount() {
    if (!this.props.loggedIn) {
      return;
    }
    this.props.dispatch(fetchProjectManager());
  }
  
  deleteProject = (project) => {
    this.props.dispatch(deleteProject(project));
  }

  updateProject = (project) => {
    this.props.dispatch(updateProject(project));
  }
    
    render() {
      console.log("in dashboard", this.props);
      if (!this.props.loggedIn) {
        return <Redirect to="/" />;
      }
      const project = this.props.projectManager.project;
      
      let projectDetails;
      if (project.length !== 0) {
        projectDetails = project.map((item, index) => (
          <Panel bsStyle="info" eventKey={index} key={index}>
            <Panel.Heading>
              <Panel.Title toggle>{item.projectName}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              <h5>Client Name <Label>{item.clientName}</Label> </h5>
              <h5>Project Description <Label>{item.description}</Label> </h5>
              <h5>Technology Used <Label>{item.technology}</Label> </h5>
              <h5>Duration <Label>{item.duration}</Label> </h5>
              <h5>Hours <Label>{item.hours}</Label> </h5>
              <h5>Project Cost <Label>{item.cost}</Label> </h5>
              <h5>Project Document <Label>{item.document}</Label> </h5>
              <DeleteProject project={item} deleteProject={this.deleteProject.bind(this)}/>
              <UpdateProject project={item} updateProject={this.updateProject.bind(this)}/>
            </Panel.Body>
          </Panel>
        ));
        }
        

      return (
        <div>
        <PageHeader>Ongoing Projects <small>{this.props.name}</small></PageHeader>
        <PanelGroup accordion id="projects">
        {projectDetails}
        </PanelGroup>
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