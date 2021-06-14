// Code Keypad Component Here
import React from "react"

function Keypad () {
    const entering = () => console.log("Entering password...")

    const Keypad = () => {
        return (
            <input type="password" onChange={entering} />)
    }

    return <Keypad />
}

export default Keypad