import React, {useState} from 'react';
import Button from '../Button/Button'
import './Login.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ErrorPopup from './ErrorPopup';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Perform login API request
      const response = await axios.post('http://116.90.227.238:3000/login', { email, password });
      if (response.status === 200) {
        // Get the JWT token from the response
        const token = response.data.token;

        // // Store the JWT token in localStorage
        localStorage.setItem('token', token);

        // Set the login status to true
        localStorage.setItem('isLoggedIn', 'true');
        nav("/");
      }
    } catch (error) {
        if (error.response && error.response.data) {
            setErrorMessage(error.response.data.message);
            console.log(error.response.data.message)
          } else {
            setErrorMessage("An error occurred while processing your request.");
          }
    }
  }

  return (
    <div className='login_bg'>
      <img src='./assets/images/bg.jpg' alt='bg'/>
      <div className='login_container'>
        <div className='login_content'>
          <div className='login_leftside'>
            <ErrorPopup errorMessage={errorMessage} />
            <h2>Log in</h2>
            <p>welcome to Ims. please put your login credentials below to stat using the app</p>
              <form className='login_form' onSubmit={handleLogin}>
                <div className='login_input'>
                  <PersonIcon className='loginicon'/>
                  <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='login_input'>
                  <LockIcon className='loginicon'/>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='remember_password'>
                   <input type='checkbox'/>
                   <p>Remember me!</p>
                </div>
                <div className='Login_button'>
                  <Button label="Login" />
                </div>
            </form>
          </div>
        </div>
        <div className='login_sideimg'>
          <img src='./assets/images/bg02.jpg' alt='bg' />
        </div>
      </div>
    </div>
  )
}

export default Login