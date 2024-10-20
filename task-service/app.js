const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', taskRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Task Service running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Unable to connect to the database:', error);
    });
