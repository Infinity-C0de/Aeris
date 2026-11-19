import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <section className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-7 md:py-12">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-navy tracking-tight leading-tight">
                        <span className="block">Entenda o ar.</span>
                        <span className="text-ocean">Transforme o olhar.</span>
                    </h1>
                    <p className="text-slate-600 leading-relaxed text-lg mt-6 max-w-lg">
                        Informações ambientais mais próximas de quem vive, trabalha e circula pela
                        cidade. Consulte os dados de PM2.5 e PM10 de cada localidade.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-8">
                        <Link
                            to="/painel"
                            className="bg-navy text-white px-6 py-4 rounded-xl font-semibold hover:bg-ocean transition"
                        >
                            Explorar o painel →
                        </Link>
                        <a
                            href="#como-funciona"
                            className="border border-slate-300 bg-white text-navy px-6 py-4 rounded-xl font-semibold hover:bg-mist"
                        >
                            Conhecer a proposta
                        </a>
                    </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                    <img
                        src="/images/aeris-identidade.png"
                        alt="Aeris: Respire. Monitore. Transforme. by InfinityCode"
                        className="w-full h-auto"
                    />
                </div>
            </section>
            <section id="como-funciona" className="py-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-3 mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy">
                        Da medição à informação.
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {[
                        [
                            'Monitore',
                            'Escolha uma localidade e consulte as concentrações de PM2.5 e PM10.',
                        ],
                        [
                            'Compreenda',
                            'Entenda a classificação dos valores pelos critérios do projeto.',
                        ],
                        [
                            'Acompanhe',
                            'Encontre as localidades cujos registros precisam de atenção.',
                        ],
                    ].map(([titulo, texto]) => (
                        <div
                            key={titulo}
                            className="bg-white rounded-2xl border border-slate-200 p-7"
                        >
                            <h3 className="text-xl font-bold text-navy">{titulo}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed mt-3">{texto}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-navy rounded-3xl p-7 md:p-10 text-white grid md:grid-cols-2 gap-8 my-5">
                <div>
                    <p className="text-cyan-200 text-xs font-bold uppercase tracking-widest">
                        O problema que nos move
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4">
                        A informação precisa chegar a quem respira esse ar.
                    </h2>
                </div>
                <div className="text-slate-300 leading-relaxed">
                    <p>
                        Moradores e trabalhadores de áreas com tráfego intenso ou atividade
                        industrial precisam compreender as condições ambientais do lugar onde vivem.
                    </p>
                    <p className="mt-4">
                        O Aeris reúne os dados das localidades em uma consulta simples, com valores
                        de partículas e uma classificação compartilhada com o projeto Python.
                    </p>
                </div>
            </section>
            <section className="py-10 grid md:grid-cols-2 gap-7">
                <div>
                    <h2 className="text-2xl font-bold text-navy">Impacto que podemos acompanhar</h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        Tornar os dados ambientais mais fáceis de consultar e compreender é o
                        primeiro passo para aproximar informação e cidadania.
                    </p>
                </div>
                <div className="space-y-3">
                    {[
                        [
                            'ODS 3',
                            'Saúde e bem-estar',
                            'Facilitar o acesso a informações ambientais.',
                        ],
                        [
                            'ODS 11',
                            'Cidades e comunidades sustentáveis',
                            'Apoiar a compreensão das condições do território.',
                        ],
                        [
                            'ODS 13',
                            'Ação climática',
                            'Contribuir para educação ambiental, sem atribuir redução de emissões ao monitoramento.',
                        ],
                    ].map(([ods, titulo, texto]) => (
                        <div
                            key={ods}
                            className="flex gap-4 bg-white border border-slate-200 rounded-xl p-4"
                        >
                            <span className="text-xs font-bold text-ocean shrink-0 pt-1">
                                {ods}
                            </span>
                            <div>
                                <h3 className="font-semibold text-navy">{titulo}</h3>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    {texto}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-8">
                <p className="text-xs text-ocean font-bold uppercase tracking-widest">
                    InfinityCode
                </p>
                <h2 className="text-2xl font-bold text-navy mt-3 mb-6">Quem constrói o Aeris</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        ['João Pedro Sato', '571358'],
                        ['Rayka Figueiredo Santos', '573888'],
                        ['Vinicius Poletti Silveira', '570710'],
                        ['Alice Lima Oliveira', '569069'],
                    ].map(([nome, rm]) => (
                        <div key={rm} className="bg-white border border-slate-200 p-5 rounded-2xl">
                            <h3 className="font-semibold text-navy">{nome}</h3>
                            <p className="text-xs text-slate-500 mt-1">RM {rm}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
