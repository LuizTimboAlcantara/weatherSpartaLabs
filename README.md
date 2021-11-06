 <h1 align="Left">  
  <Strong>☔ Weather App Sparta Labs - React Native</Strong>
 </h1>

  <img src="src/assets/app.gif" width="300" height="400"/>

---

## 🔎 Índice

- [🔎 Índice](#-índice)
- [☔ Sobre](#-sobre)
- [💻 Tecnologias utilizadas](#-tecnologias-utilizadas)
- [🧱 Estrutura do projeto](#-estrutura-do-projeto)
- [📁 Como baixar o projeto e executar](#-como-baixar-o-projeto-e-executar)
- [🔭 Observações](#-observações)

---

## ☔ Sobre

App de privisão do tempo onde o usuário informa a cidade desejada e adiciona aos favoritos. Os dados são salvos na memória do celular evitando que os mesmo se percam.Clicando na cidade favoritada podemos vê os detalhes para os próximos dias e ainda contamos com a opção de deletar uma cidade dos favoritos. Tudo isso com informações consultados no momento atual.

---

## 💻 Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Expo;
- Axios;
- TypeScript;
- Date Fns;
- Dotenv;
- Styled Components;
- React Native Responsive Font Size;

---

## 🧱 Estrutura do projeto

`./android` -- Arquivos do ambiente Android;

`./ios` -- Arquivos do ambiente IOS;

`./src` -- Pasta principal do projeto;

`./src/assets` -- Arquivos de imagens;

`./src/components` -- Arquivos `.tsx e .ts` de componentes reutilizáveis;

`./src/contexts` -- Arquivos `.tsx` arquivo responsável por armazenar informação global que pode ser compartilhada em algum outro componente;

`./src/modules` -- Arquivos `.ts` com importações externas agrupadas;

`./src/routes` -- Arquivos `.tsx` com lógica e configuração de navegação;

`./src/scenes` -- Arquivos `.tsx` que descrevem componentes React que representam uma página acessável;

`./src/services` -- Arquivos `.ts` com lógica de negócio do app;

`./src/utils/Types` -- Arquivos `.d.ts` globais;

`./src/utils/Theme` -- Arquivos `.ts` com infomações de colores e fonts;

`./src/utils/Formats` -- Arquivos `.ts` com funções de manipulação;

---

## 📁 Como baixar o projeto e executar

```bash
# Clonar o repositório
  $ git clone https://github.com/LuizTimboAlcantara/weatherSpartaLabs.git

# Entrar na pasta do projeto
  $ cd weatherSpartaLabs

# Instalar as dependências do projeto
  $ npm install ou yarn install

# Rodar a aplicação
  $ expo start

```

---

## 🔭 Observações

- É necessário está na mesma rede para rodar o app;

- Para melhor experiência com o app é aconselhado o a utilização em um dispositivo físico;

- Caso a versão do node dê problema utilizar a versão 14.17.5 ou 16.13.0;

- Para facilitar os teste chave da api encontre-se no arquivos .env;
