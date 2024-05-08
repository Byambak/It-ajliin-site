import React from 'react'
import InputField from '../componentes/InputField'

const JobPostingData = ({handleChange}) => {
    const now=new Date();

    const twentyFourHoursAgo = new Date( now -24 * 60 * 60 * 1000);
    const SevenDayAgo = new Date(now -7 * 24 * 60 * 60 * 1000);
    const ThirtyDayAgo = new Date(now -30 * 24 * 60 * 60 * 1000);
    //console.log(twentyFourHoursAgo)


    //convert date to string
    const twentyFourHoursAgoDate=twentyFourHoursAgo.toISOString().slice(0, 10);
    const SevenDayAgoDate=SevenDayAgo.toISOString().slice(0, 10);
    const ThirtyAgoDate=ThirtyDayAgo.toISOString().slice(0, 10);
    //console.log(twentyFourHoursAgoDate)

  return (
    <div>
    <h4 className=' text-lg font-medium mb-2'>Нийтэлсэн огноо</h4>

    <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test" value="" onChange={handleChange} />
            <span className='checkmark'></span>Бүгд
        </label>

        <InputField handleChange={handleChange} value={twentyFourHoursAgoDate} title="Сүүлийн 24 цаг" name="test"/>
        <InputField handleChange={handleChange} value={SevenDayAgoDate} title="Сүүлийн 7 хоног" name="test"/>
        <InputField handleChange={handleChange} value={ThirtyAgoDate} title="Өнгөрсөн сар" name="test"/>
  
    </div>
</div>
  )
}

export default JobPostingData