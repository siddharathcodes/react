import { useState, useEffect } from "react"
import Navbar from "../component/Navbar"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

function EditDetails(){
const navigate = useNavigate()
const {id} = useParams()
  const [data,setData] = useState({
    Name : "",
    Age : "",
    Grade : "",
    Photo : "",

  })

const handleChnage = (e)=>{
 const { name, value, files } = e.target;

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
    await axios.patch(
    `https://mern-node-3lic.onrender.com/${id}`,formData,
    );

    navigate("/");
  } catch (error) {
    console.error(error);
  }
};

 const fetchSingleData = async ()=>{
 const response =   await  axios.get("https://mern-node-3lic.onrender.com/" + id)
 if(response.status === 200){

 setData({
    Name :response.data.data.Name,
    Age : response.data.data.Age,
    Grade :response.data.data.Grade 
   
   })
 }else{
  alert('something went wrong')
 }
  
   }
    useEffect(()=>{
        fetchSingleData()
    },[id])


    return(
          <>
        <Navbar />

      <form action="" onSubmit={createDetail}>

          <div className="mx-14 mt-30 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">Contact Us</div>
        <div className="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
        <div className="p-8">
            <div className="flex gap-4">
            <input type="text" name="Name" value={data.Name} className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Full Name *" onChange={handleChnage} />
            <input type="text" name="Age" value={data.Age} className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="AGE *"  onChange={handleChnage}/>
            </div>
            <div className="my-6 flex gap-4">
          <input type="file" name="Photo"  className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="File *"  onChange={handleChnage}/>
            <input type="text" name="Grade" value={data.Grade} className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Grade *"  onChange={handleChnage} />
            </div>
           
            <div className="text-center p-3">
            <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Update Details</button>
            </div>
        </div>
        </div>
      </form>
        </>
    )
}

export default EditDetails