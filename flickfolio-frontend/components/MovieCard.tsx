const MovieCard = (props:any) => {
    return(
        <section className="inline-block text-white w-fit mx-10 py-4 max-w-[234px]">

            <div className="pb-3">
                <img src= {props.poster}/>
            </div>
            <div className="flex flex-row justify-between pb-1">
                <div>
                    <h2 className="font-light">{props.date}</h2>
                    
                </div>
                <div>
                    <h2 className="font-light">Rating {props.rating}</h2>
                </div>
            </div>
            <div className="h-[54px]">
                <h1 className="text-lg font-bold h-full">{props.name}</h1>
            </div>
            
        </section>
    )
}

export default MovieCard;