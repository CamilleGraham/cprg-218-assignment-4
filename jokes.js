fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
    .then(response => response.json() )
    .then(data =>{
        joke.textContent = data.joke;
    })

function newJoke(catagory){
    fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
    .then(response => response.json() )
    .then(data =>{
        const jokeElement = document.getElementById("joke");
        const headingElement = document.getElementById("heading");
    })

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
        headingElement.textContent = 'A ${category} Joke';
        }

    .catch(error => { 
    console.error ("error fetching joke", error);
    jokeElement.textContent = "I can't think of a joke. No one is funny ALL the time!";
})

}

