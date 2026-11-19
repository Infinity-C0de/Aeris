import { useState } from 'react'
import { validarObservacao } from '../domain/Consultas'

export default function ObservationForm({ consulta, salvar, cancelar, ocupado, pronto }) {
    const [observacao, setObservacao] = useState(consulta.observacao)
    const [erro, setErro] = useState('')

    async function enviar(evento) {
        evento.preventDefault()
        const falha = validarObservacao(observacao)
        setErro(falha)
        if (!falha && (await salvar(consulta, observacao))) cancelar()
    }

    return (
        <form onSubmit={enviar} className="mt-5">
            <label
                htmlFor={`observacao-${consulta.id}`}
                className="block text-sm font-semibold text-navy mb-2"
            >
                Anotação de {consulta.cidade}
            </label>
            <input
                type="text"
                id={`observacao-${consulta.id}`}
                value={observacao}
                onChange={(evento) => setObservacao(evento.target.value)}
                maxLength={300}
                disabled={ocupado}
                aria-describedby={`limite-${consulta.id}`}
                className="w-full border border-slate-300 rounded-xl p-3 text-sm disabled:opacity-50"
            />
            <p id={`limite-${consulta.id}`} className="text-xs text-slate-500 mt-1">
                {observacao.length}/300 caracteres · evite informações pessoais.
            </p>
            {erro && (
                <p role="alert" className="text-red-700 text-sm mt-2">
                    {erro}
                </p>
            )}
            <div className="flex flex-wrap gap-4 mt-4">
                <button
                    type="submit"
                    disabled={ocupado || !pronto}
                    className="bg-navy text-white rounded-lg px-4 py-2 font-semibold disabled:opacity-50"
                >
                    Salvar anotação
                </button>
                <button
                    type="button"
                    onClick={cancelar}
                    disabled={ocupado}
                    className="text-slate-600 font-semibold disabled:opacity-50"
                >
                    Cancelar
                </button>
            </div>
        </form>
    )
}
