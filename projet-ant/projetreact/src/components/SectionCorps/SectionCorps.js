import "./SectionCorps.css"
import {useState} from "react"

export default function SectionCorps(props) {

const [input1a,setinput1a] = useState("")
let connect1 = (e) => {

    setinput1a(e)


}

const [input1b,setinput1b] = useState("")
let connect2 = (e) => {

    setinput1b(e)


}

const [input2a,setinput2a] = useState("")
let connect3 = (e) => {

    setinput2a(e)


}

const [input2b,setinputb2] = useState("")
let connect4 = (e) => {

    setinputb2(e)


}

const [input3a,setinput3a] = useState("")
let connect5 = (e) => {

    setinput3a(e)


}

const [input3b,setinput3b] = useState("")
let connect6 = (e) => {

    setinput3b(e)


}

const [input4a,setinput4a] = useState("")
let connect7 = (e) => {

    setinput4a(e)


}

const [input4b,setinput4b] = useState("")
let connect8 = (e) => {

    setinput4b(e)


}

const [input5a,setinput5a] = useState("")
let connect9 = (e) => {

    setinput5a(e)


}

const [input5b,setinput5b] = useState("")
let connect10 = (e) => {

    setinput5b(e)


}

const [input6a,setinput6a] = useState("")
let connect11 = (e) => {

    setinput6a(e)


}

const [input6b,setinput6b] = useState("")
let connect12 = (e) => {

    setinput6b(e)


}

const [input7a,setinput7a] = useState("")
let connect13 = (e) => {

    setinput7a(e)


}

const [input7b,setinput7b] = useState("")
let connect14 = (e) => {

    setinput7b(e)
}


    return (
        <div className="monTab m-auto">
            <div className="d-flex justify-content-around">
                <div className="mesTimes border border-dark text-center bg-white"></div>
                <div className="mesTimes border border-dark text-center font-weight-bold bg-white">Time In</div>
                <div className="mesTimes border border-dark text-center font-weight-bold bg-white">Time Out</div>
                <div className="mesTimes border border-dark text-center font-weight-bold bg-white">Hours</div>
                <div className="mesTimes border border-dark text-center font-weight-bold bg-white">Comments</div>
            </div>
            
            <div className="d-flex">
                <div className="mesTimes border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">Monday</div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect1(e.target.value)} onClick={()=>props.functio(input1a,input1b)} type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect2(e.target.value)} onClick={()=>props.functio(input1a,input1b)} type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">
                    <h4 className="bg-white">{props.val} </h4>
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input type="text" className="w-100 h-100 border border-none text-center"/>
                </div>
            </div>
            <div className="d-flex">
                <div className="mesTimes border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">Tuesday</div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect3(e.target.value)} onClick={()=>props.functio1(input2a,input2b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect4(e.target.value)} onClick={()=>props.functio1(input2a,input2b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">
                    <h4 className="bg-white">{props.val1}</h4>
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input type="text" className="w-100 h-100 border border-none text-center"/>
                </div>
            </div>
            <div className="d-flex">
                <div className="mesTimes border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">Wednesday</div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect5(e.target.value)} onClick={()=>props.functio2(input3a,input3b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect6(e.target.value)} onClick={()=>props.functio2(input3a,input3b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">
                    <h4 className="bg-white">{props.val2} </h4>
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input type="text" className="w-100 h-100 border border-none text-center"/>
                </div>
            </div>
            <div className="d-flex">
                <div className="mesTimes border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">Thursday</div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect7(e.target.value)} onClick={()=>props.functio3(input4a,input4b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect8(e.target.value)} onClick={()=>props.functio3(input4a,input4b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">
                    <h4 className="bg-white">{props.val3} </h4>
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input type="text" className="w-100 h-100 border border-none text-center"/>
                </div>
            </div>
            <div className="d-flex">
                <div className="mesTimes border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">Friday</div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect9(e.target.value)} onClick={()=>props.functio4(input5a,input5b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect10(e.target.value)} onClick={()=>props.functio4(input5a,input5b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">
                    <h4 className="bg-white">{props.val4}</h4>
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input type="text" className="w-100 h-100 border border-none text-center"/>
                </div>
            </div>
            <div className="d-flex">
                <div className="mesTimes border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">Saturday</div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect11(e.target.value)} onClick={()=>props.functio5(input6a,input6b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect12(e.target.value)} onClick={()=>props.functio5(input6a,input6b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">
                    <h4 className="bg-white">{props.val5}</h4>
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input type="text" className="w-100 h-100 border border-none text-center"/>
                </div>
            </div>
            <div className="espaceBottom d-flex">
                <div className="mesTimes border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">Sunday</div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect13(e.target.value)} onClick={()=>props.functio6(input7a,input7b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input  onInput={e=>connect14(e.target.value)} onClick={()=>props.functio6(input7a,input7b)}  type="time" className="w-100 h-100 border border-none text-center" />
                </div>
                <div className="divInput border border-dark d-flex align-items-center justify-content-center font-weight-bold bg-white">
                    <h4 className="bg-white">{props.val6}</h4>
                </div>
                <div className="divInput border border-dark d-flex align-items-center">
                    <input type="text" className="w-100 h-100 border border-none text-center"/>
                </div>
            </div>
            <div className="mesButtons d-flex justify-content-center m-auto pb-5">
                <button className="monB b2 mr-5">Refresh</button>
                <button className="monB b2 ml-5">Submit</button>
            </div>
            
            
        </div>


        
    )
}
