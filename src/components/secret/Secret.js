import feymap from '../../secretImages/Fey-map.jpg'
import serenity from '../../secretImages/Serenity-peak.jpg'
import './secret.css'

const Secret = () => {
    return (
        <div className="secret-page">
            <h1>Secret Page</h1>
            <img src={feymap} alt="secret" />
            <img src={serenity} alt="secret" />
        </div>
    )
}

export default Secret