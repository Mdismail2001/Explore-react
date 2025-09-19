import React, { useState } from 'react';

const Form = () => {
const [password, setPassword] = useState('secret');
const [error, setError] = useState('')


  const handleForm = (e) => {
    e.preventDefault();
    if(password.length < 6){
        setError('password must be 6 character')
    }else{
        setError('')
    }
  }
 
//  const  handlePassword =(e) =>{
//     console.log(e.target.value)
//     setPassword(e.target.value)
//  }

  return (
    <div>
    <form onSubmit={handleForm} className='mt-20 text-center text-2xl '>
      <input className='border p-2 rounded-full' type="text" name="name" placeholder="Enter name" required /><br/>
      <input  className='border p-2 rounded-full mt-2' type="email" name='email' placeholder='enter email' required/><br/>
      <input onChange={handlePassword} className='border p-2 rounded-full mt-2' type="password" name='password' placeholder='Enter password' defaultValue={password} required /><br/>
      <button className='border p-2 rounded-2xl mt-2' type="submit">Submit</button>
    </form>
      <p><small>{error}</small></p>
    </div>
  );
};

export default Form;