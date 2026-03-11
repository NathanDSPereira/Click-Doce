import { BookOpen, Instagram, MapPin, MessageCircle, ShoppingBag, X } from 'lucide-react';
import Image from 'next/image';

export default function MenuLateral({fecharMenu} : {fecharMenu: () => void}) {

    return(

        <section className="fixed top-0 left-0 w-full h-full bg-(--text-chocolate)/80 shadow-lg z-300 backdrop-blur-sm inset-0 animate-in transition-all duration-300">
            <aside className='w-11/12 h-full bg-(--bg-creme) z-70 shadow-2xl rounded-r-[2.5rem]'>

                <div className="p-9 pb-10">
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

                <nav className="flex-1 px-4 space-y-2">
                    <a href="#" className="flex items-center gap-4 px-6 py-4 text-(--text-chocolate) rounded-2xl active:border-(--accent-green) transition-all group">
                        <BookOpen size={22} />
                        <span className="font-semibold text-[18px]">Cardápio Completo</span>
                    </a>

                    <a href="#" className="flex items-center gap-4 px-6 py-4 text-(--text-chocolate) rounded-2xl active:border-(--accent-green) transition-all group">
                        <ShoppingBag size={22} />
                        <span className="font-semibold text-[18px]">Meus Pedidos</span>
                    </a>

                    <a href="#" className="flex items-center gap-4 px-6 py-4 text-(--text-chocolate) active:border-(--accent-green) rounded-2xl transition-all group">
                        <MessageCircle size={22} />
                        <span className="font-semibold text-[18px]">WhatsApp</span>
                    </a>
                </nav>

                <div className="p-8 mt-auto border-t border-[#4A2C2A]/5 ">
                    <div className="flex items-center justify-between mb-6">
                        <a href="#" className="flex items-center gap-2 text-[#4A2C2A] transition-colors">
                            <Instagram size={20} />
                            <span className="text-xl font-bold">@clickdoce</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-[#4A2C2A]/50">
                        <MapPin size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Uberaba, MG</span>
                    </div>
                </div>
            </aside>
        </section>
    )
}