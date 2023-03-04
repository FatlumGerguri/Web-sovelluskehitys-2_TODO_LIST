import React, { useState } from "react";
import "../TodoListcomponents/todoList.css"
import EditTask from "../TodoListcomponents/modalsTask/EditTask"

const CardTaks = ({ taskObject, index, deleteTask , updateListTask}) => {
    const [modal, setModal] = useState(false);

    //Colors for boxes
    const colors = [
        {
            primaryColor: "#5d93e1",
            secondColor: "#ecf3fc",
        },
        {
            primaryColor: "#fd288",
            secondColor: "#fefaf1",
        },
        {
            primaryColor: "#5dc250",
            secondColor: "#f2faf1",
        },
        {
            primaryColor: "#f48687",
            secondColor: "#fdf1f1",
        },
        {
            primaryColor: "#b964f7",
            secondColor: "#f3f0fd",
        },
    ];

    const toggle = () => {
        setModal(!modal)
    }
    const updateTask = (obj) => {
        updateListTask(obj, index)
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    return (
        <div className="">
            <div className="col">
                <div className="">
                    <div className="card ">
                        <div
                            className="card-header"
                            style={{
                                backgroundColor: colors[index % 5].primaryColor,
                            }}
                        ></div>
                        <div className="card-body">
                            <h6
                                className="card-title"
                                style={{
                                    backgroundColor: colors[index % 5].secondColor,
                                    borderRadius: "5px",
                                }}
                            >
                                {taskObject.Name}{" "}
                            </h6>
                            <p className="card-text">{taskObject.Description}</p>
                            <div className="text-right card-icons">
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "auto",
                                        right: "20px",
                                        bottom: "10px",
                                    }}
                                >
                                    {/**Create button */}
                                    <i
                                        className="bi bi-pencil-square m-3"
                                        style={{
                                            color: colors[index % 5].primaryColor,
                                            cursor: "pointer",
                                        }}
                                        onClick={() => setModal(true)}
                                    ></i>
                                    {/**Delete Button */}
                                    <i
                                        className="bi bi-trash3"
                                        style={{
                                            color: colors[index % 5].primaryColor,
                                            cursor: "pointer",
                                        }}
                                        onClick={handleDelete}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} taskObject={taskObject} updateTask = {updateTask} />
        </div>

    );
};
export default CardTaks;
