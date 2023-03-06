import { getPhotos } from "./api.js";
import { createCards } from "./cards.js";
import { PAGE_PARAMS } from "../constants.js";

export const createPagination = (activePage, lastPage) => {
  const root = document.getElementById('root');
  const nav = document.createElement('nav');
  nav.style.paddingTop = '40px';

  nav.innerHTML = `
    <nav style="padding-top: 40px">
      <ul class="pagination justify-content-center">
          <li class="page-item">
              <a id="prev-button" class="page-link" style="background-color: #dcdcdc">Previous</a>
          </li>
          <div id="paginator" class="pagination">
            <li class="page-item"><a id="first-page" class="page-link">1</a></li>
            <li class="page-item"><a class="page-link">...</a></li>
            <li class="page-item"><a id="prev-page" class="page-link">${activePage - 1}</a></li>
            <li class="page-item"><a id="active-page" class="page-link">${activePage}</a></li>
            <li class="page-item"><a id="next-page" class="page-link">${activePage + 1}</a></li>
            <li class="page-item"><a class="page-link">...</a></li>
            <li class="page-item"><a id="last-page" class="page-link">${lastPage}</a></li>
          </div>
          <li class="page-item">
              <a id="next-button" class="page-link" style="background-color: #dcdcdc">Next</a>
          </li>
      </ul>
     </nav>
  `;

  root.append(nav);

  getPagination();
};

let pageNumber = 3;

const getPagination = () => {
  defineValuePaginator();
  increaseValue();
  decreaseValue();
};

const defineValuePaginator = () => {
  const { limit, total } = PAGE_PARAMS;

  document.getElementById('paginator')?.addEventListener('click', async (event) => {
    pageNumber = event.target.innerText;
    if (pageNumber === '...') { // как это должно работать?
      pageNumber = 3;
    }
    if (pageNumber === '1') {
      pageNumber = 2;
    }
    if (pageNumber == total) {
      pageNumber = total - 1;
    }
    const data = await getPhotos(limit, pageNumber);
    createCards(data.data);
    createPagination(+pageNumber, total);
  });
}

const decreaseValue = async () => {
  const { limit, total } = PAGE_PARAMS;

  document.getElementById('prev-button')?.addEventListener('click', async () => {
    pageNumber <= 2 ? pageNumber = 2 : pageNumber -= 1;
    const data = await getPhotos(limit, pageNumber);
    createCards(data.data);
    createPagination(+pageNumber, total);
    });
}

const increaseValue = async () => {
  const { limit, total } = PAGE_PARAMS;

  document.getElementById('next-button')?.addEventListener('click', async () => {
    pageNumber >= +total - 1 ? pageNumber = +total - 1 : pageNumber = +pageNumber + 1;
    const data = await getPhotos(limit, pageNumber);
    createCards(data.data);
    createPagination(+pageNumber, +total);
  });
}