const path = require('path');
const express = require('express');
const mysql = require('mysql');
const yaml = require('js-yaml');
const fs = require('fs');
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const ownerRoutes = require('./routes/ownerRoutes');
const drivingRecordRoute = require('./routes/drivingRecordRoute');
const vehicleRoute = require('./routes/vehicleRoute');
const infringementRoute = require('./routes/infringementRoute');

const app = express();
app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline'");
    next();
});



// Connect to MySQL

const con = mysql.createConnection({
    database: 'police3',
    user: 'Emmanuel',
    password: 'Jack1994',
    host: 'localhost',
    dialect: 'mysql',
});

con.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected !!")
    }
})
// Serve favicon.ico file
app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'favicon.ico'));
});

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define the route for /api
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});


// Routes
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/details", require("./routes/ownerRoutes"));
app.use("/api/drivingRecord", require("./routes/drivingRecordRoute"));
app.use("/api/vehicle", require("./routes/vehicleRoute"));
app.use('/api/infringement', require("./routes/infringementRoute"));

app.use(cors({
    origin: 'http://localhost:5173',
}));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Police Infringement System Api listening on port ${port}!`);
});
