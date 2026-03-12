import { Produtos } from "@/interface/Produtos";
import { ShoppingBag, Plus, Minus, X } from "lucide-react";
import Image from "next/image";

export default function ModalAgendamento({produtoAAgendar, fecharModal} : {produtoAAgendar: Produtos | null, fecharModal: () => void}) {
    
    if(!produtoAAgendar) return

    const produto = produtoAAgendar;
    
    return (
        <section className="fixed w-screen h-screen inset-0 flex items-center justify-center bg-(--text-chocolate)/80 backdrop-blur-sm z-100">
            <div className="w-4/5 h-11/12 bg-(--bg-creme) rounded-2xl relative">
                <button onClick={fecharModal} className="text-xl font-bold uppercase absolute top-2 left-2 ">
                    <X size={40} className="text-red-600" />
                </button>

                <div className="w-full h-full flex flex-col justify-between">
                    <div className="flex flex-col h-2/5 gap-3">
                        <Image
                            src={produto.imagem_url}
                            alt={produto.nome}
                            className="h-full w-auto rounded-t-2xl"
                            width={150}
                            height={150}
                        />

                        <div className="flex justify-center items-center px-5">
                            <h4 className="font-sans text-(--text-chocolate) font-bold text-2xl">{produto.nome}</h4>
                        </div>
                    </div>

                    <form className="flex flex-col gap-1 w-full px-5">
                        <div className="flex flex-col">
                            <label htmlFor="">Quantidade</label>
                            <div className="flex gap-3 justify-around items-center">
                                <button className="border border-(--text-chocolate) rounded-sm">-</button>
                                <p>quantidade</p>
                                <button className="border border-(--text-chocolate) rounded-sm">+</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="">Data para entrega</label>
                            <input className="border border-(--text-chocolate) rounded-sm" type="date" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <textarea name="" id="" className="border border-(--text-chocolate) rounded-sm"></textarea>
                        </div>

                        <button>Adicionar a sacola</button>
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