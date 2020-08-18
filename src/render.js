const rendering = (buds) => {
  const ul = document.querySelector('ul');
  console.log(ul);
  const html = buds
    .map((bud) => {
      return `
    <li class="budy" data-id=${bud.id}>
        ${bud.name}
    </li>
    `;
    })
    .join('');
  console.log(html);
  ul.innerHTML = html;

  ul.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      console.log(event.target);
    }
  });
};

module.exports = { rendering };
