///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet tenir el model de la base de dades, que desde les altres pagines del model
//cridarem quan vulguem interactuar amb aquesta
///////////////////////////////////////////////////////////////////////////////////////////////////////

const mysql = require("mysql")

const connectaBD = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DBNAME,
        waitForConnections: true,
        connectionLimit: 100,
        queueLimit: 10,
    })



module.exports = {
    getConnectaBD: () => connectaBD 
} 