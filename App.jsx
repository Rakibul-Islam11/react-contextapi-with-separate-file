import { Fnn } from './all-compo/contestapi-compo/Contestapi'
import About from './all-compo/about/About'
import Home from './all-compo/home/Home'
import './App.css'

function App() {


  return (
    <>
      <Fnn> 
        <Home></Home>
        <About></About>
      </Fnn>
    </>
  )
}

export default App


//  এখানে আমরা অই fn কেই parent বানিয়ে wraping করা হয়েছে যাতে fn এর মদ্ধে থাকা সব 
// compo access পায় 