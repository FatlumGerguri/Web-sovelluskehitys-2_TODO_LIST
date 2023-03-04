import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./component/RegisterPages/LoginForm"
import Register from "./component/RegisterPages/RegisterForm"
import TodoListApp from "./component/TodoListcomponents/TodoListApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todolist" element={<TodoListApp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App