export interface CarrinhoItem {
    id: string;
    nome: string;
    imagem: string;
    preco: number;
    quantidade: number;
    dataEntrega: string;
    observacao?: string;
    tipo: 'pedir' | 'encomenda'
}