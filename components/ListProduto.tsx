import { Produtos } from "@/interface/Produtos";
import ProdutoCard from "./ProdutoCard";

export default function ListPizza({DocesLista, pedirProduto}: { DocesLista: Produtos[]; pedirProduto: (produto: Produtos) => void}) {
    return (
        <section className="bg-(--bg-creme) max-w-7xl mx-auto w-full flex justify-center mb-5">
            <ul className="flex flex-nowrap overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 scroll-smooth">
                {DocesLista.map((doce) => (
                    <li 
                        key={doce.id}
                        className="min-w-45 min-h-80 snap-center m-2 shadow-md rounded-3xl"
                    >
                        <ProdutoCard 
                            produtoCard={doce} 
                            pedirProduto={pedirProduto}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}