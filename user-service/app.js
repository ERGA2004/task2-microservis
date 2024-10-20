const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use('/api', userRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`User Service running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Unable to connect to the database:', error);
    });
