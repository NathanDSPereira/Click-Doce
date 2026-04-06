import { useCartStore } from "@/store/useCartStore";
import CarrinhoCard from "./CarrinhoCard";
import { useEffect } from "react";
import Image from "next/image";
import { formatarMoeda } from "@/Utils/FormatarMoeda";
import { CarrinhoItem } from "@/interface/CarrinhoItem";
import { formatarData } from "@/Utils/FormatarData";
import { useUserState } from "@/store/useUserState";

export default function CarrinhoList({fecharCarrinho, abrirCarrinho, abrirModalUsuario, abrirModalPagamento}: {fecharCarrinho: () => void, abrirCarrinho: boolean, abrirModalUsuario: () => void, abrirModalPagamento: () => void}) {

    useEffect(() => {
        if (abrirCarrinho) {
        document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => { document.body.style.overflow = 'unset'; };
    }, [abrirCarrinho]);

    const {itens, atualizarQuantidade, removerItem} = useCartStore();
    const {nome} = useUserState();

    const valorTotal = itens.reduce((acumulador, item) => acumulador + (item.quantidade * item.preco), 0);
    const totalItens = itens.reduce((acumulador, item) => acumulador + item.quantidade, 0)

    const permiteFinalizar = totalItens > 0;

    const itensAgrupadosPorDatas = itens.reduce((acumulador, item) => {
        const data = item.dataEntrega;
        
        if(!acumulador[data]) acumulador[data] = [];

        acumulador[data].push(item);

        return acumulador
    }, {} as Record<string, CarrinhoItem[]>)

    const botaoFinalizar = () => {
        if(!nome || nome.trim() === '') {
            abrirModalUsuario();
        } else {
            abrirModalPagamento();
        }
    }

    return (
        <section className="fixed w-screen h-screen inset-0 flex flex-col items-center  bg-(--bg-creme) backdrop-blur-sm z-100 gap-10 overflow-y-auto pb-20">
            <div className="w-full flex shadow-md border-[#E8DCC4] items-center justify-between h-24 p-2">
                <Image 
                    src="/images/icon.png" 
                    alt="Click & Doce"
                    className='rounded-full bg-(--accent-green) p-2'
                    width={50} 
                    height={30} 
                />

                <div>
                    <h3 className="text-(--text-chocolate) text-2xl font-bold">Meu carrinho</h3>
                </div>

                <button 
                    onClick={fecharCarrinho}
                    className=" rounded-full bg-(--text-chocolate) w-10 h-10 transition-colors flex justify-center items-center"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" text-(--bg-creme) lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
                </button>
            </div>

            <div className="w-full flex flex-col justify-between h-full gap-10 items-center">
                <div className="w-full px-5 flex-col text-(--text-chocolate) pb-6 border-b border-(--text-chocolate)/20">
                    <div className=" text-xl flex justify-between items-center text-(--text-chocolate)">
                        <p>Total:</p>
                        <p className="font-bold">{formatarMoeda(valorTotal)}</p>
                    </div>
                    <div className="mt-3">
                        <p>Itens: ({totalItens})</p>
                    </div>
                </div>

                {itens.length === 0 ? (
                    <p className="text-center py-10 text-(--text-chocolate) text-lg">Sua sacola está vazia.</p>
                ) : (
                    <ul className="flex flex-col gap-10 w-full items-center px-5">
                        {Object.entries(itensAgrupadosPorDatas).map(([data, itens]) => (
                            <div key={data} className="w-full items-center flex flex-col gap-5">
                                <h3 className="text-(--text-chocolate) text-lg font-semibold w-full flex justify-start">
                                    Entrega: {formatarData(data)}
                                </h3>

                                {itens.map((item) => (
                                    <CarrinhoCard
                                        key={item.id}
                                        item={item}
                                        aumentarQuantidade={() => atualizarQuantidade(item.id, item.quantidade + 1)}
                                        diminuirQuantidade={() => {
                                            if(item.quantidade > 1) {
                                                atualizarQuantidade(item.id, item.quantidade - 1);
                                            } else {
                                                removerItem(item.id)
                                            }
                                        }}
                                        removerItem={() => removerItem(item.id)}
                                    />
                                ))}
                            </div>
                        ))}
                    </ul>
                )}

                <div className="w-full flex justify-center mt-10">
                    <button
                        onClick={botaoFinalizar}
                        disabled={!permiteFinalizar}
                        className={`w-70 h-18 flex items-center transition-all gap-3 p-1 justify-center font-bold rounded-xl shadow-2xl text-xl ${permiteFinalizar ? `bg-(--text-chocolate) text-(--bg-creme) active:scale-95` :`bg-slate-300 text-gray-500 cursor-not-allowed`}` 
                        }>
                        Finalizar a compra
                    </button>
                </div>
            </div>
        </section>
    )
}