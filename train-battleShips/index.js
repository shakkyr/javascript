document.addEventListener('DomContentLoaded', () =>{
    const userGrid  = document.querySelector('.grid-user'),
          computerGrid = document.querySelector('.grid-computer'),
          displayGrid = document.querySelector('.grid-display'),
          ships = document.querySelectorAll('.ship'),
          destroyer = document.querySelector('.destroyer-container'),
          submarine = document.querySelector('.submarine-container'),
          cruiser = document.querySelector('.cruiser-container'),
          battleship = document.querySelector('.battleship-container'),
          carrier = document.querySelector('.carrier-container'),
          startButton = document.querySelector('#start'),
          rotateButton = document.querySelector('#rotate'),
          rurnDisplay = document.querySelector('#whos-go'),
          infoDisplay = document.querySelector('#info');

    const width = 10; 
    const userSquares = [];   
    const computerSquares = [];  

        //   ================= create board =======================
    function creatBoard(grid, squares){
        for (let i =0; i< width*width ; i++ ){
            const square = document.createElement('div');
            squares.dataset.id = i;
            grid.appendChild(square);
            squares.push(square);
        }
    }

    creatBoard(userGrid, userSquares);
    creatBoard(computerGrid, computerSquares);

    // ============ ships ===========
    const shipArray = [
        {
            name: 'destroyer',
            direction: 

        }
    ]

})