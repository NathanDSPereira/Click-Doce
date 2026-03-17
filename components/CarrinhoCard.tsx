import { CarrinhoItem } from "@/interface/CarrinhoItem";
import { formatarMoeda } from "@/Utils/FormatarMoeda";

import { Minus, Plus, Trash2 } from "lucide-react";

import Image from "next/image";

export default function CarrinhoCard({item, aumentarQuantidade, diminuirQuantidade, removerItem}: {item: CarrinhoItem, aumentarQuantidade: () => void, diminuirQuantidade: () => void, removerItem: () => void}) {


    return (
        <div className="flex gap-4 p-3 rounded-2xl border border-(--text-chocolate) shadow-md">
            <div className="relative w-24 h-24 shrink-0">
                <Image 
                src={item.imagem} 
                className="w-full h-full rounded-2xl object-cover shadow-sm" 
                alt={item.nome}
                width={150}
                height={150}
                />
            </div>

            <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                    <h3 className="font-bold text-(--text-chocolate) text-center text-base uppercase tracking-wider">
                        {item.nome}
                    </h3>
                    
                </div>

                <div className="flex items-end justify-between mt-2">
                    <div>
                        <p className="text-(--accent-green-dark) font-bold text-sm">
                            {item.quantidade}x - {formatarMoeda(item.preco * item.quantidade)}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button onClick={diminuirQuantidade} className="text-(--border-creme) bg-(--text-chocolate) border rounded-xl w-8 h-8 flex justify-center items-center">
                            <Minus size={20}/>
                        </button>
                        
                        <button onClick={aumentarQuantidade} className="text-(--border-creme) bg-(--text-chocolate) border rounded-xl w-8 h-8 flex justify-center items-center">
                            <Plus size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}