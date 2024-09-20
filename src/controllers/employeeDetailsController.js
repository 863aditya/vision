const EmployeeDetails = require('../models/EmployeeDetails');

// Create
exports.createEmployeeDetails = async (req, res) => {
    try {
        const employee = new EmployeeDetails({
            NameOfEmployee: req.body.NameOfEmployee,
            FathersName: req.body.FathersName,
            FathersContactDetails: req.body.FathersContactDetails,
            SpouseName: req.body.SpouseName,
            SpouseContactDetails: req.body.SpouseContactDetails,
            DateOfBirth: req.body.DateOfBirth,
            PresentAddress: req.body.PresentAddress,
            PermanentAddress: req.body.PermanentAddress,
            ContactDetails: req.body.ContactDetails,
            AadhaarDetails: req.body.AadhaarDetails,
            PanDetails: req.body.PanDetails,
            DrivingLicenseNo: req.body.DrivingLicenseNo,
            DlValidityUpto: req.body.DlValidityUpto,
            DlScan: req.files['DlScan'][0].buffer,  // Store file buffer
            DlScan2: req.files['DlScan2'][0].buffer, // Store file buffer
            BankAccountNo: req.body.BankAccountNo,
            NameOfBankAndBranch: req.body.NameOfBankAndBranch,
            IfscCode: req.body.IfscCode,
            PfNo: req.body.PfNo,
            EsiCode: req.body.EsiCode
        });

        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send("Error: " + error.message);
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
