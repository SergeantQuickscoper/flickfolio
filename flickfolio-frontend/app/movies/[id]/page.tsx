import HeaderSearch from "@/components/HeaderSearch";
import Footer from "@/components/Footer";
import MovieDetails from "@/components/MovieDetails";

// TODO fix Weird as hell SVG issue, images keep dissapearing
const MoviePage = async({ params }:any) => {

    return(
        <main className="bg-primaryBackground">
            <HeaderSearch />
            <div>
                <MovieDetails />
            </div>
            <Footer />
        </main>
    )
}

export default MoviePage;