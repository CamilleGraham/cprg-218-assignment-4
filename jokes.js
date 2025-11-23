
function newJoke(category){
    fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
    .then(response => response.json() )
    .then(data => {
        const jokeElement = document.getElementById("joke");
        const headingElement = document.getElementById("heading");

    if (data.type==="single"){
        jokeElement.textContent = data.joke; 
    }
        else {
        jokeElement.textContent = data.setup + "..." + data.delivery;
        }
    
    if (data.category==="Pun"){
        headingElement.textContent = "A Random Pun!";
    }
        else {
        headingElement.textContent = `A Random ${category} Joke!`;
        }
});
}

document.getElementById("Programming").addEventListener("click",function(){
    newJoke("Programming");
}); 

document.getElementById("Misc").addEventListener("click", function(){
    newJoke("Misc");
});

document.getElementById("Pun").addEventListener("click", function(){
    newJoke("Pun");

});

document.getElementById("Spooky").addEventListener("click", function(){
    newJoke("Spooky")
});

document.getElementById("Christmas").addEventListener("click", function (){
    newJoke("Christmas")
});