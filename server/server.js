require('dotenv').config()
express = require("express");

app = express();



const PORT = 8080;
const tmdbImageURL = "https://image.tmdb.org/t/p/original/";
+

app.use(express.json());

app.get("/images/nowplaying", async(req, res) => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    let homeImageUrls = [];
    const options = {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: 'Bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN}
    };
    await fetch(url, options)
    .then(res => res.json())
    .then((data) => {
        for(i of data.results){
            homeImageUrls.push(tmdbImageURL + i.backdrop_path)
        }
        console.log("Request recieved on /images/nowplaying")
    })
    .catch(err => console.error('error:' + err));
    await console.log(homeImageUrls)
    await res.send(homeImageUrls)
    })

app.get("/toprated", (req, res) => {

    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: 'Bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN}
    };

    fetch(url, options)
    .then(data => data.json())
    .then(json => {
        let moviesData = [];
        for(i of json.results){
            let movie = {};
            movie.id = i.id;
            movie.name = i.title;
            movie.date = i.release_date;
            movie.poster = tmdbImageURL + i.poster_path;
            movie.rating = i.vote_average;
            moviesData.push(movie);
        }
        res.send(moviesData);
    })
    .catch(err => console.error('error:' + err));
})
app.listen("8080", () => console.log("Server is live on PORT " + PORT));
