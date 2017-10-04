var mongoose = require('mongoose');
var Prog = mongoose.model('Program');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};


/*GET programs page*/
module.exports.programsList = function(req,res){
    Prog
    .find({})
    .exec(function(err, programs){
        if(!err){
            sendJsonResponse(res, 200, programs);
        }else{
            sendJsonResponse(res, 404,"no programs found");
        }
    });
};

/*GET program info page*/
module.exports.programInfo = function(req,res){
    console.log(">>>>> api gets the request");
    var programname = req.params.programname;
    if(req.params && programname){
        Prog
        .findOne({name:programname})
        .exec(function(err, program){
            if(!program){
                sendJsonResponse(res, 404, {
                    "message":"no program of such name"
                });
                return;
            }else if(err){
                sendJsonResponse(res, 404, err);
                return;
            }
            sendJsonResponse(res, 200, program);
        });
    }else{
        sendJsonResponse(res, 404,{
            "message":"no programname in request"
        });
    }
};

/*POST program creation*/
module.exports.createProgram = function(req,res){
    Prog
    .create({
        name: req.body.name,
        author: req.body.author,
        difficulty: req.body.difficulty
    },function(err, program){
        if(!err){
            sendJsonResponse(res, 201, program);
        }else{
            sendJsonResponse(res, 400, err);
        }
    });
   
};

