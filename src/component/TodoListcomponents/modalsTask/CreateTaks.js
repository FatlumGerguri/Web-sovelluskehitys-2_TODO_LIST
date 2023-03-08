import React, {Component, useEffect, useState} from "react";
import { Button, Form, Modal, Card, Container, Row } from "react-bootstrap";
import axios from "axios";

const CreateTasks = ({ modal, toggle, save }) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskCompleted, setTasCompleted] = useState('')
    //const [taskName, setTaskName] = useState("");
    const [taskDescription, setDescription] = useState("");

    const handleSaves = (e) => {
        e.preventDefault();
        let taskObj = {};
        taskObj["Title"] = taskTitle;
        taskObj["Date"] = taskDate;
        taskObj["Description"] = taskDescription;
       let taskss = axios.post('http://localhost:5000/InsertData', {
            title: taskTitle,
            date: taskDate,
            description: taskDescription,
            completed: taskCompleted
            //userId: Math.random().toString(36).slice(2);

        })
        save(taskObj);
        console.log(taskObj)
        setTaskTitle("")
        setTaskDate('')
        setDescription("")
    };

    return (
        <div>
            <Modal
                show={modal}
                onHide={toggle}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Create new Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Task name</Form.Label>
                            <Form.Control
                                type="text"
                                name="taskTitle"
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
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSaves}>
                        Create
                    </Button>
                    <Button variant="primary" onClick={toggle}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default CreateTasks;

