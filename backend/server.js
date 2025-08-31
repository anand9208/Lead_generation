require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const leadRoutes = require('./routes/leads');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/leads', leadRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server is running');
    });
  })
  .catch((err) => console.error('DB connection error:', err));