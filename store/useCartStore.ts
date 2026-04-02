import { CarrinhoItem } from '@/interface/CarrinhoItem';
import { CarrinhoListaState } from '@/interface/CarrinhoListaState';
import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create<CarrinhoListaState>()(
    persist(
        (set) => ({
            itens: [],

            adicionarNovoItem: (novoItem) => 
                set((state) => {
                    const itemExiste = state.itens.find((item) => item.id === novoItem.id)
                
                
                    if(itemExiste) {
                        return {
                            itens: state.itens.map((item) => 
                                item.id === novoItem.id 
                                    ? {...item, quantidade: item.quantidade + novoItem.quantidade}
                                    : item
                                ),
                        }
                    }
                    
                    return { itens: [...state.itens, novoItem]};
                }
            ),

            removerItem: (id) => 
                set((state) => ({
                    itens: state.itens.filter((item) => item.id !== id),
                })
            ),

            atualizarQuantidade: (id, novaQuantidade) => 
                set((state) => ({
                    itens: state.itens.map((item) =>
                        item.id === id ? {...item, quantidade: Math.max(1, novaQuantidade)} : item
                    ),
                })
            ),

            limparCarrinho: () => set({itens: []})
        }),
        {
            name: 'click-doce-storage',
        }
    )
)