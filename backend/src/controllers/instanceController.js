const ec2 = require('../services/ec2');

exports.createInstance = async (req, res) => {
    try {
        const instance = await ec2.createInstance(req.body);
        res.status(201).json(instance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getInstances = async (req, res) => {
    try {
        const instances = await ec2.getAllInstances();
        res.status(200).json(instances);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

// Add more controller methods as needed