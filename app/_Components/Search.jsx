import { SideBar } from '@/components/SideBar'
import { Input } from '@/components/ui/input'
import { Image, SlidersHorizontal } from 'lucide-react'
import React from 'react'

export const Search = ({
    value , 
    setValue
}) => {
    return (
        <div className = "flex items-center justify-between">
            <div className = " dark:bg-stone-800 flex items-center gap-2 p-3  rounded-md border-[.8px] dark:border-none border-gray-300 shadow-lg w-full">
                <Image className = " opacity-75 h-5 w-6 " />
                <Input value = {value} onChange = {(e) => setValue(e.target.value)} placeholder = "Search image.."   />
                <SlidersHorizontal className = " opacity-75 h-5 w-6 " />
                <div className = "lg:hidden block mt-1 ml-2">
                    <SideBar className = " opacity-75 h-5 w-6 " />
                </div>
            </div>
        </div>
    )
}
