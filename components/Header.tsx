import Image from 'next/image';

export default function Header({abrirMenuLateral, abrirCarrinho} : {abrirMenuLateral: () => void, abrirCarrinho: () => void}) {
  return (
    <header className="relative h-70 w-full flex flex-col overflow-hidden md:h-96 lg:h-125 bg-(--bg-creme)">
      <nav className="fixed border-b shadow-md z-100 border-[#E8DCC4] w-full flex justify-between items-center h-16 backdrop-blur-sm px-4">
        <button
          onClick={abrirMenuLateral}
          className='cursor-pointer text-(--text-chocolate)'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
        </button>

        <Image 
          src="/images/icon.png" 
          alt="Click & Doce"
          className='rounded-full bg-(--accent-green) p-2'
          width={50} 
          height={30} 
        />

        <button
          onClick={abrirCarrinho}
          className='text-(--text-chocolate)'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
        </button>
      </nav>
      
      <div className="relative z-10 text-center gap-4 flex flex-1 flex-col justify-center mt-10 px-8">
        <h1 className="text-4xl font-serif font-semibold leading-tight tracking-tight text-(--text-chocolate)">
          Click & Doce
        </h1>
        <p className="font-medium text-(--text-chocolate) text-sm mt-2">
          Doces caseiros com gosto de infância, feitos com amor e ingredientes fresquinhos. Peça o seu agora ou agende!
        </p>
      </div>
    </header>
  );
}