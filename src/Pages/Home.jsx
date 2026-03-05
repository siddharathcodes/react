import { useEffect, useState } from "react"
import Card from "../component/Card"
import Navbar from "../component/Navbar"
import axios from 'axios'

function Home(){
    const [person, personDetail] = useState([])
     const fetchblogs = async  ()=>{
        const response = await  axios.get("https://mern-node-3lic.onrender.com/blog")
       personDetail(response.data.data)
     }
    useEffect(()=>{
        fetchblogs()
    },[])

    console.log(person)

return (
   <>
    <Navbar />
    <div className="flex flex-wrap p-10">
    {
        person.map(function(detail){
            return (
                 <Card key= {detail._id} data = {detail}/>
            )
        })
    }
    
    </div>
   
   
   </>
)
}
export default Home