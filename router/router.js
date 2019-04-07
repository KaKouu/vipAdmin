let HomeController = require('../controllers/HomeController');
let VipController = require('../controllers/VipController');
let VipsManageController = require('../controllers/VipsManageController');
let PhotoController = require('../controllers/PhotoController');
let AlbumController = require('../controllers/AlbumController');
let ReqController = require('../controllers/ReqController');


// Routes
module.exports = function(app){

    //SESSION

    var ssn ;
    var empty = require('is-empty');


// Main Routes
    app.get('/', HomeController.Index);
    app.get('/home', HomeController.Index);

//HOME
    app.post('/home',function (req,res) {

        ssn=req.session;
        ssn.estAuthentifie=false;

        var login = req.body.login;
        var pwd = req.body.pwd;

        console.log(login);

        if(  login == "admin" && pwd == "TakeTheLongWayHome"){
            ssn.estAuthentifie=true;
            res.redirect('/vipsManage');

        }else{
            ssn.estAuthentifie=false;
            res.redirect('/home');

        }

        console.log(ssn.estAuthentifie)



    })

// VIP
    app.post('/repertoire',  function (req,res) {
        ssn=req.session;
        if(ssn.estAuthentifie){
            res.redirect(VipController.Repertoire);
        }else{
            res.redirect('/home');
        }

    });
    app.post('/repertoire/:lettreRouter',  function (req,res) {
        ssn=req.session;
        if(ssn.estAuthentifie){
            res.redirect(VipController.DetailsLettre);
        }else{
            res.redirect('/home');
        }

    });
    app.post('/repertoire/vip/:numeroRouter', function (req,res) {
        ssn=req.session;
        if(ssn.estAuthentifie){
            res.redirect(VipController.DetailsVip);
        }else{
            res.redirect('/home');
        }

    });

    app.get('/repertoire', VipController.Repertoire);
    app.get('/repertoire/:lettreRouter', VipController.DetailsLettre);
    app.get('/repertoire/vip/:numeroRouter', VipController.DetailsVip);

// albums
   app.post('/album', function (req, res) {
       ssn=req.session;

       if(ssn.estAuthentifie){
           res.redirect(AlbumController.ListerAlbum);
       }else{
           res.redirect('/home');
       }
   });
   app.get('/album', AlbumController.ListerAlbum);

   //VIPS

    app.get('/vipsManage', VipsManageController.FormAjouter);
    app.post('/vipsManage', function (req,res) {
        ssn=req.session;

        //MARCHE PAAAAAAAAAAAAAAAAAAAS alors que ligne 25 ça marche. cancer
       /* var nom = req.body.nom;
        var prenom = req.body.prenom;
        var sexe = req.body.sexe;
        var jour = req.body.jour;
        var mois = req.body.mois;
        var an = req.body.an;
        var natio = req.body.nationalité;
        var file = req.body.file;

        console.log(nom);
        console.log(prenom);
        console.log(sexe);

        //var fullDate = an+'/'+mois+'/'+jour;

        if(empty(nom) || empty(prenom) || empty(sexe) || empty(jour) || empty(mois) || empty(an)
            || empty(natio) || empty(file) ){
            console.log("non");

            res.redirect('/vipsManage');
        }else{
            ssn.numReq=1;
            console.log("oui");

            res.redirect('/req');

        }
*/
    });

    //PHOTOS
    app.post('/photo', function (req,res) {

        ssn=req.session;
        if(ssn.estAuthentifie){
            res.redirect(VipsManageController.Form);
        }else{
            res.redirect('/home');
        }
    });
    app.get('/photo', PhotoController.Form);

    //ADDRequest
    app.get('/req',ReqController.Main);

// tout le reste
    app.get('*', HomeController.NotFound);
    app.post('*', HomeController.NotFound);

};
