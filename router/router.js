
let HomeController = require('../controllers/HomeController');
let VipController = require('../controllers/VipController');
let VipsManageController = require('../controllers/VipsManageController');
let PhotoController = require('../controllers/PhotoController');
let AlbumController = require('../controllers/AlbumController');



var session = require('express-session');

// Routes
module.exports = function(app){





// Main Routes
    app.get('/', HomeController.Index);
    app.get('/accueil', HomeController.Index);


// VIP
    app.get('/repertoire', VipController.Repertoire);
    app.get('/repertoire/:lettreRouter', VipController.DetailsLettre);
    app.get('/repertoire/vip/:numeroRouter', VipController.DetailsVip);

// albums
   app.get('/album', AlbumController.ListerAlbum);


   //VIPS
    app.get('/vipsManage', VipsManageController.Form);

    //PHOTOS
    app.get('/photo', PhotoController.Form);


// tout le reste
    app.get('*', HomeController.NotFound);
    app.post('*', HomeController.NotFound);

};
