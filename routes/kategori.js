const express = require('express');
const router = express.Router();
const connection = require('../config/database.js');

router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM kategori ORDER BY id_kategori DESC', function (err, rows) {
    if (err) {
      req.flash('error', err);
      res.render('kategori/index', { data: [] });
    } else {
      res.render('kategori/index', { data: rows });
    }
  });
});

module.exports = router;
