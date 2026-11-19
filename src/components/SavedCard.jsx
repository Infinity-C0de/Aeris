import { useState } from 'react'
import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'
import ObservationForm from './ObservationForm'
import { valorFormatado } from '../domain/Regras'

export default function SavedCard({ consulta, ponto, selecionar, salvos }) {
    const [editando, setEditando] = useState(false)
    const ocupado = salvos.ocupado || salvos.carregando

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-navy mb-3">{consulta.cidade}</h2>
            <StatusBadge status={consulta.qualidade} />
            <p className="my-5 text-sm">
                PM2.5: {valorFormatado(consulta.pm25)} µg/m³ · PM10: {valorFormatado(consulta.pm10)}{' '}
                µg/m³
            </p>
            {!editando && consulta.observacao && (
                <p className="text-sm text-slate-600 whitespace-pre-wrap break-words mb-5">
                    {consulta.observacao}
                </p>
            )}
            <div className="flex flex-wrap gap-5 items-center">
                {ponto && (
                    <Link
                        to="/painel"
                        onClick={() => selecionar(ponto.id)}
                        className="text-ocean font-semibold"
                    >
                        Ver no painel
                    </Link>
                )}
                {!editando && (
                    <button
                        type="button"
                        onClick={() => setEditando(true)}
                        disabled={ocupado || !salvos.pronto}
                        aria-label={`Editar anotação de ${consulta.cidade}`}
                        className="text-ocean font-semibold disabled:opacity-50"
                    >
                        {consulta.observacao ? 'Editar anotação' : 'Adicionar anotação'}
                    </button>
                )}
                <button
                    type="button"
                    onClick={() => salvos.remover(consulta)}
                    disabled={ocupado || !salvos.pronto}
                    aria-label={`Remover salvamento de ${consulta.cidade}`}
                    className="text-red-700 font-semibold disabled:opacity-50"
                >
                    Remover salvamento
                </button>
            </div>
            {editando && (
                <ObservationForm
                    consulta={consulta}
                    salvar={salvos.editar}
                    cancelar={() => setEditando(false)}
                    ocupado={ocupado}
                    pronto={salvos.pronto}
                />
            )}
        </div>
    )
}
