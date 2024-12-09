'use strict';

const pictures = document.querySelector('#pictures');

picArray.forEach(item => {
  let card = document.createElement('article');
  card.className = 'card';

  let title = document.createElement('h2');
  title.textContent = item.title;
  card.appendChild(title);

  let figure = document.createElement('figure');
  let image = document.createElement('img');
  image.src = item.image.medium;
  image.alt = item.title;
  figure.appendChild(image);

  let caption = document.createElement('figcaption');
  caption.textContent = item.caption;
  figure.appendChild(caption);

  card.appendChild(figure);

  let desc = document.createElement('p');
  desc.textContent = item.description;
  card.appendChild(desc);

  pictures.appendChild(card);
});
