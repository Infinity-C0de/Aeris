import { useEffect, useState } from 'react'
import { jsonService } from '../services/JsonService'

export default function useAirQuality() {
    const [medicoes, setMedicoes] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        jsonService
            .consultarMedicoes()
            .then(setMedicoes)
            .catch((falha) => setErro(falha.message))
            .finally(() => setCarregando(false))
    }, [])

    return { medicoes, carregando, erro }
}
