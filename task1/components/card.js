export const createCard = (src, title) => {
  return `
    <div class="card" style="width: 300px">
      <img src=${src} class="card-img-top" alt=Card img />
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <a href="#" class="btn btn-primary">More</a>
      </div>
    </div>
  `;
};