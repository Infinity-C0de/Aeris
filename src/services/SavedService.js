import axios from 'axios'
import { dadosConsulta, conferirRegistro } from '../domain/Consultas.js'

export function criarServicoSalvos(url) {
    const api = axios.create({ baseURL: url?.replace(/\/+$/, ''), timeout: 12000 })

    function conferirConfiguracao() {
        if (!/^https?:\/\//.test(url || '')) {
            throw new Error(
                'Configure VITE_SAVED_API_URL no arquivo .env com a URL da coleção da API externa e reinicie o site.',
            )
        }
    }

    function caminho(id) {
        if (id === undefined || id === null || String(id).trim() === '') {
            throw new Error('Consulta sem identificador.')
        }
        return '/' + encodeURIComponent(String(id))
    }

    return {
        async consultar() {
            conferirConfiguracao()
            const resposta = await api.get('')
            if (!Array.isArray(resposta.data))
                throw new Error('A API deve retornar uma lista de consultas.')
            const lista = resposta.data.map(conferirRegistro)
            if (
                lista.some((item, indice) =>
                    lista.slice(0, indice).some((anterior) => anterior.id === item.id),
                )
            ) {
                throw new Error('A API retornou identificadores repetidos.')
            }
            return lista
        },
        async criar(consulta) {
            conferirConfiguracao()
            const resposta = await api.post('', dadosConsulta(consulta))
            return conferirRegistro(resposta.data)
        },
        async atualizar(consulta, observacao) {
            conferirConfiguracao()
            const resposta = await api.put(
                caminho(consulta.id),
                dadosConsulta({ ...consulta, observacao }),
            )
            return conferirRegistro(resposta.data)
        },
        async excluir(id) {
            conferirConfiguracao()
            await api.delete(caminho(id))
        },
    }
}

export function mensagemErro(erro) {
    if (erro.code === 'ECONNABORTED')
        return 'A API demorou para responder. Atualize a lista para conferir o resultado.'
    if (erro.isAxiosError) {
        if (!erro.response)
            return 'Não foi possível acessar a API. Confira a conexão, a URL e a configuração de CORS.'
        if (erro.response.status === 404)
            return 'Consulta ou recurso não encontrado. Atualize a lista e confira a URL da API.'
        if (erro.response.status === 401 || erro.response.status === 403)
            return 'A API recusou o acesso. Confira as permissões com o grupo.'
        return 'A API recusou a operação. Atualize a lista e tente novamente.'
    }
    return erro.message || 'Não foi possível concluir a operação.'
}

export const savedService = criarServicoSalvos(
    import.meta.env?.VITE_SAVED_API_URL ||
        'https://6afe864c3a0e70bc8d53919f.mockapi.io/aeris/salvos',
)
