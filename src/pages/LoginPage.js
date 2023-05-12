import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  const handleGoogleLogin = () => {
    // Handle login with Google logic here
  };

  const handleGithubLogin = () => {
    // Handle login with GitHub logic here
  };

  return (
    <div className="bg-dark min-vh-100 d-flex align-items-center">
      <Container className="px-4 px-md-5">
        <div className="card shadow-lg bg-secondary">
          <div className="card-body">
            <h1 className="mb-4 text-center text-white">Login</h1>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="email" className="text-white">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="text-white bg-dark border-0 mb-3"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="text-white">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="text-white bg-dark border-0 mb-4"
                  required
                />
              </FormGroup>
              <Button type="submit" color="primary" block className="mb-3">
                Login
              </Button>
              <hr className="my-4 text-white" />
              <Button
                color="light"
                className="text-dark my-3"
                block
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="me-3" /> Login with Google
              </Button>
              <Button
                color="light"
                className="text-dark my-3"
                block
                onClick={handleGithubLogin}
              >
                <FaGithub className="me-3" /> Login with GitHub
              </Button>
            </Form>
            <div className="text-center text-white">
              <p className="mb-0">
                Don't have an account? <a href="#">Sign up</a>
              </p>
              <p className="mb-0">
                Forgot your password? <a href="#">Reset it</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LoginPage;
