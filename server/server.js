const express = require('express')
const cors = require('cors')
const path  = require('path')
const dotenv = require('dotenv')
dotenv.config()


const userRoutes = require("./routes/userRoutes")
const authRoutes = require('./routes/authRoutes')
const noteRoutes = require('./routes/noteRoutes')

require("./db/dbConnect");
const PORT = process.env.PORT || 8000
const app = express()


app.use("/public", express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.listen(PORT, ()=>{
  console.log(`Server is running on PORT ${PORT}`);
})

app.use("/api",userRoutes)
app.use("/api",authRoutes)
app.use("/api",noteRoutes)

app.use('*', express.static(path.join(__dirname, 'build'))); 
app.use(express.static(path.join(__dirname, 'build')));
app.set(express.static(path.join(__dirname, "public")))