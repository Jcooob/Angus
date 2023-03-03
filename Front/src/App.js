import { Routes, Route } from "react-router-dom"
import Tanks from "./components/Card/Tanks"
import TankDetail from "./components/TankDetails/TankDetails"
import LandingPage from "./components/LadingPage/LangingPage"

function App () {
  return (
    <Routes>
      <Route path = '/' element={<LandingPage/>}></Route>
      <Route path='/tanks' element={<Tanks/>}></Route>
      <Route path='/detail/:id' element={< TankDetail/>}></Route>
    </Routes>
  )
}

export default App

