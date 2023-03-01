import React, { useState } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./LoginForm";
import Register from "./RegisterForm";

const userPage = (props) => {
  
  return (
    <div className="container">
      <Register />
    </div>
  );

};

export default userPage;
