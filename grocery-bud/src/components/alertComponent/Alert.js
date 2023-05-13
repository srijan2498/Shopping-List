import React, { useEffect } from 'react'

const Alert = ({ alertColor, alertText }) => {
    useEffect(() => {
        const timeOut = setTimeout(() => {
            alertText = ''
        }, 3000);
        return () => clearInterval(timeOut)
    }, [])
    return (
        <div className='alertBox' style={{ backgroundColor: alertColor }}>
            {alertText}
        </div>
    )
}

export default Alert
