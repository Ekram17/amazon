import React, { useState, useContext } from 'react';
import classes from "./SignUp.module.css";
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../Utility/Firebase";
import{signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { ClipLoader } from 'react-spinners';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

function Auth() {
      const[email,setEmail]=useState('');
      const[password,setPassward]=useState('');
      const[error,setError]=useState('');
      const[loading,setLoading]=useState({
        signIn:false,
        signUp:false
      });

      const[{user},dispatch]=useContext(DataContext);
      const navigate = useNavigate ()
      // console.log(user);
      
      const authHandler= async(e)=>{
        e.preventDefault();
        console.log(e.target.name);
        if(e .target.name == "signin"){
          // firebase auth
          setLoading({...loading,signIn:true});
          signInWithEmailAndPassword(auth,email,password)
          .then((userInfo)=>{
            dispatch({
              type:Type.SET_USER,
              user:userInfo.user
            });
            setLoading({... loading,signIn:false});
            navigate("/")
          })
            .catch((err) => {
            setError(err.message);
            setLoading({... loading,signIn:false});
          });
        }else{
          setLoading({... loading,signUp:true});
          createUserWithEmailAndPassword(auth,email,password)
          .then ((userInfo)=>{
            dispatch({
              type: Type.SET_USER,
              user: userInfo.user,
            });
            setLoading({...loading,signUp:false});
            navigate("/")
          })
          .catch((err)=>{
            setError(err && err.message);
            setLoading({...loading,signUp:false});
          });
        }

      };
      //console.log(password,email)
  return (
      <section className={classes.login}>
      {/* logo */}
      <Link>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>

      {/* form */}
      <div className={classes.login_container}>
      <h1>Sign In</h1>
      <form action="">
        <div>
    <label htmlFor="email">Email</label>
    <input
      value={email} onChange={(e)=>setEmail(e.target.value)} 
      type="email"
        id="email"
      />
        </div>

        <div>
    <label htmlFor="password">Password</label>
    <input 
    value={password} onChange={(e)=>setPassward(e.target.value)}
        type="password"
          id="password"
            />
        </div>
        <button type='submit'
          onClick={authHandler}
          name='signin'
          className={classes.login_signInButton}
          >
            { loading.signIn ?(
              <ClipLoader color='#000' size={15}></ClipLoader>
            ):(
            "Sign In"
            )}
            </button>

          </form>
      {/* agreement */}
        <p>
        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
       {/* create account btn */}

        <button 
        type='submit'
        name='signup'
        onClick={authHandler} 
        className={classes.login_registerButton} 
        > 
        { loading.signUp ?(
              <ClipLoader color='#000' size={15}></ClipLoader>
            ):(
            "creat your Amazon Account"
            )}

        </button>
        {error && (
          <small style={{paddingTop:"5px",color:"red"}}>{error}</small>
        )}
      </div>
      </section>
            
    

  );
}

export default Auth;