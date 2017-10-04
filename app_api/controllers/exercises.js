var mongoose = require('mongoose');
var Prog = mongoose.model('Program');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

var doAddExercise = function(req, res, program){
    if(!program){
        sendJsonResponse(res, 404,{
            "message":"location not found"
        });
    }else{
        program.exercises.push({
            name: req.body.name,
            repstime: req.body.repstime,
            sets: req.body.sets,
            description: req.body.description
            
        });

        program.save(function(err, program){
            var addedExercise;
            if(!err){
                addedExercise = program.exercises[program.exercises.length-1];
                sendJsonResponse(res, 201, addedExercise);
            }else{
                sendJsonResponse(res, 400, err);
            }
        });
    }
}

/*POST actual exercise creation */
module.exports.createExercise = function(req,res){
    var programname = req.params.programname;
    if(programname){
        Prog
        .findOne({name:programname})
        .select('exercises')
        .exec(function(err, program){
            if(!err){
                doAddExercise(req, res, program);
            }else{
                sendJsonResponse(res, 400, err);
            }
            
        });
    }else{
        sendJsonResponse(res, 404, {
            "message":"program not found"
        })
    }
};
