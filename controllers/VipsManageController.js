
let model = require("../models/admin.js");
let async=require("async");


module.exports.FormAjouter = function(request, response){
    response.title = 'ajoutVips';


    model.allNationalite(function(err, result){  // appel le module test qui exécute la requete SQL
        if (err) {
            console.log(err);
            return;
        }

        response.allNationalite = result;

        response.render('vipsManage', response);

    } )

};



