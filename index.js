const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const todoRoutes = require('./routes/todoRoutes');
const db = require('./db'); 

const app = express();

// Express middleware
app.use(express.json());

// Routes 
app.use('/todos', todoRoutes);

// Start server
const PORT = 3009;
const IP = "192.168.1.101";

db.sequelize.sync().then(() => {
  app.listen(PORT, IP, () => {
    console.log(`Server running on http://${IP}:${PORT}`);
  });
});
