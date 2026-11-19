import PageTitle from '../../components/PageTitle'
import Feedback from '../../components/Feedback'
import FilterBar from '../../components/FilterBar'
import PollutantCard from '../../components/PollutantCard'
import StatusBadge from '../../components/StatusBadge'
import EmptyState from '../../components/EmptyState'
import SavedFeedback from '../../components/SavedFeedback'
import { classificar, limites } from '../../domain/Regras'

export default function JsonDashboard({ sensores, ar, salvos }) {
    const cidade = sensores.pontos.find((item) => item.id === sensores.selecionado)
    const leitura = ar.medicoes.find((item) => item.pontoId === sensores.selecionado)
    const ocupado = sensores.carregando || ar.carregando
    const salvo = salvos.consultas.find((item) => item.cidade === cidade?.nome)
    return (
        <>
            <PageTitle
                titulo="Qualidade do ar"
                descricao="Consulte as concentrações de partículas por localidade."
            />
            <Feedback erro={sensores.erro || ar.erro} carregando={ocupado} />
            <SavedFeedback salvos={salvos} />
            <FilterBar
                pontos={sensores.pontos}
                selecionado={sensores.selecionado}
                selecionar={sensores.setSelecionado}
                ocupado={ocupado}
            />
            {!ocupado &&
                !sensores.erro &&
                !ar.erro &&
                (cidade ? (
                    <>
                        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-5 flex flex-wrap gap-4 justify-between items-center">
                            <h2 className="text-2xl font-bold text-navy">{cidade.nome}</h2>
                            <StatusBadge status={classificar(leitura)} />
                            <button
                                type="button"
                                disabled={!salvos.pronto || salvos.ocupado || salvos.carregando}
                                onClick={() =>
                                    salvo
                                        ? salvos.remover(salvo)
                                        : salvos.salvar(cidade.nome, leitura)
                                }
                                className="bg-navy text-white rounded-xl px-5 py-3 font-semibold hover:bg-ocean disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {salvos.ocupado
                                    ? 'Aguarde…'
                                    : !salvos.pronto
                                      ? 'Salvos indisponíveis'
                                      : salvo
                                        ? 'Remover salvamento'
                                        : 'Salvar consulta'}
                            </button>
                        </section>
                        <div className="grid sm:grid-cols-2 gap-5">
                            <PollutantCard
                                titulo="PM2.5"
                                valor={leitura?.pm25}
                                unidade="µg/m³"
                                detalhe="Partículas finas"
                            />
                            <PollutantCard
                                titulo="PM10"
                                valor={leitura?.pm10}
                                unidade="µg/m³"
                                detalhe="Partículas inaláveis"
                            />
                        </div>
                    </>
                ) : (
                    <EmptyState
                        titulo="Nenhuma localidade disponível"
                        texto="Confira o arquivo cidades.json do projeto Python."
                    />
                ))}
            <section className="mt-8" aria-labelledby="criterios">
                <h2 id="criterios" className="text-xl font-bold text-navy mb-4">
                    Como interpretar a qualidade do ar
                </h2>
                <p className="text-sm text-slate-500 mb-4">
                    Critérios do projeto · concentrações em µg/m³
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        [
                            'Boa',
                            `PM2.5 até ${limites.pm25.normal} e PM10 até ${limites.pm10.normal}.`,
                        ],
                        [
                            'Intermediária',
                            `Acima da faixa Boa em pelo menos um poluente, sem ultrapassar ${limites.pm25.atencao} de PM2.5 nem ${limites.pm10.atencao} de PM10.`,
                        ],
                        [
                            'Crítica',
                            `PM2.5 acima de ${limites.pm25.atencao} ou PM10 acima de ${limites.pm10.atencao}.`,
                        ],
                    ].map(([status, texto]) => (
                        <div
                            key={status}
                            className="bg-white border border-slate-200 rounded-2xl p-5"
                        >
                            <StatusBadge status={status} />
                            <p className="text-sm leading-relaxed mt-3">{texto}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
