let playerScore = 0;
let pcScore = 0;
function playWith(btnId) {
    if (btnId === "btn__stone") {
        document.getElementById("player__input").innerHTML = "Stone";
    } else if (btnId === "btn__paper") {
        document.getElementById("player__input").innerHTML = "Paper";
    } else if (btnId === "btn__scissor") {
        document.getElementById("player__input").innerHTML = "Scissor";
    }
    //edit for new branch commit
    $.ajax({
        url:
            "https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new",
        method: "get",
        success: (response) => {
            if (response[0] == 1 || response[0] == 4) {
                document.getElementById("pc__input").innerHTML = "Stone";
            } else if (response[0] == 2 || response[0] == 5) {
                document.getElementById("pc__input").innerHTML = "Paper";
            } else if (response[0] == 3 || response[0] == 6) {
                document.getElementById("pc__input").innerHTML = "Scissor";
            }
        },
    }).then((response) => {
        alert(response[0])
        let playerInput = document.getElementById("player__input").innerHTML;
        let pcInput = document.getElementById("pc__input").innerHTML;
        if (playerInput == pcInput) {
        } else if (pcInput == "Stone" && playerInput == "Scissor") {
            pcScore += 1;
            document.getElementById('pc__score').innerHTML = pcScore
        }else if(pcInput == "Stone" && playerInput == "paper"){
            playerScore+=1;
            document.getElementById('player__score').innerHTML = playerScore;
        }else if (pcInput == "Paper" && playerInput == "Stone"){
            pcScore+=1;
            document.getElementById('pc__score').innerHTML = pcScore;
        }else if(pcInput == "Paper" && playerInput == "Scissor"){
            playerScore+=1;
            document.getElementById('player__score').innerHTML = playerScore;
        }else if(pcInput == "Scissor" && playerInput == "Stone"){
            playerScore+=1;
            document.getElementById('player__score').innerHTML = playerScore;
        }else if(pcInput == "Scissor" && playerInput == "paper"){
            pcInput+=1;
            document.getElementById('pc__input').innerHTML = pcInput; 
        }
    });
}
