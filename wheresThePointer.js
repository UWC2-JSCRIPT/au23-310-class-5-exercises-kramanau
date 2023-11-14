// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const tableBody = document.getElementsByTagName('tbody')[0];
tableBody.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const tdEl = document.elementFromPoint(x,y);
    tdEl.innerHTML= `(${x}, ${y})`;
});