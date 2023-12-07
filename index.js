const express = require('express');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();

const db = require('./db'); 

const app = express();

// Express middleware
app.use(express.json());

//add home res :"good"
app.get('/', (req, res) => {
  res.send('Good!');
});


// Routes 
app.use('/todos', todoRoutes);

app.get('*', (req, res) => {
  res.status(404).send('Route : 404 Not Found');
}
);

// Start server
const PORT = process.env.PORT || 3232;
const IP = process.env.IP || 'localhost';//"192.168.1.101";
 

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://${IP}:${PORT}`);
  });
});
