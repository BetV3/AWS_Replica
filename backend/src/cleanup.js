// cleanup.js

require('dotenv').config(); // Load environment variables

const sequelize = require('./config/db'); // Import Sequelize instance
const models = require('./models'); // Import all Sequelize models

const clearDatabase = async () => {
    try {
        // Define models in the order that respects foreign key dependencies
        // Typically, child tables should be truncated before parent tables
        const modelsToClear = [
            models.User,     // Example parent model
            // Add other models here in the correct order
        ];

        // Truncate each table with CASCADE to handle dependencies
        for (const model of modelsToClear) {
            console.log(`Clearing table: ${model.name}`);
            await model.destroy({
                where: {},
                truncate: true,
                cascade: true, // Ensures dependent data is also deleted
            });
        }

        console.log('Database cleanup completed successfully.');
        process.exit(0); // Exit the process successfully
    } catch (error) {
        console.error('Error during database cleanup:', error);
        process.exit(1); // Exit the process with an error
    }
};

clearDatabase();