import { CarrinhoItem } from "@/interface/CarrinhoItem";
import { formatarMoeda } from "@/Utils/FormatarMoeda";

import { Minus, Plus, Trash2 } from "lucide-react";

import Image from "next/image";

export default function CarrinhoCard({item, aumentarQuantidade, diminuirQuantidade, removerItem}: {item: CarrinhoItem, aumentarQuantidade: () => void, diminuirQuantidade: () => void, removerItem: () => void}) {

    return (
        <div className="flex gap-4 items-center bg-(--bg-creme) p-3 rounded-2xl border border-(--text-chocolate) shadow-md">
            <Image 
                src={item.imagem} 
                alt={item.nome} 
                className="w-16 h-16 rounded-xl object-cover"
                width={150}
                height={150}
            />
            
            <div className="flex-1">
                <h3 className="font-bold text-[#3D1F16] text-sm leading-tight">{item.nome}</h3>
                <p className="text-[#E27396] text-xs font-semibold">{formatarMoeda(item.preco)}</p>
                
                <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2 bg-[#FDF8F1] rounded-lg px-2 py-1 border border-[#3D1F16]/10">
                    <button 
                        onClick={diminuirQuantidade} 
                        className="text-[#3D1F16]"
                    >
                        <Minus 
                            size={14} 
                        />
                        </button>
                    <span className="font-bold text-sm">{item.quantidade}</span>
                    <button 
                        onClick={aumentarQuantidade} 
                        className="text-[#3D1F16]"
                    >
                        <Plus 
                            size={14} 
                        />
                    </button>
                </div>
                <button 
                    onClick={removerItem} 
                    className="text-red-400"
                    >
                        <Trash2 
                            size={18} 
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}