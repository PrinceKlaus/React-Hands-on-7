import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addStudent } from '../Slice';
import './Style.css'

const NewStudent = () => {
  const dispatch = useDispatch()
  const navi = useNavigate()
  const [info, setInfo] = useState({
    name : '',
    age : '',
    course : '',
    batch : ''
  })

  const handleChange = (e) => {
    setInfo({...info, [e.target.name] : e.target.value})
  }

  const handleClick = () => {
    dispatch(addStudent(info))
    navi('/student')
  }

  return (
    <div>
      <h1>This is NewStudent</h1>
     
      <label className="Name" htmlFor='name'>Name</label>
      <input className="Name-input" type='text' placeholder='Enter Name' id='name' name='name' onChange={handleChange}  />

      <label className="Age"htmlFor='age'>Age</label>
      <input className="Age-input"  type='number' placeholder='Enter Age' id='age' name='age' onChange={handleChange}/>

      <label className="Course" htmlFor='course'>Course</label>
      <input className="Course-input" type='text' placeholder='Enter Course' id='course' name='course'  onChange={handleChange}/>

      <label className="Batch" htmlFor='batch'>Batch</label>
      <input className="Batch-input" type='text' placeholder='Enter Batch' id='batch' name='batch' onChange={handleChange}/>

      <button className="btn2" onClick={() =>navi('/student')}>Back</button>
      <button className="btn3" onClick={handleClick}>Add</button>
    </div>
  )
}

export default NewStudent
