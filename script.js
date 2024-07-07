
const jokes = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const generatejokes = async () => {
    
    const setHeader = {
        headers: {
            Accept : "application/json"
        }
    };
    const res = await fetch('https://icanhazdadjoke.com/', setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
    //console.log(data.joke);
    
};

jokeBtn.addEventListener('click', generatejokes);
generatejokes();
