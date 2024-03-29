import React from 'react'
import InputField from '../componentes/InputField'

const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className=' text-lg font-medium mb-2'>Location</h4>

        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                <span className='checkmark'></span>ALL
            </label>

            <InputField handleChange={handleChange} value="London" title="London" name="test"/>
        </div>
    </div>
  )
}

export default Location