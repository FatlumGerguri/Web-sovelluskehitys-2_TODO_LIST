import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Card, Container, Row } from "react-bootstrap";

const CreateTasks = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setDescription] = useState("");

    const handleSaves = (e) => {
        e.preventDefault();
        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = taskDescription;
        save(taskObj);
        setTaskName("")
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
                                name="taskName"
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
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
