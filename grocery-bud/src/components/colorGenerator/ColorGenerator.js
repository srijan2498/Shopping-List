import React, { useState } from 'react'
import './ColorGenerator.css'
import SingleColor from './SingleColor'
import Values from 'values.js'

const ColorGenerator = () => {
    const [colorName, setColorName] = useState('')
    const [colorList, setColorList] = useState([])
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            let color = new Values(colorName).all(10)
            setColorList(color)
            setColorName('')
            setError(false)
        }
        catch(err){
            setError(true)
        }
    }
    return (
        <div className='container'>
            <div className="formContainer">
                <h1 className="heading">Color Generator</h1>
                <form className="formBox" onSubmit={handleSubmit}>
                    <input type="text" placeholder='#6e6e6e' value={colorName} onChange={(e) => setColorName(e.target.value)} className={error ? `error` : ""} />
                    <input type="submit" />
                </form>
            </div>
            <div className="colorContainer">
                {
                    colorList.map((color, index) => {
                        return <SingleColor key={index} {...color} index={index} />
                    })
                }
            </div>
        </div>
    )
}

export default ColorGenerator
