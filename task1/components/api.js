import { BASE_URL } from "../constants.js";

export const getPhotos = async (pageLimit, pageCount) => {
  const response = await fetch(`${BASE_URL}/photos?_limit=${pageLimit}&_page=${pageCount}`);
  const data  = await response.json();
  console.log(data);
  return data;
};