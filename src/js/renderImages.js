import refs from "../js/refs";
import imageCardsTpl from "../tmp/cards.hbs";

function renderImageCards(cards) {
  const markup = imageCardsTpl(cards);
  refs.gallery.insertAdjacentHTML("beforeend", markup);
}

export default renderImageCards;