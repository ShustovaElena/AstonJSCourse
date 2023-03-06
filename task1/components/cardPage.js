import { getPhotoById } from "./api.js";

export const createCardPage = (card) => {
  const {albumId, id, title, url, thumbnailUrl } = card;
  const root = document.getElementById('root');

  root.innerHTML = '';
  root.innerHTML = `
    <button id="close-button" type="button" class="btn-close" aria-label="Close" style="width: 30px; padding: 40px"></button>
    <div>
      <img src=${thumbnailUrl} class="rounded mx-auto d-block"  alt="Card img">
      <p class="display-6" style="text-align: center; padding: 20px; text-transform: uppercase">${title}</p>
      <table class="table table-primary table-striped-columns">
        <thead>
        <tr>
          <th scope="col">Album Id</th>
          <th scope="col">Photo Id</th>
          <th scope="col">Url</th>
          <th scope="col">thumbnail Url</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${albumId}</th>
            <td>${id}</td>
            <td>${url}</td>
            <td>${thumbnailUrl}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  // closeCardPage();
};

export const openCardPage = () => {
  document.getElementById('cards')?.addEventListener('click', async (event) => {
    if (event.target.tagName === 'A') {
    const target = (event.target.id);
    const id = target.split('-')[1];
    const card = await getPhotoById(id);
    createCardPage(card);
    }
  });
};

// export const closeCardPage = () => {
//   document.getElementById('close-button').addEventListener('click', () => {
//     location.hash = '/'; //?????
//   });
// };