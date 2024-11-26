const app = require('./config/server');
const sequelize = require('./config/db');
const config = require('./config/config');

const startServer = async() => {
    try {
        await sequelize.authenticate();
        console.log("Database Connected...");
        await sequelize.sync();
        app.listen(config.PORT, () => {
            console.log(`Server running on port ${config.PORT}`);
        });
    } catch (error) {
        console.log('Unable to connect to database:', error);
    }
};

startServer();