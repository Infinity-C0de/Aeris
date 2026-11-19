import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'
import EmptyState from './EmptyState'
import { classificar, valorFormatado } from '../domain/Regras'

export default function AlertList({ pontos, medicoes, selecionar }) {
    const alertas = pontos
        .map((ponto) => ({ ponto, medicao: medicoes.find((item) => item.pontoId === ponto.id) }))
        .filter((item) =>
            ['Intermediária', 'Crítica', 'Leitura inválida'].includes(classificar(item.medicao)),
        )
    return alertas.length ? (
        <div className="grid md:grid-cols-2 gap-4">
            {alertas.map(({ ponto, medicao }) => (
                <div key={ponto.id} className="p-6 rounded-2xl bg-white border border-slate-200">
                    <div className="flex flex-wrap items-center gap-3 justify-between">
                        <h2 className="text-xl font-bold text-navy">{ponto.nome}</h2>
                        <StatusBadge status={classificar(medicao)} />
                    </div>
                    <p className="text-sm text-slate-600 mt-4">
                        PM2.5: <span className="font-bold">{valorFormatado(medicao.pm25)}</span>{' '}
                        µg/m³ · PM10:{' '}
                        <span className="font-bold">{valorFormatado(medicao.pm10)}</span> µg/m³
                    </p>

                    <Link
                        onClick={() => selecionar(ponto.id)}
                        to="/painel"
                        className="inline-block mt-5 font-semibold text-ocean text-sm"
                    >
                        Consultar →
                    </Link>
                </div>
            ))}
        </div>
    ) : (
        <EmptyState
            titulo="Nenhum ponto de atenção"
            texto="Os registros disponíveis estão dentro da faixa Boa do projeto."
        />
    )
}
