import React from 'react'
import InputField from '../componentes/InputField'

const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className=' text-lg font-medium mb-2'>Байршил</h4>

        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                <span className='checkmark'></span>Бүгд
            </label>

            <InputField handleChange={handleChange} value="Сонгинохайрхан дүүрэг
" title="Сонгинохайрхан дүүрэг
" name="test"/>
            <InputField handleChange={handleChange} value="Баянзүрх Дүүрэг" title="Баянзүрх Дүүрэг" name="test"/>
            <InputField handleChange={handleChange} value="Сүхбаатар дүүрэг" title="Сүхбаатар дүүрэг" name="test"/>
            <InputField handleChange={handleChange} value="БГД" title="Баянгол дүүрэг" name="test"/>
            <InputField handleChange={handleChange} value="Бусад" title="Бусад" name="test"/>
        </div>
    </div>
  )
}

export default Location