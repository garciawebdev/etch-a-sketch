const container = document.querySelector('.container');
const resetButton = document.querySelector('button');
let amtOfGrids;

const sqaure = () => {
    let grid = Number(prompt('Choose a number under 100'));
    if(grid > 100){
        sqaure()
    } else if (grid < 100){
        amtOfGrids = grid
        createGrid(amtOfGrids);
    }
}


const createGrid = (amtOfGrids) => {
    for(i = 0; i < amtOfGrids; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');
    for(j = 0; j < amtOfGrids; j++){
        const box = document.createElement('div');
        const widthHeight = 980 / amtOfGrids
        box.classList.add('grid-box');
        box.style.width = `${widthHeight}px`
        box.style.height = `${widthHeight}px`
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = 'black'
        })
        row.appendChild(box);
        }
    container.appendChild(row);
    }
}



sqaure();



resetButton.addEventListener('click', ()=> {
    const gridRow = document.querySelectorAll('.grid-row');
    gridRow.forEach(div => {
        div.remove();
    })
    sqaure();
})
