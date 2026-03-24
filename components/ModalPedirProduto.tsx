import { CarrinhoItem } from "@/interface/CarrinhoItem";
import { Produtos } from "@/interface/Produtos";
import { useCartStore } from "@/store/useCartStore";
import { X, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

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

    if(!produtoAAgendar) return

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
        console.log("Carrinho atual:", useCartStore.getState().itens);
        fecharModal();
    }
    
    return (
        <section className="fixed w-screen h-screen inset-0 flex flex-col items-center justify border border-(--text-chocolate) rounded-2xl bg-(--bg-creme)/70 backdrop-blur-sm z-100 overflow-x-hidden">
                <div className="w-full flex justify-end items-center p-4 h-20 mb-4">    
                    <button onClick={fecharModal} className="text-xl bg-(--text-chocolate)/90 rounded-full w-15 h-15 flex justify-center items-center font-bold uppercase">
                        <X size={40} className="text-(--bg-creme)" />
                    </button>
                </div>

                <div className="flex flex-col gap-10 pb-10 shadow-md bg-(--bg-creme)">
                    <div className="flex flex-col items-center gap-3 h-auto">
                        <Image
                            src={produto.imagem_url}
                            alt={produto.nome}
                            className=" w-full object-cover rounded-t-2xl rounded-b-xl"
                            width={150}
                            height={150}
                        />

                        <div className="flex justify-center items-center px-5 py-5 pb-5 text-center border-b border-(--text-chocolate)">
                            <h4 className="font-sans text-(--text-chocolate) font-bold text-2xl">{produto.nome}</h4>
                        </div>
                    </div>

                    <form className="flex flex-col gap-16 justify-center items-center w-full px-6 font-sans">
                        <div className="flex flex-col w-full gap-5">

                            <label htmlFor="quantidade" className="text-(--text-chocolate) text-xl font-semibold">Quantidade</label>
                            <div id="quantidade" className="flex gap-3 justify-around items-center text-2xl w-full">
                                <button
                                    type="button"
                                    onClick={() => setProdutoQuantidade(q => Math.max(1, q - 1))}
                                    className="active:scale-95 transition-all border border-(--bg-creme) text-(--bg-creme) bg-(--accent-green-dark) w-20 h-12 rounded-md text-bold text-3xl flex justify-center items-center shadow-2xl">
                                        <Minus size={25}/>
                                    </button>

                                <p className="text-(--text-chocolate) text-2xl">{produtoQuantidade}</p>
                                
                                <button
                                    type="button"
                                    onClick={() => setProdutoQuantidade(q => q + 1)}
                                    className="active:scale-95 transition-all border border-(--bg-creme) text-(--bg-creme) bg-(--accent-green-dark) w-20 h-12 rounded-md text-bold text-3xl flex justify-center items-center shadow-2xl">
                                        <Plus size={25}/>
                                    </button>
                            </div>

                        </div>
                        
                        <div className="flex flex-col gap-5 w-full text-(--text-chocolate)">

                            <label htmlFor="data" className="text-xl font-semibold">Data para entrega</label>
                            <div id="data" className="flex justify-center flex-col items-center gap-2">
                                <input 
                                    value={produtoDataEntrega}
                                    onChange={(e) => mudarData(e.target.value)}    
                                    className="border border-(--text-chocolate) h-12 w-3/5 rounded-md shadow-2xl" 
                                    type="date"
                                    min={dataMinima()}
                                />
                                {erroData && (
                                    <p className="text-red-600 text-sm font-semibold">{erroData}</p>
                                )}
                            </div>

                        </div>

                        <div className="flex flex-col gap-5 text-(--text-chocolate) w-full">

                            <label htmlFor="observacao" className="text-xl font-semibold">Observação</label>
                            <textarea
                                value={produtoObservacao}
                                onChange={(e) => setProdutoObservacao(e.target.value)}
                                id="observacao"
                                rows={4}
                                className="border border-(--text-chocolate) rounded-sm placeholder:pt-2 pl-2"
                                placeholder="Onde você gostaria de receber?"
                            />
                        </div>

                        <button
                            onClick={adicionarAoCarrinho}
                            disabled={!permiteEnviar}
                            className={`w-60 h-18 flex items-center gap-3 p-1 justify-center font-bold rounded-xl shadow-2xl text-xl ${permiteEnviar ? `bg-(--text-chocolate) text-(--bg-creme)` :`bg-slate-300 text-gray-500 cursor-not-allowed`}` 
                            }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                            Adicionar a sacola
                        </button>
                    </form>
                </div>
        </section>
    )
}