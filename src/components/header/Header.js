import "./Header.css"
import logo from "./molengeek_logo.png"
import {useState} from "react"

export default function Header() {
    const [connecter, setConnecter] = useState()
    let connexion = () => {
        if (condition) {
            
        }
    }

    
    return (
        <div>
            <nav className="maNav d-flex justify-content-between mb-5">
                <img src={logo} alt="" className="monLogo" />
                <div className="seConnecter d-flex mr-3 mt-3 mb-3">
                    <input type="text" placeholder="Pseudo" className="input1" />
                    <input type="password" placeholder="Mot De Passe" className="input2" />
                    <button className="monB" onClick={connexion}>SE CONNECTER</button>
                </div>
            </nav>
        </div>
    )
}
