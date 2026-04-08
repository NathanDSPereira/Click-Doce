import { StateToast } from "@/interface/StateToast";
import {create} from "zustand";

const gerarId = () => String(Date.now() + Math.random().toString(36).slice(2, 9));

export const useToast = create<StateToast>(
    (set, get) => ({
        toast: [],
        adicionarToast: (t) => {
            const id = t.id ?? gerarId();
            const toast = {...t, id, visible: true};
            set((state) => ({ toast: [...state.toast, toast] }));
            const duration = t.duration ?? 3000;
            setTimeout(() => get().removerToast(id), duration);
        },
        removerToast: (id) => set((state) => ({ toast: state.toast.filter(t => t.id !== id) })),
        clearToasts: () => set({ toast: [] })
    })
);