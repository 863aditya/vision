const express = require('express')
const { CreateProfile, GetAllProfiles, GetOneProfile} = require('../controllers/profileController')
const { createUser, getAllUsers } = require('../controllers/userController');
const employeeDetailsController = require('./controllers/employeeDetailsController');
const vehicleDetailsController = require('./controllers/vehicleDetailsController');
const itemDetailsController = require('./controllers/itemDetailsController');
const itemsController = require('./controllers/itemsController');
const boqDetailsController = require('./controllers/boqDetailsController');
const publishingAuthController = require('./controllers/publishingAuthController');
const leadController = require('./controllers/leadController');
const userProfileController = require('./controllers/userProfileController');

const router = express.Router();

router.post('/profile',CreateProfile); 
router.get('/profile',GetAllProfiles);
router.get('/profile/:email',GetOneProfile);
// Route for creating a new user
router.post('/users', createUser);

// Route for getting all users
router.get('/users', getAllUsers);

// Employee Details routes
router.post('/employee-details', employeeDetailsController.createEmployeeDetails);
router.get('/employee-details/:id', employeeDetailsController.getEmployeeDetails);
router.put('/employee-details/:id', employeeDetailsController.updateEmployeeDetails);
router.delete('/employee-details/:id', employeeDetailsController.deleteEmployeeDetails);

// Vehicle Details routes
router.post('/vehicle-details', vehicleDetailsController.createVehicleDetails);
router.get('/vehicle-details/:id', vehicleDetailsController.getVehicleDetails);
router.put('/vehicle-details/:id', vehicleDetailsController.updateVehicleDetails);
router.delete('/vehicle-details/:id', vehicleDetailsController.deleteVehicleDetails);

// Item Details routes
router.post('/item-details', itemDetailsController.createItemDetails);
router.get('/item-details/:id', itemDetailsController.getItemDetails);
router.put('/item-details/:id', itemDetailsController.updateItemDetails);
router.delete('/item-details/:id', itemDetailsController.deleteItemDetails);

// Items routes
router.post('/items', itemsController.createItem);
router.get('/items/:id', itemsController.getItem);
router.put('/items/:id', itemsController.updateItem);
router.delete('/items/:id', itemsController.deleteItem);

// BOQ Details routes
router.post('/boq-details', boqDetailsController.createBoqDetails);
router.get('/boq-details/:id', boqDetailsController.getBoqDetails);
router.put('/boq-details/:id', boqDetailsController.updateBoqDetails);
router.delete('/boq-details/:id', boqDetailsController.deleteBoqDetails);

// PublishingAuth routes
router.post('/publishing-auth', publishingAuthController.createPublishingAuth);
router.get('/publishing-auth/:id', publishingAuthController.getPublishingAuth);
router.put('/publishing-auth/:id', publishingAuthController.updatePublishingAuth);
router.delete('/publishing-auth/:id', publishingAuthController.deletePublishingAuth);

// Lead routes
router.post('/lead', leadController.createLead);
router.get('/lead/:id', leadController.getLead);
router.put('/lead/:id', leadController.updateLead);
router.delete('/lead/:id', leadController.deleteLead);

// UserProfile routes
router.post('/user-profile', userProfileController.createUserProfile);
router.get('/user-profile/:id', userProfileController.getUserProfile);
router.put('/user-profile/:id', userProfileController.updateUserProfile);
router.delete('/user-profile/:id', userProfileController.deleteUserProfile);

module.exports = router;

