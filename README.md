<h1>Project features explain below</h1>

<li>You cannot select a course more than once. If you select more than once a toast message show that is you are already selected this course please select another one</li>

<li>Course are up to twenty credit hours in total! No more than twenty hours of credit may be taken. And also credit is remaining less then zero hours. If credit up to twenty and less then zero a toast message show sorry credit cannot exceeds up to twenty hours and credit cannot remaining less then zero</li>

<li>By clicking select button you also see the course price ! Then you decide which course is range with your budget then you will able to get course credit</li>


<li>In this project there are nine computer science related skilled course here. If you want to become a skilled person you can takes a course credit! You can become a well programmer , well problem solver and a software engineer if you work well with the credits of the courses</li>


<h1>Discuss below how i managed the state in my assignment project </h1>

<ol>Cards data show state manage :</ol>

<p>In my code, i using React's useState and useEffect hooks to manage the state of the cards array in my project. Let's discuss how i managing state in this React component:

Step 1, Initializing State:

initialize the cards state variable using the useState hook. This sets up an empty array as the initial state

const [cards, setCards] = useState([]);

Step 2 ,Fetching Data and Updating State:

Inside the useEffect hook, i make an HTTP request to retrieve data from the 'courses.json' file. When the data is fetched successfully, update the cards state with the received data using the setCards function:

useEffect(() => {
    fetch('courses.json')
    .then(res => res.json())
    .then(data => setCards(data))
}, [])

The empty dependency array ([]) ensures that this effect runs only once after the initial render.

Rendering the Data:

In my component's JSX, map over the cards array and render each item using the Card component. And pass the information object and the handleSelectButton function as props to the Card component:


    cards.map((information, index) => (
        <Card key={index} information={information} handleSelectButton={handleSelectButton}></Card>
    ))

The key prop is used to help React efficiently update the components in the list.

Step 3, Handling State Updates:

When the data is fetched and setCards is called, React will automatically re-render component with the updated cards state. If need to make further changes to the cards state (e.g., adding, updating, or deleting cards), should do so by calling setCards with the new state data.

Overall, code effectively manages the state of the cards array by fetching and updating it using the useState and useEffect hooks, and then rendering the data as a list of Card components.</p>



<ol> Show course Name, Total credit hour, Total price and credit hour remaining State manage : </ol>


Step 1, Managing Courses State:

Using the useState hook to manage the state of the courses array, which represents the selected courses:

const [courses, setCourses] = useState([]);
This state stores an array of selected course objects.


Step 2, Managing Total Credit Hours State:

Use the useState hook to manage the state of totalCreditHour, which represents the total credit hours of the selected courses:

const [totalCreditHour, setTotalCreditHour] = useState(0);
This state keeps track of the sum of credit hours of the selected courses.


Step 3, Managing Remaining Credit Hours State:

Use the useState hook to manage the state of hourRemaining, which represents the remaining credit hours available for selection:

const [hourRemaining, setHourRemaining] = useState(20);
This state calculates and updates the remaining credit hours based on the selected courses.

Step 4, Managing Total Course Price State:

Use the useState hook to manage the state of coursePrice, which represents the total price of the selected courses:

const [coursePrice, setCoursePrice] = useState(0);
This state stores the sum of prices of the selected courses.

Step 5,Handling Course Selection:

handleSelectButton function that handles course selection. It checks if the selected course already exists in the courses array and updates the state accordingly. If the course is not already selected, it updates the states for credit hours, remaining hours, course price, and the courses array.

Step 6, Toast Notifications:

Use the react-toastify library to show toast notifications (notify and notifyTwo) when certain actions or conditions occur in my application, such as attempting to select a course that has already been selected or exceeding the maximum credit hours.

Step 7,Rendering Components:

Render the Cards component and the ShowDetails component, passing the handleSelectButton function and the relevant state data as props.

Overall, effectively manages the state of the selected courses, total credit hours, remaining credit hours, and course prices. When a course is selected or deselected, the state is updated accordingly, and the components re-render to reflect the changes in the UI. The use of toast notifications adds user feedback for important events in my application.
