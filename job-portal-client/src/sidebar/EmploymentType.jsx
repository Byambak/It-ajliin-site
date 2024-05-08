import React from 'react'
import InputField from '../componentes/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
    <h4 className=' text-lg font-medium mb-2'> Ажиллах Цаг</h4>

    <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test" value="" onChange={handleChange} />
            <span className='checkmark'></span>Бүгд
        </label>

        <InputField handleChange={handleChange} value="бүтэн цагийн" title="бүтэн цагийн" name="test"/>
        <InputField handleChange={handleChange} value="түр зуурын" title="түр зуурын" name="test"/>
        <InputField handleChange={handleChange} value="хагас цагийн" title="хагас цагийн" name="test"/>
     
    </div>
</div>
  )
}

export default EmploymentType