export default function StatusBadge({ status }) {
    const estilos = {
        Boa: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        Intermediária: 'bg-amber-50 text-amber-900 border-amber-200',
        Crítica: 'bg-red-50 text-red-800 border-red-200',
    }
    return (
        <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold ${estilos[status] || 'bg-slate-100 text-slate-600 border-slate-200'}`}
        >
            <span aria-hidden="true">●</span>
            {status}
        </span>
    )
}
