import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';


const login = {
  firstName: 'rahul',
  email:"rahul@gmail.com",
  password:"rahul12345"
};

function validation() {
  const nameField = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');



  if (nameField.value !== login.firstName) {
    alert('Please enter the correct name');
    return false; 
  }
  if (email.value !== login.email) {
    alert('Please enter the correct email');
    return false; 
  }
  if (password.value !== login.password) {
    alert('Please enter the correct password');
    return false; 
  }
  return true;
  
  
}



const Main = () => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const isValid = validation();
    if (isValid) {
      navigate('/successful');
    }
  }
  
   
  
  return (
    <Fragment>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" minLength={8} required />

        <button onClick={validation} type="submit">Register</button>
      </form>
    </Fragment>
  );
}

export default Main;