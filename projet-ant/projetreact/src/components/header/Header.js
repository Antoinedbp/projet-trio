import "./Header.css"
import logo from "./molengeek_logo.png"
import {useState} from "react"

export default function Header(props) {
    const [connecter, setConnecter] = useState("")
    let connexion = (e) => {

            setConnecter(e)
        
        
    }
    const [connecterpass, setConnecterpass] = useState("")
    let connexion1 = (e) => {
        setConnecterpass(e)
    }
    
    

    
    return (
        <div>
            <nav className="maNav d-flex justify-content-between mb-5">
                <img src={logo} alt="" className="monLogo" />
                <div className="seConnecter d-flex mr-3 mt-3 mb-3">
                    <input onInput={e=>connexion(e.target.value)} type="text" placeholder="Pseudo" className="input1" />
                    <input onInput={e=>connexion1(e.target.value)} type="password" placeholder="Mot De Passe" className="input2" />
                    <button onClick={()=>props.func(connecter,connecterpass)} className="monB">SE CONNECTER</button>
                    
                    
                </div>
            </nav>
        </div>
    )
}
