/******************************************************************************************************
 * Objetivo: EndPoints referente a API de estados e cidades
 * Data: 15/09/25
 * Autor: Marcos Ryan
 * Versão: 1.0
 * 
 * Observações: Instalação do Express, Cors, Body-Parser
 * npm install express --save
 * npm install cors express --save
 * npm install body-parser --save
 ******************************************************************************************************/

//Import das dependências da API
const express = require('express') //Responsável pela API
const cors = require('cors') //Responsável pelas permissões da API (APP)
const bodyParser = require('body-parser') //Responsável por gerenciar a chegada dos dados da API com front

//Retorna a porta do servidor atual ou colocamos uma porta local
const PORT = process.PORT || 8000

//Criando uma instância de uma classe do express
const app = express()


//Configurações de permissões
app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*') //Servidor de origem da API
    response.header('Access-Control-Allow-Methods', 'GET') //Verbos permitidos na API
    //Carrega as conflitações no CORS da API 
    app.use(cors())
    next() //Próximo, carregar os próximos endpoints



})

//ENDPOINTS

app.get('/v1/')
