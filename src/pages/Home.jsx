import React from 'react'
import ReactDOM from "react-dom"
import reactToWebcomponent from 'react-to-webcomponent'
import Logo from '../layouts/Logo'
import TeslimatSorgula from '../layouts/TeslimatSorgula'
import {MdSupportAgent} from "react-icons/md"



export default function Home() {
  return (
    <div className='container d-flex flex-column'>
       <div className=' d-flex flex-column align-items-center'>

       <Logo/>
       </div>
        <TeslimatSorgula/>
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

