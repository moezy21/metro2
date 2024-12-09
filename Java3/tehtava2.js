document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('target');
  
  const things = ['First item', 'Second item', 'Third item'];
  
  for (let text of things) {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    list.appendChild(listItem);
  }
});
