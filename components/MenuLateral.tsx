import { BookOpen, MessageCircle, ShoppingBag, X } from 'lucide-react';
import { useEffect } from 'react';
import Image from 'next/image';

export default function MenuLateral({fecharMenu, menuAberto, abrirCarrinho} : {fecharMenu: () => void, menuAberto: boolean, abrirCarrinho: () => void}) {

    useEffect(() => {
        if (menuAberto) {
            document.body.style.overflow = 'hidden'; // Trava o fundo
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [menuAberto]);

    const abrirModalCarrinho = () => {
        fecharMenu()
        abrirCarrinho()
    }

    return(
        <section className="fixed top-0 left-0 w-full h-screen bg-black/60 backdrop-blur-sm shadow-lg z-300 inset-0 animate-in transition-all duration-300">
            <aside className='sm:w-2/3 md:w-1/2 w-10/12 h-full bg-(--bg-branco) z-70 shadow-2xl rounded-r-[2.5rem] flex flex-col justify-around'>
                <div className="p-9 pb-10 border-b border-(--text-chocolate)/10">
                    <div className="flex justify-between items-start">
                        <div className="space-y-4">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center">
                                <Image 
                                    src="/images/icon.png" 
                                    alt="Click & Doce"
                                    className='rounded-full bg-(--accent-green) p-2'
                                    width={70} 
                                    height={50} 
                                />
                            </div>
                            <div>
                                <h2 className="font-titulo text-2xl text-[#4A2C2A] font-bold leading-tight">
                                    Click & Doce
                                </h2>
                                <p className="text-[#4A2C2A]/60 text-xs font-medium uppercase tracking-[0.2em] mt-1">
                                    Doceria caseira
                                </p>
                            </div>
                        </div>
                        <button 
                            onClick={() => fecharMenu()}
                            className="p-2 hover:bg-[#4A2C2A]/5 rounded-full transition-colors"
                        >
                            <X size={30} className="text-[#4A2C2A]" />
                        </button>
                    </div>
                </div>

                <nav className="flex-1 px-3 space-y-3 mt-6 mb-6">
                    <button className="flex items-center w-full gap-3 px-6 py-4 text-(--text-chocolate) rounded-2xl active:border-(--accent-green) transition-all group">
                        <BookOpen size={22} />
                        <span className="font-semibold text-[18px]">Cardápio Completo</span>
                    </button>

                    <button 
                        onClick={abrirModalCarrinho}
                        className="flex items-center w-full gap-3 px-6 py-4 text-(--text-chocolate) rounded-2xl active:border-(--accent-green) transition-all group">
                        <ShoppingBag size={22} />
                        <span className="font-semibold text-[18px]">Meus Pedidos</span>
                    </button>

                     <a href="https://wa.me/5534997298335?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-(--text-chocolate)">
                        <button className="flex items-center w-full gap-3 px-6 py-4 text-(--text-chocolate) active:border-(--accent-green) rounded-2xl transition-all group">
                            <MessageCircle size={22} />
                            <span className="font-semibold text-[18px]">WhatsApp</span>
                        </button> 
                     </a>
                </nav>
            </aside>
        </section>
    )
}