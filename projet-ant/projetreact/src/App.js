import Header from './components/header/Header'
import Section from './components/sectionTitre/Section'
import SectionCorps from './components/SectionCorps/SectionCorps'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {useState} from "react"

function App() {
  const [valeur,setvaleur] = useState()
  let revalue =(a,b)=>{
    let calcul =a.split(":") 
    let calcul1 = calcul[0] + "." + calcul[1]
    let calcul3 = b.split(":") 
    let calcul4 = calcul3[0] + "." + calcul3[1]
    let reponse =calcul4- calcul1
    setvaleur(parseFloat(reponse).toFixed(2))
  }
  const [valeur1,setvaleur1] = useState()
  let revalue1 =(a,b)=>{
    let calcul =a.split(":") 
    let calcul1 = calcul[0] + "." + calcul[1]
    let calcul3 = b.split(":") 
    let calcul4 = calcul3[0] + "." + calcul3[1]
    let reponse =calcul4- calcul1
    setvaleur1(parseFloat(reponse).toFixed(2))
  }
  const [valeur2,setvaleur2] = useState()
  let revalue2 =(a,b)=>{
    let calcul =a.split(":") 
    let calcul1 = calcul[0] + "." + calcul[1]
    let calcul3 = b.split(":") 
    let calcul4 = calcul3[0] + "." + calcul3[1]
    let reponse =calcul4- calcul1
    setvaleur2(parseFloat(reponse).toFixed(2))
  }
  const [valeur3,setvaleur3] = useState()
  let revalue3 =(a,b)=>{
    let calcul =a.split(":") 
    let calcul1 = calcul[0] + "." + calcul[1]
    let calcul3 = b.split(":") 
    let calcul4 = calcul3[0] + "." + calcul3[1]
    let reponse =calcul4- calcul1
    setvaleur3(parseFloat(reponse).toFixed(2))
  }
  const [valeur4,setvaleur4] = useState()
  let revalue4 =(a,b)=>{
    let calcul =a.split(":") 
    let calcul1 = calcul[0] + "." + calcul[1]
    let calcul3 = b.split(":") 
    let calcul4 = calcul3[0] + "." + calcul3[1]
    let reponse =calcul4- calcul1
    setvaleur4(parseFloat(reponse).toFixed(2))
  }
  const [valeur5,setvaleur5] = useState()
  let revalue5 =(a,b)=>{
    let calcul =a.split(":") 
    let calcul1 = calcul[0] + "." + calcul[1]
    let calcul3 = b.split(":") 
    let calcul4 = calcul3[0] + "." + calcul3[1]
    let reponse =calcul4- calcul1
    setvaleur5(parseFloat(reponse).toFixed(2))
  }
  const [valeur6,setvaleur6] = useState()
  let revalue6 =(a,b)=>{
    let calcul =a.split(":") 
    let calcul1 = calcul[0] + "." + calcul[1]
    let calcul3 = b.split(":") 
    let calcul4 = calcul3[0] + "." + calcul3[1]
    let reponse =calcul4- calcul1
    setvaleur6(parseFloat(reponse).toFixed(2))
  }

  const [titreh1,settitreh1] = useState("WEEKLY")
  let modifyh1 =(data,data1)=>{
    if(data.length>2 && data1.length>2){
      settitreh1(data.toUpperCase())
    }
  }
  let modif =()=>{

  }
  return (
    <div className="App">
        <Header func={modifyh1}/>
        <div className="contenu">
          <Section titre={titreh1} />
          <SectionCorps val={valeur} val1={valeur1} val2={valeur2}  val3={valeur3} val4={valeur4} val5={valeur5} val6={valeur6} functio={revalue} functio1={revalue1} functio2={revalue2} functio3={revalue3} functio4={revalue4} functio5={revalue5} functio6={revalue6} />
          
        </div>
    </div>
  );
}

export default App;
