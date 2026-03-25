# 📚 Dicionário AI

Um website que consome um BFF para fornecer um dicionário alimentado por IA (OpenAI). O projeto apresenta uma interface para consulta de palavras e definições.

## 🎯 Propósito do Projeto

O **Dicionário AI** foi desenvolvido para demonstrar as melhores práticas consumindo uma API BFF robusta e apresentando dados de forma elegante e acessível. O projeto integra tecnologias atuais para oferecer uma experiência de usuário excepcional.

## 💻 Stack Tecnológico

- **Frontend Framework:** React 
- **Build Tool:** Vite 
- **Linguagem:** JavaScript 
- **Gerenciador de Pacotes:** npm
- **Deployed em:** Render

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18.0.0 ou superior)
- **npm** (versão 9.0.0 ou superior) ou **yarn** (versão 3.0.0 ou superior)
- **Git**

Para verificar se tudo está instalado, execute:

```bash
node --version
npm --version
git --version
```

## 🚀 Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/ir2508/dicionario-AI.git
cd dicionario-AI
```

### 2. Instalar Dependências

```bash
npm install
# ou
yarn install
```

### 3. Executar em Modo Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O projeto será aberto automaticamente em [http://localhost:5173/](http://localhost:5173/) no seu navegador.

### 4. Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos compilados serão gerados na pasta `dist/`.


## 📁 Estrutura do Projeto

```
dicionario-AI/
├── src/
│   ├── App.jsx            # Componente principal da aplicação
│   ├── main.jsx           # Ponto de entrada da aplicação
│   └── index.css          # Estilos globais
├── public/                # Arquivos estáticos
├── index.html             # Arquivo HTML principal
├── vite.config.js         # Configuração do Vite
├── eslint.config.js       # Configuração do ESLint
├── package.json           # Dependências e scripts
└── README.md              # Este arquivo
```

## 🌐 Deploy

### Deploy no Render

1. **Conectar ao Render**
   - Acesse [render.com](https://render.com)
   - Crie um novo "Static Site"
   - Conecte seu repositório do GitHub
   - Configure:
     - **Build command:** `npm install && npm run build`
     - **Publish directory:** `dist`
   - Clique em "Create Static Site"

## 👥 Desenvolvedor(es)

- **Igor Lana de Sousa]** – RM 363283
- **Igor Roberto Barbosa Dos Santos]** – RM 362119
- **Romulo Oliveira Viganico]** – RM 363711

## 📝 Licença

Este projeto está disponibilizado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📚 Recursos Adicionais

- [Documentação React](https://react.dev)
- [Documentação Vite](https://vitejs.dev)

**Última atualização:** Março de 2026
