
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Auth(props) {
  const moveTO = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const gotToNextPage = () => moveTO("/register");

  const postLogin = () => {
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
            localStorage.setItem("username", result.username);
            moveTO("/register");
          }
          console.log(result);
        })
        .catch((error) => console.log("Error Login form", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin();
    setPassword("");
    setUsername("");
  };

  return (
    <div className="container">
      <div className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div class="card mb-3">
                <div class="card-body">
                <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p class="text-center small">Enter your username & password to login</p>
                  </div>
                  <form
                    id="loginform"
                    className="row g-3 needs-validation"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <label>Email address</label>
                      <div className="input-group has-validation">
                        <input
                            type="text"
                            className="form-control"
                            id="UserInput"
                            name="UserInput"
                            placeholder="Enter username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                          /* minLength={8}*/
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                    <div class="col-12">
                      <p class="small mb-0">Don't have account? <Link to="/register">Create an account</Link></p>
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
export default Auth;
