# Portfolio - Mateus da Silva Machado

Portfolio profissional desenvolvido com Next.js 14, TypeScript, shadcn/ui e suporte a múltiplos idiomas (Português/Inglês).

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **next-intl** - Internacionalização
- **Lucide React** - Ícones

## 📦 Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

## 🏃 Executando

Para executar em modo de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

O portfólio está disponível em:
- Português: [http://localhost:3000/pt](http://localhost:3000/pt)
- Inglês: [http://localhost:3000/en](http://localhost:3000/en)

## 🏗️ Build

Para criar uma build de produção:

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
portfolio/
├── app/
│   ├── [locale]/          # Rotas com locale
│   │   ├── layout.tsx     # Layout com i18n
│   │   └── page.tsx       # Página principal
│   ├── globals.css        # Estilos globais
│   └── layout.tsx         # Layout raiz
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   └── ...                # Componentes do portfólio
├── messages/
│   ├── pt.json            # Traduções em português
│   └── en.json            # Traduções em inglês
├── lib/
│   └── utils.ts           # Utilitários
└── i18n.ts                # Configuração i18n
```

## 🌐 Idiomas

O portfólio suporta dois idiomas:
- **Português (pt)** - Idioma padrão
- **Inglês (en)**

As traduções estão em `messages/pt.json` e `messages/en.json`.

## 🎨 Componentes

O projeto utiliza componentes do shadcn/ui:
- Button
- Card
- Badge
- Separator
- Tabs

## 📝 Licença

Este projeto é privado e pessoal.

