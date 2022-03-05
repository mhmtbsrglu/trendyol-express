import React from 'react'
import ReactDOM from "react-dom"
import reactToWebcomponent from 'react-to-webcomponent'
import Logo from '../layouts/Logo'
import TeslimatSorgula from '../layouts/TeslimatSorgula'
import {MdSupportAgent} from "react-icons/md"
import DeliveryState from '../layouts/DeliveryState'
import DeliveryPeriod from '../layouts/DeliveryPeriod'

import EventEmitter from "../utilities/EventEmitter"


export default function Delivery() {

  const [periodText,setPeriodText] = React.useState("Kargo Hazırlanıyor");


  React.useEffect(() =>{
    const periodListener = EventEmitter.addListener('onPeriodTextUpdateRequest', function(text) { setPeriodText(text) });
    return () => {
        periodListener.remove();
    }
  })

  return (
    <div className='container d-flex flex-column'>
       <div className=' d-flex flex-column align-items-center'>

       <Logo/>
       </div>
       <DeliveryState/>
       
       <div className='d-flex align-items-center justify-content-center' style={{marginTop:20}}>
       <h1 style={{fontWeight:100,color:"#fd4e43"}}>{periodText}</h1>
       </div>
        <DeliveryPeriod/>
        <div class="customer-service" style={{margin:10}}>
        <div class="d-flex align-items-center" style={{marginLeft:30,marginRight:30}}>
          <MdSupportAgent
          style={
            {
              fontSize:60
            }
          }
          />
          <div className='d-flex flex-column'>
          <div class="customer-service-title">Müşteri Hizmetleri</div>
          <div class="customer-service-phone-number">0850 759 15 15</div>
          </div>
          </div>
          </div>
    </div>
  )
}

