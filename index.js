const express = require('express');
const dotenv = require('dotenv');  // To load environment variables
const cors = require('cors');
const db = require('./config/db'); // Import the database configuration
const layout1Routes = require('./routes/layout1');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test database connection
db.getConnection()
  .then(() => console.log('Connected to MySQL Database'))
  .catch((err) => console.error('Database connection failed:', err.message));

// Routes
app.use('/api/layout1', layout1Routes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js MySQL API!');
});

// Start the server
const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
