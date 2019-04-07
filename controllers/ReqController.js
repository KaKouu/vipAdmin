let model = require("../models/admin.js");
let async = require("async");

// ////////////////////// L I S T E R     A L B U M S
var ssn ;

module.exports.Main = function(request, response){
   response.title = 'Requete';

    ssn=req.session;
    if(ssn.numReq==1) {


        model.addVip(function (err, result) {  // appel le module test qui exécute la requete SQL
            if (err) {
                console.log(err);
                return;
            }

            response.listePhotos = result; // result contient : [ RowDataPacket { NB: 37 } ]
            console.log();
            response.render('ReqAccepte', response);

        })
    }
  } ;
