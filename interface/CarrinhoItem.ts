export interface CarrinhoItem {
    quantidade: number;
    observacao?: string;
    dataEntrega?: string;
    tipo: 'agora' | 'agendamento'
}