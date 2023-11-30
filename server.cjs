// import express from 'express';

// const express = require('express');
// const app = express();
// const port = 3000;
// const path = require('path');

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// app.post('/abc', (req, res) => {
//   // Process the request body and save the new review to the database
//   res.send('Review created successfully');
// });


import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app); // Create an HTTP server

const port = 3000;
const path = require('path');

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/abc', (req, res) => {
  // Process the request body and save the new review to the database
  res.send('Review created successfully');
});



























// const mongoose = require('mongoose');
// // Connection string
// const connectionString = 'mongodb://0.0.0.0:27017/ExploreIt';

// // Connect to MongoDB
// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Perform your database operations here
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });


//   var review = new mongoose.Schema({
//     name: {
//         type: String,
//         ref: 'User',
//         required: true,
//       },
//     text: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       min: 1,
//       max: 5,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//     image: {
//       type: Buffer,
//     },
//   });
  
//   const res1 = new review({
//     text: 'This is a great product!',
//     author: '1234567890',
//     rating: 5,
//   });
  
//   review.save((err, review) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res1);
//     }
//   });



  
// const mongoose = require('mongoose');
// // Connection string
// const connectionString = 'mongodb://0.0.0.0:27017/ExploreIt';

// // Connect to MongoDB
// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     // Perform your database operations here
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });


//   const ReviewSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         ref: 'User',
//         required: true,
//       },
//     text: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       min: 1,
//       max: 5,
//       required: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//     image: {
//       type: Buffer,
//     },
//   });
  
//   const Review = mongoose.model('Review', ReviewSchema);
  
//   const res1 = new Review({
//     text: 'This is a great product!',
//     author: '1234567890',
//     rating: 5,
//   });
  
//   res1.save().then(res1 => {
//     if (res1) {
//       console.log(res1);
//     } else {
//       console.log('Error saving review');
//     }
//   });
