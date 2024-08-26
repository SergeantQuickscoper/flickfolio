import Footer from "@/components/Footer"
import HeaderSearch from "@/components/HeaderSearch"
import MovieCard from "@/components/MovieCard"
export default function TopRated(){

    return(
        <main>
            <HeaderSearch />

            <section className="h-fit bg-primaryBackground">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />

            </section>

            <Footer />
        </main>
        
    )
}