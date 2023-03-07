import { PAGE_PARAMS } from "../constants.js";
import { createCards } from "./cards.js";
import { createPagination } from "./pagination.js";
import { getPhotos } from "./api.js";

export const createMainPage = async () => {
  const { limit, total, pageNumber } = PAGE_PARAMS;

  const data = await getPhotos(limit, pageNumber);

  createCards(data.data);
  createPagination(+pageNumber, PAGE_PARAMS.total);
};