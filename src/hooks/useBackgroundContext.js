import { backgroundContext } from '../context/backgroundContext'
import { useContext } from 'react'

export const useBackgroundContext = () => {
    const context = useContext(backgroundContext)

    if (!context) {
        throw Error('useBackgroundContext must be used inside a backgroundContextProvider.')
    }

    return context
}