const connection = require('../config/database');

class model_kategori {

    // Untuk mengambil data dari tabel //
    static async getAll() {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM kategori ORDER BY id_kategori DESC', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    // Untuk menyimpan data kedalam tabel //
    static async Store(Data) {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO kategori SET ?', Data, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    // Untuk mengambil data berdasarkan ID //
    static async getId(id) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM kategori WHERE id_kategori = ' + id, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    // Untuk memperbarui data berdasarkan ID //
    static async Update(id, Data) {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE kategori SET ? WHERE id_kategori = ' + id, Data, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    // Untuk menghapus data dari tabel //
    static async Delete(id) {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM kategori WHERE id_kategori = ' + id, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    

}

module.exports = model_kategori;
