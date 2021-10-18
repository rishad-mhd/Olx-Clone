import React, { useState,useContext} from 'react';
import {FirebaseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'
import Loading from '../Loading/Loading';
import LoginError from '../Error/LoginError';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} =useContext(FirebaseContext)
  const history = useHistory()
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  const handleLogin = (e)=>{
    setLoading(true)
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{ 
      history.push('/')
    }).catch((err)=>{
     
      console.log(err);
      setError(err.message)
      setLoading(false)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          {error && <LoginError value={error}/>}
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={(e)=>{
          e.preventDefault()
          history.push('/signup')
        }}>Signup</a>
        {loading && <Loading />}
      </div>
    </div>
  );
}

export default Login;
