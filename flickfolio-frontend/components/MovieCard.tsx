const MovieCard = () => {
    return(
        <section className="inline-block text-white w-fit mx-10 py-12 max-w-[234px]">
            <div>
                <img src="Poster.png"/>
            </div>
            <div>
                <h1 className=" text-lg font-bold">The Shawshank Redemption</h1>
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    <h2 className="font-light">1994-09-23</h2>
                    
                </div>
                <div>
                    <h2 className="font-light">Rating 8.702</h2>
                </div>
            </div>
        </section>
    )
}

export default MovieCard;