require("dotenv").config();

const express = require("express");
const app = express();
const mongoose= require('mongoose');
const cors=require("cors");
const path = require("path")

app.use(express.static('./dist/frontend'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')))
app.use('/public', express.static('public'));

const adminRoutes =require("./routes/admin")
const loginRoutes =require("./routes/login");
const trainerRoutes=require("./routes/trainer");
const courseRoutes =require("./routes/course")

const PORT = process.env.PORT || 3000;


mongoose
  .connect("mongodb://localhost:27017/project" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

  //Routes
  app.use("/api/api", adminRoutes);
  app.use("/api/", loginRoutes);
  app.use("/api/trainer", trainerRoutes);
  app.use("/api/home" , courseRoutes);
 

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
   });
   

app.listen(PORT , (req,res)=>{
    console.log(`Server Running on PORT ${PORT}`);
})