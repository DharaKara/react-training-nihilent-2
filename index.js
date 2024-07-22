// index.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('node:path');
const mysql = require('mysql2');
const weatherRoutes = require('./routes/weatherRoutes');
const userRoutes = require('./routes/userRoutes');
const dynamicWebpageRoutes = require('./routes/dynamicWebpageRoutes');
const formRoutes = require('./routes/formRoutes');
const bookRoutes = require('./routes/bookRoutes');
const adminRoutes = require('./routes/adminRoutes');
const newUserRoutes = require('./routes/newUserRoutes')
const loginRoutes = require('./routes/loginRoutes')
const app = express();
const port = 3000;
const cors = require('cors');
 
app.use(bodyParser.urlencoded({extended: false})); // to parse the form data
app.use(bodyParser.json()); // Always Always keep it on top of middleware
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Rptdh1235509!!',
    database: 'myapp_db'
})
//pool is the same as connection strings

app.use(cors()); 
app.use((req, res, next) => {
    req.pool = pool;
    next();
})
  
app.use('/weather', weatherRoutes);
app.use('/user', userRoutes);
// app.use('/', dynamicWebpageRoutes);
app.use('/submit-form', formRoutes)
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/newUser',newUserRoutes);
app.use('/admin',adminRoutes);
app.use('/books',bookRoutes);
app.use('/login',loginRoutes);
 
app.get('/adminRegister',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','adminRegister.html'));
})

app.get('/userRegister',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','userRegister.html'));
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','login.html'));
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})



// -------------------------------------------------------------------------------------------

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })

//how to send other files 
// app.get('/aboutme',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','aboutme.html'));
// })


