fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
    .then(response => response.json() )
    .then(data =>{
        joke.textContent = data.joke;
    })

.catch(error =>{
    console.error ("error fetching joke", error);
    joke.textContent = "No one is funny ALL the time!";
})
