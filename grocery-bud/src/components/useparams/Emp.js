import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Data} from './Data'

const Emp = () => {
    const [emps, setEmps]=useState(Data)
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      <h1>Employees Home Page</h1>
        {emps.map((emp)=>{
            return (<Link to={`/emp/${emp.id}`}>
                <div className='emp-item' style={{ border: "1px solid red" }} id={emp.id} key={emp.id}>
                    {emp.firstName}<span> </span>{emp.lastName}
                </div>
            </Link>)
        })}
    </div>
  )
}

export default Emp
