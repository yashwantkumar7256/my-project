import React, { useState } from 'react'

const Alizabal = () => {
const [streem,setStreem]=useState('arts')

  return (
    <div className='mt-5'>
      <div >
        <form action="" className='flex flex-col'>
          <input type="text" placeholder='enter your name'/>
          <input type="text" placeholder='enter your age' />
          <label >enter 10th marks</label>
          <input type="text" placeholder='hindi' />
          <input type="text" placeholder='english' />
          <input type="text" placeholder='math' />
          <input type="text" placeholder='science' />
          <label >Choose your 12th streem</label>

<select className='bg-blue-950 text-white' name={streem}
value={streem}
onChange={(e)=> setStreem(e.target.value)}>
  <option  value="sci+bio">sci+bio</option>
  <option value="sci+math">sci+math</option>
  <option value="arts">Arts</option>
  <option value="commerce">commerce
  </option>
  </select>

  <div>
    <input type="text" placeholder='math marks' />
    <input type="text" placeholder='english marks' />
    <input type="text" placeholder='hindi marks' />
  </div>

        </form>
      </div>
    </div>
  )
}

export default Alizabal
