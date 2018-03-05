import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchProjectManager, deleteProject, updateProject } from '../actions/project-manager';
import {Panel,PageHeader,PanelGroup,ListGroup,ListGroupItem} from 'react-bootstrap';
import CreateProject from './createProject.js';
import DeleteProject from '../components/deleteProject';
import UpdateProject from '../components/updateProject';
import PlanProject from '../components/planProject';
import Task from '../components/tasks'



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
      if (!this.props.loggedIn) {
        return <Redirect to="/" />;
      }

      const project = this.props.projectManager.project;
      let projectDetails;
      let tasks=[], taskDisplay;
      

      if (project.length !== 0) {

      //   projectDetails = project.map((item, index) => (tasks.push(item.tasks)));
        
      //   taskDisplay = tasks.forEach((item) => 
      //   item.map((task, index) => ( 
      //   <li key={index}>{task.task}-{task.hours}Hours</li>
      // )));

        projectDetails = project.map((item, index) => {
          return(
          <Panel bsStyle="info" eventKey={index} key={index}>
            <Panel.Heading>
              <Panel.Title toggle>{item.projectName}</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible>
              <ListGroup>
                <ListGroupItem header="Client Name:"> {item.clientName} </ListGroupItem>
                <ListGroupItem header="Project Description:"> {item.description}</ListGroupItem>
                <ListGroupItem header="Technology Used:"> {item.technology}</ListGroupItem>
                <ListGroupItem header="Tasks"><Task tasks={item.tasks}/></ListGroupItem>
                <ListGroupItem header=" Total Hours:"> {item.totalHours}</ListGroupItem>
                <ListGroupItem header="Project Cost:"> {item.cost}</ListGroupItem>
                <ListGroupItem header="Project Document:"> {item.document}</ListGroupItem>
                <ListGroupItem >
              <PlanProject project={item} planProject={this.updateProject.bind(this)} />
              <UpdateProject project={item} updateProject={this.updateProject.bind(this)}/>
              <DeleteProject project={item} deleteProject={this.deleteProject.bind(this)}/>
                </ListGroupItem>
              </ListGroup>
            </Panel.Body>
          </Panel>
          );
        });




        }
        
        console.log()
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