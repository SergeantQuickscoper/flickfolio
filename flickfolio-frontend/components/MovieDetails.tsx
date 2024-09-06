import { Button } from "./ui/button";
const MovieDetails = (props: any) => {
    return(
        <div className="text-white">
            <div className="flex flex-row justify-center">
                <div>
                    <img src="/Poster.png "/>
                </div>
                <div className="flex flex-col w-7/12 pl-24 align-middle min-h-full justify-evenly">
                    <h1 className=" font-black text-5xl">
                        The Shawshank Redemption
                    </h1>
                    <p className="w-4/5 font-light">
                    Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.
                    </p>
                    <Button><p>Add to List</p></Button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;