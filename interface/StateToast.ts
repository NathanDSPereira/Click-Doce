import { Toast } from "./Toast";

export interface StateToast {
    toast: Toast[];
    adicionarToast: (toast: Omit<Toast, 'id'> & { id?: string }) => void;
    removerToast: (id: string) => void;
    clearToasts: () => void;
}