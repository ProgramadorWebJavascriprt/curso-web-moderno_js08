console.log('curso de javascript web moderno/Node: Acessar Modulo ;') //segunda-feira,31/05/2021;22:02:36 h +|-
const moduloA = require('/home/frontenddeveloper/curso_de_javascript_web_moderno/exercicios-js/08-Node/moduloA.js')
console.log(moduloA)
/*
  Leia as mensagens que o vscode...lhe informa...
*/
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

/*const http = require('http')
http.createServer((req, res) => {
    res.write('Boa Tarde!!!!')
    res.end()
} ).listen(8080) {Não para de executar}
*/
