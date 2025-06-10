import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senai',
    database: 'cadastro_estudantes'
})

conexao.connect()

export default conexao;

// const conexao = mysql.createConnection({
//     host: 'centerbeam.proxy.rlwy.net',
//     user: 'root',
//     password: 'DnTtJHCoDVKumyPzoBGaDbxBGpktTzmc',
//     database: 'railway',
//     port: '38218'
// })