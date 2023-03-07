import { PAGE_PARAMS } from "../constants.js";
import { createMainPage } from "./mainPage.js";

export const createPagination = (activePage, lastPage) => {
  const root = document.getElementById('root');
  const nav = document.createElement('nav');
  nav.style.paddingTop = '40px';

  if (activePage === 1) {
    activePage++;
  }
 
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

const getPagination = () => {
  defineValuePaginator();
  increaseValue();
  decreaseValue();
};

const defineValuePaginator = () => {
  const { total } = PAGE_PARAMS;

  document.getElementById('paginator')?.addEventListener('click', async (event) => {
    PAGE_PARAMS.pageNumber = event.target.innerText;
    if (PAGE_PARAMS.pageNumber === '...') {
      PAGE_PARAMS.pageNumber = 3;
    }
    if (PAGE_PARAMS.pageNumber == total) {
      PAGE_PARAMS.pageNumber = total - 1;
    }

    createMainPage();
  });
}

const decreaseValue = async () => {
  document.getElementById('prev-button')?.addEventListener('click', async () => {
    PAGE_PARAMS.pageNumber <= 2 ? PAGE_PARAMS.pageNumber = 2 : PAGE_PARAMS.pageNumber -= 1;
    createMainPage();
    });
}

const increaseValue = async () => {
  const { total } = PAGE_PARAMS;

  document.getElementById('next-button')?.addEventListener('click', async () => {
    PAGE_PARAMS.pageNumber >= +total - 1 ? PAGE_PARAMS.pageNumber = +total - 1 : PAGE_PARAMS.pageNumber = +PAGE_PARAMS.pageNumber + 1;
    createMainPage();
  });
}