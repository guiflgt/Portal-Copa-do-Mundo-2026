# 🏆 Portal da Copa do Mundo FIFA 2026

## 📌 Informações Acadêmicas
* **Instituição:** Universidade de Uberaba (UNIUBE)
* **Curso:** Análise e Desenvolvimento de Sistemas
* **Disciplina:** Linguagem de Programação para Internet
* **Professor:** Dr. Camilo Barreto
* **Trabalho:** Projeto Final Frontend com React
* **Grupo:**
  * **Integrante 1:** Guilherme Faleiros - **RA:** 5165492
  * **Integrante 2:** Haristoneu Garica - **RA:** 5167747
  * **Integrante 3:** Melissa Martins - **RA:** 5174322

---

## 🌎 Descrição do Projeto
O **Portal da Copa do Mundo FIFA 2026** é uma aplicação web frontend que funciona como um hub informativo sobre o torneio mundial de futebol que ocorrerá nos Estados Unidos, México e Canadá. O objetivo do portal é fornecer informações detalhadas sobre as seleções participantes, estádios sedes e tabela de jogos, além de oferecer um ambiente interativo para o usuário.

---

## 🎨 Tema Escolhido
* **Tema:** Portal da Copa do Mundo FIFA 2026 (Portal Informativo e Quadro Tático Interativo).

---

## 🛠️ Tecnologias Utilizadas
A aplicação foi estruturada do zero utilizando as tecnologias mais modernas de desenvolvimento frontend:
* **React** (v18+)
* **JavaScript** (ES6+)
* **Vite** (Ferramenta de build rápida)
* **React Router DOM** (Gerenciador de rotas e navegação SPA)
* **CSS Modules** (Estilização isolada por escopo de componente)
* **Fontes do Google Fonts** (Inter)

---

## 🚀 Principais Funcionalidades
1. **Navegação SPA:** Transição de telas instantânea sem recarregamento de página.
2. **Contagem Regressiva:** Contador dinâmico na tela inicial exibindo os dias, horas, minutos e segundos restantes para a Grande Final da Copa de 2026.
3. **Filtros e Busca Inteligente (Lift State Up):** Filtro de seleções na página de Seleções permitindo buscar por nome, selecionar grupo (A-L) e confederação (UEFA, CONMEBOL, etc.) com elevação de estado para o componente pai.
4. **Visualizador de Estádios-Sede:** Listagem dos 16 estádios que sediarão os jogos nos três países-sede, com filtro por nação (Todos, EUA, México, Canadá) e detalhes de capacidade de espectadores.
5. **Fallback Gráfico de Estádio:** Caso a imagem do estádio não esteja presente no servidor, a interface renderiza de forma condicional um campo de futebol estilizado inteiramente em CSS puro com animação flutuante.
6. **Filtros de Tabela de Jogos:** Acompanhamento dinâmico das partidas divididas entre jogos de hoje (Ao vivo), agendados e encerrados (resultados).
7. **Prancheta Tática Interativa (Componente Criativo Obrigatório).**

---

## 🕹️ Componente Criativo Obrigatório: `PainelTatico`
Desenvolvemos o componente **`PainelTatico`** (localizado no rodapé da página de Seleções) como o nosso elemento autoral diferenciado e não usual.
* **Proposta Visual:** O componente renderiza um **Quadro Tático 2D** estilizado que representa um campo de futebol real utilizando gradientes e marcações de linhas brancas em CSS.
* **Titulares vs Marrocos:** O painel conta com a escalação oficial da Seleção Brasileira contendo as camisas numeradas reais de cada jogador:
  * 1 - Alisson (Goleiro)
  * 13 - Danilo (Lateral)
  * 4 - Marquinhos (Zagueiro)
  * 3 - Gabriel Magalhães (Zagueiro)
  * 16 - Douglas Santos (Lateral)
  * 5 - Casemiro (Volante)
  * 8 - Bruno Guimarães (Volante/Meia)
  * 20 - Lucas Paquetá (Meio-campo)
  * 11 - Raphinha (Atacante)
  * 9 - Matheus Cunha (Atacante)
  * 7 - Vinícius Júnior (Atacante)
* **Interatividade por Clique/Mouse:**
  * **Botões de Esquema Tático (4-3-3, 4-4-2, 3-5-2):** Ao clicar nos esquemas, as coordenadas percentuais (`top` e `left`) de todos os 11 pinos de jogadores no gramado mudam e os pinos **deslizam suavemente** para as novas posições táticas via transição CSS (`transition`).
  * **Interação com os Pinos:** Ao clicar em um pino do jogador, a interface acende o atleta em verde neon e abre condicionalmente na lateral uma **Ficha Técnica Detalhada** com o número da camisa, clube na época do jogo, rating e status na partida.

---

## 🗂️ Organização de Pastas
A estrutura do projeto está organizada seguindo as melhores práticas de componentização:
```text
/src
  /assets_react       # Elementos gráficos do projeto
  /components         # Componentes reutilizáveis do sistema
    /CardEstadio
    /CardJogo
    /CardSelecao
    /FiltroSelecoes
    /Flag
    /Navbar
    /PainelTatico
  /data               # Dados locais mockados em formato JSON/JS
    estadios.js
    jogos.js
    selecoes.js
  /pages              # Páginas principais da SPA
    /Estadios
    /Home
    /Jogos
    /Selecoes
  App.jsx             # Componente raiz contendo as rotas SPA
  main.jsx            # Ponto de entrada do React
  index.css           # Estilos globais e variáveis de cores CSS
```

---

## 💻 Instalação e Execução Local

### Pré-requisitos
Certifique-se de possuir o **Node.js** (v18+) instalado em sua máquina.

### Passos:
1. Extraia o arquivo `.zip` ou clone o repositório do projeto.
2. Abra o terminal na pasta raiz do projeto.
3. Instale as dependências executando:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento local:
   ```bash
   npm run dev
   ```
5. Abra o navegador no endereço exibido no terminal (geralmente `http://localhost:5173`).

### Para gerar a build de produção:
```bash
npm run build
```

---

## 🔗 Link do Repositório GitHub
* **Repositório:** https://github.com/guiflgt/Portal-Copa-do-Mundo-2026.git
