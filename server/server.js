require('dotenv').config()
express = require("express");

app = express();


const PORT = 8080;

app.get("/images/nowplaying", async(req, res) => {
    const tmdbImageURL = "https://image.tmdb.org/t/p/original/";
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    let imageUrls = [];
    const options = {
    method: 'GET',
    headers: {accept: 'application/json', Authorization: 'Bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN}
    };
    await fetch(url, options)
    .then(res => res.json())
    .then((data) => {
        for(i of data.results){
            imageUrls.push(tmdbImageURL + i.backdrop_path)
        }
        console.log(imageUrls)
    })
    .catch(err => console.error('error:' + err));
    await console.log(imageUrls)
    await res.send(imageUrls)
    })
app.listen("8080", () => console.log("Server is live on PORT " + PORT));
