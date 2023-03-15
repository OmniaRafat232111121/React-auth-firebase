import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
   <>
    <Card className='p-4'>
        <Card.Body>
        <h2 className="text-center mb-4">Reset Password</h2>
        </Card.Body>
        <Form>
            <Form.Group>
                <Form.Label htmlFor='email'>Email:</Form.Label>
                <Form.Control type="email" id="email"></Form.Control>
            </Form.Group>
            <Button variant='primary' type='submit' className=' text-center w-100 mt-3'>Reset Password</Button>

                    
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