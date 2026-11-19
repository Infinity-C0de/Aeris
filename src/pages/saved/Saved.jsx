import PageTitle from '../../components/PageTitle'
import SavedFeedback from '../../components/SavedFeedback'
import EmptyState from '../../components/EmptyState'
import SavedCard from '../../components/SavedCard'

export default function Saved({ salvos, sensores }) {
    return (
        <>
            <PageTitle titulo="Salvos" descricao="Suas consultas e anotações." />
            <button
                type="button"
                onClick={salvos.atualizar}
                disabled={salvos.carregando || salvos.ocupado}
                className="mb-5 text-ocean font-semibold disabled:opacity-50"
            >
                Atualizar lista
            </button>
            <SavedFeedback salvos={salvos} />
            {salvos.pronto && !salvos.carregando && salvos.consultas.length === 0 && (
                <EmptyState
                    titulo="Nenhuma consulta salva"
                    texto="Escolha uma localidade no painel e clique em Salvar consulta."
                />
            )}
            <div className="grid md:grid-cols-2 gap-5">
                {salvos.consultas.map((consulta) => (
                    <SavedCard
                        key={consulta.id}
                        consulta={consulta}
                        ponto={sensores.pontos.find((item) => item.nome === consulta.cidade)}
                        selecionar={sensores.setSelecionado}
                        salvos={salvos}
                    />
                ))}
            </div>
        </>
    )
}
