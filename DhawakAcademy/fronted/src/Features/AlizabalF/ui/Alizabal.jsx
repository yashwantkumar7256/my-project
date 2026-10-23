import React from 'react'

const Alizabal = () => {
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

<select name='streem'>
  <option value="sci+bio">sci+bio</option>
  <option value="sci+math">sci+math</option>
  <option value="arts">Arts</option>
  <option value="commerce">commerce
  </option>
  


</select>

        </form>
      </div>
    </div>
  )
}

export default Alizabal
