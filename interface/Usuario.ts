export interface Usuario {
    nome: string;
    telefone: string;
    atualizarDados: (dados: {nome: string, telefone: string}) => void;
}