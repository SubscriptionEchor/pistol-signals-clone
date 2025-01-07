'use client'
import { createContext, useState } from "react"


export const PageContext = createContext()

export const PageProvider = ({ children }) => {
    const [selectedPage, setSeletedPage] = useState('')
    return (
        <PageContext.Provider value={{ selectedPage, setSeletedPage }}>
            {children}
        </PageContext.Provider >
    )
}