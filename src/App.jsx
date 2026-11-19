import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import JsonDashboard from './pages/dashboard/JsonDashboard'
import Saved from './pages/saved/Saved'
import Home from './pages/home/Home'
import Alerts from './pages/alerts/Alerts'
import useSavedQueries from './hooks/useSavedQueries'
import useSensors from './hooks/useSensors'
import useAirQuality from './hooks/useAirQuality'

export default function App() {
    const sensores = useSensors()
    const ar = useAirQuality()
    const salvos = useSavedQueries()

    return (
        <BrowserRouter>
            <div className="font-body bg-mist min-h-screen text-slate-700 flex flex-col">
                <Header />
                <main id="conteudo" className="max-w-7xl w-full mx-auto px-5 lg:px-8 pt-8 flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/painel"
                            element={<JsonDashboard sensores={sensores} ar={ar} salvos={salvos} />}
                        />
                        <Route
                            path="/salvos"
                            element={<Saved salvos={salvos} sensores={sensores} />}
                        />
                        <Route path="/alertas" element={<Alerts sensores={sensores} ar={ar} />} />
                        <Route
                            path="*"
                            element={
                                <div className="py-16 text-center">
                                    <h1 className="text-3xl font-bold text-navy">
                                        Página não encontrada
                                    </h1>
                                    <Link
                                        to="/"
                                        className="inline-block mt-6 text-ocean font-semibold"
                                    >
                                        Voltar ao início
                                    </Link>
                                </div>
                            }
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
