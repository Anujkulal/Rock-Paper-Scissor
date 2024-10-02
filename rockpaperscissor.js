const user = document.querySelector("#user-score")
        const comp = document.querySelector("#comp-score")
        const buttons = document.querySelectorAll(".buttons") 
        const resetGame = document.querySelector("#reset") 
        const h4 = document.querySelector(".game-status h4")
        let userScore = 0;
        let compScore = 0;

        const compChoice = () => {
            let choiceList = [];
            let randomNumber = Math.round((Math.random())*2);
            buttons.forEach(function(button){
                item = button.getAttribute("id");
                choiceList.push(item);   
            })
            return choiceList[randomNumber];
        }

        const playGame = (compChoice) => {
            buttons.forEach(function(button){
                button.addEventListener('click', function(){
                    let userSelection = button.getAttribute("id");
                    let compSelection = compChoice();
                    // user.textContent = userSelection;
                    // comp.textContent = compSelection;
                    if(userSelection === compSelection){
                        drawGame();
                       
                    }
                    else{
                        let userWin = true;
                        if(userSelection === 'rock'){
                            userWin = compSelection ==="paper"? false: true;
                        }
                        else if(userSelection === 'paper'){
                            userWin = compSelection === "scissor"? false: true;
                        }
                        else if(userSelection === 'scissor'){
                            userWin = compSelection === 'rock'? false: true;
                        }
                        showWinner(userWin, userSelection, compSelection);
                    }
                    
                })
            })
        }
        function drawGame(){
            resetGame.style.display = "block"
            h4.innerText = "Game Draw";
            h4.style.color = "#587aeb"
            resetGame.addEventListener("click", function(){
                userScore = 0;
                user.innerText = userScore;
                compScore = 0;
                comp.innerText = compScore;
                 resetGame.style.display = "none"
            })
        }

        const showWinner = (userWin, userSelection, compSelection) =>{
            if(userWin){
                userScore++;
                user.innerText = userScore;
                h4.innerText = `You won. ${userSelection} beats ${compSelection}`;
                h4.style.color = "#1cc57f";
            }
            else{
                compScore++;
                comp.innerText = compScore;
                h4.innerText = `You Loose. ${compSelection} beats ${userSelection}`;
                h4.style.color = "#be4848";
            }
        }

        playGame(compChoice);

