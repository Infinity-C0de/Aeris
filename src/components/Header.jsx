import { Link } from 'react-router-dom'

export default function Header() {
    const links = [
        ['/', 'Início'],
        ['/painel', 'Painel'],
        ['/salvos', 'Salvos'],
        ['/alertas', 'Alertas'],
    ]
    return (
        <header className="bg-white border-b border-slate-200">
            <a href="#conteudo" className="sr-only focus:not-sr-only focus:block focus:p-3">
                Pular para o conteúdo
            </a>
            <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <Link to="/" aria-label="Aeris, início" className="flex items-center gap-3 w-fit">
                    <span className="text-2xl tracking-[0.18em] font-bold text-navy">AERIS</span>
                    <span className="text-xs text-slate-500 border-l border-slate-200 pl-3 hidden lg:block">
                        <span className="block">Respire. Monitore.</span>
                        <span className="block">Transforme.</span>
                    </span>
                </Link>
                <div
                    role="navigation"
                    aria-label="Navegação principal"
                    className="flex flex-nowrap gap-0.5 text-xs sm:text-sm overflow-x-auto pb-1 md:pb-0"
                >
                    {links.map(([rota, titulo]) => (
                        <Link
                            key={rota}
                            to={rota}
                            className="shrink-0 rounded-lg px-1.5 sm:px-3 py-2 font-semibold text-slate-600 hover:bg-mist hover:text-navy"
                        >
                            {titulo}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}
