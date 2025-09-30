// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRoutes = require('./routes/tasks');


const app = express();
app.disable('x-powered-by');

const allowedOrigins = [process.env.FRONTEND_URL];


const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(cors(corsOptions));


app.use(express.json());


app.use('/api/tasks', tasksRoutes);


const PORT = process.env.PORT || 8080;


mongoose
.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch((err) => console.error(err));