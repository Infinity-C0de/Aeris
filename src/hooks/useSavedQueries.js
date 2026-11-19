import { useEffect, useState } from 'react'
import { savedService, mensagemErro } from '../services/SavedService'
import { dadosConsulta, validarObservacao } from '../domain/Consultas'

export default function useSavedQueries() {
    const [consultas, setConsultas] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [pronto, setPronto] = useState(false)
    const [erro, setErro] = useState('')
    const [aviso, setAviso] = useState('')
    const [ocupado, setOcupado] = useState(false)

    useEffect(() => {
        let ativo = true
        savedService
            .consultar()
            .then((lista) => {
                if (ativo) {
                    setConsultas(lista)
                    setPronto(true)
                }
            })
            .catch((falha) => {
                if (ativo) setErro(mensagemErro(falha))
            })
            .finally(() => {
                if (ativo) setCarregando(false)
            })
        return () => {
            ativo = false
        }
    }, [])

    async function atualizar() {
        if (carregando || ocupado) return
        setCarregando(true)
        setErro('')
        setAviso('')
        try {
            setConsultas(await savedService.consultar())
            setPronto(true)
        } catch (falha) {
            setPronto(false)
            setErro(mensagemErro(falha))
        } finally {
            setCarregando(false)
        }
    }

    async function executar(operacao, mensagem) {
        if (!pronto || carregando || ocupado) return false
        setOcupado(true)
        setErro('')
        setAviso('')
        try {
            await operacao()
            setConsultas(await savedService.consultar())
            setAviso(mensagem)
            return true
        } catch (falha) {
            setPronto(false)
            setErro(mensagemErro(falha))
            return false
        } finally {
            setOcupado(false)
        }
    }

    async function salvar(cidade, leitura) {
        return executar(async () => {
            const atuais = await savedService.consultar()
            if (atuais.some((item) => item.cidade === cidade)) {
                throw new Error('Esta localidade já está salva. Atualize a lista.')
            }
            await savedService.criar(
                dadosConsulta({ cidade, pm25: leitura?.pm25, pm10: leitura?.pm10, observacao: '' }),
            )
        }, `${cidade}: consulta salva.`)
    }

    async function remover(consulta) {
        return executar(
            () => savedService.excluir(consulta.id),
            `${consulta.cidade}: salvamento removido.`,
        )
    }

    async function editar(consulta, observacao) {
        const falha = validarObservacao(observacao)
        if (falha) {
            setErro(falha)
            return false
        }
        return executar(
            () => savedService.atualizar(consulta, observacao),
            `${consulta.cidade}: anotação atualizada.`,
        )
    }

    return {
        consultas,
        carregando,
        pronto,
        erro,
        aviso,
        ocupado,
        atualizar,
        salvar,
        remover,
        editar,
    }
}
