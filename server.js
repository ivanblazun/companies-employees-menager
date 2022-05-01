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
/// cors
app.use(cors())

// User register,login,isLoged Routes
app.use('/api/testRoute', require('./routes/testRoute'))
app.use('/api/register', require('./routes/register'))
app.use('/api/login', require('./routes/login'))
app.use('/api/isloged', require('./routes/isLoged'))

// company Routes
app.use('/api/company', require('./routes/companyRoutes/company'))

// employees routes
app.use('/api/employees', require('./routes/employeesRoutes/employess'))
app.use('/api/allEmployees', require('./routes/employeesRoutes/allEmployess'))


const PORT = 5000 || process.env.PORT

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
