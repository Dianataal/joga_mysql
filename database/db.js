const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'DianaSQL'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);

    // Perform database operations here

    connection.end((err) => {
        if (err) {
            console.error('Error closing MySQL connection: ' + err.stack);
            return;
        }
        console.log('MySQL connection closed.');
    });
});
