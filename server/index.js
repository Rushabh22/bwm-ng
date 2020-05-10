const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');
const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI).then(() => {
	const fakeDb = new FakeDb();
	fakeDb.seedDb();
});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

app.get('/rentals', (req,res) => {
  res.json({'success' : true});
});

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
	console.log("Application is running on port 3001");
});

