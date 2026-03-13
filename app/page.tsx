'use client';
import Header from '@/components/Header';
import ListPizza from '@/components/ListProduto';
import ComoPedir from '@/components/ComoPedir';
import FooterPage from '@/components/FooterPage';
import MenuLateral from '@/components/MenuLateral';
import ModalPedirProduto from '@/components/ModalPedirProduto';

import { Produtos } from '@/interface/Produtos';

import BdDoces from '@/bancoDeDados/BdDoces.json';

import { useState } from 'react';

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

  const [abrirMenu, setAbrirMenu] = useState<boolean>(false);
  const [produtoPedirAgora, setProdutoPedirAgora] = useState<Produtos | null>(null);

  const pedirProduto = (produto: Produtos) => {
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



  return (
    <main className="overflow-x-hidden bg-(--bg-creme) min-h-screen pb-10">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header 
        abrirMenuLateral={abrirMenuLateral} 
      />

      {abrirMenu && (
        <MenuLateral
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
      
      <ListPizza 
        DocesLista={DocesLista}
        pedirProduto={pedirProduto}

      />
      <ComoPedir />
      <FooterPage />
    </main>
  );
}
