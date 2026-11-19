import cidades from '../../python/cidades.json' with { type: 'json' }
import { numeroValido } from '../domain/Regras.js'

export function prepararCidades(dados) {
    if (!Array.isArray(dados)) throw new Error('O arquivo cidades.json deve conter uma lista.')
    return dados.map((cidade, indice) => {
        if (
            !cidade ||
            typeof cidade.cidade !== 'string' ||
            !cidade.cidade.trim() ||
            !numeroValido(cidade.pm25) ||
            !numeroValido(cidade.pm10) ||
            Number(cidade.pm25) < 0 ||
            Number(cidade.pm10) < 0
        ) {
            throw new Error(`Registro ${indice + 1} inválido no arquivo cidades.json.`)
        }
        return { ...cidade, id: String(indice + 1) }
    })
}

export const jsonService = {
    async consultarPontos() {
        return prepararCidades(cidades).map((cidade) => ({
            id: cidade.id,
            nome: cidade.cidade,
            cidade: cidade.cidade,
        }))
    },
    async consultarMedicoes() {
        return prepararCidades(cidades).map((cidade) => ({
            id: cidade.id,
            pontoId: cidade.id,
            pm25: Number(cidade.pm25),
            pm10: Number(cidade.pm10),
            origem: 'Arquivo JSON do projeto Python',
        }))
    },
}
