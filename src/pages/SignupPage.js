import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
import "./SignupPage.css";
function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // code to handle sign-up
  };

  return (
    <div className="bg-dark min-vh-100 d-flex align-items-center">
      <Card className="px-4 px-md-5 bg-dark">
        <CardHeader>
          <h3 className="text-center">Sign up</h3>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSignup}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <Button color="primary" block>
              Sign up
            </Button>
          </Form>
        </CardBody>
        <CardFooter>
          <p className="text-center">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Signup;
