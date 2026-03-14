import { CarrinhoItem } from "./CarrinhoItem";

export interface CarrinhoListaState {
    itens: CarrinhoItem[];
    adicionarNovoItem: (novoItem: CarrinhoItem) => void;
    removerItem: (id: number) => void;
    atualizarQuantidade: (id: number, quantidade: number) => void;
    limparCarrinho: () => void;
}   