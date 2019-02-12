const request = require('request');


class sendRequest{
    
    constructor(){

    }
    async Send(sendurl, callback){

        let headers = {
            'Accept': 'application/json'
        }
        let options = {
            url: sendurl,
            method: 'GET',
            headers: headers
        }
        await request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                //console.log("dans la request "+body);
                callback(null, JSON.parse(body));
            }
        });
    };
}

module.exports = sendRequest;



