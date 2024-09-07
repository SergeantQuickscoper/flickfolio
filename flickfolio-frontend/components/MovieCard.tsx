import Link from "next/link";


const MovieCard = (props:any) => {
    return(
        <section className="inline-block text-white w-fit mx-10 py-4 max-w-[234px] h-fit">
            <Link href={"/movies/" + props.id}>
            <div className="pb-3">
                <img src= {props.poster} className="rounded-md"/>
            </div>
            </Link>   
            
            <div className="flex flex-row justify-between pb-1">
                <div>
                    <h2 className="font-light">{props.date}</h2>

                </div>
                <div>
                    <h2 className="font-light">Rating {props.rating}</h2>
                </div>
            </div>
            
            <Link href={"/movies/" + props.id}>
            <div className="h-[54px]">
                <h1 className="text-lg font-bold h-full">{props.name}</h1>
            </div>
            </Link>
        </section>
    )
}

export default MovieCard;