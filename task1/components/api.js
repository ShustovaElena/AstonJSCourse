import { BASE_URL, PAGE_PARAMS } from "../constants.js";

export const getPhotos = async (pageLimit, pageCount) => {
  const response = await fetch(`${BASE_URL}/photos?_limit=${pageLimit}&_page=${pageCount}`);
  const headers = new Map(response.headers);
  const data = await response.json();
  PAGE_PARAMS.total = (headers.get('x-total-count') || null) / PAGE_PARAMS.limit;
  return {
      data,
      total: headers.get('x-total-count') || null
  };
};

export const getPhotoById = async (id) => {
  console.log(id);
  const response = await fetch(`${BASE_URL}/photos/${id}`);
  const data = await response.json();
  return data;
};