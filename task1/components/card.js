export const createCard = (id, url, title) => {
  return `
    <div class="card" style="width: 300px">
      <img src=${url} class="card-img-top" alt=Card img />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <a id="CardId-${id}" class="btn btn-primary">More</a>
      </div>
    </div>
  `;
};