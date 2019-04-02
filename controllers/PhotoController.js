
let model = require("../models/admin.js");
let async=require("async");


module.exports.Form = function(request, response){
    response.title = 'Répertoire des stars';


    response.render('photo', response);

};

