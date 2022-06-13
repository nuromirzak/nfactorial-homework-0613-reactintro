import fox from './imgs/fox.jpg'
import mounts from './imgs/mounts.jpg'
import sea from './imgs/sea.jpg'
import sunset from './imgs/sunset.jpg'
import walkingWoman from './imgs/walking-woman.jpg'
import ReactLogo from './imgs/logo512.png'
import './App.css'

const {format} = require('date-fns');

function App() {
    const createDiv = function (img, text) {
        return <div className='poster'
                    style={{
                        backgroundImage: `url(${img})`
                    }}>
            <div>{text}</div>
        </div>;
    }

    const header = <div>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src={ReactLogo} alt="" width="30" height="24"
                         className="d-inline-block align-text-top me-2"/>
                    ReactJS
                    <input className='mx-2' placeholder="Search" aria-label="Search"/>
                </a>
                <p id='date'><span className="navbar-text">{format(new Date(), 'dd.MM.yyyy HH.mm')}</span>
                </p>
            </div>
        </nav>
    </div>

    const foxDiv = createDiv(fox, "Hey");
    const mountsDiv = createDiv(mounts, "Let's")
    const seaDiv = createDiv(sea, "Give")
    const sunsetDiv = createDiv(sunset, "All")
    const walkingWomanDiv = createDiv(walkingWoman, "You can")

    const finalDiv = <div
        className='finalDiv'>{foxDiv} {mountsDiv} {seaDiv} {sunsetDiv} {walkingWomanDiv}</div>;

    return (<>{header} {finalDiv}</>);
}

export default App;