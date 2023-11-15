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
  // adding up/down arrow functionality
  const upArrow = liEl.getElementsByClassName('arrows')[0];
  upArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    const prevEl = liEl.previousElementSibling;
    if(prevEl){
      const aboveEl = prevEl.getElementsByTagName('span')[0];
      if(prevEl.className != liEl.className){
        const tmpClass = prevEl.className;
        prevEl.className = liEl.className;
        liEl.className = tmpClass;
      }
      const tmp = aboveEl.innerHTML;
      aboveEl.innerHTML = liEl.getElementsByTagName('span')[0].innerHTML;
      liEl.getElementsByTagName('span')[0].innerHTML = tmp;
    }
  });
  const downArrow = document.getElementsByClassName('arrows')[1];
  downArrow.textContent = 'v';
  downArrow.className = 'arrows';
  downArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    const nextEl = liEl.nextElementSibling;
    if(nextEl){
      const belowEl = nextEl.getElementsByTagName('span')[0];
      if(nextEl.className != liEl.className){
        const tmpClass = nextEl.className;
        nextEl.className = liEl.className;
        liEl.className = tmpClass;
      }
      const tmp = belowEl.innerHTML;
      belowEl.innerHTML = liEl.getElementsByTagName('span')[0].innerHTML;
      liEl.getElementsByTagName('span')[0].innerHTML = tmp;
    }
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

  const upArrow = document.createElement('a');
  upArrow.textContent = '^';
  upArrow.className = 'arrows';
  upArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    const prevEl = newItem.previousElementSibling;
    if(prevEl){
      const aboveEl = prevEl.getElementsByTagName('span')[0];
      if(prevEl.className != newItem.className){
        const tmpClass = prevEl.className;
        prevEl.className = newItem.className;
        newItem.className = tmpClass;
      }
      const tmp = aboveEl.innerHTML;
      aboveEl.innerHTML = newItem.getElementsByTagName('span')[0].innerHTML;
      newItem.getElementsByTagName('span')[0].innerHTML = tmp;
    }
  });
  newItem.appendChild(document.createTextNode(' '));
  newItem.appendChild(upArrow);

  const downArrow = document.createElement('a');
  downArrow.textContent = 'v';
  downArrow.className = 'arrows';
  downArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    const nextEl = newItem.nextElementSibling;
    if(nextEl){
      const belowEl = nextEl.getElementsByTagName('span')[0];
      if(nextEl.className != newItem.className){
        const tmpClass = nextEl.className;
        nextEl.className = newItem.className;
        newItem.className = tmpClass;
      }
      const tmp = belowEl.innerHTML;
      belowEl.innerHTML = newItem.getElementsByTagName('span')[0].innerHTML;
      newItem.getElementsByTagName('span')[0].innerHTML = tmp;
    }
  });
  newItem.appendChild(document.createTextNode(' '));
  newItem.appendChild(downArrow);

  parent.appendChild(newItem);
  // Finish function here
};

document.getElementsByClassName('add-item')[0].addEventListener('click', addListItem);