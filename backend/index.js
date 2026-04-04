const express = require('express');
const mongoose = require('mongoose');
// const problemRoutes = require('routes/problemRoutes')
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());



const problemRoutes = require('./routes/problemRoutes');
const runRoutes = require('./routes/runRoutes')

app.use('/api/problems', problemRoutes);

app.use('/api/run', runRoutes);

mongoose.connect(process.env.MONGO_URI).then(
    () => {
        console.log("connection to mongodb successful!!\n");
    }
).catch((error) => {
    console.log("mongodb connection failed !!\n");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('server is listening on', PORT);
})