var express = require('express');
var router = express.Router();
var ctrlPrograms = require('../controllers/programs');
var ctrlExercises = require('../controllers/exercises');
var ctrlLogs = require('../controllers/logs');

var ctrlOther = require('../controllers/other');

//programs
router.get('/', ctrlPrograms.programsList);
router.get('/programs', ctrlPrograms.programsList);

router.get('/programs/new', ctrlPrograms.addProgramForm);
router.post('/programs/new', ctrlPrograms.createProgram);
router.get('/programs/:programname', ctrlPrograms.programInfo);

//exercises
router.get('/programs/:programname/exercises/new',ctrlExercises.addExerciseForm);
router.post('/programs/:programname/exercises/new',ctrlExercises.createExercise);

//logs
router.get('/programs/:programname/logs/new',ctrlLogs.addLogForm);
router.post('/programs/:programname/logs/new',ctrlLogs.createLog);


//other
router.get('/about', ctrlOther.about);

module.exports = router;
