"use client"

import {useFilter} from "@/contexts/FilterContext";

export default function Search(){
    const [_,setFilter]=useFilter();
    return <input
                onChange={(e)=>setFilter(e.target.value)}
                className="border dark:border-primary my-2 py-2 px-2 w-full dark:bg-background-light bg-white
                focus:outline-none focus:border-accent  sm:text-sm"
                placeholder="name ..."
                type="text"
                name="search"
            />
}