import React, { useEffect, useState} from "react";
import { Button} from "react-bootstrap";
import CreateTaks from "../TodoListcomponents/modalsTask/CreateTaks";
import CardTaks from "../TodoListcomponents/CardTasks"
import NavBar from "../NavBar";
import axios from "axios";

function ToDoApp() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    axios.defaults.withCredentials = true;
    const toggle = () =>{
        setModal(!modal)
    }

    //Get all data from db
    const getDataList =  async () => {
      /*  const {taskList} = await axios.get("http://localhost:3000/events")
        setTaskList(taskList);*/
        const {data} = await axios.get('http://localhost:5000/data')
        setTaskList(data);
    }

    //Search all data from show in page
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


//Delete Task
    const deleteTask = (index) => {
        //let tempList = taskList
        //tempList.splice(index, 1);
        //localStorage.setItem("TaskList", JSON.stringify(tempList))
        // axios.delete('http://localhost:5000/${id}', {data: {taskList: index}})
        // .then((json) => console.log(json));
        let removedArr;
        removedArr = [...taskList].filter(index, 1);


        setTaskList(removedArr)
        window.location.reload()
    }


    const saveTaskObjects = async () => {
        axios.post('http://localhost:5000/InsertData')
            .then((response) => response.json())
                   .catch((error) => {
                console.log(error.message);
            });
    }
    const saveTasks = async (taskObject) => {
        //let tempList = taskList
        //tempList.push(taskObject)
        taskList.push(taskObject)
        setTaskList(taskList)
        setModal(false)
        /*let tempList = taskList
        //tempList.push(taskObject)
        let result =  axios.post("http://localhost:3004/InsertData", tempList);
        //new Promise((x) => setTimeout(x, 1000));
        console.log(result)
        //localStorage.setItem("TaskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)


        //this.setTodos({ todos: result.data });*/

    }


    const updateListTask = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        setTaskList(tempList)
        window.location.reload()
    }
/*
    //Update List
    const updateListTask = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        //axios.put('http://localhost:5000/', {tempList})
        //localStorage.setItem("TaskList", JSON.stringify(tempList));
        let taskss = axios.put('http://localhost:5000/InsertData', tempList)
        setTaskList(tempList)
        window.location.reload()
    }

*/
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


export default ToDoApp;
