



let HomeController = require('../controllers/HomeController');
let VipController = require('../controllers/VipController');
let VipsManageController = require('../controllers/VipsManageController');
let PhotoController = require('../controllers/PhotoController');
let AlbumController = require('../controllers/AlbumController');





// Routes
module.exports = function(app){

    //SESSION

    var ssn ;


   // var empty = require('is-empty');


// Main Routes
    app.get('/', HomeController.Index);
    app.get('/home', HomeController.Index);

//HOME
    app.post('/home',function (req,res) {

        ssn=req.session;
        ssn.estAuthentifie=false;

        var login = req.body.login;
        var pwd = req.body.pwd;

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
    app.post('/vipsManage', function (req,res) {
        ssn=req.session;
        if(ssn.estAuthentifie){
           res.redirect(VipsManageController.Form);
        }else{
            res.redirect('/home');
        }

    });
    app.get('/vipsManage', VipsManageController.Form);

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

// tout le reste
    app.get('*', HomeController.NotFound);
    app.post('*', HomeController.NotFound);

};
