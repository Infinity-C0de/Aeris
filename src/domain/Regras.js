export const limites = {
    pm25: { normal: 15, atencao: 50 },
    pm10: { normal: 45, atencao: 100 },
}

export function numeroValido(valor) {
    return (
        valor !== '' &&
        valor !== null &&
        valor !== undefined &&
        typeof valor !== 'boolean' &&
        String(valor).trim() !== '' &&
        Number.isFinite(Number(valor))
    )
}

export function classificar(medicao) {
    if (!medicao) return 'Sem dados'
    if (
        !numeroValido(medicao.pm25) ||
        !numeroValido(medicao.pm10) ||
        Number(medicao.pm25) < 0 ||
        Number(medicao.pm10) < 0
    )
        return 'Leitura inválida'
    if (Number(medicao.pm25) > limites.pm25.atencao || Number(medicao.pm10) > limites.pm10.atencao)
        return 'Crítica'
    if (Number(medicao.pm25) > limites.pm25.normal || Number(medicao.pm10) > limites.pm10.normal)
        return 'Intermediária'
    return 'Boa'
}

export function valorFormatado(valor) {
    return numeroValido(valor)
        ? Number(valor).toLocaleString('pt-BR', { maximumFractionDigits: 1 })
        : '—'
}
