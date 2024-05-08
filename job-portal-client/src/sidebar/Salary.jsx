import React from 'react'
import Button from './Button'
import InputField from '../componentes/InputField'

const Salary = ({handleChange, handleClick} ) => {
  return (
    <div><h4 className=' text-lg font-medium mb-2'>Цалин хөлс </h4>
    <div className='mb-4'>
     <Button onClickHandler={handleClick} value="" title="Цагаар"/>
     <Button onClickHandler={handleClick} value="Сараар" title="Сараар"/>
     <Button onClickHandler={handleClick} value="Жилээр" title="Жилээр"/>
    </div>
        
     <div>
     <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                <span className='checkmark'></span>Бүгд
            </label>

            <InputField handleChange={handleChange} value={30} title="< 30000k" name="test2"/>
            <InputField handleChange={handleChange} value={50} title="< 50000k" name="test2"/>
            <InputField handleChange={handleChange} value={80} title="< 80000k" name="test2"/>
            <InputField handleChange={handleChange} value={100} title="< 100000k" name="test2"/>
         
     </div>
    </div>
    
  )
}

export default Salary