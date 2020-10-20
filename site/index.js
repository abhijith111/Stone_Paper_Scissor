function playWith(btnId) {
    let countDown = parseInt(document.getElementById("count__down").innerHTML);
    countDown -= 1;
    if (countDown < 0) {
        let pass =
            parseInt(document.getElementById("pc__score").innerHTML) -
            parseInt(document.getElementById("player__score").innerHTML);
        if (pass > 0) {
            alert("PC Wins");

        } else if (pass == 0) {
            alert("Match Draw");
        } else if (pass < 0) {
            alert("You Won");
        }
    } else {
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
        })
            .then(() => {
                if (btnId === "btn__stone") {
                    document.getElementById("player__input").innerHTML =
                        "Stone";
                } else if (btnId === "btn__paper") {
                    document.getElementById("player__input").innerHTML =
                        "Paper";
                } else if (btnId === "btn__scissor") {
                    document.getElementById("player__input").innerHTML =
                        "Scissor";
                }
            })
            .then(() => {
                let playerInput = document.getElementById("player__input")
                    .innerHTML;
                let pcInput = document.getElementById("pc__input").innerHTML;
                let playerScore = parseInt(
                    document.getElementById("player__score").innerHTML
                );
                let pcScore = parseInt(
                    document.getElementById("pc__score").innerHTML
                );
                if (playerInput == pcInput) {
                } else if (pcInput == "Stone" && playerInput == "Scissor") {
                    pcScore += 1;
                    document.getElementById("pc__score").innerHTML = pcScore;
                } else if (pcInput == "Stone" && playerInput == "Paper") {
                    playerScore += 1;
                    document.getElementById(
                        "player__score"
                    ).innerHTML = playerScore;
                } else if (pcInput == "Paper" && playerInput == "Stone") {
                    pcScore += 1;
                    document.getElementById("pc__score").innerHTML = pcScore;
                } else if (pcInput == "Paper" && playerInput == "Scissor") {
                    playerScore += 1;
                    document.getElementById(
                        "player__score"
                    ).innerHTML = playerScore;
                } else if (pcInput == "Scissor" && playerInput == "Stone") {
                    playerScore += 1;
                    document.getElementById(
                        "player__score"
                    ).innerHTML = playerScore;
                } else if (pcInput == "Scissor" && playerInput == "Paper") {
                    pcScore += 1;
                    document.getElementById("pc__score").innerHTML = pcScore;
                }
                document.getElementById("count__down").innerHTML = countDown;
            });
    }
}
