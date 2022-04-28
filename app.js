// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1a
const jokeJS1 = JSON.parse(`{"id:18,"type":"programming","setup:"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(`Question 1`);
console.log(jokeJS1);

//1b
const {setup} = jokeJS1;
p1.innerText = setup;

//OR
/*console.log(jokeJS1.punchline);
p2.innerText = jokeJS1.punchline;
*/

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

// 2a
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)

// 2b
.then(friendsJS2 => {
    console.log(friendsJS2.data.character);
    console.log(friensJS2.data.quote);
    // 2c
    p3.innerText = friendsJS2.data.character;
    p4.innerText = friendsJS2.data.quote;
})

// 2d
.catch(rejected =>{
    console.log(`NOPE! Try again.`);
    console.log(rejected);
    alert(`No dice! TRY AGAIN.`);
})

// OR
/*
.then(res =>. {
    console.log(`Question 2`);
    console.log(res);
    const friendsJS2 = res;
    console.log(friendsJS2);

    //2c
    p3.innerText = friendsJS2.data.character;
    p4.innerText = friendsJS2.data.quote;
})
// 2d
.catch (err => {
    console.log(`Question 2`);
    console.log(err);
});
*/

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

// 3a & 3b  
async function quoteFunc(){
    try{
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
        // 3c
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;
        // 3d
    } catch (err){
        console.log(err);
    }
}
quoteFunc();


// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 4a
async function tvMazeFunc(){
    try{
        const episodeByNum = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`); //did not get
        p7.innerText = episodeByNum.data.name;
    } catch (err){
        console.log(err);
    }
}
tvMazeFunc();

// OR
/*
const id = 38963;
const season = 2;
const episode = 8;
const tvMazeFunc = `https://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&number=${episode}`;

async function tvMazeFunc(){
    try{
        const show = await axios.get(tvMazeURL);
        console.log(`Question 4`);
        console.log(show);
        p7.innerText = show.data.name;
    } catch (err){
        console.log(err);
    }
}
tvMazeFunc();
*/

// BONUS
// 5
const body = document.querySelector(`body`);
axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
.then (res => {
    const img = document.createElement(`img`);
    img.src = res.data.sprites.front_default;
    body.append(img);
})

.catch(err => {
    console.log(err);
    alert(`You did NOT cath that Pokemon!`);
});

// OR
/*
async function pokePic(){
    try{
    const pikachuImg = `https://pokeapi.co/api/v2/pokemon/pikachu`;
    const pikachu = await axios.get(pikachuImg);
    const psyDuckImg = `https://pokeapi.co/api/v2/pokemon/psyduck`;
    cost imgOne = document.createElement(`img`);
    imgOne.src = pikachu.data.sprites.front_shiny;
    fourth.after(imgOne)
} catch(err){
    console.log(err);
    console.log(`You have been defeated, try again.`);
    alert(`You have been defeated, try again.`);
    }
}
pokePic();
*/

// 6
const body = document.querySelector(`body`);
async function bonusSix(){
    try{
        const moviePoster = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=eafad0d0&t=spirited+away`);
        const poster = document.createElement(`img`);
        poster.src = moviePoster.data.Poster;
        body.append(poster);
    } catch (err){
        console.log(err);
    }
}
bonusSix();

// OR
/*
const body = document.querySelector(`body`);
const image2 = document.createElement(`img`);
body.append(image2);

const apikey = `eafad0d0`;
const title = `Guardians of the Galaxy Vol. 2`;
const ombdURL = `http:www.omdbapi.com/?apikey=${apikey}&${apititle}`;

async function omdb(){
    const response = await axios.get(ombdURL);
    console.log(`Question 6`);
    console.log(response);
    image2.src = response.data.Poster;
}
omdb();
*/