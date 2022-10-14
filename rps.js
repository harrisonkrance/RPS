const choices = ["rock", "paper", "scissors"] //array that defines the choices you can make



function game() {
    playRound();
} //function where the playround function lives

function playRound () {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() { //function that prompts user to select rock, paper or scissors
   
    let input = prompt("Type Rock, Paper, or Scissors");//creates prompt asking you to type rock paper or scissors
   
    while (input == null) { //if input is null (nothing entered)
        input = prompt ("Type Rock, Paper or Scissors.");//if you don't enter a choice you get the same message as the prompt
    }
    
    input = input.toLowerCase(); //whatever is input is made lowercase
    
    let check = validateInput(input);//creates a variable check to determine if the input is true to one of the array choices
        
    while (check == false) { //if input is not part of array (references validate input function below)
            input = prompt ("Type Rock, Paper or Scissors. Spelling must match."); //prompt to type it again with correct spelling
        while (input == null) { //if input is null (nothing entered)
            input = prompt ("Type Rock, Paper or Scissors."); //if you don't enter a choice you get the same message as the prompt
        }   
        input = input.toLowerCase();  
        check = validateInput(input);
    }



function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; //returns a random number rounded down multiplied by how many choices there are
}

function validateInput (choice) { //function to validate if choice belongs to the choices array
    return choices.includes(choice) //if whatever was input is included in choices array
}


game();