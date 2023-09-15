import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import ShowDetails from './components/ShowDetails/ShowDetails'

function App() {
 

  return (
    <>
    <Header></Header>

  <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-5 mt-4 lg:mt-8'>
    <Cards></Cards>
    <ShowDetails></ShowDetails>
  </div>

    </>
  )
}

export default App
