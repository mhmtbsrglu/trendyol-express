import React from 'react'
import styledComponents from 'styled-components'

function DeliveryState() {
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <StateButton>
            <Text>Gönderi Durumu</Text>
        </StateButton>
     </div>
  )
}

const StateButton = styledComponents.div`
    background:#f4f7fa;
    padding:5px;
    border-radius:180px;
`

const Text = styledComponents.div`
font-size: 15px;
font-weight: 500;
background:white;
color:#f16623;
padding:5px;
border-radius:180px;
text-transform: uppercase;
`

export default DeliveryState