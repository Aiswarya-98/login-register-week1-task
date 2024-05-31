import { BASE_URL } from "./baseUrl";
import { commonAPI } from "./commonAPI";

// registeration

export const registerUserApi = async(userData)=>{
  return await commonAPI("POST",`${BASE_URL}/user/register`,userData,"")
}


// login user

export const loginUserApi = async(userData)=>{
  return await commonAPI("POST",`${BASE_URL}/user/login`,userData,"")
}

// google login user

export const googleLoginUserApi = async(userData)=>{
  return await commonAPI("POST",`${BASE_URL}/user/google-login`,userData,"")
}