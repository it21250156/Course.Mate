require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const courseManagement = require('./routes/courses'); 
const config = require('./config');
const amqpServer = require('./utils/amqpServer');

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// RabbitMQ server Connection
amqpServer.connect().then(() => {
    amqpServer.consumefromQueue(); 
});

// Route for course management
app.use('/api/courses', courseManagement); 

// Connection to MongoDB
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    // Listen for requests
    app.listen(config.PORT, () => {
        console.log('Connected to MongoDB & listening on port', config.PORT);
    });
}).catch((error) => {
    console.log(error);
});
