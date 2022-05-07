const express = require('express');
const app = express();

const dotenv = require('dotenv')
const mongoose = require('mongoose');


// Connect mongoose
dotenv.config()
mongoose.connect(
  process.env.DB_CONNECT,
  // { useNewUrlParse: true },
  () => console.log('MongoDB Connected!')
)


/////// Middleys//////////
/// body parser for json
app.use(express.json())

// Routes
app.use('/api/testRoute', require('./routes/testRoute'))
app.use('/api/register', require('./routes/register'))

const PORT = 5000 || process.env.PORT

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
