// Write your JS here.

window.addEventListener('DOMContentLoaded', () => {
    const moleHeads = document.querySelectorAll(".wgs__mole-head");
    moleHeads.forEach(moleHead =>{
        moleHead.addEventListener('click', hitMole);
    });
    const playGame = setInterval(()=>{
     const gameMove = popUpRandomMole();
     if(!gameMove){
       clearInterval(playGame);
       moleHeads.forEach(moleHead =>{
           moleHead.removeEventListener('click',hitMole);
       });  
     } 
    }, 3000);
  
  });

  function hitMole(e ){
    const moleHead = e.target;
    moleHead.classList.add("wgs__mole-head--hit");
  }

  function popUpRandomMole(){
    
    const moleHeads = document.querySelectorAll('.wgs__mole-head:not(.wgs__mole-head--hit)');
    if(moleHeads.length === 0)return false;
    
    for (let moleHead of moleHeads) {
        moleHead.classList.add('wgs__mole-head--hidden');
    }
    const randomMole = Math.floor(Math.random() * moleHeads.length);
    moleHeads[randomMole].classList.remove('wgs__mole-head--hidden');
    return true;
  }


//   select all of the mole head elements on the page (there should be eight)
    // by maybe using document.querySelectorAll() 
    // or document.getElementsByClassName() (those return lists of elements)
// calculate a random number between zero and seven, inclusive
// use that random number as the index of the list that you got for the mole head elements
// remove the --hidden Modifier CSS class from the mole head element
// set a timeout for one second to call another function named hideMole 
    // with the mole head element that you already selected