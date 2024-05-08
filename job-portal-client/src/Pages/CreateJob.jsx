import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
    const [selectedOption, setselectedOption] = useState(null);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.skills = selectedOption;
    //console.log(data);
    fetch("http://localhost:3000/post-job", {
      method: "POST",
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(data)
    })
      .then((res)  => res.json())
      .then((result) => {
      console.log(result);
      if(result.acknowledged === true){
            alert("Job Posted Successfully!!!")
      }
      //reset()
    });
  
  };

  const options =[
    {value:"JavaScript", label:"JavaScript"},
    {value:"C++", label:"C++"},
    {value:"HTML", label:"HTML"},
    {value:"React", label:"React"},
    {value:"Node", label:"Node"},
    {value:"MongoDB", label:"MongoDB"},
    {value:"Redux", label:"Redux"},
  ]


  return (
    <div className=' max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        {/* from */}
        <div className='bg-[#FAFAFA] py-10px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)}>

            
             {/* 1st row */}
            <div className=" create-job-flex">
                <div className=" lg:w-1/2 w-full">
                      <label className=" block mb-2 text-lg">Албан тушаал</label>
                      <input type="text" defaultValue={""} 
                      {...register("jobTitle")} className="create-job-input " />
                </div>

                <div className=" lg:w-1/2 w-full">
                      <label className=" block mb-2 text-lg">Компанийн нэр</label>
                      <input type="text" placeholder=""
                      {...register("companyName")} className="create-job-input " />
                </div>

            </div>

            {/* 2st row */}
            <div className=" create-job-flex">
                <div className=" lg:w-1/2 w-full">
                      <label className=" block mb-2 text-lg">Хамгийн бага цалин </label>
                      <input type="text" defaultValue={"1000000₮"} 
                      {...register("minPrice")} className="create-job-input " />
                </div>

                <div className=" lg:w-1/2 w-full">
                      <label className=" block mb-2 text-lg">Хамгийн их цалин </label>
                      <input type="text" placeholder="1000000₮"
                      {...register("maxPrice")} className="create-job-input " />
                </div>

            </div>


            {/* 3st row */}
            <div className=" create-job-flex">
              <div className=" lg:w-1/2 w-full">
                      <label className=" block mb-2 text-lg">Цалингийн төрөл </label>
                      <select {...register("salaryType")} className="create-job-input ">
                            <option value="">Цалингаа сонгох</option>
                            <option value="Цагийн">Цагийн</option>
                            <option value="Сар бүр">Сар бүр</option>
                            <option value="Жил бүр">Жил бүр</option>
                      </select>



                </div>

                <div className=" lg:w-1/2 w-full">
                      <label className=" block mb-2 text-lg">Хаяг Байршил</label>
                      <input type="text" placeholder="Сонгинохайрхан дүүрэг"
                      {...register("jobLocation")} className="create-job-input " />
                </div>

            </div>

            {/* 4st row */}
            <div className=" create-job-flex">
            <div className=" lg:w-1/2 w-full">
                      <label className=" block mb-2 text-lg">Ажлын байр зарласан огноо</label>
                      <input type="date" placeholder="Ex: 2024-04-29"
                      {...register("postingDate")} className="create-job-input " />
                </div>

              <div className=" lg:w-1/2 w-full">
                      <label className=" block mb-2 text-lg">Төрөл</label>
                      <select {...register("experienceLevel")} className="create-job-input ">
                            <option value="">Төрөлөө сонгох</option>
                            <option value="NoExperience">Цагийн</option>
                            <option value="Intership">Дадлага хийх</option>
                            <option value="Work remotely">Алсын зайнаас ажиллах</option>
                      </select>



                </div>

        
            </div>
            
            {/* 5st row */}
            <div>
            <label className=" block mb-2 text-lg">Шаардлагатай ур чадвар</label>
            <CreatableSelect
            defaultValue={selectedOption}
            onChange={setselectedOption}
            options={options}
            isMulti
            className="create-job-input py-4"/>

            </div>

            {/* 6st row */}
            <div className=" create-job-flex">
            <div className=" lg:w-1/2 w-full">
                      <label className=" block mb-2 text-lg">Компанийн лого</label>
                      <input type="url" placeholder="Paste your company logo URL:https://weshare.com/img"
                      {...register("companyLogo")} className="create-job-input " />
                </div>

              <div className=" lg:w-1/2 w-full">
                      <label className=" block mb-2 text-lg">Хөдөлмөр эрхлэлтийн төрөл</label>
                      <select {...register("employmentType")} className="create-job-input ">
                            <option value="">Ажлын төрлийг сонгох</option>
                            <option value="Бүтэн цагийн">Бүтэн цагийн</option>
                            <option value="Хагас цагийн">Хагас цагийн</option>
                            <option value="TТүр зуур">Түр зуур</option>
                      </select>



                </div>

        
            </div>
            
            {/* 7st row */}
            <div className="w-full">
            <label className=" block mb-2 text-lg">Ажлын байрны тайлбар</label>
            <textarea className=" w-full pl-3 py-1.5 focus:outline-none placeholder: text-gray-700"
            rows={6}
            defaultValue={""}
            placeholder="Ажлын байрны тайлбар" 
            {...register("description")} />


            </div>

            {/* last row */}
            <div className="w-full">
            <label className=" block mb-2 text-lg">Ажлын байрыг нийтэлсэн</label>
            <input type="email" placeholder="Таны имэйл"
                      {...register("postedBy")} className="create-job-input " />
            </div>

            
      <input type="submit" className=" block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"/>
    </form>
        </div>

    </div>

  )
}

export default CreateJob