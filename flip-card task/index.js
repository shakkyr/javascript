{/* <div class="memory-game-blocks">
<div class="game-block" data-tree="1">
  <div class="face front"></div>
  <div class="face back">
    <img src="./img/1.jpg" alt="">
  </div>
</div>
<div class="game-block" data-tree="1">
  <div class="face front"></div>
  <div class="face back">
    <img src="./img/1.jpg" alt="">
  </div> */}

//   <input type="button" value="small" class="small">
//   <input type="button" value="medium" class="medium">
//   <input type="button" value="large" class="large">
let startAgain = document.querySelector('.startAgain'),
    smallSize = document.querySelector('.small'),
    mediumSize = document.querySelector('.medium'),
    memory_game_blocks = document.querySelector('.memory-game-blocks'),
    largeSize = document.querySelector('.large');



startAgain.addEventListener('click', function () {
        window.location.reload()
    
    })


  
  // Effect Duration
  let duration = 1000;
  
  // Select Blocks Container
  let blocksContainer = document.querySelector(".memory-game-blocks");
  
  // Create Array From Game Blocks
  let blocks = Array.from(blocksContainer.children);
  
  // Create Range Of Keys
  // let orderRange = [...Array(blocks.length).keys()];
  
  let orderRange = Array.from(Array(blocks.length).keys());
  
  // console.log(orderRange);
  shuffle(orderRange);
  // console.log(orderRange);
  
  // Add Order Css Property To Game Blocks
  blocks.forEach((block, index) => {
  
    // Add CSS Order Property
    block.style.order = orderRange[index];
  
    // Add Click Event
    block.addEventListener('click', function () {
  
      // Trigger The Flip Block Function
      flipBlock(block);
  
    });
  
  });
  
  // Flip Block Function
  function flipBlock(selectedBlock) {
  
    // Add Class is-flipped
    selectedBlock.classList.add('is-flipped');
  
    // Collect All Flipped Cards
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
  
    // If Theres Two Selected Blocks
    if (allFlippedBlocks.length === 2) {
  
      // console.log('Two Flipped Blocks Selected');
  
      // Stop Clicking Function
      stopClicking();
  
      // Check Matched Block Function
      checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
  
    }
  
  }
  
  // Stop Clicking Function
  function stopClicking() {
  
    // Add Class No Clicking on Main Container
    blocksContainer.classList.add('no-clicking');
  
    // Wait Duration
    setTimeout(() => {
  
      // Remove Class No Clicking After The Duration
      blocksContainer.classList.remove('no-clicking');
  
    }, duration);
  
  }
  
  // Check Matched Block
  function checkMatchedBlocks(firstBlock, secondBlock) {
  
    let triesElement = document.querySelector('.tries span');
  
    if (firstBlock.dataset.tree === secondBlock.dataset.tree) {
  
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');
  
      firstBlock.classList.add('has-match');
      secondBlock.classList.add('has-match');
  
    } else {
  
      triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
  
      setTimeout(() => {
  
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');
  
      }, duration);  
    }
  
  }
  
  // Shuffle Function
  function shuffle(array) {
  
    // Settings Vars
    let current = array.length,
        temp,
        random;
  
    while (current > 0) {
  
      // Get Random Number
      random = Math.floor(Math.random() * current);
  
      // Decrease Length By One
      current--;
  
      // [1] Save Current Element in Stash
      temp = array[current];
  
      // [2] Current Element = Random Element
      array[current] = array[random];
  
      // [3] Random Element = Get Element From Stash
      array[random] = temp;
  
    }
  
    return array;
  
  }
