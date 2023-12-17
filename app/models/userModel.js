///////////////////////////////////////////////////////////////////////////////////////////////////////
//Aquesta funcio de model permet tenir el model de la base de dades, que desde les altres pagines del model
//cridarem quan vulguem interactuar amb aquesta
///////////////////////////////////////////////////////////////////////////////////////////////////////

const mysql = require("mysql")

const connectaBD = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "",
        database: "tfg-2023-2024",
        waitForConnections: true,
        connectionLimit: 100,
        queueLimit: 10,
    })



module.exports = {
    getConnectaBD: () => connectaBD 
} 