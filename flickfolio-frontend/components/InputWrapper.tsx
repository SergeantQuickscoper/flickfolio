"use client"

import { useState } from "react";
import { Input } from "./ui/input"
import Link from 'next/link'
import { Url } from "next/dist/shared/lib/router/router";

const InputWrapper = () => {
    const [searchText, setSearchText] = useState("");
    
    const handleChange = (event:any) => {
        setSearchText(() => {
            return event.target.value;
        })
    }

    return(
    <div className="flex flex-row bg-background rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 align-middle">
      <Input onChange={handleChange}/>
      <Link href={!(searchText == "" || searchText == undefined) ? ("/search?search_query=" + searchText) : "/toprated"}>
      <button className=" align-middle">
        <img src="/SearchIcon.svg"></img>
      </button>
      </Link>
      
      </div>
        
    )
}

export default InputWrapper;