import './toggle.css'
import { useState } from 'react'
import { useBackgroundContext } from '../hooks/useBackgroundContext'

import whisp from '../images/whisps.png'
import morph from '../images/morph.png'
import vista from '../images/vista.png'

const Toggle = () => {
    const [title, setTitle] = useState("Whisps")
    const { background, dispatch } = useBackgroundContext()
  
  
    const toggleBackground = (e) => {
      console.log('clicked')
        if (e.target.name === "whisps") {
          setTitle("Whisps")
          dispatch({ type: 'SET_WHISP' })
        } else if (e.target.name === "vista") {
          setTitle("Vista-clock")
          dispatch({ type: 'SET_SILHOUETTE' })
        } else if (e.target.name === "morph") {
          setTitle("Morphing colors")
          dispatch({ type: 'SET_COLORS' })
        }
    }

    return (
        <div className="toggle">
            <p className="background-title">{ title }</p>
            <div className="background-picker-grid">
              <img src={whisp} alt="whisp" name="whisps" onClick={toggleBackground} className="background-picker-grid-item" />
              <img src={morph} alt="morph" name="morph" onClick={toggleBackground} className="background-picker-grid-item" />
              {/* <img src={vista} alt="vista" name="vista" onClick={toggleBackground} className="background-picker-grid-item" /> */}
            </div>
        </div>
    )
}

export default Toggle;