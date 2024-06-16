function makeBubble(){
    var count = "";
    for(var i = 1;i<=98 ;i++){
        var rn = Math.floor(Math.random()*10);
       count +=  ` <div id="bubble">${rn}</div>`;
    }
    
    document.querySelector(".sec2").innerHTML = count ;
}

var timer = 60;
function runTimer(){
       var timerRun = setInterval(()=>{
          if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer ;
          }
          else{
            clearInterval(timerRun);
            document.querySelector(".sec2").innerHTML = "GAME END !"
          }
        },1000)
    
}
 var hitrn = 0;
function getNewhit(){
    hitrn = Math.floor(Math.random()*10) ;
    document.querySelector("#hitval").textContent = hitrn ;
}

var score = 0 ;
function increaseScore(){
    score += 10 ;
    document.querySelector("#scoreVal").textContent = score ;
}

document.querySelector(".sec2").addEventListener("click" ,(e)=>{
  var clickedNum = Number(e.target.textContent) ;
  if(clickedNum === hitrn){
    increaseScore();
    makeBubble();
    getNewhit();
  }
});



getNewhit();
runTimer() ;
makeBubble() ;

