// If an li element is clicked, toggle the class "done" on the <li>
const liList = document.querySelectorAll('li');
liList.forEach((liEl) => {
  liEl.addEventListener('click', () => {
    liEl.classList.toggle('done');
  });
});
// If a delete link is clicked, delete the li element / remove from the DOM
const list = document.querySelectorAll('li');
list.forEach((liEl) => {
  const button = liEl.getElementsByTagName('a')[0];
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const parent = document.getElementsByClassName('today-list')[0];
    parent.removeChild(liEl);
  });
})

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  const parent = document.getElementsByClassName('today-list')[0];
  const newItem = document.createElement('li');
  newItem.addEventListener('click', () => {
    newItem.classList.toggle('done');
  });

  const textNode = document.createElement('span');
  textNode.textContent = text;
  newItem.appendChild(textNode);

  // Added so spacing looks correct.
  newItem.appendChild(document.createTextNode(' '));

  const deleteButton = document.createElement('a');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';
  deleteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const parent = document.getElementsByClassName('today-list')[0];
    parent.removeChild(newItem);
  });
  newItem.appendChild(deleteButton);

  parent.appendChild(newItem);
  // Finish function here
};

document.getElementsByClassName('add-item')[0].addEventListener('click', addListItem);