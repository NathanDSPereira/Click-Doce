import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
    return (
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 space-y-8 mb-5 max-w-7xl mx-auto">
        <div>
          <div className="border-t border-zinc-800 text-base font-sans text-center font-medium text-slate-200 leading-none mt-10 pt-8 mb-10">
            <h4>Entre em contato conosco!</h4>
          </div>

          <ul className="flex flex-wrap gap-4 justify-center items-center">
            <li className="flex justify-center items-center">
              <a href="https://wa.me/5534997298335?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." target="_blank" rel="noopener noreferrer" className="flex justify-center items-center  w-32 h-16">
                <button className="flex justify-center items-center cursor-pointer hover:border-amber-500 bg-zinc-900/50 border border-amber-500 text-zinc-300 w-full h-full rounded-2xl text-sm font-bold active:scale-95 transition-all active:border-amber-500">
                  <MessageCircle
                    size={16}
                    className="inline-block mr-2 mb-1"
                    strokeWidth={1.5}
                  />
                  WhatsApp
                </button>
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a className="flex justify-center items-center w-32 h-16" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <button className="flex justify-center items-center cursor-pointer hover:border-amber-500 bg-zinc-900/50 border border-zinc-700 text-zinc-300 w-full h-full rounded-2xl text-sm font-bold active:scale-95 transition-all active:border-amber-500">
                  <Instagram
                      size={16}
                      className="inline-block mr-2 mb-1"
                      strokeWidth={1.5}
                    />
                  Instagram
                </button>
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a href="mailto:nathan.pereira@unimeduberaba.com.br" className="flex justify-center items-center w-32 h-16" target="_blank">
                <button className="flex justify-center items-center cursor-pointer hover:border-amber-500 bg-zinc-900/50 border border-zinc-700 text-zinc-300 w-full h-full rounded-2xl text-sm font-bold active:scale-95 transition-all active:border-amber-500">
                  <Mail
                      size={16}
                      className="inline-block mr-2 mb-1"
                      strokeWidth={1.5}
                    />
                  Email
                </button>
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a href="tel:+5534997298335" className="flex justify-center items-center w-32 h-16">
                <button className="flex justify-center items-center cursor-pointer hover:border-amber-500 bg-zinc-900/50 border border-zinc-700 text-zinc-300 w-full h-full rounded-2xl text-sm font-bold active:scale-95 transition-all active:border-amber-500">
                  <Phone
                    size={16}
                    className="inline-block mr-2 mb-1"
                    strokeWidth={1.5}
                  />
                  Telefone
                </button>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900/50 flex flex-col items-center gap-4 text-center">
          <div className="space-y-1">
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em]">
              © 2026 La Nostra Pizza - Todos os direitos reservados
            </p>
            <p className="text-zinc-600 text-[9px] tracking-widest">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>

          <p className="text-zinc-500 text-[10px] tracking-wide">
            Desenvolvido por <span className="text-zinc-300 font-medium hover:text-amber-500 transition-colors cursor-pointer">Nathan Pereira</span>
          </p>
        </div>
      </footer>
    )
}