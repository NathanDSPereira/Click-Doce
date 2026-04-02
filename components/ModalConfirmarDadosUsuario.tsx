import { useState, useEffect } from 'react';
import { User, Phone, ArrowRight, X } from 'lucide-react';
import { useUserState } from '@/store/useUserState';

export function ModalConfirmarDadosUsuario({ aberto, fecharModal, abrirModalPagamento }: {aberto: boolean, fecharModal: () => void, abrirModalPagamento: () => void}) {

  useEffect(() => {
      if (aberto) {
        document.body.style.overflow = 'hidden'; // Trava o fundo
      } else {
        document.body.style.overflow = 'unset';
      }
      return () => { document.body.style.overflow = 'unset'; };
  }, [aberto]);

  const atualizarDadosUsuario = useUserState((state) => state.atualizarDados)
  
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  if (!aberto) return null;

  const validarUsuarioValido = () => {
    const nomeRegex = /^[a-záàâãéèêíïóôõöúçñ\s]{3,}$/i;
    return nomeRegex.test(nome.trim())
  }
  
  const validarTelefoneValido = () => {
    const telefoneLimpo = telefone.replace(/\D/g, '');
    return telefoneLimpo.length === 11;
  }

  const nomeValido = validarUsuarioValido();
  const telefoneValido = validarTelefoneValido()
  const permiteEnviar = nomeValido && telefoneValido

  const formatarTelefone = (valor: string) => {
    const apenasNumeros = valor.replace(/\D/g, '');
    let telefoneFormatado = apenasNumeros;
    
    if (apenasNumeros.length > 0) {
      telefoneFormatado = apenasNumeros.slice(0, 2); 
    }
    if (apenasNumeros.length > 2) {
      telefoneFormatado = `${apenasNumeros.slice(0, 2)} ${apenasNumeros.slice(2, 7)}`; 
    }
    if (apenasNumeros.length > 7) {
      telefoneFormatado = `${apenasNumeros.slice(0, 2)} ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7, 11)}`;
    }
    
    return telefoneFormatado;
  };

  const salvarUsuario = () => {

    if (permiteEnviar) {
      atualizarDadosUsuario({ nome, telefone });
      abrirModalPagamento();
    } else {
        alert("Por favor, preencha seu nome e telefone para continuarmos! 🍬");
    }
  };

  return (
    <section className="fixed inset-0 z-100 h-screen bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-x-hidden">
      <div 
        className="bg-(--bg-creme) relative w-full rounded-2xl p-2 shadow-2xl animate-in fade-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-end items-center">
            <button onClick={fecharModal} className="text-xl bg-(--text-chocolate)/90 rounded-full w-13 h-13 flex justify-center items-center font-bold uppercase">
                <X size={30} className="text-(--bg-creme)" />
            </button>
        </div>

        <div className="text-center mb-6 px-3">
          <div className="bg-(--accent-green) w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-3xl">
            👋
          </div>
          <h2 className="text-2xl font-black text-[#3D1F16]">
            Identificação
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Só precisamos do seu nome e contato para organizar sua entrega
          </p>
        </div>

        <form className="flex flex-col gap-7 px-3 mb-10">
          <div className="relative">
            <label htmlFor="nomeUsuario">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </label>
            <input 
              type="text"
              id='nomeUsuario'
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#3D1F16]/10 outline-none focus:border-[#E27396] transition-colors bg-white text-(--text-chocolate)"
            />
          </div>

          <div className="relative">
            <label htmlFor="telefoneUsuario">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </label>
            <input 
              type="tel"
              id='telefoneUsuario'
              placeholder="WhatsApp (ex: 34 99999-0000)"
              value={telefone}
              onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#3D1F16]/10 outline-none focus:border-[#E27396] transition-colors bg-white text-(--text-chocolate)"
            />
          </div>

          {!nomeValido && nome.length > 0 && (
            <p className='flex w-full text-sm text-red-600 justify-center'>Nome inválido</p>
          )}

          {!telefoneValido && telefone.length > 0 && (
            <p className='flex w-full text-sm text-red-600 justify-center'>Telefone inválido</p>
          )}

          <div className='w-full flex justify-center items-center mt-6'>
            <button 
              type='button'
              onClick={salvarUsuario}
              disabled={!permiteEnviar}
              className={`w-60 h-18 flex items-center gap-3 p-1 justify-center font-bold rounded-xl shadow-2xl text-xl ${permiteEnviar ? `bg-(--text-chocolate) text-(--bg-creme)` :`bg-slate-300 text-gray-500 cursor-not-allowed`}` 
              }
            >
              Confirmar e Pedir
              <ArrowRight size={20} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}