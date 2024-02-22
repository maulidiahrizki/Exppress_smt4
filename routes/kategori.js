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

router.get('/create', function (req, res, next) {
    res.render('kategori/create', {
        nama_kategori: '' // Isi dengan nilai default atau sesuai kebutuhan
    });
});

router.post('/store', function(req, res, next) {
    try {
        const { nama_kategori } = req.body;
        const data = {
            nama_kategori: nama_kategori
        };

        connection.query('INSERT INTO kategori SET ?', data, function(err, result) {
            if (err) {
                req.flash('error', 'Gagal menyimpan data!');
            } else {
                req.flash('success', 'Berhasil menyimpan data!');
            }
            res.redirect('/kategori');
        });
    } catch (error) {
        req.flash('error', 'Terjadi kesalahan pada fungsi');
        res.redirect('/kategori');
    }
});

module.exports = router;
