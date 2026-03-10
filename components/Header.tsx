import Image from 'next/image';

export default function Header({abrirMenuLateral} : {abrirMenuLateral: () => void}) {
  return (
    <header className="relative h-70 w-full flex flex-col overflow-hidden md:h-96 lg:h-125 bg-(--bg-creme)">
      <nav className="border-b shadow-md  border-[#E8DCC4] w-full flex justify-center items-center h-16">
        <button 
          onClick={abrirMenuLateral}
          className='absolute left-4 top-4 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
        </button>

        <Image 
          src="/images/icon.png" 
          alt="Click & Doce"
          className='rounded-full bg-(--accent-green) p-2'
          width={50} 
          height={30} 
        />

      </nav>
      <div className="relative z-10 text-center gap-4 flex flex-1 flex-col justify-center px-6">
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