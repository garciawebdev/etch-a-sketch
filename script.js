const container = document.querySelector('.container');
const resetButton = document.querySelector('button');
const amtOfGrids = 16;

const createGrid = (amtOfGrids) => {
    for(i = 0; i < amtOfGrids; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');
    for(j = 0; j < amtOfGrids; j++){
        const box = document.createElement('div');
        box.classList.add('grid-box');
        row.appendChild(box);
        }
    container.appendChild(row);
    }
}

createGrid(amtOfGrids);