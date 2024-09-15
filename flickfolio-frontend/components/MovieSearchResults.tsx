'use client'
 
import { useSearchParams } from 'next/navigation'
import MovieCard from './MovieCard'

const MovieSearchResults = (props:any) => {
    const searchParams = useSearchParams()
    const searchMovieData = props.searchMovieData;
    
    const searchQuery = searchParams.get("search_query")
    return(
        <section id="searchResults" className='bg-primaryBackground'>
            <div className='mx-10 text-white'>
                <h1>Search Results for {searchQuery}</h1>                
            </div>
            {searchMovieData.map((i:any) => {
                    return(<MovieCard key={i.index} name={i.name} rating={i.rating} poster={i.poster} date={i.date} id={i.id}/>)
            })}
                
        </section>
    )
}

export default MovieSearchResults;