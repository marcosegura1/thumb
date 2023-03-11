const express = require('express');
const app = express();
const db = require('mysql');

// Crear la conexión a la base de datos
const connection = db.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users'
});

app.get('/profile', (req, res) => {
  // hacer una consulta a la base de datos para obtener los valores profile_photo, title, description, address, labels
  connection.query('SELECT profile_photo, title, description, address, labels FROM users', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000);