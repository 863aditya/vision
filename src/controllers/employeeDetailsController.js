const EmployeeDetails = require('../models/EmployeeDetails');

// Create
exports.createEmployeeDetails = async (req, res) => {
    console.log("here");
    try {
        const employee = new EmployeeDetails({
            // NameOfEmployee: req.body.NameOfEmployee,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
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
            DlScan: null,  // Store file buffer
            DlScan2: null, // Store file buffer
            BankAccountNo: req.body.BankAccountNo,
            NameOfBankAndBranch: req.body.NameOfBankAndBranch,
            IfscCode: req.body.IfscCode,
            PfNo: req.body.PfNo,
            EsiCode: req.body.EsiCode
        });

        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        console.log(error.message);
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
        const employee = new EmployeeDetails({
            // NameOfEmployee: req.body.NameOfEmployee,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
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
            DlScan: null,  // Store file buffer
            DlScan2: null, // Store file buffer
            BankAccountNo: req.body.BankAccountNo,
            NameOfBankAndBranch: req.body.NameOfBankAndBranch,
            IfscCode: req.body.IfscCode,
            PfNo: req.body.PfNo,
            EsiCode: req.body.EsiCode
        });
        const response = await EmployeeDetails.findByIdAndUpdate(req.params.id, employee, { new: true });
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(response);
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


exports.getAllEmployeeDetails = async (req,res) => {
    try{
        const em= await  EmployeeDetails.find({});
        res.status(200).json({em});
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
};