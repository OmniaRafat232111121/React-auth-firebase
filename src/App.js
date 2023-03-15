
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import ForgetPassword from './Component/ForgetPassword';
import UpdatePassword from './Component/UpdatePassword';
import Dashboard from './Component/Dashboard';
import AuthProvider from './context/AuthContext';
import RequireAuth from './context/RequireAuth';


function App() {
  return (
   <Container className="d-flex align-items-center justify-content-center"    style={{ minHeight: "100vh" }}>
    <div className='w-100' style={{ maxWidth: "400px" }}>
      
      <Router>
        <AuthProvider>
        <Routes>
        <Route path="/signup"  element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot" element={<ForgetPassword/>}/>
        <Route path="/update-profile" element={<UpdatePassword/>}/>

        <Route path="/" element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        }/>
      </Routes>
     
        </AuthProvider>

      </Router>
       
    </div>

   </Container>
  );
}

export default App;
