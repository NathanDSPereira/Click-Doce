import { CarrinhoItem } from "@/interface/CarrinhoItem";
import { Produtos } from "@/interface/Produtos";
import { useCartStore } from "@/store/useCartStore";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ModalAgendamento({produtoAAgendar, fecharModal} : {produtoAAgendar: Produtos | null, fecharModal: () => void}) {

    const [produtoQuantidade, setProdutoQuantidade] = useState(1);
    const [produtoDataEntrega, setProdutoDataEntrega] = useState('');
    const [produtoObservacao, setProdutoObservacao] = useState('')

    const adicionarNovoItem = useCartStore((state) => state.adicionarNovoItem)

    useEffect(() => {
            if (produtoAAgendar) {
                document.body.style.overflow = 'hidden'; // Trava o fundo
            } else {
                document.body.style.overflow = 'unset';
            }
            return () => { document.body.style.overflow = 'unset'; };
    }, [produtoAAgendar]);
    
    
    if(!produtoAAgendar) return

    const produto = produtoAAgendar;

    const adicionarAoCarrinho = (e?: React.FormEvent) => {
        if(e) e.preventDefault()
        
        if(!produtoDataEntrega) {
            alert("Por favor, escolha uma data!");
            return 
        }
        const novoPedido: CarrinhoItem = {
            id: Number(produto.id),
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem_url,
            quantidade: produtoQuantidade,
            dataEntrega: produtoDataEntrega,
            observacao: produtoObservacao,
            tipo: 'pedir'
        }

        adicionarNovoItem(novoPedido)
        console.log("Carrinho atual:", useCartStore.getState().itens);
        fecharModal();
    }
    
    return (
        <section className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-(--bg-creme)/80 backdrop-blur-sm z-100 overflow-y-auto overflow-x-hidden">
            <div className="bg-(--bg-creme) rounded-2xl relative my-auto border border-(--text-chocolate)">
                <button onClick={fecharModal} className="text-xl rounded-full bg-(--bg-creme) w-13 h-13 flex justify-center items-center font-bold uppercase absolute top-3 right-5">
                    <X size={37} className="text-(--text-chocolate)" />
                </button>

                <div className="flex flex-col gap-10 pb-10">
                    <div className="flex flex-col items-center gap-3 h-auto">
                        <Image
                            src={produto.imagem_url}
                            alt={produto.nome}
                            className="rounded-full w-full object-cover rounded-t-2xl rounded-b-2xl"
                            width={150}
                            height={150}
                        />

                        <div className="flex justify-center items-center px-5 py-5 pb-5 text-center border-b border-(--text-chocolate)">
                            <h4 className="font-sans text-(--text-chocolate) font-bold text-2xl">{produto.nome}</h4>
                        </div>
                    </div>

                    <form className="flex flex-col gap-16 justify-center items-center w-full px-5 font-sans">

                        <div className="flex flex-col w-full gap-5">

                            <label htmlFor="quantidade" className="text-(--text-chocolate) text-xl font-semibold">Quantidade</label>
                            <div id="quantidade" className="flex gap-3 justify-around items-center text-2xl w-full">
                                <button
                                    type="button"
                                    onClick={() => setProdutoQuantidade(q => Math.max(1, q - 1))}
                                    className="text-(--text-chocolate) border border-(--text-chocolate) w-20 h-12 rounded-md text-bold text-3xl flex justify-center items-center shadow-2xl">-</button>

                                <p className="text-(--text-chocolate) text-2xl">{produtoQuantidade}</p>
                                
                                <button
                                    type="button"
                                    onClick={() => setProdutoQuantidade(q => q + 1)}
                                    className="border border-(--bg-creme) text-(--bg-creme) bg-(--accent-green-dark) w-20 h-12 rounded-md text-bold text-3xl flex justify-center items-center shadow-2xl">+</button>
                            </div>

                        </div>
                        
                        <div className="flex flex-col gap-5 w-full text-(--text-chocolate)">

                            <label htmlFor="data" className="text-xl font-semibold">Data para entrega</label>
                            <div id="data" className="flex justify-center">
                                <input 
                                    value={produtoDataEntrega}
                                    onChange={(e) => setProdutoDataEntrega(e.target.value)}    
                                    className="border border-(--text-chocolate) h-12 w-3/5 rounded-md shadow-2xl" 
                                    type="date" 
                                />
                            </div>

                        </div>

                        <div className="flex flex-col gap-5 text-(--text-chocolate) w-full">

                            <label htmlFor="observacao" className="text-xl font-semibold">Obervação</label>
                            <textarea
                                value={produtoObservacao}
                                onChange={(e) => setProdutoObservacao(e.target.value)}
                                id="observacao" 
                                className="border border-(--text-chocolate) rounded-sm placeholder:pt-2 pl-2"
                                placeholder="Onde você gostaria de receber?"
                            />
                        </div>

                        <button 
                            onClick={adicionarAoCarrinho}
                            className="w-60 h-20 bg-(--text-chocolate) flex items-center gap-3 p-1 justify-center font-bold text-(--bg-creme) rounded-xl shadow-2xl text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                            Adicionar a sacola
                        </button>
                    </form>
                </div>
            </div>
        </section>




    //     <div className="fixed inset-0 z-300 flex items-center justify-center p-4">
    //   {/* Overlay com desfoque */}
    //   <div 
    //     className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
    //     onClick={fecharModal}
    //   />

    // <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    //   <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">

    //     {/* Imagem */}
    //     <Image
    //       src="/doce.jpg"
    //       alt="Palha Italiana"
    //       className="w-full h-56 object-cover"
    //         width={50}
    //         height={50}
    //     />

    //     <div className="p-6 space-y-5">

    //       {/* Nome */}
    //       <div>
    //         <h1 className="text-2xl font-bold text-gray-800">
    //           Palha Italiana Gourmet
    //         </h1>
    //         <p className="text-gray-500 text-sm">
    //           Chocolate meio amargo com biscoito artesanal.
    //         </p>
    //       </div>

    //       {/* Quantidade */}
    //       <div>
    //         <label className="text-sm font-medium text-gray-700">
    //           Quantidade
    //         </label>

    //         <div className="flex items-center gap-4 mt-2">
    //           <button
    //             // onClick={diminuir}
    //             className="p-2 rounded-lg border hover:bg-gray-100"
    //           >
    //             <Minus size={18} />
    //           </button>

    //           <span className="text-lg font-semibold">
    //             quantidade
    //           </span>

    //           <button
    //             // onClick={aumentar}
    //             className="p-2 rounded-lg border hover:bg-gray-100"
    //           >
    //             <Plus size={18} />
    //           </button>
    //         </div>
    //       </div>

    //       {/* Data */}
    //       <div>
    //         <label className="text-sm font-medium text-gray-700">
    //           Data para retirada/entrega
    //         </label>

    //         <input
    //           type="date"
    //           className="w-full mt-2 border rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
    //         />
    //       </div>

    //       {/* Observação */}
    //       <div>
    //         <label className="text-sm font-medium text-gray-700">
    //           Observações
    //         </label>

    //         <textarea
    //           placeholder="Ex: sem açúcar, embalagem especial..."
    //           className="w-full mt-2 border rounded-lg p-3 text-sm outline-none focus:ring-2 focus:ring-pink-400"
    //           rows={3}
    //         />
    //       </div>

    //       {/* Botão */}
    //       <button
    //         className="
    //         w-full
    //         bg-pink-500
    //         hover:bg-pink-600
    //         text-white
    //         font-semibold
    //         py-3
    //         rounded-xl
    //         flex
    //         items-center
    //         justify-center
    //         gap-2
    //         transition
    //         "
    //       >
    //         <ShoppingBag size={20} />
    //         Adicionar à sacola
    //       </button>

    //     </div>
    //   </div>
    // </div>
    )
}