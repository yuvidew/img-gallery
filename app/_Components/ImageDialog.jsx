import React ,{ useMemo, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export const ImageDialog = ({
    src ,
    alt,
}) => {

    return (
        <Dialog>
        <DialogTrigger>
            <img className = "w-full mb-2" src = {src} alt = {alt} />
        </DialogTrigger>
        <DialogContent className = "  ">
            <DialogHeader className={"h-full "}>
            <DialogTitle>{alt}</DialogTitle>
                <DialogDescription className = "h-full flex items-center justify-center">
                    <img className = " w-full mb-2 " src = {src} alt = {alt} />
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}
