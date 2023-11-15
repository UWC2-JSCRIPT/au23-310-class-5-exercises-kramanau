// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const main = document.getElementsByTagName('main')[0];
const newEl = document.createElement('a');
newEl.appendChild(document.createTextNode('Buy Now!'));
newEl.id = 'cta';
main.appendChild(newEl);

// Access (read) the data-color attribute of the <img>,
// log to the console
const image = document.getElementsByTagName('img')[0];
console.log(image.getAttribute('data-color'));

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const list = document.getElementsByTagName('li');
list[2].className = 'highlight';


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
main.removeChild(document.getElementsByTagName('p')[0]);