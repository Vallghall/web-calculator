import React from 'react'
import classes from "./DoubleButton.module.css"

const DoubleButton = ({sym, handle}) => {

    const handleButtonClick = (e) => {
        e.preventDefault()
        const val = e.target.value
        handle(val)
    }

    return (
        <button className={classes.fat} type={'button'} value={sym} onClick={handleButtonClick}>
            {sym}
        </button>
    )
}

export default DoubleButton