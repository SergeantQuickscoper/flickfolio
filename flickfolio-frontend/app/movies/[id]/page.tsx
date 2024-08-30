const MoviePage = ({ params }:any) => {
    return(
        <main className="bg-primaryBackground h-screen">
            <h1 className=" text-white">Movie Info {params.id}</h1>
        </main>
    )
}

export default MoviePage;