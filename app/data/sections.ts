import { MapSection } from '../types/map';
import { SP_LOCATIONS } from './locations';

export const MAP_SECTIONS: MapSection[] = [
  {
    id: '1',
    title: 'Parque Ibirapuera: O Coração Verde de São Paulo',
    description: 'O Parque Ibirapuera é um oásis urbano que oferece uma fuga do ritmo acelerado da cidade. Com seus lagos serenos, extensas áreas verdes e importantes museus, o parque é um símbolo da cultura e lazer paulistano.',
    location: SP_LOCATIONS[0],
    zoom: 15
  },
  {
    id: '2',
    title: 'MASP: Ícone da Arte Moderna',
    description: 'O Museu de Arte de São Paulo é um dos mais importantes museus do hemisfério sul. Seu edifício icônico, projetado por Lina Bo Bardi, é tão impressionante quanto seu acervo de arte mundial.',
    location: SP_LOCATIONS[1],
    zoom: 16
  },
  {
    id: '3',
    title: 'Pinacoteca: História e Arte em Harmonia',
    description: 'A Pinacoteca é o museu de arte mais antigo de São Paulo, abrigando importantes obras de arte brasileira em um edifício histórico renovado no Jardim da Luz.',
    location: SP_LOCATIONS[2],
    zoom: 16
  },
  {
    id: '4',
    title: 'Mercado Municipal: Sabores e Tradições',
    description: 'O Mercadão é um tesouro arquitetônico que abriga uma incrível variedade de produtos frescos, especiarias e iguarias típicas, sendo um ponto essencial para entender a cultura gastronômica paulistana.',
    location: SP_LOCATIONS[3],
    zoom: 17
  },
  {
    id: '5',
    title: 'Catedral da Sé: Marco Zero',
    description: 'A imponente Catedral Metropolitana de São Paulo é o centro geográfico da cidade. Sua arquitetura neogótica e sua história fazem dela um dos monumentos mais importantes da cidade.',
    location: SP_LOCATIONS[4],
    zoom: 17
  },
  {
    id: '6',
    title: 'Bairro da Liberdade: Pequeno Japão',
    description: 'O Bairro da Liberdade é um pedaço do Japão em São Paulo. Com suas lanternas vermelhas, restaurantes típicos e lojas especializadas, é um destino único para experimentar a cultura asiática.',
    location: SP_LOCATIONS[5],
    zoom: 16
  },
  {
    id: '7',
    title: 'Estação da Luz: Portal do Tempo',
    description: 'A Estação da Luz é um marco da era do café em São Paulo. Sua arquitetura vitoriana e o Museu da Língua Portuguesa fazem dela um ponto turístico imperdível.',
    location: SP_LOCATIONS[6],
    zoom: 16
  },
  {
    id: '8',
    title: 'Theatro Municipal: Palco da Cultura',
    description: 'O Theatro Municipal é uma joia arquitetônica que representa o apogeu cultural da cidade. Inspirado na Ópera de Paris, é palco dos mais importantes espetáculos da cidade.',
    location: SP_LOCATIONS[7],
    zoom: 17
  }
];