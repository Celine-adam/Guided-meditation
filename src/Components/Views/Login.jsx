import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hey ${username}!`);
  };

  return (
    <div>
      <h1 className="login-h1">Log In</h1>
      <Form onSubmit={handleSubmit} className="p-3 border rounded">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="rounded-0"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="rounded-1">
          LogIn
        </Button>
      </Form>
    </div>
  );
}
