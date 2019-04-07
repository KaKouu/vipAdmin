let db = require('../configDb');

module.exports.allNationalite = function(callback ) {
    db.getConnection(function(err, connexion) {
        if (!err) {

            let sql = "SELECT nationalite_numero AS num , nationalite_nom AS nom FROM nationalite ;";

            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.addVip = function(callback ) {
    db.getConnection(function(err, connexion) {

      //  num,nom,prenom,sexe,naissance,com,
        var nom = req.body.nom;
        var prenom = req.body.prenom;
        var sexe = req.body.sexe;
        var jour = req.body.jour;
        var mois = req.body.mois;
        var an = req.body.an;
        var natio = req.body.nationalité;
        var com = req.body.commentaire;
        var file = req.body.file;


        var fullDate = an+'/'+mois+'/'+jour;

        if (!err) {

            let sql = "INSERT INTO vips (vip_numero, vip_nom, vip_prenom, vip_sexe, vip_naissance, vip_texte, vip_date_insertion)\n" +
                " VALUES" +
                " ('"+num+"', '"+nom+"', '"+prenom+"', '"+sexe+"', '"+natio+"','"+fullDate+"', '"+com+"',CONVERT (date, GETDATE()) );";

            console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};