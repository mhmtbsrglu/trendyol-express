import React from 'react'
import styledComponents from 'styled-components';
import {GoPackage} from "react-icons/go"
import {MdDeliveryDining} from "react-icons/md"
import {FaPeopleCarry,FaTruck} from "react-icons/fa"
import { useParams } from 'react-router-dom';
import EventEmitter from '../utilities/EventEmitter';

function DeliveryPeriod() {
  const [period,setPeriod] = React.useState(0);
  const [progress,setProgress] = React.useState(0);
  const {id} = useParams();

  //Simulate
  React.useEffect(() => {
      const interval = setInterval(() => {
        if(progress < 100){
            setProgress((old) =>old+5)
          }
          
      }, 500);
      return () => clearInterval(interval);
  },[])

  React.useEffect(() => {
      
    if(progress == 0){
        setPeriod(0)
    }    
    else if(progress == 50){
        setPeriod(1)
        EventEmitter.emit('onPeriodTextUpdateRequest', "Teslim Sürecinde");
    }
    else if(progress == 100){
        setPeriod(2)
        EventEmitter.emit('onPeriodTextUpdateRequest', "Teslim Edildi");
    }
    
  })
  return (
    <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between ' style={{paddingTop:40,paddingBottom:0}}>
        <RoundedButton bg={period == 0}>
        <GoPackage/>
</RoundedButton>
<RoundedButton  bg={period == 1}>
<FaTruck/>
</RoundedButton>
<RoundedButton  bg={period == 2}>
<FaPeopleCarry/>
</RoundedButton>
</div>
<Line className='d-flex justify-content-between ' style={{marginTop:0,marginBottom:40}} progress={progress}>
    <div className='sub'/>
</Line>
<Descriptions  className='d-flex justify-content-between '>
    <Description  period={period == 0}>1. Kargo Hazırlanıyor</Description>
    <Description  period={period == 1}>2. Teslim Sürecinde</Description>
    <Description  period={period == 2}>3. Teslim Edildi</Description>
</Descriptions>

<DeliveryInforms className='d-flex flex-column justify-content-center '>
<div className='d-flex flex-column align-items-center'>
<h5>Teslimat Numarası</h5> 
<h1 style={{color:"#e17026",fontSize:40}}>{id}</h1>     
</div>
<div className='d-flex flex-column'>
<h4 style={{color:"gray"}}>Teslimat Numarası</h4>    
<h5 style={{color:"black",fontWeight:"bold",marginBottom:30}}>{subAllText("Mehmet Basrioğlu")}</h5>  
<h4 style={{color:"gray"}}>Gönderi Numarası</h4>    
<h5 style={{color:"black",fontWeight:"bold",marginBottom:30}}>000000000000</h5>
<h4 style={{color:"gray"}}>Son İşlem Tarihi</h4>    
<h5 style={{color:"black",fontWeight:"bold",marginBottom:30}}>00.00.2022</h5> 
<h4 style={{color:"gray"}}>Tahmini Teslim Tarihi</h4>    
<h5 style={{color:"black",fontWeight:"bold",marginBottom:30}}>00.00.2022</h5>  
<h4 style={{color:"gray"}}>Teslim Edilecek Şube</h4>    
<h5 style={{color:"black",fontWeight:"bold",marginBottom:30}}>Beylikdüzü</h5>   
<h4 style={{color:"gray"}}>Teslim Edilecek Adres</h4>    
<h5 style={{color:"black",fontWeight:"bold",marginBottom:30}}>{subAllText("Cumhuriyet, Atatürk Blv. No:28, 34520 Beylikdüzü/İstanbul")}</h5>           
</div>
</DeliveryInforms>
    </div>
  )
}


function subAllText(text){
    const texts = text.split(" ");
    let details = "";
    for(var i=0; i < texts.length ; i++){
        details += " "+texts[i].substring(0,2)+"**"
    }
    return details;
}



const DeliveryInforms = styledComponents.div`
margin-top:40px;
margin-bottom:20px;
background:#f4f7fa;
padding:20px;

`

const Descriptions = styledComponents.div`
  
`

const Description = styledComponents.div`
display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        ${props => props.period ? "color:#fd4e43;":"color:#c6ccd3;"}
        font-weight: 500;
`

const Line = styledComponents.div`
margin-left:20px;
margin-right:20px;
background:#c6ccd3;
height:5px;
border-radius:180px;
.sub{
    width:${props => props.progress}%;
    background:#fd4e43;
    transition:all 1s;
}
`

const RoundedButton = styledComponents.div`
${props => props.bg ? "background:#fd4e43;":"background:#c6ccd3;"}
width:60px;
height:60px;
border-radius:180px;
display:flex;
align-items:center;
justify-content:center;
color:white;
transition:all 1s;
svg{
    font-size:30px;
    color:white;
}
`

export default DeliveryPeriod