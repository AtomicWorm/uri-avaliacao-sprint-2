const dados = require('../dados.json');

class funcionario{
    constructor(nome, cargo, antigoSalario, novoSalario){
        this.nome = nome
        this.cargo = cargo
        this.antigoSalario = antigoSalario
        this.novoSalario = novoSalario
    }
}

const joaoCarlos = new funcionario(dados[0].nome, dados[0].cargos[0].nome, dados[0].cargos[0].salario, '$2.948,25')
const antonio = new funcionario(dados[1].nome, dados[1].cargos[0].nome, dados[1].cargos[0].salario, '$9.802,32')
const mariaHelena = new funcionario(dados[3].nome, dados[3].cargos[0].nome, dados[3].cargos[0].salario, '$5.652,32')
const renata = new funcionario(dados[4].nome, dados[4].cargos[0].nome, dados[4].cargos[0].salario, '$2.216,73')
const paulo = new funcionario(dados[5].nome, dados[5].cargos[0].nome, dados[5].cargos[0].salario, '$11.244,19')
const patricia = new funcionario(dados[7].nome, dados[7].cargos[0].nome, dados[7].cargos[0].salario, '$7.189,52')
const mauricio = new funcionario(dados[8].nome, dados[8].cargos[0].nome, dados[1].cargos[0].salario, '$5.739,68')
const andre = new funcionario(dados[9].nome, dados[9].cargos[0].nome, dados[9].cargos[0].salario, '$1.113,37')
const amauri = new funcionario(dados[10].nome, dados[10].cargos[0].nome, dados[10].cargos[0].salario, '$1.081,86')

const listaFuncionarios = [joaoCarlos, antonio, mariaHelena, renata, paulo, patricia, mauricio, andre, amauri]

function mostrarDados(func){
    console.log(`Seguem os dados atualizados do(a) funcionário(a) ${func.nome}:
Cargo: ${func.cargo}
Antigo salário: ${func.antigoSalario}
Novo salário: ${func.novoSalario}
`)
}

mostrarDados(joaoCarlos)
mostrarDados(antonio)
mostrarDados(mariaHelena)
mostrarDados(renata)
mostrarDados(paulo)
mostrarDados(patricia)
mostrarDados(mauricio)
mostrarDados(andre)
mostrarDados(amauri)
