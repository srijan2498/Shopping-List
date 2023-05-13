import React from 'react'
import './SingleColor.css'

const SingleColor = ({ rgb, weight, index }) => {
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    const hex = rgbToHex(...rgb)
    return (
        <div onClick={() => {
            navigator.clipboard.writeText(hex).then(()=>{
                alert("Copied " + hex)
            })
        }} className='singleColorContainer' style={{ backgroundColor: `rgb(${rgb.join(",")})`, color: `${index > 10 ? "#fff" : "#000"}` }}>
            <p className="weight">{weight}%</p>
            <p className="hex">{hex}</p>
        </div>
    )
}

export default SingleColor
