'use client';
import Header from '@/components/Header';
import ListProduto from '@/components/ListProduto';
import ComoPedir from '@/components/ComoPedir';
import FooterPage from '@/components/FooterPage';
import MenuLateral from '@/components/MenuLateral';
import ModalPedirProduto from '@/components/ModalPedirProduto';
import BarraFlutuante from '@/components/BarraFlutuante';
import CarrinhoList from '@/components/CarrinhoList';
import { ModalConfirmarDadosUsuario } from '@/components/ModalConfirmarDadosUsuario';

import { Produtos } from '@/interface/Produtos';

import BdDoces from '@/bancoDeDados/BdDoces.json';

import { useState } from 'react';
import ModalEscolherMetodoPagamento from '@/components/ModalEscolherMetodoPagamento';


export default function Home() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': '',
    'name': 'Click & Doce',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Bairro Estados Unidos, 406',//atualizar com o endereço real
      'addressLocality': 'Uberaba',
      'addressRegion': 'MG',
      'postalCode': '38025-170',//atualizar com o CEP real
      'addressCountry': 'BR'
    },
    'telephone': '+553499999999', // Atualize com o número real
    'openingHours': 'Mo-Fr 18:00-23:00',
    'priceRange': '$$'
  };

  const DocesLista: Produtos[] = BdDoces;

  const docesAProntaEntrega = DocesLista.filter((doce) => doce.estoque > 0)

  const [abrirMenu, setAbrirMenu] = useState<boolean>(false);
  const [produtoPedirAgora, setProdutoPedirAgora] = useState<Produtos | null>(null);
  const [abrirCarrinho, seAbrirCarrinho] = useState<boolean>(false);
  const [abrirEtapaCheckout, setAbrirEtapaCheckout] = useState<string>('fechado');

  const abrirModalPedirProduto = (produto: Produtos) => {
    setProdutoPedirAgora(produto);
  }

  const fecharModalPedirProduto = () => {
    setProdutoPedirAgora(null)
  }
  
  const abrirMenuLateral = () => {
    setAbrirMenu(true);
  }

  const fecharMenuLateral = () => {
    setAbrirMenu(false);
  }

  const abrirModalCarrinho = () => {
    seAbrirCarrinho(true)
  }

  const fecharModalCarrinho = () => {
    seAbrirCarrinho(false)
  }

  const abrirModalUsuario = () => {
    setAbrirEtapaCheckout('confirmarDadosUsuario');
  }

  const fecharModalUsuario = () => {
    setAbrirEtapaCheckout('fechado');
  }

  const abrirModalPagamento = () => {
    setAbrirEtapaCheckout('escolherMetodoPagamento');
  }

  const fecharModalPagamento = () => {
    setAbrirEtapaCheckout('fechado');
  }

  return (
    <main className="overflow-x-hidden bg-(--bg-creme) min-h-screen pb-10">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header 
        abrirMenuLateral={abrirMenuLateral}
        abrirCarrinho={abrirModalCarrinho}
      />

      {abrirMenu && (
        <MenuLateral
          abrirCarrinho={abrirModalCarrinho}
          menuAberto={abrirMenu}
          fecharMenu={fecharMenuLateral}
        />
      )}

      {produtoPedirAgora && (
        <ModalPedirProduto 
          produtoAAgendar={produtoPedirAgora}
          fecharModal={fecharModalPedirProduto}
        />
      )}
      
      <ListProduto 
        DocesLista={docesAProntaEntrega}
        pedirProduto={abrirModalPedirProduto}
      />

      {abrirCarrinho && (
        <CarrinhoList
          abrirCarrinho={abrirCarrinho}
          fecharCarrinho={fecharModalCarrinho}
          abrirModalUsuario={abrirModalUsuario}
          abrirModalPagamento={abrirModalPagamento}
        />
      )}

      {abrirEtapaCheckout === 'confirmarDadosUsuario' && (
        <ModalConfirmarDadosUsuario
            aberto={abrirEtapaCheckout === 'confirmarDadosUsuario'}
            fecharModal={fecharModalUsuario}
            abrirModalPagamento={abrirModalPagamento}
        />
      )}

      {abrirEtapaCheckout === 'escolherMetodoPagamento' && (
        <ModalEscolherMetodoPagamento
          modalAberto={abrirEtapaCheckout === 'escolherMetodoPagamento'}
          fecharModal={fecharModalPagamento}
        />
      )}
      
      <ComoPedir />
      <FooterPage />

      <BarraFlutuante 
        abrirCarrinho={abrirModalCarrinho}
      />
    </main>
  );
}
