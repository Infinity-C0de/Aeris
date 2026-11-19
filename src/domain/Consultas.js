import { classificar, numeroValido } from './Regras.js'

export function validarObservacao(observacao) {
    if (typeof observacao !== 'string') return 'A anotação deve ser um texto.'
    if (observacao.length > 300) return 'A anotação deve ter no máximo 300 caracteres.'
    return ''
}

export function dadosConsulta(consulta) {
    if (
        !consulta ||
        typeof consulta.cidade !== 'string' ||
        !consulta.cidade.trim() ||
        !numeroValido(consulta.pm25) ||
        !numeroValido(consulta.pm10) ||
        Number(consulta.pm25) < 0 ||
        Number(consulta.pm10) < 0
    ) {
        throw new Error('Os dados da consulta são inválidos.')
    }
    const observacao = consulta.observacao ?? ''
    const erro = validarObservacao(observacao)
    if (erro) throw new Error(erro)
    return {
        cidade: consulta.cidade.trim(),
        pm25: Number(consulta.pm25),
        pm10: Number(consulta.pm10),
        qualidade: classificar(consulta),
        observacao: observacao.trim(),
    }
}

export function conferirRegistro(consulta) {
    if (
        !consulta ||
        !['string', 'number'].includes(typeof consulta.id) ||
        String(consulta.id).trim() === ''
    ) {
        throw new Error('A API deve retornar uma consulta com id.')
    }
    const dados = dadosConsulta(consulta)
    if (consulta.qualidade !== dados.qualidade)
        throw new Error('A classificação recebida da API não corresponde aos valores da consulta.')
    return { ...dados, id: String(consulta.id) }
}
