import HeaderSearch from "@/components/HeaderSearch";
import Footer from "@/components/Footer";
import MovieDetails from "@/components/MovieDetails";
import MovieCard from "@/components/MovieCard";
// TODO fix Weird as hell SVG issue, images keep dissapearing
const MoviePage = async({ params }:any) => {
    let moviesData:any = [];

    await fetch('http://localhost:8080/movies/' + params.id + '/similar', { cache: 'no-store' })
    .then((res) => res.json())
    .then((data) => moviesData = data)


    const tmdbImageURL = "https://image.tmdb.org/t/p/original/";
    let movieObj:any = {};
    await fetch('http://localhost:8080/movies/' + params.id, { cache: 'no-store' })
    .then(data => data.json())
    .then(movieInfo => movieObj = movieInfo)

    return(
        <main className="bg-primaryBackground">
            <HeaderSearch />
            <div>
                <MovieDetails title={movieObj.title} overview={movieObj.overview} posterLink={tmdbImageURL + movieObj.poster_path} />
            </div>
            <section>
                {moviesData.map((i:any) => {
                    return(<MovieCard key={i.index} name={i.name} rating={i.rating} poster={i.poster} date={i.date} id={i.id}/>)
                })}
            </section>
            <Footer />
        </main>
    )
}

export default MoviePage;