import pfp from './img/cropped_image.png';
import './css/App.css';

function App() {
    return (
        <div className="App ibm-plex-mono-light">
            <header className="App-header">
                <img src={pfp} className="App-logo" alt="profile" />
                <h1 className="ibm-plex-mono-regular">I'm Dundee</h1>
                <p>
                    a <a target="_blank" rel="noreferrer" className="csText" href="https://uwaterloo.ca/future-students/programs/computer-science">Computer Science</a> student at the <a target="_blank" rel="noreferrer" className="schoolText" href="https://uwaterloo.ca">University of Waterloo</a>
                </p>
                <p>
                    I am a developer who is passionate about pushing technology forward!
                </p>
                
                <ul className="social-cons">
                    <li>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/dundeezhang/" style={{color: "black", fontSize: "calc(10px + 2vmin)"}} target="_blank">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                        
                    </li>
                    <li>
                        <a rel="noreferrer" href="https://github.com/dundeezhang" style={{color: "black", fontSize: "calc(10px + 2vmin)"}} target="_blank">
                        <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a rel="noreferrer" href="mailto:dundeez124@gmail.com" style={{color: "black", fontSize: "calc(10px + 2vmin)"}} target="_blank">
                            <i class="fa-regular fa-envelope"></i>
                        </a>
                    </li>
                </ul>
                <p  className="ibm-plex-mono-regular resume">
                    <a href="https://drive.google.com/file/d/1bEVO4IF-KCmf9nbOUBesm1kiag_9tWOq/view?usp=sharing" target="_blank" rel="noreferrer">--{'>'} Resume {'<'}--</a>
                </p>
            </header>
        </div>
    );
}

export default App;
