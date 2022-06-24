    var scoreofuser=0;
    var scoreofcomputer=0;
    var options =['rock','scissors','paper']

    function rock(){   
    var randomIndex = Math.floor(Math.random()*options.length)
    var choiceofcomputer = options[randomIndex]
    var choiceofuser ='rock'
    if(choiceofcomputer=='paper'){
        disp.innerText = 'computer chose paper,You lose'
       scoreofcomputer ++
        Computerscore.innerText = scoreofcomputer
    }
    else if(choiceofcomputer==`scissors`){
        disp.innerText = `computer chose scissors,You win`
        scoreofuser ++
        Userscore.innerText = scoreofuser
    }
    else if(choiceofcomputer==`rock`){
        disp.innerText = `computer chose rock,it is a tie`
    }
} 
function paper(){   
    var randomIndex = Math.floor(Math.random()*options.length)
    var choiceofcomputer = options[randomIndex]
    var choiceofuser ='paper'
    if(choiceofcomputer=='paper'){
        disp.innerText = 'computer chose paper,its a tie'
    }
    else if(choiceofcomputer==`scissors`){
        disp.innerText = `computer chose scissors,You lose`
        scoreofcomputer ++
        Computerscore.innerText = scoreofcomputer
    }
    else if(choiceofcomputer==`rock`){
        disp.innerText = `computer chose rock,You win`
        scoreofuser ++
        Userscore.innerText = scoreofuser
    }
} 
function scissors(){   
    var randomIndex = Math.floor(Math.random()*options.length)
    var choiceofcomputer = options[randomIndex]
    var choiceofuser ='scissors'
    if(choiceofcomputer=='paper'){
        disp.innerText = 'computer chose paper,You win'
        scoreofuser ++
        Userscore.innerText = scoreofuser
     
    }
    else if(choiceofcomputer==`scissors`){
        disp.innerText = `computer chose scissors,Its a tie`
        
    }
    else if(choiceofcomputer==`rock`){
        disp.innerText = `computer chose rock,You lose`
        scoreofcomputer ++
        Computerscore.innerText = scoreofcomputer
    }
} 
