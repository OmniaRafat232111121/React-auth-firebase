import React ,{useState,useRef} from 'react'
import { Button, Card, Form,Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ForgetPassword = () => {
  const emailRef=useRef();

  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit=async(e)=>{
    
    e.preventDefault();
    try{
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox ");
      setError("");
      setLoading(true);
    }
    catch(error){
      setError('Failed To reset Password')
      setLoading(true);

    }
    setLoading(false)
  }
  return (
   <>
    <Card className='p-4'>
        <Card.Body>
        <h2 className="text-center mb-4">Reset Password</h2>
        {error && <Alert variant="danger" >{error}</Alert>}
        {message && <Alert variant='success'>{message}</Alert>}
        </Card.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor='email'>Email:</Form.Label>
                <Form.Control type="email" 
                ref={emailRef}
                id="email"></Form.Control>
            </Form.Group>
            <Button variant='primary'
             type='submit'
             disabled={loading}
             className=' text-center w-100 mt-3'>Reset Password</Button>

                    
        </Form>
        <div className="w-100 text-center mt-3">
        <p><Link to="/login">Login</Link></p>
            
          </div>  
        
    </Card>
    <div className="w-100 text-center mt-2">
    Need an account ?<Link to="/signup">SignUp</Link>
      </div>
   </>
  )
}

export default ForgetPassword