const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const app = express();
const port =process.env.PORT || 3001;

app.use(cors());

app.use('/', router);

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})