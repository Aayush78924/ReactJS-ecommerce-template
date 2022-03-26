import React,{useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';
import {useHistory} from 'react-router-dom'
import { toast } from "react-toastify";

import './sign-in.styles.scss';

const SignIn =()=>{
  const history= useHistory();
  const [userData,setUserData]=useState({
    email:"",
    password:""
  })
  
    // constructor(props){
    //     super(props);

    //     this.state ={
    //         email: '',
    //         password: ''
    //     }
    // }

    const handleSubmit = async event => {
      // const history=useHistory();
        event.preventDefault();

        // const {email, password} = this.state;

        try{
          await auth.signInWithEmailAndPassword(userData.email, userData.password);
          setUserData({ email: "", password: "" });
          history.push('/')
        }catch(error){
          console.log(error)
          alert("Invalid credentials. Please try again")
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserData(pre=>{ return{...pre,[name]: value }})
    }

  
        return (
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
              <FormInput
                name="email"
                type="email"
                handleChange={handleChange}
                value={userData.email}
                label="email"
                required
              />

              <FormInput
                name="password"
                type="password"
                value={userData.password}
                handleChange={handleChange}
                label="password"
                required
              />
              <div className='buttons' >
                <CustomButton type="submit"> Sign In </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with Google </CustomButton>
              </div>
            </form>
          </div>
        );
    
}

export default SignIn;