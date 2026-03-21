import { CarrinhoItem } from "./CarrinhoItem";

export interface CarrinhoListaState {
    itens: CarrinhoItem[];
    adicionarNovoItem: (novoItem: CarrinhoItem) => void;
    removerItem: (id: string) => void;
    atualizarQuantidade: (id: string, quantidade: number) => void;
    limparCarrinho: () => void;
}   