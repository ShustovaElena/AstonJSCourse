export const createPagination = () => {
  const root = document.getElementById('root');
  const nav = document.createElement('nav');
  nav.style.paddingTop = '40px';

  nav.innerHTML = `
    <nav style="padding-top: 40px">
      <ul class="pagination justify-content-center">
          <li class="page-item">
              <a class="page-link" href="#">Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
              <a class="page-link" href="#">Next</a>
          </li>
      </ul>
     </nav>
  `;

  root.append(nav);
};