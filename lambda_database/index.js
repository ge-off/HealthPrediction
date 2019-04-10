var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "<rds_endpoint>",
    user: "<rds_username>",
    password: "<password>",
    database: "<db_name>",
});
// console.log(connection);
exports.handler = (event, context, callback) => {
    connection.query('show tables', function (error, results, fields) {
        if (error) {
            connection.destroy();
            throw error;
        } else {
            // connected!
            console.log(results);
            callback(error, results);
            connection.end(function (err) { callback(err, results);});
        }
    });
};