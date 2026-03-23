import { Usuario } from "@/interface/Usuario";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserState = create<Usuario>()(
    persist(
        (set) => ({
            nome: '',
            telefone: '',
            atualizarDados: (dados) => set({nome: dados.nome, telefone: dados.telefone})
        }),
        {
            name: 'clickdoce-usuario'
        }
    )
)