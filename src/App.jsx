
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import SingleDetails from './Pages/SingleDetails.jsx'
import CreateStudent from './Pages/CreateStudent.jsx'
import EditDetails from './Pages/EditDetails.jsx'



const App = () => {
  return (
    <div>

      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateStudent />} />
        <Route path='/details/:id' element={<SingleDetails/>} />
        <Route path='/edit/:id' element={<EditDetails/>} />
       </Routes>
      </BrowserRouter>
     

    </div>
  )
}

export default App
