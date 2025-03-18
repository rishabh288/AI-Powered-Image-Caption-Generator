import Layout from './components//Layout'
import { BrowserRouter,Route,Routes,Link,useNavigate } from 'react-router-dom'
import './App.css'
import WelcomeScreen from './components/WelcomScreen'
import SignUp from './components/SignUp'
import Login from './components/Login'
import NoPage from './components/NoPage'


  function App() {
    return (
      <>
          <div>
               <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Layout/>}>
                   <Route path='/' element={<WelcomeScreen/>}/>
                   <Route path='/signup' element={<SignUp/>}/>
                   <Route path='/signin' element={<Login/>}/>
                   <Route path="*" element={<NoPage/>}/>
                  </Route>
                </Routes>
               </BrowserRouter>
          </div>
      </>
    )
  }




export default App
