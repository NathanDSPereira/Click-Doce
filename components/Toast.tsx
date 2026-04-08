'use client';
import { useToast } from '@/store/useToast';


export default function Toast() {
    // const bgColor = tipo === 'sucesso' ? 'bg-green-500' : 'bg-red-500';

    const { toast: toasts, removerToast: remove } = useToast();

    return (
        <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}>
            {toasts.map(t => (
                <div
                    key={t.id}
                    onClick={() => remove(t.id!)}
                    style={{
                        marginBottom: 8,
                        padding: '10px 14px',
                        borderRadius: 8,
                        background: t.type === 'erro' ? '#fecaca' : t.type === 'sucesso' ? '#bbf7d0' : '#e2e8f0',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        cursor: 'pointer',
                    }}
                >
                {t.message}
                </div>
            ))}
        </div>
    );
}