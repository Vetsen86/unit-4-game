$(document).ready(function() {
    var randomNumber = 0;

    function getRandomNumber() {
        randomNumber = Math.floor(Math.random() * 102 + 19);
        $("#random-number").text("The random number is: " + randomNumber);
    }

    getRandomNumber();

    var blueCrystal = 0;
    var brownCrystal = 0;
    var clearCrystal = 0;
    var purpleCrystal = 0;
    
    function getCrystals() {
        blueCrystal = Math.floor(Math.random() * 12 + 1);
        brownCrystal = Math.floor(Math.random() * 12 + 1);
        clearCrystal = Math.floor(Math.random() * 12 + 1);
        purpleCrystal = Math.floor(Math.random() * 12 + 1);
    }

    getCrystals();

    var score = 0;
    var gameOver = false;
    var wins = 0;
    var losses = 0;

    $("img").on("click", function() {
        if(gameOver) {
            return false;
        }

        if(this.id === "blueCrystal") {
            score += blueCrystal;
        } else if (this.id === "brownCrystal") {
            score += brownCrystal;
        } else if (this.id === "clearCrystal") {
            score += clearCrystal;
        } else if (this.id === "purpleCrystal") {
            score += purpleCrystal;
        }

        $("#score").text("Your score is : " + score);

        if(score === randomNumber) {
            gameOver = true;
            $(".win-lose").css("display", "block");
            wins++;
            $("#win").text("Wins: " + wins);
        } else if (score > randomNumber) {
            gameOver = true;
            $(".win-lose").css("display", "block");
            $("#win-text").text("You lose!");
            losses++;
            $("#lose").text("Losses: " + losses);
        }
    });

});