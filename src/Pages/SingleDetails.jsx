import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useNavigate, useParams,Link } from "react-router-dom";


function SingleDetails(props) {
    const naviate = useNavigate()
    const {id} = useParams()
    const [detail, setDetail] = useState({})
   const fetchSingleData = async ()=>{
 const response =   await  axios.get("https://mern-node-3lic.onrender.com/blog/" + id)
   setDetail(response.data.data);
   }
    useEffect(()=>{
        fetchSingleData()
    },[id])

        const  deleteme = async ()=>{
            const response = await axios.delete(`https://mern-node-1.onrender.com/blog/${id}`)
            console.log(response.status)

            if(response.status === 200){
                alert('delete perosn details successfully')
                naviate('/')
            }else{
                    alert(' something went wrong')
            }
        }

        
    return (
        <>
        <Navbar />
        
        <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
        <img src={`https://mern-node-1.onrender.com/blog/Storage/${detail.Photo}`}/>
        <div className="flex justify-between mx-auto">
            <Link to = {`/edit/${detail._id}`}>
            <button className="p-5 mx-2 border-2 outline-0 bg-amber-300 text-blue-500 rounded-2xl text-3xl">Edit me </button>
            </Link>
            <button className="p-5 mx-2 border-2 outline-0 bg-amber-300 text-blue-500 rounded-2xl text-3xl" onClick={deleteme}>Delete </button>
        
        </div>
      <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{detail.Name}</h2>
      <p className="mx-auto mt-6 w-full max-w-2xl text-pretty text-xl leading-8 text-gray-600">Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!</p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none lg:items-center lg:gap-x-20 lg:ring-0">
      <div className="p-2 lg:w-full lg:max-w-sm lg:shrink-0 lg:p-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-5xl font-semibold tracking-tight text-gray-900">{detail.Grade}</p>
            <h3 id="package-premium" className="mt-4 text-lg font-medium text-gray-900">{detail.Age}</h3>
            <div className="mt-8 h-px bg-gray-900/5"></div>
            <p className="mt-8 text-sm leading-6 text-gray-600">Empowering your brand with standout visuals that leave an impact</p>
            <a href="#" aria-describedby="package-premium" className="mt-8 block rounded-md bg-pink-500 px-3 py-2.5 text-center text-base font-medium tracking-tight text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500">Get started</a>
          </div>
        </div>
      </div>
      <div className="-mt-2 p-8 sm:p-10 lg:mt-0 lg:flex-auto lg:p-0">
        <p className="text-4xl font-semibold tracking-tight text-gray-900">Process</p>
        <p className="mt-2 text-sm leading-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <ul className="mt-10 *:border-b *:border-gray-100 *:py-6">
          <li className="flex gap-x-3 first:pt-0 last:border-0 last:pb-0 sm:gap-x-6">
            <svg className="mt-2 h-5 w-5 flex-none text-pink-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g id="Complete">
                <g id="tick">
                  <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                </g>
              </g>
            </svg>
            <p className="text-sm leading-6 text-gray-600">
              <span className="font-semibold text-gray-900">Discovery Session</span>
              – We delve deep into understanding your brand’s core values, goals, and target audience. Our aim is to align your brand’s identity with its visual representation.
            </p>
          </li>
          <li className="flex gap-x-3 first:pt-0 last:border-0 last:pb-0 sm:gap-x-6">
            <svg className="mt-2 h-5 w-5 flex-none text-pink-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g id="Complete">
                <g id="tick">
                  <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                </g>
              </g>
            </svg>
            <p className="text-sm leading-6 text-gray-600">
              <span className="font-semibold text-gray-900">Custom Design Concepts</span>
              – Receive three unique design concepts tailored to your brand, with opportunities for refinement and feedback to ensure the perfect fit.
            </p>
          </li>
          <li className="flex gap-x-3 first:pt-0 last:border-0 last:pb-0 sm:gap-x-6">
            <svg className="mt-2 h-5 w-5 flex-none text-pink-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g id="Complete">
                <g id="tick">
                  <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline>
                </g>
              </g>
            </svg>
            <p className="text-sm leading-6 text-gray-600">
              <span className="font-semibold text-gray-900">Deliverables</span>
              – All final design files will be provided, including various formats suitable for both digital and print use. We ensure your brand assets are ready for immediate implementation.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
        </>
    );
}

export default SingleDetails;