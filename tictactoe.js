let btn = document.querySelectorAll(".box");

let turn0 = true;//playerX , playerO

const winPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

let count =0;
btn.forEach((box)=>{
  box.addEventListener("click",()=>{
     
     
     if (turn0){
      box.textContent = 'X';
      box.style.color = "red"
      count+=1
      turn0 = false;
     }else {
      box.textContent = "O";
      box.style.color = "blue"
      turn0=true;
      count+=1

     }

    box.disabled = true;
    checkdraw(count)
    checkWinner()
  })
})

  

const enableboxes = () =>{
  for(box of btn){
    box.disabled = false;
    box.innerText="";
  }
}

const checkWinner =()=>{
  for(i of winPattern){
    let pos1 = btn[i[0]].innerText;
    let pos2 = btn[i[1]].innerText;
    let pos3 = btn[i[2]].innerText;
  
    if(pos1 != "" && pos2 != "" && pos3 != "" ){
      if(pos1 === pos2 && pos2 === pos3){
        let val = document.getElementById("msg");
        val.classList.remove("hide")
        val.innerText = `Congratulations, winner is ${pos1}`
        for(box of btn){
          box.disabled=true;

        }
       
      }
      
    }
    }
  }

let rstbtn1 = document.getElementById("rstbtn")

rstbtn1.addEventListener("click",()=>{
  turn0 =true;
  enableboxes();
  let val = document.getElementById("msg");
  val.setAttribute("class","hide")

})

const checkdraw =(count)=>{
  if(count==9){
        let val = document.getElementById("msg");
        val.classList.remove("hide")
        val.innerText = `Match is draw`
  }
}
