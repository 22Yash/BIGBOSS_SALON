const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT 





app.use(cors({
    origin: 'http://localhost:5173',  // Allow requests from this origin
    methods: 'GET,POST,PUT,DELETE',   // Specify allowed methods
    allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
}));

app.use(express.json());

app.use(require('./routes/appoinment'))

dotenv.config({path:'./config.env'});


require('./db/conn')






const middleware = (req,res,next)=>{
    console.log("");
    next();
    
   


}



// app.get('/',(req,res)=>{
//     res.send("home")
// })

app.get('/appoinment', middleware , (req,res)=>{
    const { name, email, service, staff, date } = req.body;

    // Your logic to handle the appointment data
    res.status(200).json({ message: "Appointment successfully created" });
    
})


app.listen(port,()=>{
    console.log(`server running on ${port}`);
})