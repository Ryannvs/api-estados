
/******************************************************************************************************
* Objetivo: Arquivo de funções para gerenciar a API de estados e cidades
* Data: 15/09/25
* Autor: Marcos Ryan
* Versão: 1.0
******************************************************************************************************/
const MESSAGE_ERRO = {
    status: false,
    status_code: 500,
    development: 'Marcos Ryan'
}
const dados = require('./estados_cidades.js')

//Retorna todos os estados
const getAllEstados = function () {
    let message = {
        status: true,
        status_code: 200,
        development: 'Marcos Ryan',
        uf: []
    }

    dados.listaDeEstados.estados.forEach(function (item) {
        message.uf.push(item.sigla)
    })

    message.quantidade = message.uf.length

    if (message.uf.length > 0)
        return message //Verdadeira 200
    else
        return MESSAGE_ERRO //Falso 500
}
//Retorna um estado pesquisando pela sigla (UF)
const getEstadoBySigla = function (sigla) {
    let estadosBySigla = dados.listaDeEstados.estados.find(e => e.sigla == sigla)
    let resultado = {
        status: true,
        status_code: 200,
        development: 'Marcos Ryan',
        uf: estadosBySigla.sigla,
        descricao: estadosBySigla.nome,
        capital: estadosBySigla.capital,
        regiao: estadosBySigla.regiao
    }

    if (estadosBySigla) {
        return resultado
    } else {
        return MESSAGE_ERRO
    }

}

//Retorna a Capital referente a um estado pesquisando pela sigla
const getCapitalBySigla = function (sigla) {
    let capitalBySigla = dados.listaDeEstados.estados.find(c => c.sigla == sigla)
    let resultado = {
        status: true,
        status_code: 200,
        development: 'Marcos Ryan',
        uf: capitalBySigla.sigla,
        descricao: capitalBySigla.nome,
        capital: capitalBySigla.capital
    }
    if (capitalBySigla) {
        return resultado
    } else {
        return MESSAGE_ERRO
    }

}
//Retorna uma lista de estados pesquisando pela região
const getEstadosByRegiao = function (regiao) {
    let resultado = {
        status: true,
        status_code: 200,
        development: 'Marcos Ryan',
        regiao: regiao,
        estados:[] 
    }
    dados.listaDeEstados.estados.forEach(estado => {
        if (estado.regiao.toLowerCase() == regiao.toLowerCase()) {
            resultado.estados.push(estado)
        }
    })

    return resultado
}

const estadosDoSul = getEstadosByRegiao('Sul');
console.log(estadosDoSul);

//Retorna uma lista de estados referente as capitais do país
const getVerifyCapitaisDoPais = function () {

}

//Retorna uma lista de cidades pesquisando pela sigla do estado
const getCidadesBySigla = function (sigla) {
    let cidadesBySigla = dados.listaDeEstados.estados.find(c => c.sigla == sigla)
    let resultado = {
        status: true,
        status_code: 200,
        development: 'Marcos Ryan',
        uf: cidadesBySigla.sigla,
        descricao: cidadesBySigla.nome,
        cidades: cidadesBySigla.cidades.map(({ id, ...resto }) => resto)
    }

    if (cidadesBySigla) {
        return resultado

    } else {
        return MESSAGE_ERRO
    }

}
// const a = getCidadesBySigla('SP')
// console.log(a)




module.exports = {
    getAllEstados
}