import { useState } from 'react';
import { User, Phone, ArrowRight } from 'lucide-react';
import { useUserState } from '@/store/useUserState';

export function ModalConfirmarDadosUsuario({ aberto, fecharModal }: {aberto: boolean, fecharModal: () => void}) {
  const atualizarDadosUsuario = useUserState((state) => state.atualizarDados)
  
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  if (!aberto) return null;

  const salvarUsuario = () => {
    if (nome.trim() && telefone.trim()) {
      atualizarDadosUsuario({ nome, telefone });
      
      fecharModal();
    } else {
        alert("Por favor, preencha seu nome e telefone para continuarmos! 🍬");
    }
  };

  return (
    <div className="fixed inset-0 z-110 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-[#FDF8F1] w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <div className="bg-[#E27396] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-white text-3xl">
            👋
          </div>
          <h2 className="text-2xl font-black text-[#3D1F16]">Identificação</h2>
          <p className="text-gray-500 text-sm mt-2">
            Só precisamos do seu nome e contato para organizar sua entrega em Uberaba!
          </p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#3D1F16]/10 outline-none focus:border-[#E27396] transition-colors bg-white text-[#3D1F16]"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="tel"
              placeholder="WhatsApp (ex: 34 99999-0000)"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#3D1F16]/10 outline-none focus:border-[#E27396] transition-colors bg-white text-[#3D1F16]"
            />
          </div>

          <button 
            onClick={salvarUsuario}
            className="w-full bg-[#3D1F16] text-[#FDF8F1] py-4 rounded-2xl font-bold text-lg uppercase tracking-widest shadow-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-transform mt-2"
          >
            Confirmar e Pedir
            <ArrowRight size={20} />
          </button>
          
          <button 
            onClick={fecharModal}
            className="w-full text-gray-400 text-sm font-medium hover:text-[#3D1F16] transition-colors"
          >
            Voltar para a sacola
          </button>
        </div>
      </div>
    </div>
  );
}