'use client'

import React , {useState , useEffect} from 'react'
import { Search } from './Search'
import axios from 'axios'
import Spinner from '@/components/Spinner'

export const ImageCont = () => {
    const [search , setSearch] = useState("all")
    const [data , setData] = useState(null)

    const FetchData = async () => {
        try {
            const result = await axios.get(`https://api.pexels.com/v1/search?query=${search}/curated?page=2&per_page=100` , {
                headers : {
                    Authorization : '6IbW3ijJPUoqve0Cl8lWbnp9ChnqATUcHqctZPwtW1BaSvyhACWQddcH',
                }
            })
            setData(result.data.photos)
        } catch (error) {
            setData(false)
        }
    }

    useEffect(() =>{
        FetchData()
    }, [search])

    console.log(data);

    return (
        <section className = "p-3 w-[100%]">
            <Search 
                value = {search}
                setValue = {setSearch}
            />

            <section className = " h-[86vh] overflow-y-auto scrollBar mt-5">

                {data == false && (
                    <div className = "flex items-center justify-center">
                        <h1>Failed to loading Images</h1>
                    </div>
                )}
                {data != null ? (
                <div className = "imgCont gap-2">
                    {data.map((ele) => (
                        <img className = "w-full mb-2" src = {ele.src.original} alt = {ele.alt} />
                    ))}
                </div>
                ) : (
                    <div className = "flex items-center justify-center h-full">
                        <Spinner/>
                    </div>
                )}
            </section>

        </section>
    )
}
