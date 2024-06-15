import React from 'react'
import { Button } from "@/components/ui/button"
import { Bell, CircleHelp, Compass, Globe, UserCircle } from 'lucide-react'
import ModeToggle from '@/components/ModeToggle'

export const Header = () => {
    return (
        <header>
            <div className = " container" >
                <main className = "h-[100vh]  flex items-center justify-between flex-col w-[13rem] py-[2rem] ">
                    <div className = " w-full">
                        <h1 className = " text-[1.4rem] font-medium text-[#515050] dark:text-slate-100 mb-3">Midjourney</h1>
                        <Button  variant="red" className = "w-full flex items-center justify-start">
                            <Compass className = " h-5 w-5 mr-2" />
                            Showcase
                        </Button>
                    </div>
                    <div className = " w-full">
                        <ul className = "w-full ">
                            <li className  = "flex w-full  items-center gap-2 font-medium opacity-85 mb-2">
                                <Button variant = "white" size = "icon" >
                                    <CircleHelp className = " h-5 w-5 mr-1" />
                                </Button>
                                Help
                            </li>
                            <li className  = "flex w-full items-center gap-2 font-medium opacity-85 mb-2">
                                <Button variant = "white" size = "icon" >
                                    <Bell className = " h-5 w-5 mr-1" />
                                </Button>
                                Updates
                            </li>
                            <li className  = "flex w-full items-center gap-2 bg-transparent font-medium opacity-85 mb-2">
                                <ModeToggle/>
                                <span className = "dark:hidden">Light</span>
                                <span className = "dark:block hidden">Dark</span>
                            </li>
                            <li className  = "flex w-full items-center gap-2 bg-transparent font-medium opacity-85 mb-2">
                                <Button variant = "red" className = "w-full mt-3">
                                    <Globe/>
                                    <span className = "w-full">
                                        Sign Up
                                    </span>
                                </Button>
                            </li>
                            <li className  = "flex w-full items-center gap-2 bg-transparent font-medium opacity-85 mb-2">
                                <Button variant = "white" className = "w-full mt-3 border-[1px] border-stone-400 rounded-full shadow-lg">
                                    <UserCircle/>
                                    <span className = "w-full">
                                        Log in 
                                    </span>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </header>
    )
}
