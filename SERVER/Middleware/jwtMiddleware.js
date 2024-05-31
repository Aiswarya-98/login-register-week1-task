// middleware for authentication
const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{

  const authHeader = req.headers['authorization']

  if(!authHeader){
    return res.status(403).json({message:'No token provided'})
  }

  const token = authHeader.split(" ")[1]

  try{

    const jwtResponse = jwt.verify(token,process.env.JWT_SECRET)
    req.user = jwtResponse;
    // console.log(jwtResponse);

    next()

  }catch(error){
    return res.status(401).json({message:"Authorization failed"})
  }
} 




module.exports = jwtMiddleware