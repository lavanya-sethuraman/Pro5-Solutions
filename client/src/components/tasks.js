import React from 'react';
import '../index.css';
import { Form,Checkbox } from 'react-bootstrap';



export default function Task(props){

 let tasks;
 tasks = props.tasks.map((task,index) => (
    <Checkbox  key={index} >{task.task}-{task.hours}Hours</Checkbox>
 ));
 
 return (<Form>
{tasks}
    
 </Form>
 );
}

Task.defaultProps = {
    tasks: []
};

