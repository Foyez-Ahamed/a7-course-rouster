import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Header from './components/Header/Header'
import ShowDetails from './components/ShowDetails/ShowDetails'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [courses, setCourses] = useState([]);

  const [totalCreditHour, setTotalCreditHour] = useState(0);

  const [hourRemaining, setHourRemaining] = useState(0);

  const [coursePrice, setCoursePrice] = useState(0);




  const handleSelectButton = (name) => {
    
  const isHave = courses.find(courseId => courseId.id == name.id); 

  let creditHour = name.credit;

  let totalPrice = name.price;
  

  if(isHave){
     return alert('selected')

  } else {

    courses.forEach(credit => {
      creditHour = creditHour + credit.credit;
    })

    courses.forEach(coursePrice => {
      totalPrice = totalPrice + coursePrice.price;
    })

    let totalRemaining = 20 - creditHour;

    if(creditHour >= 20){
      return alert('credit cannot up to 20 hour')
    }

    setTotalCreditHour(creditHour);
    setHourRemaining(totalRemaining);
    setCoursePrice(totalPrice);

    const newCourseName = [...courses, name];
    setCourses(newCourseName);
  }
    
  }
 

  return (
    <>
    <Header></Header>

  <div className='flex flex-col md:flex-col lg:flex-row justify-between gap-5 mt-4 lg:mt-8'>
    <Cards handleSelectButton = {handleSelectButton}></Cards>
    <ShowDetails courses = {courses} totalCreditHour = {totalCreditHour} hourRemaining = {hourRemaining} coursePrice = {coursePrice}></ShowDetails>
  </div>

    </>
  )
}

export default App
