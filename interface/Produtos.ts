export interface Produtos {
    id: number;
    nome: string;
    preco: number;
    estoque: number;
    permitirAgendamento: boolean;
    imagem_url: string;
}