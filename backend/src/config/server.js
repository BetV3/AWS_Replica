const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const instanceRoutes = require('../routes/instanceRoutes');
const authRoutes = require('../routes/authRoutes');
const authMiddleware = require('../middlewares/authMiddleware');
const logger = require('../utils/logger');

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://10.0.0.197:3000',
    credentials: true
}))
app.use(logger);

//Routes
app.use('/', authRoutes);
app.use('/api/instances', authMiddleware, instanceRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Uh-oh something broke?');
});

module.exports = app;