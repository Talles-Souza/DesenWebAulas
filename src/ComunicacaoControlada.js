import React, { useState, useEffect } from "react";
import { ComponenteFilho } from "./DiretoFilho";

export function Imput (){
    const[name,setNome] = useState("inicial") 
    const[idade,setIdade] = useState("0") 
    const[nerd,setNerd] = useState("") 
    useEffect(() => {
        document.title = name+" "+idade + " "+ nerd;
    })
    function handleChange (e) {

        setNome(e.target.value)
        
     }
     function handleChange1 (i) {
        setIdade(i.target.value)
     }
     function handleChange2 (j) {
        setNerd(j.target.value)
     }
    
    
    return(
        <>
        <label>Nome:</label>
        <input type = "text" value = {name} onChange={(e)=> handleChange(e) }></input>
        <label>Idade: </label>
        <input type = "number" value = {idade} onChange={(i)=> handleChange1(i) }></input>
        <label>Nerd: </label>
        <input type = "boolean" value = {nerd} onChange={(j)=> handleChange2(j) }></input>
       <ComponenteFilho
       name = {name}
       idade = {idade}
       nerd = {nerd}
       
      />
      

        </>
    );
    
}