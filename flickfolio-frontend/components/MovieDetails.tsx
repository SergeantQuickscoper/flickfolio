import { Button } from "./ui/button";
const MovieDetails = (props: any) => {
    return(
        <div className="text-white">
            <div className="flex flex-row justify-center mt-10 mb-36">
                <div>
                    <img src={props.posterLink} className="h-[542px] rounded-sm"/>
                </div>
                <div className="flex flex-col w-7/12 pl-24 align-middle min-h-full justify-evenly">
                    <h1 className=" font-black text-5xl">
                        {props.title}
                    </h1>
                    <p className="w-4/5 font-light">
                        {props.overview}
                    </p>
                    <Button className= "mt-6 bg-secondaryBackground rounded-full px-10 py-8 w-1/5 "><p className="text-lg">Add to List</p></Button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;