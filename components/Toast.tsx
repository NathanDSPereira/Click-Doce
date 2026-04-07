export default function Toast({mensagem, tipo}: {mensagem: string, tipo: 'sucesso' | 'erro'}) {
    const bgColor = tipo === 'sucesso' ? 'bg-green-500' : 'bg-red-500';

    return (
        <div className={`fixed top-4 right-4 ${bgColor} text-white px-4 py-2 rounded shadow-lg z-50`}>
            {mensagem}
        </div>
    );
}