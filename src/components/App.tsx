import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Cabinet from "../pages/Cabinet/Cabinet"
import Courses from "../pages/Courses/Courses"
import PlansPage from "../pages/Plans/PlansPage"

const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cabinet" element={<Cabinet/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/plans" element={<PlansPage/>}/>
    </Routes>
    </>
  )
}

export default App;