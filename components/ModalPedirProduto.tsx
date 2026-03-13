import { Produtos } from "@/interface/Produtos";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function ModalAgendamento({produtoAAgendar, fecharModal} : {produtoAAgendar: Produtos | null, fecharModal: () => void}) {

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
    
    return (
        <section className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-(--bg-creme)/80 backdrop-blur-sm z-100 overflow-y-auto overflow-x-hidden">
            <div className="bg-(--bg-creme) rounded-2xl relative my-auto">
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
                            <label htmlFor="" className="text-(--text-chocolate) text-xl font-semibold">Quantidade</label>
                            <div className="flex gap-3 justify-around items-center text-2xl w-full">
                                <button className="border border-(--text-chocolate) w-20 h-12 rounded-md text-bold text-3xl flex justify-center items-center shadow-2xl">-</button>

                                <p>quantidade</p>
                                
                                <button className="border border-(--bg-creme) text-(--bg-creme) bg-(--accent-green-dark) w-20 h-12 rounded-md text-bold text-3xl flex justify-center items-center shadow-2xl">+</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <label htmlFor="" className="text-(--text-chocolate) text-xl font-semibold">Data para entrega</label>
                            <div className="flex justify-center">
                                <input className="border border-(--text-chocolate) h-12 w-3/5 rounded-md shadow-2xl" type="date" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <label htmlFor="" className="text-(--text-chocolate) text-xl font-semibold">Obervação</label>
                            <textarea 
                                name="" 
                                id="" 
                                className="border border-(--text-chocolate) rounded-sm placeholder:pt-2 pl-2"
                                placeholder="Onde você gostaria de receber?"
                            >
                            </textarea>
                        </div>

                        <button className="w-60 h-20 bg-(--text-chocolate) font-bold text-(--bg-creme) rounded-xl shadow-2xl text-xl">
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