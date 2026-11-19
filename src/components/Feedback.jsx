export default function Feedback({ erro, aviso, carregando }) {
    return (
        <>
            {carregando && (
                <p
                    role="status"
                    className="p-4 bg-white border border-slate-200 rounded-xl mb-4 text-slate-600"
                >
                    Consultando os dados…
                </p>
            )}
            {erro && (
                <p
                    role="alert"
                    className="p-4 bg-red-50 border border-red-200 rounded-xl mb-4 text-red-800"
                >
                    {erro}
                </p>
            )}
            {aviso && (
                <p
                    role="status"
                    className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl mb-4 text-emerald-800"
                >
                    {aviso}
                </p>
            )}
        </>
    )
}
