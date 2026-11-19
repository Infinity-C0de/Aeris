export default function FilterBar({ pontos, selecionado, selecionar, ocupado }) {
    return (
        <div className="flex flex-col sm:flex-row gap-3 sm:items-end mb-6">
            <div className="w-full sm:max-w-sm">
                <label
                    htmlFor="ponto-filtro"
                    className="block text-sm font-semibold text-navy mb-2"
                >
                    Localidade
                </label>
                <select
                    id="ponto-filtro"
                    value={selecionado}
                    onChange={(e) => selecionar(e.target.value)}
                    disabled={ocupado || !pontos.length}
                    className="w-full bg-white border border-slate-300 px-4 py-3 rounded-xl disabled:opacity-60"
                >
                    {!pontos.length && <option value="">Nenhum ponto cadastrado</option>}
                    {pontos.map((ponto) => (
                        <option key={ponto.id} value={ponto.id}>
                            {ponto.nome}
                            {ponto.bairro ? ` · ${ponto.bairro}` : ''}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
