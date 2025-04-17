import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router'
import './App.css'
// import { Home } from './Home/Home'
import Pcallback from './HooksPractice/Pcallback'
import { Peffect } from './HooksPractice/Peffect'
import { Pref } from './HooksPractice/Pref'
import RootLayout from './Layout/RootLayout'
import Home from './pages/Home'
import Tolets from './pages/Tolets'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/tolets' element={<Tolets/>}/>
      </Route>
    )
  )
  
  return (
    <>
     {/* <Home/> */}
     {/* <Peffect/> */}
     {/* <Pref/> */}
     {/* <Pcallback/> */}
     <RouterProvider router={router}/>
     
     
    </>
  )
}

export default App
