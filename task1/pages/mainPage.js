import { PAGE_PARAMS } from "../constants.js";
import { createCards } from "../components/cards.js";
import { createPagination } from "../components/pagination.js";
import { getPhotos } from "../components/api.js";

export const createMainPage = async () => {
  const { limit, pageNumber } = PAGE_PARAMS;

  const data = await getPhotos(limit, pageNumber);

  createCards(data.data);
  createPagination(+pageNumber, PAGE_PARAMS.total);
};