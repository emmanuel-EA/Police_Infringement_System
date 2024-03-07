const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoute');
const ownerRoutes = require('./routes/ownerRoutes');
const vehicleRoutes = require('./routes/vehicleRoute');
const infringementRoutes = require('./routes/infringementRoute')
const drivingRecordRoutes = require('./routes/drivingRecordRoute');

// Database
const db = require("./config/database");
// create tables
const models = require("./models");
models.init();

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "img-src 'self'");
    next();
});

app.use('/api/user', userRoutes);
app.use('/api/owner', ownerRoutes);
app.use('/api/vehicle', vehicleRoutes);
app.use('/api/infringement', infringementRoutes);
app.use('/api/drivingRecord', drivingRecordRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});

// Swagger
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
