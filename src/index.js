// see fail on vale
//also sql runnib lhost:3000 nii et npm peab mujal runnima

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Middleware Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'DianaSQL'
});
connection.connect();

// Define Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/articles', (req, res) => {
    // Fetch articles from the database (if applicable)
    // Send JSON response
});

// Start the Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Error Handling (optional)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});
