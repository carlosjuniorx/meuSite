import { useState } from "react"
import Layout from "../components/Layout"
export default function Estado(){
    const [numero,setNumero]=useState(3)
    const incrementa=(n)=>{
       setNumero(numero +1)
    }
    return(
        <Layout titulo={'Estado'}>
        <div>
            <div>{numero}</div>
            <button onClick={()=>incrementa(numero)}>Incrementar + 1</button>
        </div>
        </Layout>

    )
}