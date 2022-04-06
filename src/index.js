import React from "react"
import ReactDOM from "react-dom"
import Calculator from "./components/Calculator.js"

const $ = (id) => document.getElementById(id)


ReactDOM.render(
    <Calculator/>,
    $("root")
)

