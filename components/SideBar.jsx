import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from 'lucide-react'
import { Header } from '@/app/_Components/Header'

export const SideBar = () => {
    return (
        <Sheet>
        <SheetTrigger>
            <AlignRight />
        </SheetTrigger>
        <SheetContent>
            <Header/>
        </SheetContent>
        </Sheet>
    )
}
