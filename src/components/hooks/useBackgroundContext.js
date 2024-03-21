import { BackgroundContext } from '../context/BackgroundContext'
import { useContext } from 'react'

export const useBackgroundContext = () => {
    const context = useContext(BackgroundContext)

    if (!context) {
        throw Error('useBackgroundContext must be used inside a BackgroundContextProvider.')
    }

    return context
}