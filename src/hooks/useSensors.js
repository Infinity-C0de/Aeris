import { useEffect, useState } from 'react'
import { jsonService } from '../services/JsonService'

export default function useSensors() {
    const [pontos, setPontos] = useState([])
    const [selecionado, setSelecionado] = useState('')
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        jsonService
            .consultarPontos()
            .then((dados) => {
                setPontos(dados)
                setSelecionado(dados[0]?.id || '')
            })
            .catch((falha) => setErro(falha.message))
            .finally(() => setCarregando(false))
    }, [])

    return { pontos, selecionado, setSelecionado, carregando, erro }
}
