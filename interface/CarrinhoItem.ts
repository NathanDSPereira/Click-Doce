export interface CarrinhoItem {
    id: number;
    nome: string;
    imagem: string;
    preco: number;
    quantidade: number;
    dataEntrega: string;
    observacao?: string;
    tipo: 'pedir' | 'encomenda'
}