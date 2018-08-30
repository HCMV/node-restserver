//
//puerto
//
process.env.PORT = process.env.PORT || 3000;


//=========================================
// Entorno
//=========================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//=========================================
// Base de datos
//=========================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://user-cafe:q12345@ds135926.mlab.com:35926/cafe_hmv';
}

process.env.URLDB = urlDB;