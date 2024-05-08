import React from 'react'
import InputField from '../componentes/InputField'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
    <h4 className=' text-lg font-medium mb-2'> Төрөл</h4>

    <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test" value="" onChange={handleChange} />
            <span className='checkmark'></span>оффис
        </label>

        <InputField handleChange={handleChange} value="Дадлага хийх" title="Дадлага хийх" name="test"/>
        <InputField handleChange={handleChange} value="Алсын зайнаас ажиллах" title="Алсын зайнаас ажиллах" name="test"/>
     
    </div>
</div>
  )
}

export default WorkExperience