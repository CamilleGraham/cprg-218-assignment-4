

function newJoke(category){
    fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
    .then(response => response.json() )
    .then(data => {
        const jokeElement = document.getElementById("joke");
        const headingElement = document.getElementById("heading");

    if (data.type=="single"){
        jokeElement.textContent = data.joke; 
    }
        else {
        jokeElement.textContent = data.setup + "..." + data.delivery;
        }
    
    if (data.category=="&#128518 Pun"){
        headingElement.textContent = "&#128518; A Random Pun! &#128514;";
    }
        else if (data.category== "Misc"){
            headingElement.textContent = "&#128518; A Random Miscellaneous Joke! &#128514;"
        }

        else {
        headingElement.textContent = `&#128518; A Random ${category} Joke! &#128514;`;
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