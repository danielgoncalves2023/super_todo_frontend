export default function formatDate(isoTimestamp: any) {
    const dateString = new Date(isoTimestamp).toLocaleDateString('pt-BR');

    if (!dateString) return 'Data inválida'; // Verificação básica

    return dateString // Formatação desejada
}