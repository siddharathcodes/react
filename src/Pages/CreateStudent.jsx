import { useState } from "react"
import Navbar from "../component/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function CreateStudent(){
 const navigate = useNavigate()
    const [data, setData] = useState({
        Name : "",
        Age : "",
        Grade : "",
        Photo : ""
    })

   const handleChange = (event) => {
  const { name, value, files } = event.target;

  if (name === "Photo") {
    setData({
      ...data,
      Photo: files[0]
    });
  } else {
    setData({
      ...data,
      [name]: value
    });
  }
};


const createDetail = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("Name", data.Name);
  formData.append("Age", data.Age);
  formData.append("Grade", data.Grade);
  formData.append("Photo", data.Photo);

  try {
    await axios.post(
      "https://mern-node-3lic.onrender.com/blog/",
      formData,
    );

    navigate("/");
  } catch (error) {
    console.error(error);
  }
};


    return(
        <>
        <Navbar />

      <form action="" onSubmit={createDetail}>

          <div className="mx-14 mt-30 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">Contact Us</div>
        <div className="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
        <div className="p-8">
            <div className="flex gap-4">
            <input type="text" name="Name" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Full Name *" onChange={handleChange} />
            <input type="text" name="Age" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="AGE *" onChange={handleChange}/>
            </div>
            <div className="my-6 flex gap-4">
          <input type="file" name="Photo" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="File *" onChange={handleChange}/>
            <input type="text" name="Grade" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Grade *" onChange={handleChange} />
            </div>
           
            <div className="text-center p-3">
            <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Create Details</button>
            </div>
        </div>
        </div>
      </form>
        </>
    )
}

export default CreateStudent