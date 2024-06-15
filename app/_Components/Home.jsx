import React from 'react'
import { Header } from './Header'
import { ImageCont } from './ImageCont'

export const Section = () => {
    return (
        <div className = "flex items-start gap-3">
            <Header/>
            <ImageCont/>
        </div>
    )
}
