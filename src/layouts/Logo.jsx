
import ReactDOM from "react-dom"
import reactToWebcomponent from 'react-to-webcomponent'
import React, { Component } from 'react'

import logo from "../assets/images/logo.png"
import styledComponents from "styled-components"

export default function Logo(){
    return <trendyol-logo/>
}

function LogoElement(){
    return <Image src={logo} />
}

const Image = styledComponents.img`
    width: 230px;
    margin-top:20px;
`

customElements.define("trendyol-logo",
reactToWebcomponent(LogoElement,React,ReactDOM)
)
