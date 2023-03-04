import React, { useEffect, useState } from "react";
import { Button} from "react-bootstrap";
import CreateTaks from "../TodoListcomponents/modalsTask/CreateTaks";
import CardTaks from "../TodoListcomponents/CardTasks"

function ToDoApp() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () =>{
        setModal(!modal)
    }

    //Search all data from localstorage test
    useEffect(() => {
        let arr = localStorage.getItem("taskList");
        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1);
        localStorage.setItem("TaskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const saveTasks = (taskObject) => {
        let tempList = taskList
        tempList.push(taskObject)
        localStorage.setItem("TaskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    const updateListTask = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("TaskList", JSON.stringify(tempList));
        setTaskList(tempList)
        window.location.reload()
    }
    return (
        <>
            <div className="header-card mb-4">
                <div className=" d-flex justify-content-center">
                    <h2> Todo List </h2>
                </div>

                <div className="d-flex justify-content-center">
                    <Button variant="primary mt-2" onClick={() => setModal(true)}>
                        Creat Note
                    </Button>
                </div>
            </div>

            {/**Kaikki taskit näyttää tällää */}
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {taskList &&  taskList.map((obj, index) => (
                        <CardTaks
                            taskObject={obj}
                            index={index}
                            deleteTask={deleteTask}
                            updateListTask={updateListTask}
                        />
                    ))}
                    <CreateTaks toggle={toggle} modal={modal} save={saveTasks} />
                </div>
            </div>
        </>
    );
}
export default ToDoApp;
