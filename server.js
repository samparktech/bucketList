const express = require('express');
const app = express();
const PORT = 3500;
const indeRoute = require('./routes/index');
const mongoose = require('mongoose');
const mongoDbPass = `373ftnn5123`;

mongoose.connect(
    `mongodb+srv://ansh1515:${mongoDbPass}@cluster0.udk6h.mongodb.net/?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  ).then(()=>{
    console.log("<<MONGODB CONNECTED>>");
  }).catch(err => console.log(err))


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', indeRoute);

app.listen(PORT, ()=>{
   console.log(`Server Running at http://localhost:${PORT}`); 
}); 