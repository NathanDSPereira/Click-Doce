import PizzaCard from "./PizzaCard";
import { Pizza } from "@/interface/Pizza";

export default function ListPizza({listaPizzas}: { listaPizzas: Pizza[] }) {
    return (
        <section className="bg-(--bg-creme) max-w-7xl mx-auto w-full flex justify-center mb-5">
            <ul className="flex flex-nowrap overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 scroll-smooth">
                {listaPizzas.map((pizza) => (
                    <li 
                        key={pizza.id}
                        className="min-w-45 min-h-80 snap-center m-2 shadow-md rounded-3xl"
                    >
                        <PizzaCard pizzaCard={pizza} />
                    </li>
                ))}
            </ul>
        </section>
    );
}