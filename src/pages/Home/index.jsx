import "./style.css";
import imgLogo from "../../assets/images/logo-boku.jpg";
import gitLogo from "../../assets/images/Icons/github.png";
import instaLogo from "../../assets/images/Icons/intagram.png";
import linkedlinLogo from "../../assets/images/Icons/linkedlin.png";
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <div className="home">
            <div className="title-contain">
                <h1>DEV LUIS</h1>
                <p>Front-End &#60;3</p>
            </div>
            <div className="img-contain">
                <img src={imgLogo} alt="" />
            </div>
            <div className="logos">
                <a target="_blank" href="https://github.com/LuisFelipe777"><img src={gitLogo}></img></a>
                <a target="_blank" href="https://www.instagram.com/l.felipe777/"><img src={instaLogo}></img></a>
                <a target="_blank" href="https://www.linkedin.com/in/luis-felipe-farias-rodrigues-a60a71204/"><img src={linkedlinLogo}></img></a>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>
                        <NavLink to="/about" className="nav-link">Sobre mim</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className="nav-link">Habilidades</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className="nav-link">Projetos</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact" className="nav-link">Contatos</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Home;