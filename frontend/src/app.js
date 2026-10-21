async function loadTestData() {
  try {
    const data = (await fetch('/data.json')).json();
    return data;
  } catch (error) {
    console.error('loading test data failed', error);
    return { lists: [], users: [] };
  }
}

async function populateLists() {
  const data = await loadTestData();
  const myLists = document.getElementById('my-lists');

  if (!myLists) return;

  const listsDisplay = document.querySelector('.lists-display');
  if (!listsDisplay) return;

  listsDisplay.innerHTML = '';

  data.lists.forEach(list => {
    const listElement = document.createElement('li');
    listElement.className = 'list-element';
    listElement.innerHTML = `
      <h3><a href="/listview.html?id=${list.id}">${list.name}</a></h3>
    `;
    listsDisplay.appendChild(listElement);
  });
}

document.addEventListener('DOMContentLoaded', populateLists);