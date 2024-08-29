import Footer from "@/components/Footer"
import HeaderSearch from "@/components/HeaderSearch"
import MovieCard from "@/components/MovieCard"
export default async function TopRated(){
    let moviesData:any = [];

    await fetch('http://localhost:8080/toprated', { cache: 'no-store' })
    .then((res) => res.json())
    .then((data) => moviesData = data)
    await console.log(moviesData)
    return await(
        <main>
            <HeaderSearch />

            <section className="h-fit bg-primaryBackground pb-5">
                
                {moviesData.map((i:any) => {
                    console.log(i)
                    return(<MovieCard key={i.id} name={i.name} rating={i.rating} poster={i.poster} date={i.date}/>)
                })}
                

            </section>

            <Footer />
        </main>
        
    )
}