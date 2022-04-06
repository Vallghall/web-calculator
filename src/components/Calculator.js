import React from "react"
import Display from "./Display.js"
import DoubleButton from "./DoubleButton.js"
import Button from "./Button.js"

const mainSymbols = [
    'C', 'inv', '%', '/',
    7, 8, 9, 'x',
    4, 5, 6, '-',
    1, 2, 3, '+',
]

export default function Calculator() {
    let lastKey = mainSymbols.length
    return (
        <div className="container" key={99}>
            <Display val={'0'}/>
            {mainSymbols.map((sym, i) => (
                <Button sym={sym} key={i}/>
            ))}
            <DoubleButton sym={0} key={lastKey++}/>
            <Button sym={','} key={lastKey++}/>
            <Button sym={'='} key={lastKey++}/>
        </div>
    )
}