import { Link } from 'react-router-dom'

export default function EmptyState({ titulo, texto, destino, acao }) {
    return (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
            <p className="font-bold text-lg text-navy">{titulo}</p>
            <p className="text-slate-500 mt-2">{texto}</p>
            {destino && (
                <Link
                    to={destino}
                    className="inline-block mt-5 px-5 py-3 bg-navy text-white rounded-xl font-semibold"
                >
                    {acao}
                </Link>
            )}
        </div>
    )
}
