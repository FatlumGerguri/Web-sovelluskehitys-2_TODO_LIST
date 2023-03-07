import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {
  Container,
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  Card,
} from "react-bootstrap";
function Register(props) {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setDataa] = useState([]);
  axios.defaults.withCredentials = true;
  //Password patter
  //const Patter_PASS = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;

  const addUser = async () => {
    axios.post('http://localhost:5000/register', {
      username: username,
      password: password,
      //userId: Math.random().toString(36).slice(2);

      })


        .then((response) => response.json())
        .then((data) => {
          setDataa((posts) => [data, ...posts]);
          setUsername("");
          setPassword("");
        })
        .catch((error) => {
          console.log(error.message);
        });
  };

  const handleUser = (event) => {
    setUsername(event.target.value);
    console.log(event.target.value)
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value)
  };
  const handleSubmitRegister = (event) => {
    const form = event.currentTarget;
    addUser();
    if (form.checkValidity() === false) {
      event.preventDefault();

      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
      <Container fluid="md">
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary rounded"></div>
            <Card className="shadow border border-3">
              <Card.Body>
                <div className="mb-1 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <p className="mb-5">Please enter your username and password!</p>
                  <div className="mb-5">
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmitRegister}
                    >
                      <Form.Group  controlId="validationCustom01">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Username"
                            className="mb-3"
                        >
                          <Form.Control
                              required
                              type="text"
                              placeholder="User name"
                              minLength={4}
                              value={username}
                              onChange={handleUser}
                              //{...register("firstName", { required: true, maxLength: 10 })}
                          /></FloatingLabel>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Username should be more then three letter
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                          className="mb-3"
                          controlId="validationCustomPassword"
                      >
                        {/*<Form.Label className="text-center">Password</Form.Label>*/}
                        <FloatingLabel controlId="floatingPassword" label="Password">
                          <Form.Control
                              type="password"
                              placeholder="Password"
                              value={password}
                              required
                              minLength={6}
                              //pattern={Patter_PASS}
                              onChange={handlePassword}
                              /* {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: Patter_PASS,
                  })}*/
                          /></FloatingLabel>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Password should be more then three letter
                        </Form.Control.Feedback>
                      </Form.Group>
                      <div className="d-grid">
                        <Button type="submit">Submit form</Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      {/*<p className="mb-0 text-center">
                      Don't have an account?
                      <a href="#" className="text-primary fw-bold">
                        Sign
                      </a>
          </p>*/}
                      <p className="mb-0 text-center">
                        Already have an account?

                          <Link className="text-primary fw-bold " to="/"> Log in</Link>

                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  );
}
export default Register;