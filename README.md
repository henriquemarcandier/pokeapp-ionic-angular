# PokéApp - Ionic + Angular + PokeAPI

![Ionic](https://img.shields.io/badge/Ionic-5.0-blue?logo=ionic)
![Angular](https://img.shields.io/badge/Angular-16-red?logo=angular)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

Uma aplicação mobile desenvolvida com Ionic e Angular que consome dados da PokeAPI para exibir uma lista interativa de Pokémons.

---

## 📱 Demonstração

<p align="center">
  <img src="https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/assets/demo1.png" width="250" />
  <img src="https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/assets/demo2.png" width="250" />
</p>

> Ou veja o app em funcionamento: [Link para Deploy](https://SEU_USUARIO.github.io/SEU_REPOSITORIO)

---

## 🚀 Funcionalidades

- Listagem paginada de Pokémons com nome e imagem
- Tela de detalhes com imagem oficial, stats, habilidades, peso, altura e mais
- Marcar/desmarcar favoritos com persistência local
- Navegação entre Home, Detalhes e Favoritos
- Layout responsivo (retrato e paisagem)
- Botão "Carregar mais" para paginação incremental
- Código organizado por componentes e serviços com injeção de dependência

---

## 🧠 Arquitetura e Código

- Utilizei Angular com `HttpClient` para chamadas RESTful à PokeAPI
- O projeto segue estrutura modular com `pages/` e `services/`
- Gerenciamento de favoritos feito via `localStorage`
- Componentes Ionic (`ion-card`, `ion-grid`, `ion-button`) garantem responsividade

---

## 📂 Estrutura de Pastas

