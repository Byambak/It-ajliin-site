
import { useLoaderData, useParams } from 'react-router-dom'
import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const UpdateJob = () => {
    const{id} = useParams();
    //console.log(id)
    const {_id, jobTitle, companyName, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel,
        companyLogo, employmentType, description, postedBy, skills} = useLoaderData();


        const [selectedOption, setselectedOption] = useState(null);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.skills = selectedOption;
    //console.log(data);
    fetch(`http://localhost:3000/update-job/${id}`, {
      method: "PATCH",
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(data)
    })
      .then((res)  => res.json())
      .then((result) => {
      console.log(result);
      if(result.acknowledged === true){
            alert("Job Updated Successfully!!!")
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
                  <label className=" block mb-2 text-lg">Job Title</label>
                  <input type="text" defaultValue={jobTitle} 
                  {...register("jobTitle")} className="create-job-input " />
            </div>

            <div className=" lg:w-1/2 w-full">
                  <label className=" block mb-2 text-lg">Company Name</label>
                  <input type="text" placeholder="Ex: Microsoft"
                  defaultValue={companyName} 
                  {...register("companyName")} className="create-job-input " />
            </div>

        </div>

        {/* 2st row */}
        <div className=" create-job-flex">
            <div className=" lg:w-1/2 w-full">
                  <label className=" block mb-2 text-lg">Minimum Salary </label>
                  <input type="text" defaultValue={minPrice}
                  
                  {...register("minPrice")} className="create-job-input " />
            </div>

            <div className=" lg:w-1/2 w-full">
                  <label className=" block mb-2 text-lg">Maximum Salary </label>
                  <input type="text" placeholder="$120k"
                  defaultValue={maxPrice}
                  {...register("maxPrice")} className="create-job-input " />
            </div>

        </div>


        {/* 3st row */}
        <div className=" create-job-flex">
          <div className=" lg:w-1/2 w-full">
                  <label className=" block mb-2 text-lg">Salary Type </label>
                  <select {...register("salaryType")} className="create-job-input ">
                        <option value={salaryType}>{salaryType}</option>
                        <option value="Hourly">Hourly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                  </select>



            </div>

            <div className=" lg:w-1/2 w-full">
                  <label className=" block mb-2 text-lg">Job Location</label>
                  <input type="text" placeholder="Ex: New York"
                  defaultValue={jobLocation}
                  {...register("jobLocation")} className="create-job-input " />
            </div>

        </div>

        {/* 4st row */}
        <div className=" create-job-flex">
        <div className=" lg:w-1/2 w-full">
                  <label className=" block mb-2 text-lg">Job Posting Date</label>
                  <input type="date" placeholder="Ex: 2024-04-29"
                  defaultValue={postingDate}
                  {...register("postingDate")} className="create-job-input " />
            </div>

          <div className=" lg:w-1/2 w-full">
                  <label className=" block mb-2 text-lg">Experience level</label>
                  <select {...register("experienceLevel")} className="create-job-input ">
                        <option value={experienceLevel}>{experienceLevel}</option>
                        <option value="NoExperience">Hourly</option>
                        <option value="Intership">Intership</option>
                        <option value="Work remotely">Work remotely</option>
                  </select>



            </div>

    
        </div>
        
        {/* 5st row */}
        <div>
        <label className=" block mb-2 text-lg">Required Skill Sets:</label>
        <CreatableSelect
        defaultValue={skills}
        onChange={setselectedOption}
        options={options}
        isMulti
        className="create-job-input py-4"/>

        </div>

        {/* 6st row */}
        <div className=" create-job-flex">
        <div className=" lg:w-1/2 w-full">
                  <label className=" block mb-2 text-lg">Company Logo</label>
                  <input type="url" placeholder="Paste your company logo URL:https://weshare.com/img"
                  defaultValue={companyLogo}
                  {...register("companyLogo")} className="create-job-input " />
            </div>

          <div className=" lg:w-1/2 w-full">
                  <label className=" block mb-2 text-lg">Employment Type</label>
                  <select {...register("employmentType")} className="create-job-input ">
                        <option value="">Choose job type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Temporary">Temporary</option>
                  </select>



            </div>

    
        </div>
        
        {/* 7st row */}
        <div className="w-full">
        <label className=" block mb-2 text-lg">Job Description</label>
        <textarea className=" w-full pl-3 py-1.5 focus:outline-none placeholder: text-gray-700"
        rows={6}
        defaultValue={description}
        placeholder="Job Description" 
        {...register("description")} />


        </div>

        {/* last row */}
        <div className="w-full">
        <label className=" block mb-2 text-lg">Job Posted By</label>
        <input type="email" placeholder="Your email"
        defaultValue={postedBy}
                  {...register("postedBy")} className="create-job-input " />
        </div>

        
  <input type="submit" className=" block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"/>
</form>
    </div>

</div>
  )
}

export default UpdateJob