fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit")
    .then(response => response.json() )
    .then(data =>{
        joke.textContent = data.joke;

    })

