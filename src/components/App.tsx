import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home"
import Cabinet from "../pages/Cabinet/Cabinet"
import Courses from "../pages/Courses/Courses"
import PlansPage from "../pages/Plans/PlansPage"
import { initializeUser } from "../store/userAuth/userAuth.slice"
import { store } from "../store/store"
import { initializePlan } from "../store/subscribePlan/subscribePlan.slice"
import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"

const App = () => {
  const [initializationComplete, setInitializationComplete] = useState(false);
  const [getData, setGetData] = useState(false);
  const userAuth = useAuth();
  
  useEffect(() => {
    console.log('Start initializeUserData')
      const initializeUserData = async () => {
        const userInitializationAction = initializeUser();
          if (userInitializationAction) {
            store.dispatch(userInitializationAction);
            setGetData(true);
            console.log('Confirm initializeUserData')
          } else {
            if (userAuth.isAuth) {
              console.error("User initialization failed.");
            } else {
              setInitializationComplete(true);
            }
          }
      };
  
      initializeUserData();
  }, []);

  useEffect(() => {
    if (getData) {
      console.log('Start planInitializationAction')
      if (userAuth.isAuth) {
        const planInitializationAction = initializePlan(userAuth.id);
  
        planInitializationAction.then((action) => {
          if (action) {
            store.dispatch(action);
          }
          setInitializationComplete(true);
          console.log('Confirm planInitializationAction')
        });
      }
    } 
  }, [getData]);

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