import { CarrinhoItem } from "./CarrinhoItem";

export interface PedidoFinal {
    nome: string;
    telefone: string;
    pedidos: CarrinhoItem[];
    total: number;
}