import './background3.css'

const Background3 = () => {
    const date = new Date();
    let hours = date.getHours();

    console.log(hours);
    // hours = 20;

    let backgroundStyle = {};
    let plantStyle = {};

    if (hours < 6) {
        backgroundStyle.background = 'linear-gradient(rgb(13, 1, 39), rgb(43, 2, 14))';
        plantStyle.filter = 'brightness(0.1)';
    } else if (hours >= 6 && hours < 9) {
        backgroundStyle.background = 'linear-gradient(hsl(258, 62%, 52%), hsl(28, 92%, 33%))';
        plantStyle.filter = 'brightness(0.2)';
    } else if (hours >= 9 && hours < 18) {
        backgroundStyle.background = 'linear-gradient(hsl(204, 92%, 71%), hsl(204, 92%, 78%))';
        plantStyle.filter = 'brightness(1)';
    } else if (hours >= 18 && hours < 21) {
        backgroundStyle.background = 'linear-gradient(hsl(258, 62%, 52%), hsl(28, 92%, 33%))';
        plantStyle.filter = 'brightness(0.2)';
    } else if (hours >= 21) {
        backgroundStyle.background = 'linear-gradient(rgb(13, 1, 39), rgb(43, 2, 14))';
        plantStyle.filter = 'brightness(0.1)';
    }
    return (
        <div className="background3" style={backgroundStyle}>
            <div className="background-plants" style={plantStyle}>

            </div>
        </div>
    )
}

export default Background3