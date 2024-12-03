const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const layout1Routes = require('./routes/layout1');


dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());


db.getConnection()
  .then(() => console.log('Connected to MySQL Database'))
  .catch((err) => console.error('Database connection failed:', err.message));


app.use('/api/layout1', layout1Routes);


app.get('/', (req, res) => {
  res.send('Welcome to the Node.js MySQL API!');
});


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
