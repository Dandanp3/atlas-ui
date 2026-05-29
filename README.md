# Atlas.ui

Uma aplicação web moderna para explorar informações sobre países do mundo inteiro, construída com Next.js 15 e React.

## Sobre o Projeto

Atlas.ui é uma aplicação interativa que permite aos usuários descobrir informações detalhadas sobre os 250 países do mundo. A aplicação consome dados da API REST Countries e apresenta de forma visual e intuitiva informações como população, região, capital, idiomas, moedas e países fronteiriços.

## Objetivo

O objetivo deste projeto é proporcionar uma experiência de aprendizado prático em desenvolvimento web moderno, utilizando tecnologias atuais do ecossistema React/Next.js, enquanto oferece uma ferramenta útil para explorar dados geográficos mundiais.

## Funcionalidades

- **Listagem de Países**: Grid responsivo exibindo todos os países com suas bandeiras
- **Busca em Tempo Real**: Pesquise países pelo nome instantaneamente
- **Filtro por Região**: Filtre países por continente (África, Américas, Ásia, Europa, Oceania)
- **Página de Detalhes**: Visualize informações completas de cada país:
  - Nome nativo
  - População
  - Região e sub-região
  - Capital
  - Idiomas oficiais
  - Moedas
  - Países fronteiriços (com navegação direta)
- **Tema Claro/Escuro**: Alternância de tema com detecção automática da preferência do sistema
- **Animações Suaves**: Transições e efeitos visuais com Framer Motion
- **Loading States**: Skeleton screens durante o carregamento dos dados
- **Design Responsivo**: Interface adaptada para mobile, tablet e desktop

## Tecnologias

| Tecnologia | Descrição |
|------------|-----------|
| [Next.js 15](https://nextjs.org/) | Framework React com App Router |
| [React 19](https://react.dev/) | Biblioteca para construção de interfaces |
| [TypeScript](https://www.typescriptlang.org/) | Superset JavaScript com tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | Framework CSS utilitário |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes de interface reutilizáveis |
| [Framer Motion](https://www.framer.com/motion/) | Biblioteca de animações |
| [next-themes](https://github.com/pacocoursey/next-themes) | Gerenciamento de temas |
| [Lucide React](https://lucide.dev/) | Biblioteca de ícones |
| [REST Countries API](https://restcountries.com/) | API de dados dos países |

## Pré-requisitos

- Node.js 18 ou superior
- npm, yarn ou pnpm

## Como Rodar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Dandanp3/atlas-ui
   cd atlas-ui
```

2. **Instale as dependências**

```shellscript
npm install
# ou
yarn install
# ou
pnpm install
```


3. **Execute o servidor de desenvolvimento**

```shellscript
npm run dev
# ou
yarn dev
# ou
pnpm dev
```


4. **Acesse a aplicação**

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.




## Scripts Disponíveis

| Comando | Descrição
|-----|-----
| `npm run dev` | Inicia o servidor de desenvolvimento
| `npm run build` | Cria a build de produção
| `npm run start` | Inicia o servidor de produção
| `npm run lint` | Executa a verificação de linting


## Estrutura do Projeto

```plaintext
country-explorer/
├── app/
│   ├── country/
│   │   └── [code]/
│   │       └── page.tsx       # Página de detalhes do país
│   ├── globals.css            # Estilos globais e variáveis de tema
│   ├── layout.tsx             # Layout principal da aplicação
│   └── page.tsx               # Página inicial
├── components/
│   ├── ui/                    # Componentes shadcn/ui
│   ├── country-card.tsx       # Card de país
│   ├── country-card-skeleton.tsx
│   ├── country-details.tsx    # Detalhes do país
│   ├── country-details-skeleton.tsx
│   ├── country-grid.tsx       # Grid de países
│   ├── header.tsx             # Cabeçalho
│   ├── search-filter.tsx      # Busca e filtros
│   ├── theme-provider.tsx     # Provider de tema
│   └── theme-toggle.tsx       # Botão de alternância de tema
├── lib/
│   ├── api.ts                 # Funções de chamada à API
│   └── utils.ts               # Utilitários
├── types/
│   └── country.ts             # Tipos TypeScript
└── ...
```

## API Utilizada

Este projeto utiliza a [REST Countries API](https://restcountries.com/) v3.1, uma API gratuita e open-source que fornece dados sobre países do mundo.

