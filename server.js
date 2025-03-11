const express = require('express');
const mongoose = require('mongoose');
require('./models/user');

require('dotenv').config();
const app = express();
 app.use(express.json());

 mongoose
 .connect(process.env.MONGO_URL || "mongodb://localhost:27017/kompania")
 .then(() => console.log("Database is connected!"))
.catch((err) => console.log(`Somthing went wrong: ${err}`));

app.post('/users', async (req, res) => {
    try{
        const{name, email} = req.body;

        const newUser = new User({name, email});
        await newUser.save();
        res.status(201).json({message : "User created successfully" , user: newUser});
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveri eshte ne porten : ${PORT}`));