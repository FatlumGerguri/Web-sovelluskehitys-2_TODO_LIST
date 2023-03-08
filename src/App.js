import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Login from "./component/RegisterPages/LoginForm"
import Register from "./component/RegisterPages/RegisterForm"
import TodoListApp from "./component/TodoListcomponents/TodoListApp";
import {useEffect, useState} from "react";
import axios from "axios";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {

    const [auth, setAuth] = useState(false);

    useEffect(() =>{
        testToken();
    },[]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second! ' + auth);
            testToken();
            console.log("testing");

        }, 5000);
        return () => clearInterval(interval);
    }, []);

    function isAuth(b){
        setAuth(prev => {
            return b;
        });

    }

    function testToken() {
        console.log(localStorage.getItem("Token") == null);

        axios.get('http://localhost:5000/isUserAuth',{
            headers: {Authorization: 'Bearer: '+localStorage.getItem("Token")},
            timeout: 0
        }).then((res) => {
            console.log(res.data + " db");
            isAuth(res.data);
        }).catch(err => {
            isAuth(false);
        }).finally(() =>{

        })

        console.log(auth + "tämä");

        return auth;
    }


  return (
      <>
          <Link  to="/todolist" onClick={testToken}>home</Link>
      <Routes>
          <Route element={<ProtectedRoute auth={testToken()}/>}>
            <Route path="/todolist" element={<TodoListApp />} />
          </Route>
          <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />

      </Routes>
          </>
  )
}

export default App