const EmployeeDetails = require('../models/EmployeeDetails');

// Create
exports.createEmployeeDetails = async (req, res) => {
    try {
        const employee = new EmployeeDetails(req.body);
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read
exports.getEmployeeDetails = async (req, res) => {
    try {
        const employee = await EmployeeDetails.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update
exports.updateEmployeeDetails = async (req, res) => {
    try {
        const employee = await EmployeeDetails.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete
exports.deleteEmployeeDetails = async (req, res) => {
    try {
        const employee = await EmployeeDetails.findByIdAndDelete(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
