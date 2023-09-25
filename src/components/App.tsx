import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "../pages/Home/Home"
import Cabinet from "../pages/Cabinet/Cabinet"
import Courses from "../pages/Courses/Courses"

const App = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="home" element={<Home/>} />
        <Route path="cabinet" element={<Cabinet/>} />
        <Route path="courses" element={<Courses/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
