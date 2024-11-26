const Instance = require('../models/instance');

exports.createInstance = async (data) => {
    const instance = await Instance.create({
        name: data.name,
        // Assign other attributes based on data
    });
    //Simulate ec2 instance creation login
    // instance status, resource allocation
    return instance;
};

exports.getAllInstances = async () => {
    return await Instance.findAll();
};