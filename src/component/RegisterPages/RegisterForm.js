import React, { useState } from "react";
import {Link,  useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

function Register(props) {
  const moveTO = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const gotToNextPage = () => moveTO("/login");


  const postRegister = () => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application.json",
      },
    })
        .then((res) => res.json())
        .then((result) => {
          if (result.error_message) {
            alert(result.error_message);
          } else {
            console.log(result.data);
            alert(result.message);
            //localStorage.setItem("username", result.data.username);
            //Menee main sivuun
            moveTO("/")
          }
          console.log(result, errors);
        })
        .catch((error) => console.log("Error Login form", error));
  };

  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await postRegister();
      alert("Your data successfully submitted");
      setUsername("");
      setPassword("");
    } catch (error) {
      alert("Registration failed", error.message);
    }
    setUsername("");
    setPassword("");
  };


  return (
    <div className="container rounded-5">
      <div className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">
                      Create an Account
                    </h5>
                    <p class="text-center small">
                      Enter your personal details to create account
                    </p>
                  </div>
                  <form className="row g-3 needs-validation" onSubmit={onRegisterSubmit}>
                    <div className="form-group">
                      <label>Username</label>
                      <div className="input-group has-validation">
                        <input
                          type="text"
                          className="form-control"
                          id="UserInput"
                          name="UserInput"
                          aria-describedby="userHelp"
                          placeholder="Enter username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <fieldset disabled>
                        <label>Email address</label>
                        <div className="input-group has-validation">
                          <input
                            type="email"
                            className="form-control"
                            id="EmailInput disabledTextInput"
                            name="EmailInput"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={(event) => setEmail(event.target.value)}
                          />
                        </div>
                      </fieldset>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <div className="input-group has-validation">
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={password}
                          minLength={8}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Sign up
                    </button>
                    <div class="col-12">
                      <p class="small mb-0">
                        Already have account?{" "}
                        <Link to="/signin">Log in</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;

/** Email error kohda
 * 
                        <small id="emailHelp" className="text-danger form-text">
                          {emailError}
                        </small>
 */