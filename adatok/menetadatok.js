const mysql = require("mysql");
const configDb = require("../config/connectDb.json")

console.log(configDb.dbname)

const connection = mysql.createConnection({
    host: configDb.host,
    port: configDb.port,
    database: configDb.dbname,
    user: configDb.user,
    password: configDb.passwd
});

/*
module.exports.vonatlista = function (){
    myQuery = "SELECT vId, vNev FROM vonat"
    connection.query(myQuery, (err, result, fields) => {
        if (err) throw err;
        return JSON.parse(JSON.stringify(result));
    })
}
*/
module.exports.vonatlista = function ( callback ){
    myQuery = "SELECT vId, vNev FROM vonat"
    connection.query(myQuery, (err, result, fields) => {
        if (err)
            callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    })

module.exports.allomaslista = function ( callback ){
        myQuery = "SELECT aId, aNev FROM allomas"
        connection.query(myQuery, (err, result, fields) => {
            if (err)
                callback(err, null);
            else {
                callback(null, JSON.parse(JSON.stringify(result)));
            }
        })   
    }
}