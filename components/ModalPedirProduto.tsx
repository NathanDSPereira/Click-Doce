'use client'

import { CarrinhoItem } from "@/interface/CarrinhoItem";
import { Produtos } from "@/interface/Produtos";
import { useCartStore } from "@/store/useCartStore";
import { X, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { formatarMoeda } from "@/Utils/FormatarMoeda";
import { useToast } from "@/store/useToast";

export default function ModalAgendamento({produtoAAgendar, fecharModal} : {produtoAAgendar: Produtos | null, fecharModal: () => void}) {
    useEffect(() => {
            if (produtoAAgendar) {
                document.body.style.overflow = 'hidden'; // Trava o fundo
            } else {
                document.body.style.overflow = 'unset';
            }
            return () => { document.body.style.overflow = 'unset'; };
    }, [produtoAAgendar]);

    const [produtoQuantidade, setProdutoQuantidade] = useState(1);
    const [produtoDataEntrega, setProdutoDataEntrega] = useState('');
    const [produtoObservacao, setProdutoObservacao] = useState('')
    const [erroData, setErroData] = useState('')
    
    const [permiteEnviar, setPermiteEnviar] = useState<boolean>(false)

    const adicionarNovoItem = useCartStore((state) => state.adicionarNovoItem)

    const { adicionarToast } = useToast();

    if(!produtoAAgendar) return null

    const produto = produtoAAgendar;

    const dataMinima = (): string => {
        const hoje = new Date();
        const ano = hoje.getFullYear();
        const mes = String(hoje.getMonth() + 1).padStart(2, '0');
        const dia = String(hoje.getDate()).padStart(2, '0');
        return `${ano}-${mes}-${dia}`;
    }

    const fimDeSemana = (data: string): boolean => {
        const date = new Date(data + 'T00:00:00');
        const diaSemana = date.getDay();

        return diaSemana === 0 || diaSemana === 6;
    }

    const validarData = (data: string): boolean => {
        if (!data) {
            setErroData('Por favor, escolha uma data!');
            setPermiteEnviar(false)
            return false;
        }

        if (fimDeSemana(data)) {
            setErroData('Desculpe, não fazemos entregas aos sábados e domingos!');
            setPermiteEnviar(false)
            return false;
        }

        setErroData('');
        setPermiteEnviar(true)
        return true;
    }


    const mudarData = (valor: string) => {
        setProdutoDataEntrega(valor);
        if (valor) {
            validarData(valor);
        } else {
            setErroData('');
        }
    }
    
    const adicionarAoCarrinho = (e?: React.FormEvent) => {
        if(e) e.preventDefault()
        
        if(!validarData(produtoDataEntrega)) {
            return 
        }

        if(!permiteEnviar) {
            return
        }

        const novoPedido: CarrinhoItem = {
            id: `${produto.id}-${produtoDataEntrega}-${encodeURIComponent(produtoObservacao || '')}`,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem_url,
            quantidade: produtoQuantidade,
            dataEntrega: produtoDataEntrega,
            observacao: produtoObservacao,
            tipo: 'pedir'
        }

        adicionarNovoItem(novoPedido)
        adicionarToast({ type: 'sucesso', message: 'Produto adicionado à sacola!', visible: true, duration: 3000 })
        console.log("Carrinho atual:", useCartStore.getState().itens);
        fecharModal();
    }

    const subtotal = produto.preco * produtoQuantidade;

    return (
        <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-100 flex items-end justify-center bg-black/60 backdrop-blur-sm "
        >
            <div className="w-full max-w-md bg-(--bg-creme) rounded-t-3xl shadow-xl animate-in slide-in-from-bottom duration-300">
                <div className="p-4 pb-0 mb-4">
                    <div className="relative">
                        <Image
                            src={produto.imagem_url}
                            alt={produto.nome}
                            className="w-full h-40 object-cover rounded-2xl"
                            width={400}
                            height={240}
                        />
                        <button onClick={fecharModal} aria-label="Fechar" className="absolute top-3 right-3 bg-(--bg-creme) rounded-full w-10 h-10 flex items-center justify-center">
                            <X size={20} className="text-(--text-chocolate)" />
                        </button>
                    </div>

                    <div className="mt-3">
                        <h4 id="modal-title" className="font-sans text-(--text-chocolate) font-bold text-xl">{produto.nome}</h4>
                        <p className="text-sm text-(--text-chocolate) mt-1">{formatarMoeda(produto.preco)}</p>
                    </div>

                    <form onSubmit={adicionarAoCarrinho} className="mt-4 flex flex-col gap-7">
                        <div>
                            <label htmlFor="quantidade" className="text-(--text-chocolate) font-semibold">Quantidade</label>
                            <div id="quantidade" className="flex items-center gap-4 mt-2">
                                <button
                                    type="button"
                                    onClick={() => setProdutoQuantidade(q => Math.max(1, q - 1))}
                                    className="w-12 h-12 rounded-md bg-(--accent-green-dark) active:scale-95 transition-all flex items-center justify-center text-(--bg-creme)">
                                    <Minus size={18} />
                                </button>

                                <p className="text-(--text-chocolate) text-2xl">{produtoQuantidade}</p>

                                <button
                                    type="button"
                                    onClick={() => setProdutoQuantidade(q => q + 1)}
                                    className="w-12 h-12 rounded-md bg-(--accent-green-dark) active:scale-95 transition-all flex items-center justify-center text-(--bg-creme)">
                                    <Plus size={18} />
                                </button>

                                <div className="ml-auto text-(--text-chocolate) font-semibold">
                                    {formatarMoeda(subtotal)}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="data" className="text-(--text-chocolate) font-semibold">Data para entrega</label>
                            <div className="mt-2">
                                <input
                                    value={produtoDataEntrega}
                                    onChange={(e) => mudarData(e.target.value)}
                                    className="w-full border border-(--text-chocolate) h-12 rounded-md px-3"
                                    type="date"
                                    min={dataMinima()}
                                />
                                {erroData && (
                                    <p className="text-red-600 text-sm font-semibold mt-1">{erroData}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="observacao" className="text-(--text-chocolate) font-semibold">Observação</label>
                            <textarea
                                value={produtoObservacao}
                                onChange={(e) => setProdutoObservacao(e.target.value)}
                                id="observacao"
                                rows={3}
                                className="w-full border border-(--text-chocolate) rounded-md px-2 py-2 mt-2"
                                placeholder="Onde você gostaria de receber?"
                            />
                        </div>
                    </form>
                </div>
                <div className="sticky bottom-0 left-0 right-0 bg-(--bg-creme) p-4 border-t border-(--text-chocolate)">
                    <div className="flex items-center gap-3">
                        <div className="flex-1">
                            <div className="text-sm text-slate-500">Total</div>
                            <div className="text-lg font-bold text-(--text-chocolate)">{formatarMoeda(subtotal)}</div>
                        </div>

                        <button
                            onClick={adicionarAoCarrinho}
                            disabled={!permiteEnviar}
                            className={`px-4 py-3 rounded-xl font-bold ${permiteEnviar ? `bg-(--text-chocolate) text-(--bg-creme)` : `bg-slate-300 text-gray-500 cursor-not-allowed`}`}>
                            Adicionar à sacola
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}