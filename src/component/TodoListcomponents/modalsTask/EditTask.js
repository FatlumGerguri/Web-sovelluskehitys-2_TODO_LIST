import React, { useEffect, useState } from "react";
import { Button, Form, Modal} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const EditTask = ({modal, toggle, updateTask, taskObject }) => {

    const history = useNavigate();
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskCompleted, setTasCompleted] = useState('')
    const [taskDescription, setTaskDescription] = useState("");
    axios.defaults.withCredentials = true;

    /*const [taskName, setTaskName] = useState("");
    const [taskDescription, setDescription] = useState("");
*/
    useEffect(() => {
        console.log(taskObject.id);
        setTaskTitle(taskObject.Title)
        setTaskDate(taskObject.Date)
        setTaskDescription(taskObject.Description)
    }, []);

    ///Todo Tee tämä edit
    const handleUpdate = (e) => {
        e.preventDefault();


        let tempobj = {}
        tempobj["Title"] = taskTitle;
        tempobj["Date"] = taskDate;
        tempobj["Description"] = taskDescription;
        let taskss = axios.post('http://localhost:5000/UpdateData', {
            title: taskTitle,
            id: taskObject.id,
            date: taskDate,
            description: taskDescription,
            //userId: Math.random().toString(36).slice(2);

        },{
            headers: {Authorization: 'Bearer: '+localStorage.getItem("Token")},
        })
        toggle();

    };



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
