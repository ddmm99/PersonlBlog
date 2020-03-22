var mysql = require("mysql");

function createConnetion() {
    var connection = mysql.createConnection({
        host: "127.0.0.1",
        port: "3306",
        user: "root",
        password:"996695duan",
        database:"my_blog"
    }); 
    return connection;
}

module.exports.createConnetion = createConnetion;