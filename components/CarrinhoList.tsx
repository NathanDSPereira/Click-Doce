import { useCartStore } from "@/store/useCartStore";
import CarrinhoCard from "./CarrinhoCard";

import { X } from "lucide-react";

export default function CarrinhoList({fecharCarrinho}: {fecharCarrinho: () => void}) {

    const {itens, atualizarQuantidade, removerItem} = useCartStore()

    if(itens.length === 0) {
        return <p className="text-center py-10 text-(--text-chocolate) text-lg">Sua sacola está vazia.</p>
    }

    return (
        <section className="fixed w-screen h-screen inset-0 flex flex-col items-center justify-center bg-(--bg-creme)/80 backdrop-blur-sm z-100 overflow-y-auto overflow-x-hidden ">
            <div className="w-full flex justify-end">
                <button 
                    onClick={fecharCarrinho}
                    className="p-2 hover:bg-[#4A2C2A]/5 rounded-full transition-colors"
                >
                    <X size={30} className="text-[#4A2C2A]" />
                </button>
            </div>

            <ul className="flex flex-col gap-3 w-full">
                {itens.map((item) => (
                    <CarrinhoCard 
                        key={item.id}
                        item={item}
                        aumentarQuantidade={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                        diminuirQuantidade={() => atualizarQuantidade(item.id, item.quantidade - 1)}
                        removerItem={() => removerItem(item.id)}
                    />
                ))}
            </ul>
        </section>
    )

}