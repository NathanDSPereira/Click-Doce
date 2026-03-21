import Image  from "next/image";
import { Star } from "lucide-react";

import { formatarMoeda } from "@/Utils/FormatarMoeda";

import { Produtos } from "@/interface/Produtos";

export default function PizzaCard({ produtoCard, pedirProduto}: {produtoCard: Produtos, pedirProduto: (produto: Produtos) => void}) {
    return (
        <section className="bg-(--bg-creme) w-full h-full flex flex-col justify-between border border-(--border-bege) rounded-3xl overflow-hidden">
            <div className="h-40 flex flex-col gap-2">
                <Image 
                    src={produtoCard.imagem_url} 
                    alt={produtoCard.nome} 
                    width={150} 
                    height={150}
                    quality={75}
                    className="rounded-tr-lg rounded-tl-lg w-full h-full object-cover"
                />

                <div className="flex gap-1 justify-between px-3">
                    <h3 className="font-medium text-[16px] text-(--text-chocolate)">{produtoCard.nome}</h3>
                
                    <p className="text-zinc-600 text-sm flex items-center text-center gap-1">
                        <Star
                            size={14} 
                            className="text-amber-500 fill-amber-500  inline-block" 
                        />
                        
                        5.0
                    </p>
                </div>
            </div>

            <div className="px-3 text-(--text-chocolate) font-sans">
                <div className="flex w-full flex-col flex-1 gap-3 items-end pb-4">
                    <div className="flex flex-col gap-3 mb-2 w-full">
                        <p className="text-(--accent-green) text-sm bg-[#8C946C]/10 inline-flex rounded-sm tracking-wider w-fit">Pronta entrega: {produtoCard.estoque}</p>

                        <p className="text-(--text-chocolate) leading-5 text-xl font-semibold">{formatarMoeda(produtoCard.preco)}</p>
                    </div>

                    <button 
                        onClick={() => pedirProduto(produtoCard)}
                        className="bg-(--action-orange) active:scale-95 w-full flex items-center justify-center text-zinc-950 rounded-2xl transition-all shadow-md h-10">
                        Pedir agora
                    </button>

                    <button 
                        className="bg-transparent border border-(--border-bege) active:scale-95 w-full flex items-center justify-center text-zinc-950 rounded-2xl c shadow-md h-10 transition-all">
                        Agendar
                    </button>
                </div>
            </div>
        </section>
    );
}