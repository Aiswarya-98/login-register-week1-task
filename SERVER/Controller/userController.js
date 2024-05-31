const users = require('../Models/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// register user

exports.registerUser = async(req,res)=>{
  
  try{
    const {email,username,password} = req.body

    const userExist = await users.findOne({email:email})
    if(userExist){
      return res.status(406).json({msg:'User already exist'})
    }else{
      const salt = await bcrypt.genSalt(10)
      const hashedPass = await bcrypt.hash(password, salt)

      const newUser = await users.create({  email,username, password: hashedPass })
      await newUser.save()
      res.status(201).json(newUser)
    }
  }catch(err){
    res.status(401).json(`Register API failed, error : ${err}`)
  }
}


// login user

exports.loginUser = async(req,res)=>{
  const {email,password,username} = req.body

  try{
    const userExist = await users.findOne({email})
    if(userExist){

      const comparePassword = await bcrypt.compare(password,userExist.password)
      if (!comparePassword) {
        return next(new HttpError("Invalid credentials", 422))
      }
      const token = jwt.sign({userId:userExist._id,role:userExist.role},process.env.JWT_SECRET)
      res.status(200).json({
        user:userExist,token:token
      })
    }else{
      res.status(404).json("Incorrect email/password")
    }
  }catch(err){

    res.status(401).json(`Login api failed, error ${err}`)
  }
}


// google login

exports.googleLoginUser = async (req,res)=>{
  const { email, name, picture } = req.body;


  try{

    const userExist = await users.findOne({email})

    if(userExist){
      // user = await users.findOne({ email });
      const token = jwt.sign({userId:userExist._id,role:userExist.role},process.env.JWT_SECRET)
      res.status(200).json({
        user:userExist,token:token
      })
      }else{

       let newUser = new users({ email, username:name,password:' ',picture})
       await newUser.save()

       const token = jwt.sign({userId:userExist._id},process.env.JWT_SECRET)
       res.status(200).json({
         user:newUser,token:token
       })

      }

    }catch(error){
    res.status(500).json({error:error.message})
  }
}


// smaple admin controller

exports.getAdminDashboard = async (req,res)=>{
  res.json({message:"Welcome to admin dashboard"})
}


// sample user role controller

exports.getUserDashboard = async(req,res)=>{
  res.json({message:"Welcome to user dashboard"})
}