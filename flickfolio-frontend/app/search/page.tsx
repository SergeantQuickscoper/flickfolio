import Footer from "@/components/Footer"
import HeaderSearch from "@/components/HeaderSearch"
import MovieSearchResults from "@/components/MovieSearchResults"
const SearchResults = async({searchParams}:any) =>
{
    console.log(searchParams.search_query)
    let searchResults:any = [];
    await fetch('http://localhost:8080/movies/search/' + searchParams.search_query, { cache: 'no-store' })
    .then(data => data.json())
    .then(movieInfo => searchResults = movieInfo)
    return(
        <main>
            <HeaderSearch />
            <section>
                <MovieSearchResults searchMovieData={searchResults}/>
            </section>
            <Footer />
        </main>
        
    )
}

export default SearchResults;