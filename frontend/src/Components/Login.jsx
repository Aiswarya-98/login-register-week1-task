import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import pic from "../Assets/pic_reg.png"
import { googleLoginUserApi, loginUserApi } from '../Services/allAPI'
import { jwtDecode } from "jwt-decode";
import {GoogleLogin, useGoogleLogin } from '@react-oauth/google';
// import GoogleAuth from './GoogleAuth';
import axios from 'axios';
import { useAuth } from './Context/AuthContext';


function Login() {

  const navigate = useNavigate()

  // const {loginUser:loginUser} = useAuth()


  const [userData,setUserData] = useState({
    email:'',password:''

  })


  const {loginUser} = useAuth()

  const handleLogin= async(e) => {
    e.preventDefault()
    const {email,password} = userData

 

    if(!email || !password){
      alert("Please fill the data")
    }else{
      const result = await loginUserApi(userData)
      // console.log(result);

      if(result.status === 200 ){
        localStorage.setItem("user",JSON.stringify(result.data.user))
        localStorage.setItem("token",result.data.token)

        // loginUser(result.data.user)

        setUserData({
          email:'',password:''
        })

        
        if(result.data.user.role === 'admin'){
          loginUser(result.data.user)
          navigate('/admin');
        }else{
          loginUser(result.data.user)
        navigate('/home');
        }

        // navigate('/home')
      }else{
        alert(result.response.data)
        // console.log(result);
      }
    }
  }

  // const {loginUser} = useAuth()

  const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
      try {
        console.log(tokenResponse);



        const userdetails = await fetchUserDetails(tokenResponse.access_token);
        console.log("userdetails response", userdetails);
  
        if (userdetails) {
          const { name, email, picture } = userdetails;
  
          // const result = await googleLoginUserApi({ googleId, name, email, picture });
          const result = await googleLoginUserApi(userdetails)
          console.log("result", result.data.user);
  
          if (result.status === 200) {
            localStorage.setItem("user", JSON.stringify(result.data.user));
            localStorage.setItem("token", result.data.token);


            // loginUser(result.data.user)


            if(result.data.user.role === 'admin'){
              navigate('/admin');
            }else{
            navigate('/home');
            }

          } else {
            console.log("Login failed:", result);
          }
        }
      } catch (error) {
        console.error('Error during Google login:', error);
      }
    },
    onError: () => {
      console.log('Login Failed');
    },
  });
  

  const fetchUserDetails = async (accessToken) => {
    try {
      const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      // return null;
    }
  }

  return (
    <>
      <nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="https://img.icons8.com/?size=100&id=baTWeZAqG8lF&format=png&color=000000" alt="" width="50" height="54" />

    </a>
  </div>
</nav>




      <div className="row m-lg-4 ">
        <div className="col-1"></div>

        <div className="col-md-6 mt-5 ">
        <div className="container1 ">
            <h1 className="text-bold mb-2">Sign In to</h1>

            <h2>Lorem ipsum dolor sit amet !</h2>

            <div className="container2">
              <span>If you don't have an account</span>
              <br />
              <span>
                You can{" "}
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  register here
                </Link>{" "}
              </span>

              <div className="img_container d-flex justify-content-end ">
              <img src={pic} alt="register-pic" height={500} width={270} />
            </div>
            </div>

           
          </div>
        </div>

     

        <div className="col-md-4 mt-5">
        <h2 className="text-center">Sign In</h2>
          {/* form */}
          <form>
            <div class="mb-4 mt-5 ">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} style={{"height":"55px"}} />
            </div>
           

            <div class="mb-4">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} style={{"height":"55px"}} />
              <span><Link style={{"textDecoration":"none"}}>Forgot Password?</Link></span>
            </div>

          

            <div className="mb-3 d-grid gap-2">
              <button type="submit" class="btn btn-primary" onClick={(e)=>handleLogin(e)}>
                Login
              </button>
            </div>
          </form>

          <div className="media_icons mt-4 ">
            <span>
              <h5 style={{ color: "grey" }} class="text-center">
                Or continue with
              </h5>
            </span>

            <div className="d-flex justify-content-center mt-3 ">
              <a href="#">
                <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" onClick={login}  />
             
              </a>
              <a href="#">
                <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/?size=48&id=30840&format=png&color=000000" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-1"></div>
      </div>
    </>
  )
}


export default Login
