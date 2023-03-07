import React, {Component, useEffect, useState} from "react";
import { Button} from "react-bootstrap";
import CreateTaks from "../TodoListcomponents/modalsTask/CreateTaks";
import CardTaks from "../TodoListcomponents/CardTasks"
import NavBar from "../NavBar";
import axios from "axios";
import {response} from "express";

function ToDoApp() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () =>{
        setModal(!modal)
    }
    const getDataList = async () => {
      /*  const {taskList} = await axios.get("http://localhost:3000/events")
        setTaskList(taskList);*/
        await axios.get("meidä api")
    .then((response)=>{
        setTaskList(response.data)
            console.log(response)
        })
            .catch((error) => {
                console.log(error)
            })
    }

    //Search all data from localstorage test
   useEffect(() => {
       getDataList();
       /*let result = axios.get("http://localhost:3004/events");
        new Promise((x) => setTimeout(x, 1000));
        setTaskList(result.data)
       /* let arr = localStorage.getItem("taskList");
        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
*/
    }, []);


    const deleteTask = (index) => {
        let tempList = taskList
        //tempList.splice(index, 1);
        //localStorage.setItem("TaskList", JSON.stringify(tempList))
       // axios.delete('https://jsonplaceholder.typicode.com/posts?userId=1')
           // .then((response) => response.json())
           // .then((json) => console.log(json));
        setTaskList(tempList)
        window.location.reload()
    }

    const saveTasks = (taskObject) => {
        let tempList = taskList
        tempList.push(taskObject)
        let result =  axios.post("http://localhost:3004/events", tempList);
        //new Promise((x) => setTimeout(x, 1000));
        console.log(result)
        //localStorage.setItem("TaskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)


        //this.setTodos({ todos: result.data });

    }


    const updateListTask = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("TaskList", JSON.stringify(tempList));
        //axios.put('https://jsonplaceholder.typicode.com/todos', tempList);
        setTaskList(tempList)
        window.location.reload()
    }
    return (
        <>
            <div className="container text-center">

                <div>
                    <NavBar />
                </div>
            <div className="card m-4 p-3">
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
            </div>
        </>
    );
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ /*
class  TodoListDB extends Component {
    state = { todos: [] };

    async componentDidMount() {
        let result = await axios.get("http://localhost:3004/events");
        await new Promise((x) => setTimeout(x, 1000));
        this.setState({ todos: result.data });
    }
    render() {
        return (
            <div>
*/
                {/**Kaikki taskit näyttää tällää */}/*
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {this.state.todos &&  this.state.todos.map((obj, index) => (
                            <CardTaks
                                taskObject={obj}
                                index={index}
                                //deleteTask={deleteTask}
                                //updateListTask={updateListTask}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}*/

/*  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
export default ToDoApp;
