import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "../pages/Home/Home"
import Cabinet from "../pages/Cabinet/Cabinet"
import Courses from "../pages/Courses/Courses"
import PlansPage from "../pages/Plans/PlansPage"
import { initializeUser } from "../store/userAuth/userAuth.slice"
import { store } from "../store/store"
import { initializePlan } from "../store/subscribePlan/subscribePlan.slice"
import { useEffect, useState } from "react"

const App = () => {
  const [initializationComplete, setInitializationComplete] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const userInitializationAction = initializeUser();
    const planInitializationAction = initializePlan();

    Promise.all([userInitializationAction, planInitializationAction])
      .then((actions) => {
        actions.forEach((action) => {
          if (action) {
            store.dispatch(action);
          }
        });
    
        setInitializationComplete(true);
      });
  }, []);


  return (
    <>
    <Routes>
      <Route
        path="/"
        element={initializationComplete ? <Home /> : null}
      />
      <Route
        path="/cabinet"
        element={initializationComplete ? <Cabinet /> : null}
      />
      <Route
        path="/courses"
        element={initializationComplete ? <Courses /> : null}
      />
      <Route
        path="/plans"
        element={initializationComplete ? <PlansPage /> : null}
      />
    </Routes>
    </>
  )
}

export default App;