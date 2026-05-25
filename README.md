# 📱 Pokédex Retrô - Game Boy Style

Este é um aplicativo mobile de Pokédex com uma identidade visual nostálgica baseada no clássico Nintendo Game Boy. O projeto foi desenvolvido como parte dos critérios de avaliação da disciplina de **Desenvolvimento de Sistemas Mobile** da **PUCRS**.

O aplicativo utiliza componentes modernos do ecossistema React Native/Expo para entregar uma experiência fluida, consumindo dados dinâmicos diretamente de uma API pública.

---

## 🎮 Funcionalidades Principais

* **Consumo de API Real:** Integração viva com a [PokéAPI](https://pokeapi.co/) para carregar dados oficiais.
* **Busca em Tempo Real:** Barra de pesquisa interativa na tela inicial que filtra os Pokémon instantaneamente conforme a digitação.
* **Navegação em Pilha (Stack):** Transição suave entre a listagem principal e a tela de detalhes usando o *React Navigation*.
* **Status Dinâmicos:** A tela de detalhes (estilo tela de batalha) renderiza barras de progresso baseadas nos atributos reais de cada Pokémon (HP, ATK, DEF, SPD).
* **Estética Pixelada:** Utilização da paleta de cores clássica verde-oliva e da fonte tipográfica `VT323`.

---

## 🛠️ Tecnologias Utilizadas

* **React Native** & **Expo Go** (SDK 54)
* **React Navigation** (Stack & Native)
* **Expo Font** (Carregamento da fonte retrô `VT323`)
* **Fetch API** (Requisições assíncronas para a PokéAPI)

---

## 🏃‍♂️ Como Rodar o Projeto Localmente

Se quiser clonar e executar este projeto na sua máquina, siga os passos abaixo no terminal:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/AngelCM6/pokedex-retro-pucrs.git](https://github.com/AngelCM6/pokedex-retro-pucrs.git)