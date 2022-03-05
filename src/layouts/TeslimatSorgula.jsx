import React from 'react'
import styledComponents from 'styled-components'
import reactToWebcomponent from 'react-to-webcomponent'
import ReactDOM from "react-dom"
import { useNavigate } from 'react-router-dom'
function TeslimatSorgula() {
  
  const history = useNavigate();
  const [inputText,setInputText] = React.useState("");
  return (
    <TeslimatSorgulaDiv>
    <input type="text" placeholder="Teslimat Kodu"
    value={inputText}
    onChange={(e) => setInputText(e.currentTarget.value)}
    />
    <button
    onClick={() => {
      if(inputText.length == 9){
        history("teslimat/"+inputText)
      }
      else{
        alert("Teslimat kodunuz 9 haneli rakam olmak zorundadır")
      }
    }}
    >Sorgula</button>
    </TeslimatSorgulaDiv>
  )
}



const TeslimatSorgulaDiv = styledComponents.div`
display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 30px 0;
    padding: 30px;
    background-color: #f4f7fa;
    border-radius: 20px;
    input{
        width: 100%;
    padding: 15px;
    font-size: 15px;
    font-weight: 500;
    border: 1px solid #d5dde5;
    border-radius: 10px;
    margin-right: 20px;
    outline-color: #f16623;
    }

    button{
        padding: 15px;
        background-color: #f16623;
        border:none;
        outline:none;
        border-radius:10px;
        color:white;
    }
    `

    
export default TeslimatSorgula