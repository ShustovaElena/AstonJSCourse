import { createCards } from "./components/cards.js";
import { createPagination } from "./components/pagination.js";
import { getPhotos } from "./components/api.js";
import { PAGE_PARAMS } from "./constants.js";

const data = await getPhotos(PAGE_PARAMS.limit, 1);
createCards(data.data);
createPagination(3, PAGE_PARAMS.total);

window.onpopstate = function(event) {
  history.replaceState({page: 1}, null, "/")
};
