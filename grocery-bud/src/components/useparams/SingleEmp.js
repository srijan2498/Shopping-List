import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { Data } from './Data'

const SingleEmp = () => {
    const [emps, setEmps] = useState(Data)
    const {id}=useParams() 
  return (
    <div>
      {emps.map((emp)=>{
        if(emp.id==id){
            return (
                <pre>
                    First Name: {emp.firstName}
                    Last Name: {emp.lastName}
                    Email: {emp.email}
                </pre>
            )
        }
      })}
    </div>
  )
}

export default SingleEmp
