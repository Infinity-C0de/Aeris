import { valorFormatado } from '../domain/Regras'

export default function PollutantCard({ titulo, valor, unidade, detalhe }) {
    return (
        <div className="p-5 rounded-2xl bg-white border border-slate-200">
            <p className="font-semibold text-slate-600 text-sm">{titulo}</p>
            <p className="mt-4 text-3xl font-bold text-navy">
                {valorFormatado(valor)}{' '}
                <span className="text-sm font-normal text-slate-500">{unidade}</span>
            </p>
            <p className="mt-3 text-xs text-slate-500">{detalhe}</p>
        </div>
    )
}
