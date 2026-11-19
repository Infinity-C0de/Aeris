import Feedback from './Feedback'

export default function SavedFeedback({ salvos }) {
    return (
        <div className="mb-5">
            <Feedback erro={salvos.erro} aviso={salvos.aviso} carregando={salvos.carregando} />
            {salvos.erro && (
                <button
                    type="button"
                    onClick={salvos.atualizar}
                    disabled={salvos.carregando || salvos.ocupado}
                    className="text-ocean font-semibold underline disabled:opacity-50"
                >
                    Atualizar salvos
                </button>
            )}
        </div>
    )
}
