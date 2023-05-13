import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to="/about"><li>About</li></Link>
            <Link to="/empsHome"><li>Employees home page</li></Link>
        </div>
    )
}

export default Home
