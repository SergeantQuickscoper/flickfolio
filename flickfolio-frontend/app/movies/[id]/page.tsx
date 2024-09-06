import HeaderSearch from "@/components/HeaderSearch";
import Footer from "@/components/Footer";

// TODO fix Weird as hell SVG issue, images keep dissapearing
const MoviePage = async({ params }:any) => {

    return(
        <main className="bg-primaryBackground">
            <HeaderSearch />
            <div className="">
                 
            </div>

            <Footer />
        </main>
    )
}

export default MoviePage;