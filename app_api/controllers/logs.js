var mongoose = require('mongoose');
var Prog = mongoose.model('Program');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

var doAddLog = function(req, res, program){
    if(!program){
        sendJsonResponse(res, 404,{
            "message":"location not found"
        });
    }else{
        program.logs.push({
            username: req.body.username,
            date: req.body.date
            
        });

        program.save(function(err, program){
            var addedLog;
            if(!err){
                addedLog = program.logs[program.logs.length-1];
                sendJsonResponse(res, 201, addedLog);
            }else{
                sendJsonResponse(res, 400, err);
            }
        });
    }
}

/*POST actual log creation */
module.exports.createLog = function(req,res){
    console.log('>>> in createLog');
    var programname = req.params.programname;
    if(programname){
        Prog
        .findOne({name:programname})
        .select('logs')
        .exec(function(err, program){
            if(!err){
                doAddLog(req, res, program);
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
