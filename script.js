let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");


let turn = 0;

const winPat = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];


function checkWin() {
  for (let pattern of winPat) {
    let [a, b, c] = pattern;
    
    if (
      boxes[a].innerHTML !== "" &&
      boxes[a].innerHTML === boxes[b].innerHTML &&
      boxes[a].innerHTML === boxes[c].innerHTML
    ) {
      setTimeout(()=>{
        alert(`Player ${boxes[a].innerHTML} wins!`)
        reset();
      },500)
     
     return true;
    }
  }
  return false;
}

boxes.forEach((box) =>{

  box.addEventListener("click" ,()=>{
    if(box.innerHTML != ""){
      alert("box is checked")
      }
      else{
        if(turn){
          box.innerHTML = 'X';
        }
        else{
          box.innerHTML = 'O';
        }
        if(!checkWin())turn = 1 - turn;
      }
    
  })


  
})

resetbtn.addEventListener('click', () => {
      reset();
});
function reset() {
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
}
