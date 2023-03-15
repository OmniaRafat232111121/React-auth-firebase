import { React, useRef, useState,useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import   { useAuth }   from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const { signup } = useAuth();
  const emailRef = useRef();
  //add Ref to password,error
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    setLoading(false);
    try {
      setError("");
      
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch(error) {
      setError("Failed to create an account");
      console.log(error)
 

    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password-confirm">
                Password Confirmation
              </Form.Label>
              <Form.Control
                id="password-confirm"
                type="password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}