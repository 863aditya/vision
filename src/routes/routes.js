const express = require('express')
// const { CreateProfile, GetAllProfiles, GetOneProfile, Login, authenticateToken} = require('../controllers/profileController')
const { createUser, getAllUsers } = require('../controllers/userController');
const employeeDetailsController = require('../controllers/employeeDetailsController');
const vehicleDetailsController = require('../controllers/vehicleDetailsController');
const itemDetailsController = require('../controllers/itemDetailsController');
const boqDetailsController = require('../controllers/boqDetailsController');
const publishingAuthController = require('../controllers/publishingAuthController');
const leadController = require('../controllers/leadController');
const userProfileController = require('../controllers/userProfileController');
const credentialsController=require('../controllers/credentialsController');
const productDetailsController = require('../controllers/productDetailsController');
const tenderSourceController = require('../controllers/tenderSourcesController');
const emdDetailsController = require('../controllers/emdDetailsController');
const bankController = require('../controllers/bankController');
const emdTypeController = require('../controllers/emdTypeController');
const middleware= require('../middlewares/auth')
const multer = require('multer');

const router = express.Router();
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// router.post('/profile',CreateProfile); 
// router.get('/profile',GetAllProfiles);
// router.get('/profile/:email',GetOneProfile);
// // router.post('/login',Login);
// // Route for creating a new user
// router.post('/users', createUser);

// // Route for getting all users
// router.get('/users', getAllUsers);

// Employee Details routes
router.post('/employee-details',  upload.fields([{ name: 'DlScan' }, { name: 'DlScan2' }]), employeeDetailsController.createEmployeeDetails);
router.get('/employee-details/:id', employeeDetailsController.getEmployeeDetails);
router.put('/employee-details/:id', employeeDetailsController.updateEmployeeDetails);
router.delete('/employee-details/:id', employeeDetailsController.deleteEmployeeDetails);
router.get('/employee-detail',employeeDetailsController.getAllEmployeeDetails);

// Vehicle Details routes
router.post('/vehicle-details', vehicleDetailsController.createVehicleDetails);
router.get('/vehicle-details/:id', vehicleDetailsController.getVehicleDetails);
router.put('/vehicle-details/:id', vehicleDetailsController.updateVehicleDetails);
router.delete('/vehicle-details/:id', vehicleDetailsController.deleteVehicleDetails);

// Item Details routes
router.post('/item-details', itemDetailsController.createItemDetails);
router.get('/item-details',itemDetailsController.getAllItemDetails);
router.get('/item-details/:id', itemDetailsController.getItemDetails);
router.put('/item-details/:id', itemDetailsController.updateItemDetails);
router.delete('/item-details/:id', itemDetailsController.deleteItemDetails);

// Product Details routes
router.post('/product-details', productDetailsController.createProductDetail);
router.get('/product-details',productDetailsController.getAllProductDetail);
router.get('/product-details/:id', productDetailsController.getProductDetail);
router.put('/product-details/:id', productDetailsController.updateProductDetail);
router.delete('/product-details/:id', productDetailsController.deleteProductDetail);


// BOQ Details routes
router.post('/boq-details', boqDetailsController.createBoqDetails);
router.get('/boq-details',boqDetailsController.getAllBoqDetails);
router.get('/boq-details/:id', boqDetailsController.getBoqDetails);
router.put('/boq-details/:id', boqDetailsController.updateBoqDetails);
router.delete('/boq-details/:id', boqDetailsController.deleteBoqDetails);

// PublishingAuth routes
router.post('/publishing-auth', publishingAuthController.createPublishingAuth);
router.get('/publishing-auth/:id', publishingAuthController.getPublishingAuth);
router.get('/publishing-auth', publishingAuthController.getAllPublishingAuth);
router.put('/publishing-auth/:id', publishingAuthController.updatePublishingAuth);
router.delete('/publishing-auth/:id', publishingAuthController.deletePublishingAuth);

// Lead routes
router.post('/lead', leadController.createLead);
router.get('/lead/:id', leadController.getLead);
router.put('/lead/:id', leadController.updateLead);
router.delete('/lead/:id', leadController.deleteLead);
router.get('/lead',leadController.getAllLead);
router.get('/lead/getbypublishingauthid/:id',leadController.getAllTenderByPublishingAuthId);


// TenderSource routes
router.post('/tender-source', tenderSourceController.createTenderSource);
router.get('/tender-source/:id', tenderSourceController.getTenderSource);
router.put('/tender-source/:id', tenderSourceController.updateTenderSource);
router.delete('/tender-source/:id', tenderSourceController.deleteTenderSource);
router.get('/tender-source',tenderSourceController.getAllTenderSource);


// UserProfile routes
router.post('/user-profile', userProfileController.createUserProfile);
router.get('/user-profile',middleware.authenticateToken,userProfileController.getAllUserProfiles);
router.get('/user-profile/:id',middleware.authenticateToken,userProfileController.getUserProfile);
router.put('/user-profile/:id', userProfileController.updateUserProfile);
router.delete('/user-profile/:id', userProfileController.deleteUserProfile);
router.get('/user-profile/getbyempid/:id',userProfileController.getUserProfileIdByEmpId);


//emdDetails
router.post('/emd-details', emdDetailsController.createEmdDetail);
router.get('/emd-details', emdDetailsController.getAllEmdDetails);
router.get('/emd-details/:id', emdDetailsController.getEmdDetailById);
router.put('/emd-details/:id', emdDetailsController.updateEmdDetailById);
router.delete('/emd-details/:id', emdDetailsController.deleteEmdDetailById);
router.get('/emd-details',emdDetailsController.getAllEmdDetails);


//bank
router.post('/banks', bankController.createBank);
router.get('/banks', bankController.getAllBanks);

//emd-types
router.post('/emd-types', emdTypeController.createEmdType);
router.get('/emd-types', emdTypeController.getAllEmdTypes);

//credentials
router.post('/credentials',credentialsController.CreateCredentials);
router.post('/login',credentialsController.Login)
router.get('/verify-token',credentialsController.VerifyToken);


module.exports = router;

