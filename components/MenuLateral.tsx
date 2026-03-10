export default function MenuLateral({fecharMenu} : {fecharMenu: () => void}) {

    return(

        <div className="fixed top-0 left-0 w-64 h-full bg-(--bg-creme) shadow-lg z-20 p-6">

            <div>
                <h2 className="text-2xl font-bold mb-4 text-(--text-chocolate)">Menu Lateral</h2>
                <button 
                    onClick={fecharMenu}
                    className="absolute top-4 right-4 text-(--text-chocolate) hover:text-(--accent-green)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>            
            </div>
            <ul className="space-y-4">
                <li><a href="#" className="text-(--text-chocolate) hover:text-(--accent-green)">Home</a></li>
                <li><a href="#" className="text-(--text-chocolate) hover:text-(--accent-green)">Pizzas</a></li>
                <li><a href="#" className="text-(--text-chocolate) hover:text-(--accent-green)">Como Pedir</a></li>
                <li><a href="#" className="text-(--text-chocolate) hover:text-(--accent-green)">Contato</a></li>
            </ul>
        </div>
    )
}