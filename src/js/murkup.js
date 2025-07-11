export const murkupRepo = data => {
  const box = document.querySelector('.hero_inner');
  const murkup = data
    .map(item => {
      return `
      <div class="hero_item">
        <h2 class="hero_item_title">${item.title}</h2>
        <a target = "_blank" class="hero_item_link hero_item_deploy" href="${item.urlDeploy}" class="btn">View Project</a>
        <a target = "_blank" class="hero_item_link hero_item_file" href="${item.urlFiles}" class="btn">View Files</a>
        <img class="hero_item_image" src="${item.img}" alt="${item.title}" />
      </div>
    `;
    })
    .join('');
  box.innerHTML = murkup;
};
