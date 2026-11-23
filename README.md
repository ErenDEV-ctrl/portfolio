<h1 align="center">🖥️ Portfólio Pessoal</h1>

<p align="center">
        Projeto desenvolvido durante minha graduação em Análise e Desenvolvimento de Sistemas.</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
</p>

---

## 📌 Sobre o projeto

Este projeto tem como objetivo o desenvolvimento do meu portfólio pessoal utilizando **HTML, CSS E JAVASCRIPT**.

O site foi desenvolvido durante meus estudos em **Análise e Desenvolvimento de Sistemas**, com o objetivo de reunir em uma única página informações sobre minha formação, conhecimentos em tecnologia, projetos acadêmicos e formas de contato.

O desenvolvimento aconteceu de forma gradual. Cada parte do site foi construída e testada separadamente, passando por ajustes técnicos de estrutura, estilização, responsividade e interatividade até chegar à versão publicada.

Além de ser uma atividade acadêmica distribuida pelo professor, o projeto também passou a fazer parte do meu portfólio pessoal e poderá continuar sendo atualizado conforme minha evolução na área de tecnologia.

## 🎯 Objetivo do projeto 

O objetivo deste projeto foi desenvolver uma página de **portfólio pessoal** utilizando os conhecimentos adquiridos durante minha graduação em **Análise e Desenvolvimento de Sistemas**.

Além de atender à proposta acadêmica, busquei criar um site que pudesse continuar sendo utilizado depois da atividade, servindo como uma forma de apresentar meus **projetos, conhecimentos e evolução na área de tecnologia**.

Durante o desenvolvimento, também pratiquei conceitos que vão além da construçãõ visual da página, como:

- 📁 Organização de arquivos e pastas;
- 📱 Desenvolvimento responsivo;
- 🔄 Controle de versão com Git;
- ☁️ Utilização do GitHub;
- 🌐 Publicação de um site atráves do GitHub Pages.

---

### 💡 Escolha do tema

A escolha de desenvolver um **portfólio pessoal** como tema do projeto foi uma decisão minha. Em vez de criar apenas uma página para cumprir a atividade acadêmica, achei melhor desenvolver algo que também pudesse ser utilizado fora da faculdade e continuar evoluindo ao longo da minha formação.

A proposta foi criar um espaço próprio para apresentar um pouco sobre mim, meus conhecimentos atuais e alguns dos **projetos acadêmicos que já desenvolvi**, permitindo que o site também funcione como uma apresentação mais profissional do meu perfil.

Além da utilização acadêmica, pretendo manter este portfólio atualizado conforme adquirir novos conhecimentos, desenvolver outros projetos e aprender novas formas de trabalhar com **HTML, CSS E JavaScript**.

Dessa forma, o site também passa a fazer parte da construção da minha presença profissional na área da tecnologia, podendo ser compartilhado no **GitHub, LinkedIn e em outras oportunidades profissionais**, ajudando a ampliar minha rede de contatos e registrar minha evolução ao longo da graduação.

---

## 🛠️ Processo de desenvolvimento

O desenvolvimento do portfólio foi realizado separado em partes, construindo e testando cada parte antes de avançar para a próxima etapa. 

### 1️⃣ Estrutura inicial com HTML

- 🏠 **Início**
- 👤 **Sobre mim**
- 💻 **Tecnologias**
- 📂 **Projetos**
- 📬 **Contato**

Também ajustei a estrutura de pastas separando os arquivos de **CSS**, **JavaScript** e **imagens**, mantendo o projeto mais organizado.

---

### 2️⃣ Construção do visual com CSS

Depois da estrutura em HTML, comecei a desenvolver a identidade visual do site utilizando **CSS3**.

Durante essa etapa foram trabalhados elementos como:

- 🎨 Cores e fundos;
- 🔤 Tipografia;
- ↔️ Espaçamentos;
- 🔘 Botões;
- 🗂️ Cards;
- 🖼️ Bordas;
- ✨ Efeitos de interação;
- 📐 Flexbox;
- 🔲 CSS Grid.

A identidade visual foi construída utilizando um fundo escuro com detalhes em **roxo**, buscando manter uma aparência simples, moderna e relacionada à área de tecnologia.

---

### 3️⃣ Desenvolvimento da responsividade

Após a construção da versão inicial para **desktop**, o site foi adaptado para diferentes tamanhos de tela. 

Foram utilizadas **Medias Queries** para reorganizar os elementos em dispositivos menores.

Exemplo:

```css
@media (max-width: 768px;) {
    /* Ajuste para telas menores */
}
```

---

Durante essa etapa foram ajustados:

- 📱 **Cards**;
- 📝 **Imagens**;
- 🔘 **Botões**;
- 📋 **Menu de navegação**;
- 📏 **Espaçamento**.

Realizei testes em diferentes larguras de tela para identificar problemas de posicionamento, elementos que poderiam ultrapassar a área visível e possíveis problemas de navegação horizontal.

Para celulares menores, também foram realizados ajustes técnicos específicos através de outra **Media Query**:

```css
@media (max-width: 480px) {
    /* Ajustes específicos para celulares menores */
}
```

Esses ajustes que realizei, permitiram que o mesmo site pudesse ser utilizado tanto em computadores quanto em tablets e celulares.

---

### 4️⃣ Menu para dispositivos móveis

No **desktop**, o menu de navegação permanece visível no cabeçalho da página.

Em telas menores, foi criado um **menu mobile no formato hambúrguer**:

`☰`

A abertura e o fechamento desse menu são controlados através do **JavaScript**.

O menu mobile foi desenvolvido para ocupar menos espaço na tela e facilitar a navegação em dispositivos menores. 

Também foram adicionados efeitos de interação para que, ao tocar nas opções do menu, o usuário tenha um retorno visual utilizando as mesmas cores em roxo presentes na identidade do site.

Entre os ajustes realizados no menu mobile estão:

- ☰ **Botão Hambúrguer** para abrir o menu;
- ❌ **Fechamento do menu** após selecionar uma opção;
- 🟣 **Efeito visual ao tocar nos links**;
- 📱 **Organização vertical das opções**;
- 🎯 **Área de toque maior para dispositivos móveis**.

---

### 5️⃣ Interatividade com JavaScript

O **JavaScript** foi utilizado para adicionar comportamentos interativos ao portfólio.

As principais funcionalidades implementadas foram:

- ☰ **Abertura e fechamento do menu mobile**;
- ❌ **Fechamento automático do menu ao selecionar uma seção***;
- 🔄 **Controle do estado do menu através de classes CSS**;
- ⬆️ **Botão para voltar ao topo da página**;
- 👁️ **Exibição do botão de retorno somente após determinada rolagem da página**.

Um dos recursos utilizados foi o controle de classes através do JavaScript:

```javascript
menu.classList.toggle("ativo");
```

Com essa instrução foi possível adicionar ou remover a classe `ativo`, alternando o estado do menu mobile;

Também utilizei um evento de rolagem para verificar a posição da página:

```javascript
window.addEventeListener("scroll", function () {
    // Verifica a posição da página
});
```

Deste modo, o **JavaScript** não foi incluído apenas como um requisito da atividade, mas utilizando para implementar funcionalidades que fazem parte da experiência real de navegação do site.

---

### 6️⃣ Testes e correções

Durante o desenvolvimento, foram realizados diversos testes tanto no **desktop** quanto na visualização de dispositivos móveis através das ferramentas do navegador.

O site foi testados em diferentes tamanhos de tela, incluindo larguras próximas de:

- 📱 `320px`;
- 📱 `375px`;
- 📱 `390px`;
- 📱 `430px`;
- 📟 `768px`;
- 🖥️ **Desktop**.

Ao longo desses testes, alguns problemas foram identificados e corrigidos.

Entre os principais ajustes realizados estão:

- ✅ Reorganização dos cards em telas menores;
- ✅ Redução do tamanho de textos em celulares;
- ✅ Redução da imagem principal em dispositivos menores;
- ✅ Organização dos botões no mobile;
- ✅ Melhoria da área de toque dos links;
- ✅ Correção da movimentação lateral da página;
- ✅ Ajustes no menu mobile;
- ✅ Correção de textos;
- ✅ Correção dos links;
- ✅ Testes da navegação entre as seções;
- ✅ Testes do botão de voltar ao topo;
- ✅ Testes da abertura e fechamento do menu.

As correções fizeram parte do processo de desenvolvimento e foram realizadas conforme os problemas apareciam durante os testes.

Esse processo ajudou a melhorar tanto o **funcionamento** quanto a **apresentação final** do portfólio.

---

### 7️⃣ Controle de versão com Git e GitHub

Durante o desenvolvimento, utilizei **Git** para registrar e acompanhar as alterações realizadas no projeto.

Os principais comandos utilizados foram:

```bash
git status
git add .
git commit -m "mensagem do commit"
git push origin main
git pull origin main
```

Cada comando teve uma função durante o desenvolvimento:

- `git status` → verificar o estado e as alterações do projeto;
- `git add .` → preparar os arquivos modificados;
- `git commit` → registrar uma nova versão do projeto;
- `git push` → enviar as alterações locais para o GitHub;
- `git pull` →  baixar e sincronizar as alterações armazenadas no GitHub.

Como o projeto foi desenvolvido utilizando mais de um computador, o comando:

```bash
git pull origin main
```

também foi importante para manter os arquivos atualizados antes de continuar o desenvolvimento em outra máquina.

O fluxo utilizado durante o projeto foi:

`VS Code` → `Git` → `GitHub`

Isso permitiu acompanhar a evolução do portfólio através do histórico de **commits** realizados durante o desenvolvimento.

---

### 8️⃣ Publicação com GitHub Pages

Após a conclusão da versão principal do projeto, o portfólio foi publicado utilizando o **GitHub Pages**.

O GitHub Pages pôde transformar os arquivos do repositório em um site que pode ser acessado diretamente pela internet.

Para realizar a publicação, foi utilizado a branch:

`main`

e a pasta:

`/(root)`

Como o arquivo `index.html` está localizado na raiz do projeto, o GitHub Pages consegue utilizá-lo como página inicial do site.

Depois da publicação, o fluxo completo do projeto passou a funcionar da seguinte maneira:

`VS Code` → `Git` → `GitHub` → `GitHub Pages`

Dessa forma, quando uma nova alteração é realizada no projeto, posso utilizar:

```bash
git add . 
git commit -m "Atualiza portfolio"
git push origin main
```

Após o envio das alterações para a branch `main`, o **GitHub Pages** atualiza a versão publicada do portfólio.

Isso também permite que o site continue sendo atualizado futuramente conforme eu desenvolver **novos projetos**, adquirir **novos conhecimentos** ou aprender **novas formas de trabalhar com HTML, CSS e JavaScript**.

---

## 💻 Tecnologias utilizadas

Durante o desenvolvimento do portfólio, utilizei diferentes tecnologias e ferramentas para construir, organizar, versionar e publicar o projeto. 

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white">
  <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
</p>

### 📄 HTML5

Utilizei para construir a **estrutura e o conteúdo da página**, organizando elementos como cabeçalho, menu de navegação, seções, textos, imagens, projetos, links e rodapé.

### 🎨 CCS3 

Utilizei para desenvolver toda a **identidade visual do portfólio**, incluido cores, espaçamentos, tamanho, cards, botões, efeitos de interação e adaptação do layout para diferentes dispositivos.

Também foram utilizados recursos como:

- `display: flex`;
- `display: grid`;
- `:hover`;
- `:active`;
- `transition`;
- `@media`;
- responsividade para dispositivos móveis.

### ⚡ JavaScript

Utilizei para adicionar **interatividade** à página.

Entre as funções implementadas estão:

- ☰ Controle do menu mobile;
- ❌ Fechamento do menu após selecionar uma seção;
- ⬆️ Exibição do botão de voltar ao topo;
- 🔄 Controle de classes CSS através do JavaScript;
- 🖱️ Eventos de clique e rolagem da página.

### 🔄 Git

Utilizei para realizar o **controle de versão do projeto**, registrando as alterações feitas durante o desenvolvimento.

### ☁️ GitHub

Utilizei para armazenar o repositório do projeto, acompanhar o histórico de alterações e manter o código disponível online.

### 🌐 GitHub Pages

Utilizei para realizar a **publicação do portfólio**, transformando os arquivos armazenados no repositório em um site acessível pela internet.

### 🧑‍💻 Visual Studio Code

Utilizei como o ambiente principal para escrever e organizar os arquivos `HTML`, `CSS`, `JavaScript` e `README.md`.

---

Ao longo do desenvolvimento foram adicionados diferentes funcionalidades para melhorar a navegação e a experiência de quem acessa o portfólio.

- 🧭 **Menu de navegação entre as seções**
- ☰ **Menu hambúrguer para dispositivos móveis**
- 📱 **Layout responsivo**
- 🖱️ **Efeitos de interação em botões e cards**
- 🎨 **Identidade visual em tema escuro com detalhes em roxo**
- 🧑‍💻 **Apresentação pessoal e acadêmica**
- 💻 **Área dedicada às tecnologias estudadas**
- 📂 **Cards para apresentação dos projetos**
- 🔗 **Links diretos para os repositórios no GitHub**
- 📬 **Área de contato com GitHub e LinkedIn**
- ⬆️ **Botão para retornar ao topo da página**
- 🌐 **Publicação através do GitHub Pages**

As funcionalidades foram implementadas aos poucos durante o desenvolvimento, sendo testadas tanto no **desktop** quanto em dispositivos móveis.

---

## 📱 Responsividade

Um dos principais cuidadods durante o desenvolvimento foi garantir que o portfólio pudesse ser utilizado em diferentes tamanhos de tela.

A primeira versão do site foi contruída para **desktop** e, posteriormente, o layout foi adaptado para tablets e celulares utilizando **Media Queries** no CSS.

Foram utilizados principalmente os seguintes pontos de adaptação:

```css
@media (max-width: 768px) {
    /* Ajustes para tablets e celulares */
}
```

```css
@media (max-width: 480px) {
    /* Ajustes para celulares menores */
}
```

Nos dispositivos móveis, algumas mudanças realizadas foram:

- ☰ Substituição do menu tradicional pelo **menu hambúrguer**;
- 📱 Organização dos cards em uma única coluna;
- 🖼️ Redução da imagem principal;
- 🔤 Ajuste do tamanho dos textos;
- 🔘 Reorganização dos botões;
- 📏 Ajuste dos espaçamentos entre os elementos;
- 👆 Melhoria da área de toque dos links e botões;
- ↔️ Correção de movimentação horizontal da página.

Também foram realizados testes em diferentes larguras de tela através das ferramentas de desenvolvimento do navegador.

Entre os tamanhos utilizados nos testes estão:

- `320px`;
- `375px`;
- `390px`;
- `430px`;
- `768px`;
- resoluções de **desktop**.

O objetivo desses testes foi verificar se os elementos continuavam legíveis, organizados e funcionais independentemente do dispositivo utilizado para acessar o portfólio.

---

## 📂 Estrutura do projeto

Desde o início, os arquivos foram separados de acordo com suas funções para manter o projeto mais organizado e facilitar futuras alterações.

A estrutura principal ficou organizada da seguinte forma:

```text
portfolio/
│
├── css/
│   └── style.css
│
├── images/
│   └── perfil.jpg
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

### 📄 `index.html`

Arquivo principal do projeto.

Nele estão organizadas todas as seções da página:

- 🏠 Início;
- 👤 Sobre mim;
- 💻 Tecnologias;
- 📂 Projetos;
- 📬 Contato;
- 🔻 Rodapé.

---

### 🎨 `css/style.css`

Arquivo responsável por toda a estilização visual do portfólio.

Nele estão definidos:

- 🎨 Cores;
- 🔤 Tipografia;
- 📐 Flexbox;
- 🔲 CSS Grid;
- 🗂️ Cards;
- 🔘 Botões;
- ✨ Efeitos de interação;
- 📱 Media Queries;
- 📏 Espaçamentos;
- 🖼️ Estilização das imagens;
- ☰ Estilos do menu mobile.

---

### ⚡ `js/script.js`

Arquivo responsável pelas funcionalidades interativas do site. 

Entre elas:

 `js/script.js`

Arquivo responsável pelas funcionalidades interativas do site.

Entre elas:

- ☰ Abertura do menu mobile;
- ❌ Fechamento do menu;
- 🔄 Controle da classe `ativo`;
- ⬆️ Controle do botão de voltar ao topo;
- 🖱️ Eventos de clique;
- 📜 Eventos relacionados à rolagem da página.

---

### 📘 `README.md`

Arquivo utilizado para documentar o projeto dentro do GitHub.

Neste README estão registradas informações como:

- 🎯 Objetivo do projeto;
- 💡 Escolha do tema;
- 🛠️ Processo de desenvolvimento;
- 💻 Tecnologias utilizadas;
- ⚙️ Funcionalidades;
- 📱 Responsividade;
- 📂 Estrutura dos arquivos;
- 🌐 Publicação do site.

A documentação também serve como registro do processo de construção do portfólio e poderá ser atualizada conforme o projeto evoluir. 

---

## 📚 Projetos apresentados no portfólio

Uma das escolhas que fiz durante a construção do site foi utilizar o próprio portfólio para apresentar alguns dos projetos que já desenvolvi durante minha graduação.

Neste primeiro momento, selecionei **dois projetos acadêmicos relacionados à Inteligência Artificial**, área na qual tenho interesse em continuar meus estudos e me desenvolver profissionalmente.

Os projetos são apresentados através de cards dentro do site, contendo uma breve descrição, tecnologias ou conceitos relacionados e um botão que direciona para o respectivo repositório no GitHub.

---

### 🤖 Avaliação de Código com IA

Projeto acadêmico voltado para a **avaliação crítica de código desenvolvido com apoio de Inteligência Artificial**.

Durante o projeto foram analisados pontos como:

- ✅ Precisão da lógica utilizada;
- 🧠 Clareza da solução apresentada;
- ⚙️ Eficiência do código;
- 📋 Fidelidade aos requisitos propostos;
- 🧪 Realização de testes para verificar diferentes situações.

O projeto também serviu como uma forma de analisar que uma resposta produzida com auxílio de IA precisa ser **avaliada, testada e compreendida**, e não apenas utilizada automaticamente.

<p>
  <a href="https://github.com/ErenDEV-ctrl/avaliacao-de-codigo-com-ia" target="_blank">
    <img src="https://img.shields.io/badge/Ver%20Projeto%20no%20GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
</p>

---

### 💬 Engenharia de Prompt Aplicada

Projeto acadêmico desenvolvido para demonstrar como a **construção e o refinamento de prompts** podem influenciar na qualidade das respostas produzidas por uma Inteligência Artificial Generativa.

Durante a atividade, os prompts foram sendo modificados progressivamente para fornecer mais contexto, clareza e informações para a IA.

O objetivo foi observar como diferentes formas de escrever uma instrução podem produzir resultados mais completos e adequados ao problema apresentado.

Entre os conceitos trabalhados estão:

- 🧠 Inteligência Artificial Generativa;
- 💬 Engenharia de Prompt;
- 📝 Clareza e especificidade das instruções;
- 🔄 Refinamento progressivo de prompts;
- 💻 Lógica de programação;
- 📚 Utilização da IA como ferramenta de apoio ao aprendizado.

<p>
  <a href="https://github.com/ErenDEV-ctrl/engenharia-de-prompt-aplicada" target="_blank">
    <img src="https://img.shields.io/badge/Ver%20Projeto%20no%20GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
</p>

---

## 🌐 Acesso ao portfólio

Após finalizar a versão principal do projeto, o site foi publicado através do **GitHub Pages**.

Dessa forma, o portfólio pode ser acessado diretamente pelo navegador sem a necessidade de baixar ou executar os arquivos localmente.

<p align="center">
  <a href="https://erendev-ctrl.github.io/portfolio/" target="_blank">
    <img src="https://img.shields.io/badge/🌐%20Acessar%20Portfólio-7C3AED?style=for-the-badge">
  </a>
</p>

### 🔗 Link direto

```text
https://erendev-ctrl.github.io/portfolio/
```

A publicação através do GitHub Pages também permite que o portfólio continue sendo atualizado futuramente.

Conforme eu desenvolver novos projetos, aprender novas tecnologias ou aprimorar meus conhecimentos em desenvolvimento web, poderei realizar novas alterações no projeto e manter o site acompanhando minha evolução acadêmica e profissional.

---

## 👤 Autor

Projeto desenvolvido por **Gabriel Carvalho**, estudante de **Análise e Desenvolvimento de Sistemas**.

Atualmente estou construindo minha formação na área de tecnologia, com interesse especial em **Inteligência Artificial**, desenvolvimento de software e novas aplicações tecnológicas.

Utilizo o GitHub para registrar minha evolução acadêmica, documentar projetos desenvolvidos durante a graduação e construir gradualmente meu portfólio profissional.

### 🔗 Conecte-se comigo

<p align="center">

  <a href="https://github.com/ErenDEV-ctrl" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>

  <a href="https://www.linkedin.com/in/gabriel-silva-6325953a7/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a>

</p>

---

## 🚀 Continuidade do projeto

Este portfólio representa uma das etapas da minha evolução durante a graduação e não considero o projeto encerrado definitivamente.

Pretendo continuar atualizando o site conforme:

- 📚 Adquirir novos conhecimentos;
- 💻 Desenvolver novos projetos;
- 🎨 Aprender novas técnicas de HTML e CSS;
- ⚡ Evoluir meus conhecimentos em JavaScript;
- 🤖 Avançar nos estudos relacionados à Inteligência Artificial;
- 📂 Produzir novos projetos acadêmicos e pessoais;
- 🌐 Ampliar minha presença profissional online.

A ideia é que o portfólio acompanhe minha evolução e continue sendo utilizado como uma forma de apresentar meus conhecimentos, experiências e projetos ao longo da minha formação.

---

<p align="center">
  Desenvolvido com empenho durante minha graduação em Análise e Desenvolvimento de Sistemas.
</p>

<p align="center">
  <strong>Gabriel Carvalho — 2026</strong>
</p>
