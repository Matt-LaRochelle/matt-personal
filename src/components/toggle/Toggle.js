import './toggle.css'
import { useState } from 'react'
import { useBackgroundContext } from '../hooks/useBackgroundContext'

const Toggle = () => {
    const [title, setTitle] = useState("Whisps")
    const { background, dispatch } = useBackgroundContext()
  
  
    const toggleBackground = () => {
      console.log('clicked')
        if (background === 0) {
          setTitle("Morphing Colors")
          dispatch({ type: 'SET_COLORS' })
        } else if (background === 1) {
          setTitle("Vista which follows the time of day")
          dispatch({ type: 'SET_SILHOUETTE' })
        } else if (background === 2) {
          setTitle("Whisps")
          dispatch({ type: 'SET_WHISP' })
        }
    }

    return (
        <div className="toggle">
            <button onClick={toggleBackground} className="background-button">Toggle Background</button>
            <p className="background-title">{ title }</p>
        </div>
    )
}

export default Toggle;