const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');

mongoose.connect(config.DB_URI);

const app = express();

app.get('/rentals', (req,res) => {
  res.json({'success' : true});
});

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
	console.log("Application is running on port 3001");
});

