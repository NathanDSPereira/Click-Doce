import { Produtos } from "@/interface/Produtos";
import ProdutoCard from "./ProdutoCard";

export default function ListPizza({DocesLista, pedirProduto}: { DocesLista: Produtos[]; pedirProduto: (produto: Produtos) => void}) {
    return (
        <section className="bg-(--bg-creme) max-w-7xl mt-8 mx-auto w-full flex flex-col gap-5 justify-center mb-5">
            <div className="px-3 text-2xl text-(--text-chocolate) font-bold">
                <h3>A pronta entrega</h3>    
            </div>        
            
            <ul className="flex flex-nowrap overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 scroll-smooth">
                {DocesLista.map((doce) => (
                    <li 
                        key={doce.id}
                        className="min-w-52 w-60 min-h-80 h-96 snap-center m-2 shadow-md rounded-3xl"
                    >
                        <ProdutoCard 
                            produtoCard={doce} 
                            pedirProduto={pedirProduto}
                        />
                    </li>
                ))}
            </ul>

            <div className="w-full flex justify-center items-center mt-10">
                <button
                    className="bg-(--accent-green) w-56 h-12 rounded-lg text-xl font-medium text-(--bg-creme) active:scale-95 transition-all shadow-lg "
                >
                    Cardápio completo
                </button>
            </div>
        </section>
    );
}