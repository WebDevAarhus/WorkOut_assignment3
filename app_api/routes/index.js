var express = require('express');
var router = express.Router();
var ctrlPrograms = require('../controllers/programs');
var ctrlExercises = require('../controllers/exercises');
var ctrlLogs = require('../controllers/logs');

//programs
router.get('/', ctrlPrograms.programsList); 
router.get('/programs', ctrlPrograms.programsList); 
router.post('/programs', ctrlPrograms.createProgram);
router.get('/programs/:programname', ctrlPrograms.programInfo);

//exercises
router.post('/programs/:programname/exercises',ctrlExercises.createExercise);

//logs
router.post('/programs/:programname/logs',ctrlLogs.createLog);



module.exports = router;