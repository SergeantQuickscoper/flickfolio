import { Input } from "./ui/input";
import Logo from "./Logo";
import Link from "next/link";
import InputWrapper from "./InputWrapper";
const HeaderSearch = () => {
    return(
        <header className="flex flex-row bg-primaryBackground align-middle pb-8">
            <div className="h-full">
                <Link href="/">
                    <Logo />
                </Link>
                
            </div>
            
            <div className="align-middle ml-28 mt-5 w-3/5 pt-6">
                <InputWrapper />
            </div>
            
            <div className="flex flex-row text-white justify-evenly align-middle mt-5 w-1/2 ml-28 pt-[36px]">
                <h2 className="mx-4">Top Rated</h2>
                <h2 className="mx-4">Trending</h2>
                <h2 className="ml-4 mr-24">Now Playing</h2>
            </div>
        </header>
    )
}

export default HeaderSearch;