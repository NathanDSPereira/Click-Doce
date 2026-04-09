'use client';
import { useToast } from '@/store/useToast';


export default function ToastComponent() {
    const bgColor = {
        sucesso: 'bg-(--accent-green-dark) ',
        erro: 'bg-(--accent-red)',
        default: 'bg-(--bg-creme)'
    }

    const { toast: toasts, removerToast: remove } = useToast();

    return (
        <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
            {toasts.map(t => (
                <div
                    key={t.id}
                    onClick={() => remove(t.id!)}
                    // style={{
                    //     marginBottom: 8,
                    //     padding: '10px 14px',
                    //     borderRadius: 8,
                    //     background: t.type === 'sucesso' ? bgColor.sucesso : t.type === 'erro' ? bgColor.erro : bgColor.default,
                    //     boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    //     cursor: 'pointer',
                    // }}
                    className={`mb-8 py-2.5 px-3.5 rounded-md font-semibold ${t.type === 'sucesso' ? 'bg-(--accent-green-dark) text-(--bg-creme)' : t.type === 'erro' ? 'bg-(--accent-red)' : 'bg-(--bg-creme)'}`
                    }
                >
                {t.message}
                </div>
            ))}
        </div>
    );
}