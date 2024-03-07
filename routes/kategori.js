var express = require('express');
var router = express.Router();
var connection = require('../config/database');
const model_kategori = require('../model/model_kategori');

router.get('/', async function(req, res, next) {
    let rows = await model_kategori.getAll();
    res.render('kategori/index', {
        data: rows
    });
});


router.get('/create', function (req, res, next) {
    res.render('kategori/create', {
        nama_kategori: '' // Isi dengan nilai default atau sesuai kebutuhan
    });
});

router.post('/store', async function(req, res, next) {
    try {
        let { nama_kategori } = req.body;
        let Data = { nama_kategori };
        await model_kategori.Store(Data);
        req.flash('success', 'Berhasil menyimpan data');
        res.redirect('/kategori');
    } catch (error) {
        req.flash('error', 'Gagal menyimpan data');
        res.redirect('/kategori');
    }
});


router.get('/edit/:id', async function(req, res, next) {
    let id = req.params.id;
    let rows = await model_kategori.getId(id);

    res.render('kategori/edit', {
        id: rows[0].id_kategori,
        nama_kategori: rows[0].nama_kategori
    });
});


router.post('/update/:id', async function(req, res, next) {
    try {
        let id = req.params.id;
        let { nama_kategori } = req.body;
        let Data = { nama_kategori };
        await model_kategori.Update(id, Data);
        req.flash('success', 'Berhasil menyimpan data');
        res.redirect('/kategori');
    } catch (error) {
        req.flash('error', 'Gagal menyimpan data');
        res.redirect('/kategori');
    }
});


router.get('/delete/:id', async function(req, res, next) {
    let id = req.params.id;
    await model_kategori.Delete(id);
    req.flash('success', 'Berhasil menghapus data');
    res.redirect('/kategori');
});


module.exports = router;
