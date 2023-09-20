import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import './Style.css'

const Student = () => {
    const data = useSelector((state)=> state.Stu_Data)
    const navi = useNavigate()
    console.log(data)
  return (
    <div>
      <h1>Student Details</h1>
      <button className="btn" onClick = {() => navi('/newstudent')}>Add New Student</button>
      {
        <table border='1px'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                    {data.map((item, index) => {
                        return(
                            <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>
                            <td>{item.batch}</td>
                            <td><NavLink to='/editStudent' state={{index}}>Edit</NavLink></td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
      }
    </div>
  )
}

export default Student
