// Affichage du menu par onglets (les données sont dans menu-data.js)
const tabs = document.getElementById('tabs');
const box = document.getElementById('items');

function show(category) {
  [...tabs.children].forEach(b => b.setAttribute('aria-selected', b.textContent === category));
  box.innerHTML = MENU[category].map(([name, price, desc]) =>
    name[0] === '#'
      ? `<div class="sub">${name.slice(1)}</div>`
      : `<div class="it"><h3>${name}<span>${price} €</span></h3>${desc ? `<p>${desc}</p>` : ''}</div>`
  ).join('');
}

Object.keys(MENU).forEach(category => {
  const b = document.createElement('button');
  b.textContent = category;
  b.setAttribute('role', 'tab');
  b.onclick = () => show(category);
  tabs.appendChild(b);
});
show(Object.keys(MENU)[0]);
