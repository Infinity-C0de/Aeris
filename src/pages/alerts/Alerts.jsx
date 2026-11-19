import PageTitle from '../../components/PageTitle'
import Feedback from '../../components/Feedback'
import AlertList from '../../components/AlertList'

export default function Alerts({ sensores, ar }) {
    const ocupado = sensores.carregando || ar.carregando
    return (
        <>
            <PageTitle
                titulo="Pontos de atenção"
                descricao="Locais que exigem atenção, conforme os dados disponíveis."
            />
            <Feedback erro={sensores.erro || ar.erro} carregando={ocupado} />
            {!ocupado && !sensores.erro && !ar.erro && (
                <AlertList
                    pontos={sensores.pontos}
                    medicoes={ar.medicoes}
                    selecionar={sensores.setSelecionado}
                />
            )}
        </>
    )
}
