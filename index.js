

document.getElementById("throw").addEventListener("click", PlayGame);

function PlayGame(){
    loadGame();  
}

function loadGame () {
    document.querySelector("h1").textContent = ".";
    
    let myPromise = new Promise(function(myResolve){

        var counter = 0;
  
        setInterval(function(){

            if (counter > 6) {
                clearInterval();
                myResolve("ok");
            }else{
                var dice1 = Math.floor((Math.random() * 6)+1);
                var dice2 = Math.floor((Math.random() * 6)+1);
    
                document.querySelector(".img1").setAttribute("src", "images/dice"+dice1+".png");
                document.querySelector(".img2").setAttribute("src", "images/dice"+dice2+".png");
                counter += 1;
                // console.log(counter);
            }
                    
         } ,200);


                });



    myPromise.then(

        function(value) {
        
            var results = rollDice();
            var a = results.dice1;
            var b = results.dice2;
            console.log(a,b); //correct
            checkResult(a,b);
        
            function rollDice(){
        
                document.querySelector("h1").classList.add("loading");
                  
                    var dice1 = Math.floor((Math.random() * 6)+1);
                    var dice2 = Math.floor((Math.random() * 6)+1);
        
                    document.querySelector(".img1").setAttribute("src", "images/dice"+dice1+".png");
                    document.querySelector(".img2").setAttribute("src", "images/dice"+dice2+".png");
                    
                document.querySelector("h1").classList.remove("loading");
            
                return {dice1, dice2};
        
            }

        })

}



function checkResult(dice1,dice2){

    document.getElementById("throw").setAttribute("value","Click to Start again");
    
    if (dice1===dice2){
        document.querySelector("h1").textContent = "It's a draw!";
    } else if (dice1>dice2){
        document.querySelector("h1").textContent = "Player 1 Wins!";
    }else {
        document.querySelector("h1").textContent = "Player 2 Wins!";
    }
    
}


