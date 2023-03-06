import { createCard } from "./card.js";
import { openCardPage } from "./cardPage.js";

export const createCards = (cards) => {
  const root = document.getElementById('root');

  root.innerHTML = `
    <div
    id="cards"
    class="d-flex flex-wrap justify-content-around"
    style="gap: 10px; padding-top: 40px"
  >
      ${cards.map((card) => {
        return createCard(card.id, card.url, card.title);
      })}
    </div>
  `;

  openCardPage();
};