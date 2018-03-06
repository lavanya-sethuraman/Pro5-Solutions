import React from 'react';
import '../index.css';
import { Form, Checkbox } from 'react-bootstrap';



export class Task extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.tasks = this.props.project.tasks;

    }

    taskStatus = (e) => {
        console.log(e.currentTarget.value);
    }


    render() {

        if (typeof (this.props.project.tasks) !== 'undefined') {
            this.tasks = this.props.project.tasks.map((task, index) =>
                (
                    <Checkbox id={index} value={task.task} checked={task.status} disabled={task.status}
                        onChange={(e) => { this.taskStatus(e) }}> {task.task} - {task.hours} hours </Checkbox>
                ) );  
    
        }

        return (<Form>
            {this.tasks}

        </Form>
        );

    }
}
    export default Task;