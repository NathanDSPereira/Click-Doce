export default function ComoPedir() {


    return(
        <section className="bg-(--bg-creme) py-12 px-4 space-y-8 mb-5 max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center gap-2 border-t border-(--border-creme) pt-6">
                <h4 className="text-2xl font-serif font-bold text-(--text-chocolate) leading-none">
                    Click & Doce
                </h4>
                <p className="text-center text-(--text-chocolate) font-medium text-sm mt-2">
                    A verdadeira experiência da pizza artesanal, com ingredientes selecionados e massa de longa fermentação.
                </p>
            </div>

            <ul className="flex flex-col justify-center items-start mx-auto text-slate-200 gap-5 border-t-zinc-700 border-t mt-8 pt-8 md:flex-row md:justify-around px-1"> 
                <li className="flex justify-center items-center gap-2">
                    {/* <Timer 
                        size={30} 
                        className="text-amber-500 inline-block"
                        strokeWidth={1.5}
                    /> */}
                    <div className="flex flex-col">
                        <p className="text-zinc-500 text-sm">Tempo de Entrega</p>
                        <p className="text-zinc-200 text-base">20-30 min</p>
                    </div>
                </li>
                <li className="flex justify-center items-center gap-2">
                    {/* <Star
                    size={25} 
                    className="text-amber-500 fill-amber-300  inline-block"
                    strokeWidth={1.5}
                    /> */}
                    <div className="flex flex-col">
                    <p className="text-zinc-500 text-sm">Avaliações</p>
                    <p className="text-zinc-200 text-base">4.8 <span className="text-zinc-500 text-sm">(464)</span></p>
                    </div>
                </li>
                <li className="flex justify-center items-center gap-2">
                    {/* <CalendarDays 
                    size={25} 
                    className="text-amber-500 inline-block "
                    strokeWidth={1.5}
                    /> */}
                    <div className="flex flex-col">
                    <p className="text-zinc-500 text-sm">Horário de Funcionamento</p>
                    <p className="text-zinc-200 text-base">Segunda a Sexta: 18h às 23h</p>
                    <p className="text-zinc-500 text-xs">Atendendo Estados Unidos/Uberaba e região</p>
                    </div>
                </li>
            </ul>
        </section>
    )

}