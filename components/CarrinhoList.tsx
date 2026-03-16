import { useCartStore } from "@/store/useCartStore";
import CarrinhoCard from "./CarrinhoCard";
import { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export default function CarrinhoList({fecharCarrinho, abrirCarrinho}: {fecharCarrinho: () => void, abrirCarrinho: boolean}) {

    useEffect(() => {
            if (abrirCarrinho) {
            document.body.style.overflow = 'hidden'; // Trava o fundo
            } else {
                document.body.style.overflow = 'unset';
            }

            return () => { document.body.style.overflow = 'unset'; };
    }, [abrirCarrinho]);

    const {itens, atualizarQuantidade, removerItem} = useCartStore()

    if(itens.length === 0) {
        return <p className="text-center py-10 text-(--text-chocolate) text-lg">Sua sacola está vazia.</p>
    }

    return (
        <section className="fixed w-screen h-screen inset-0 flex flex-col items-center  bg-(--bg-creme) backdrop-blur-sm z-100 gap-10">
            <div className="w-full flex shadow-md border-[#E8DCC4] items-center justify-between h-1/5 p-2">
                <Image 
                    src="/images/icon.png" 
                    alt="Click & Doce"
                    className='rounded-full bg-(--accent-green) p-2'
                    width={44} 
                    height={30} 
                />

                <div>
                    <h3 className="text-(--text-chocolate) text-2xl font-bold">Meu carrinho</h3>
                </div>

                <button 
                    onClick={fecharCarrinho}
                    className=" rounded-full bg-(--text-chocolate) w-10 h-10 transition-colors flex justify-center items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" text-(--bg-creme) lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
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