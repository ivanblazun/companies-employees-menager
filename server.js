const express = require('express');
const app = express();

const cors = require('cors')

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
app.use(cors())

// Routes
app.use('/api/testRoute', require('./routes/testRoute'))
app.use('/api/register', require('./routes/register'))
app.use('/api/login', require('./routes/login'))
app.use('/api/isloged', require('./routes/isLoged'))

const PORT = 5000 || process.env.PORT

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
