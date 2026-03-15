
import { useCartStore } from "@/store/useCartStore"
import { formatarMoeda } from "@/Utils/FormatarMoeda";

export default function BarraFlutuante({abrirCarrinho}: {abrirCarrinho: () => void}) {

    const itens = useCartStore((state) => state.itens);
    const valorTotal = itens.reduce((acumulador, item) => acumulador + (item.quantidade * item.preco), 0);
    const quantidadeTotal = itens.reduce((acumulador, item) => acumulador + item.quantidade, 0)


    if(quantidadeTotal === 0) return null

    return (
        <div className="fixed bottom-7 left-0 right-0 px-4 z-50">
            <button 
                onClick={abrirCarrinho}
                className="w-full max-w-md mx-auto bg-(--text-chocolate) text(--bg-creme) h-20 rounded-2xl shadow-lg flex items-center justify-between px-6 transition-all active:scale-95"
            >
                <div className="flex items-center gap-3">
                    <span className="bg-(--accent-green) px-3 py-1 rounded-lg text-lg font-bold">
                        {quantidadeTotal}
                    </span>

                    <span className="font-bold text-lg">
                        {formatarMoeda(valorTotal)}
                    </span>

                </div>
                    <span className="font-semibold uppercase tracking-wide text-lg flex gap-3 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                        Ver Sacola
                    </span>
            </button>
        </div>
    )
}