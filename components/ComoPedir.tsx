export default function ComoPedir() {


    return(
        <section className="bg-(--bg-creme) px-4 space-y-8 max-w-7xl mx-auto py-12">
            <div className="flex flex-col justify-center items-center gap-2 border-t border-(--text-chocolate) pt-6">
                <h4 className="text-2xl font-serif font-bold text-(--text-chocolate) leading-none">
                    Click & Doce
                </h4>
                <p className="text-center text-(--text-chocolate) font-medium text-sm mt-2">
                    Reviva suas melhores lembranças com os doces que mais ama feitos com carinho e cuidado especialmente para você!
                </p>
            </div>

            <ul className="flex flex-col justify-center items-start mx-auto text-slate-200 gap-5 border-(--border-bege) border-t mt-8 pt-8 md:flex-row md:justify-around px-1"> 
                <li className="flex justify-center items-center gap-2">
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon text-(--text-chocolate) lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                        <p className="text-slate-700 text-sm"><span className="text-slate-950 font-semibold text-[16px]">Escolha</span> sua sobremesa favorita</p>
                    </div>
                </li>
                <li className="flex justify-center items-center gap-2">
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-icon text-(--text-chocolate) lucide-hand"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>
                        <p className="text-slate-700 text-sm"><span className="text-slate-950 font-semibold text-[16px]">Clique</span> em &quot;Pedir agora&quot; para falar comigo no WhatsApp</p>
                    </div>
                </li>
                <li className="flex justify-center items-center gap-2">
                    <div className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag-icon text-(--text-chocolate) lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                        <p className="text-slate-700 text-sm"><span className="text-slate-950 font-semibold text-[16px]">Receba</span> seu doce fresquinho!</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}