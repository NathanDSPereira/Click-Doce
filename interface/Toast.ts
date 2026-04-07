export interface Toast {
    id?: string;
    message: string;
    type?: 'sucesso' | 'erro';
    visible: boolean;
    duration?: number;
}