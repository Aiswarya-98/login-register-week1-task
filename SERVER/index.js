require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./Router/router')
require('./DB/connection')
app.use(cors())
app.use(express.json())
app.use(router)
app.use('/',router)

const PORT = 4000 || process.env.PORT
app.listen(PORT,()=>{
  console.log("running on 4000");
})

app.get('/',(req,res)=>{
  res.send(`<h1>waiting request</h1>`)
}
)