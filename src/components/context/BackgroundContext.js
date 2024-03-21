import { createContext, useReducer } from 'react'

export const BackgroundContext = createContext()

export const backgroundReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WHISP':
            return {
                background: 0
            }
        case 'SET_COLORS':
            return {
                background: 1
            }
        case 'SET_SILHOUETTE':
            return {
                background: 2
            }
        default:
            return state
    }
}

export const BackgroundContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(backgroundReducer, {
        background: 0
    })

    console.log('BackgroundContext state: ', state)

    return (
        <BackgroundContext.Provider value={{...state, dispatch}}>
            { children }
        </BackgroundContext.Provider>
    )
}