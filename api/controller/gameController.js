const mongoose = require('mongoose');
const gameSchema = require('../models/game');
const Game = mongoose.model('grids', gameSchema);
const sendRequest = require("../config/sendRequest");
const send = new sendRequest();

class gameController{

    getNewGameAnimalEasy(req,res){
        send.Send("https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple", function(err, body) {
            if (err) {
              console.log(err);
            } else {
                res.send(body);
            }
          });
        
    }

}

module.exports = gameController;