fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
 .then(response => response.json() )
    .then(data => {
        joke.textContent = data.joke;
        if (data.type=="single"){
        joke.textContent = data.joke; }
        else {
        joke.textContent = data.setup + "..." + data.delivery;
        }
    })

function newJoke(category){
    fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
     .then(response => response.json() )
        .then(data => {

    if (data.type=="single"){
       joke.textContent = data.joke; 
    }
        else {
        joke.textContent = data.setup + "..." + data.delivery;
        }
    
    if (data.category=="Pun"){
        heading.textContent = "A Random Pun!";
    }
        else if (data.category== "Misc"){
            heading.textContent = "A Random Miscellaneous Joke!"
            }

            else {
            heading.textContent = `A Random ${category} Joke!`;
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


