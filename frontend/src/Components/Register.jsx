import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import pic from "../Assets/pic_reg.png"
import { registerUserApi } from "../Services/allAPI"
import { useGoogleLogin } from "@react-oauth/google"
import axios from "axios"

function Register() {

  const navigate = useNavigate()
  const [userData,setUserData] = useState({
    email:'',username:'',password:'',confirmPassword:''
  })


  const handleRegister = async(e)=>{
    e.preventDefault()
    const {email,username,password,confirmPassword} = userData
    if(password !== confirmPassword){
      alert("Password doesn't match")
  }else if(!username||!email){
    alert("Please fill all the fields")
  }
  else{
    const result = await registerUserApi(userData)
    console.log(result);

    if(result.status === 200 || 201){
      console.log(result);
      alert(`${result.data.username} has been registered successfully!!`)
      setUserData({email:'',username:'',password:'',confirmPassword:''})

      navigate('/login')
    }else{
      alert(result.response)
      console.log(result);
    }
  }
}

const login = useGoogleLogin({
  onSuccess: tokenResponse => console.log("tokenresponse",tokenResponse),
});


// const fetchUserDetails = async(accessToken) => {
//   try{
//     const response = await axios.get("")
//   }
// }
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
        <div className="col-1" ></div>

        <div className=" col-md-3  mt-5" >
          <h2 className="text-center">Sign Up</h2>
          {/* form */}
          <form>
            <div class="mb-3 mt-5 ">
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} />
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="exampleInputText" placeholder="Create enter username" value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})}/>
            </div>

            <div class="mb-3">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} />
            </div>

            <div class="mb-3">
              <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm Password" value={userData.confirmPassword} onChange={(e)=>setUserData({...userData,confirmPassword:e.target.value})} />
            </div>

            <div className="mb-3 d-grid gap-2">
              <button type="submit" class="btn btn-primary " onClick={(e)=>handleRegister(e)}>
                Register
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
                <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" onClick={login} />
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

<div className="col-2" xs={12} md={6} lg={4}></div>

        <div className="col-md-5 mt-5 " >
          <div className="container-fluid ">
            <h1 className="text-bold mb-2">Sign Up to</h1>

            <h2>Lorem ipsum dolor sit amet !</h2>

            <div className="container-fluid">
              <span>If you already have an account</span>
              <br />
              <span>
                You can{" "}
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  Login here
                </Link>{" "}
              </span>

              <div className="img_container d-flex justify-content-end ">
              <img src={pic} alt="register-pic" height={500} width={270} />
            </div>
            </div>

           
          </div>
        </div>

        <div className="col-1" xs={12} md={6} lg={4}></div>
      </div>
    </>
  )
}

export default Register
