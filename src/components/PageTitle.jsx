export default function PageTitle({ titulo, descricao, children }) {
    return (
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-navy">
                    {titulo}
                </h1>
                <p className="text-slate-600 mt-3 max-w-2xl leading-relaxed">{descricao}</p>
            </div>
            {children}
        </div>
    )
}
