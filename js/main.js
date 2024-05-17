const btnEl = document.getElementById('jokebtn');
const jokeEl = document.getElementById('joke');

//APIKey
const apiKey = secret.API_Key;

//options
const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
    }
}
//url to get joke
const url = 'https://api.api-ninjas.com/v1/dadjokes';

btnEl.addEventListener('click', getJoke);

async function getJoke(){
    try {
        jokeEl.innerText = 'Loading...';
        const response = await fetch(url, options);
        const jokeJson = await response.json();
        jokeEl.innerText = jokeJson[0].joke;

    } catch(err){
        jokeEl.innerText = `${err.message}. Please try again later....`
    }
    
}

