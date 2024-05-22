const btnEl = document.getElementById('jokebtn');
const jokeEl = document.getElementById('joke');


//url to get joke
const url = 'https://lt-dad-joke.onrender.com/joke';

btnEl.addEventListener('click', getJoke);

async function getJoke(){
    try {
        jokeEl.innerText = 'Loading...';
        const response = await fetch(url);
        const jokeJson = await response.json();
        jokeEl.innerText = jokeJson[0].joke;

    } catch(err){
        jokeEl.innerText = `${err.message}. Please try again later....`
    }
    
}

