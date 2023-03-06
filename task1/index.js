import { createCards } from "./components/cards.js";
import { createPagination } from "./components/pagination.js";
import { getPhotos } from "./components/api.js";

const data = await getPhotos(10, 1);
createCards(data);
createPagination();