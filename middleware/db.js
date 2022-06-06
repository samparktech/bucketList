const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoDbPass = `373ftnn5123`;

mongoose.connect(
    `mongodb+srv://ansh1515:${mongoDbPass}@cluster0.udk6h.mongodb.net/?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  ).then(()=>{
    console.log("<<MONGODB CONNECTED>>");
  }).catch(err => console.log(err))

