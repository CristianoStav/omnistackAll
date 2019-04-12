const multer = require('multer'),
    path = require('path'),
    crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve(__dirname, '..', '..', 'tmp'));
        },
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) callback(erro);

                file.key = `${hash.toString('hex')}-${file.originalname}`;            
                
                callback(null, file.key);
            })
        }
    })
};