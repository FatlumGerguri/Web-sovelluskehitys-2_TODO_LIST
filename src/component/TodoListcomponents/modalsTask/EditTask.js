import React, { useEffect, useState } from "react";
import { Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

const EditTask = ({modal, toggle, updateTask, taskObject }) => {

    const [taskTitle, setTaskTitle] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskCompleted, setTasCompleted] = useState('')
    const [taskDescription, setTaskDescription] = useState("");

    /*const [taskName, setTaskName] = useState("");
    const [taskDescription, setDescription] = useState("");
*/
    useEffect(() => {
        setTaskTitle(taskObject.Title)
        setTaskDate(taskObject.Date)
        setTaskDescription(taskObject.Description)
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempobj = {}
        tempobj["Title"] = taskTitle;
        tempobj["Date"] = taskDate;
        tempobj["Description"] = taskDescription;
       let taskss = axios.put('http://localhost:5000/InsertData', {
           title: taskTitle,
           date: taskDate,
           description: taskDescription,
           completed: taskCompleted
           //userId: Math.random().toString(36).slice(2);

       })
        updateTask(tempobj);
        console.log(taskss)
    };
        /*let tempobj = {}
        tempobj['Name'] = taskName
        tempobj['Description'] = taskDescription
        updateTask(tempobj)
    };*/

    return (
        <>
            <Modal show={modal} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Update Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Task name</Form.Label>
                            <Form.Control
                                type="text"
                                name="taskName"
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Task Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="taskDate"
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Task Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="taskDescription"
                                rows={5}
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                    <Button variant="danger" onClick={toggle}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask;
