import React, { useEffect, useState } from "react";
import { Button, Form, Modal} from "react-bootstrap";

const EditTask = ({modal, toggle, updateTask, taskObject }) => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setDescription] = useState("");

    useEffect(() => {
        setTaskName(taskObject.Name)
        setDescription(taskObject.Description)
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempobj = {}
        tempobj['Name'] = taskName
        tempobj['Description'] = taskDescription
        updateTask(tempobj)
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
