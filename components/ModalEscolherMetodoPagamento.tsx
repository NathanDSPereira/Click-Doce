// import Image from "next/image";
import { useEffect } from "react";
import { X } from "lucide-react";

export default function ModalEscolherMetodoPagamento({fecharModal, modalAberto}: {fecharModal: () => void, modalAberto: boolean}) {
    useEffect(() => {
        if (modalAberto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [modalAberto]);

    return(
        <section className="fixed inset-0 z-100 h-screen bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-x-hidden">
            <div 
                className="bg-(--bg-creme) relative w-full rounded-2xl p-2 shadow-2xl animate-in fade-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full flex justify-end items-center">
                    <button onClick={fecharModal} className="text-xl bg-(--text-chocolate)/90 rounded-full w-13 h-13 flex justify-center items-center font-bold uppercase">
                        <X size={30} className="text-(--bg-creme)" />
                    </button>
                </div>

                <div className="text-center flex flex-col gap-3 mb-10 px-3">
                    <div className="bg-(--accent-green) w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-3xl">
                        👋
                    </div>
                    <h2 className="text-2xl font-black text-[#3D1F16]">
                        Método de pagamento
                    </h2>
                    <p className="text-gray-500 text-sm mt-2">
                        Escolha a forma de pagamento para finalizar seu pedido
                    </p>
                </div>

                <div>
                    <div className="flex flex-col gap-4">
                        <button className="w-full h-20 flex items-center gap-3 p-4 justify-center font-bold rounded-xl shadow-2xl text-2xl bg-(--text-chocolate) text-(--bg-creme) active:scale-95 transition-all">
                            Pix
                        </button>

                        <button className="w-full h-20 flex items-center gap-3 mt-4 p-4 justify-center font-bold rounded-xl shadow-2xl text-2xl bg-(--text-chocolate) text-(--bg-creme) active:scale-95 transition-all">
                            Pagar na entrega
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}