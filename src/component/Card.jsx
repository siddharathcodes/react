import { Link } from "react-router-dom";
function Card(props){
    return (
        <>
          <Link to = {`/details/${props.data._id}`}>
            <div className="my-15 px-2 z-20">

                <div className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
            href="#">
            <img src={`https://mern-node-1.onrender.com/Storage/${props.data.Photo}`} className="shadow rounded-lg overflow-hidden border"/>
            <div className="mt-8">
                <h4 className="font-bold text-xl">{props.data.Name}</h4>
                <p className="mt-2 text-gray-600">{props.data.Grade}
                </p>
                <div className="mt-5">
                    <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">{props.data.Age}</button>
                </div>
            </div>
        </div>
        
            </div>
        
          
          </Link>
        </>
    )
}

export default Card