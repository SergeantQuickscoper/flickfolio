import Footer from "@/components/Footer"
import HeaderSearch from "@/components/HeaderSearch"
import MovieCard from "@/components/MovieCard"
export default async function TopRated(){
    let moviesData:any = [];

    await fetch('http://localhost:8080/toprated', { cache: 'no-store' })
    .then((res) => res.json())
    .then((data) => moviesData = data)
    return await(
        <main>
            <HeaderSearch />

            <section className="h-fit bg-primaryBackground pb-5 flex flex-row justify-center">
                <div className="max-w-fit p-0">
                    {moviesData.map((i:any) => {
                        return(<MovieCard key={i.index} name={i.name} rating={i.rating} poster={i.poster} date={i.date} id={i.id}/>)
                    })}
                </div>
                
                

            </section>

            <Footer />
        </main>
        
    )
}