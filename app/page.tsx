import Header from '@/components/Header';
import ListPizza from '@/components/ListPizza';
import ComoPedir from '@/components/ComoPedir';
import FooterPage from '@/components/FooterPage';

import BdPizzas from '@/bancoDeDados/BdPizzas.json';

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

  const listaPizzas = BdPizzas;

  return (
    <main className="overflow-x-hidden bg-zinc-950 min-h-screen pb-10">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      <ListPizza listaPizzas={listaPizzas} />
      <ComoPedir />
      <FooterPage />
    </main>
  );
}
