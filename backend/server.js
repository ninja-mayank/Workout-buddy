const express = require('express');
require('dotenv').config();
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');
//express app
const app = express();

app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path,req.method);
    next()
})

app.use('/api/workouts',workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT,() => {
            console.log('listening on port',process.env.PORT);
        })
    })
    .catch(err => console.log(err));
