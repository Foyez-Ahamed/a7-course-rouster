const ShowDetails = ({courses, totalCreditHour, hourRemaining, coursePrice}) => {
    return (
        <>

        <div className="lg:w-1/4">

        <div className="card card-compact  bg-base-100 shadow-xl">
        <div className="card-body">
         <h1 className="text-[#2F80ED] text-[17px] font-bold">Credit Hour Remaining {hourRemaining} hr</h1>
         <hr />   
        <h2 className="text-[#1C1B1B] text-[20px] font-bold mt-4">Course Name</h2>
        <div className="mt-4">
        {
            courses.map((titleName, index ) => <li className="list-decimal text-[#7b7575] text-[14px] font-bold" key={index}>{titleName.title}</li>)
        }
        </div>

        <hr />

        <p className="text-[#423e3e] text-[18px] mt-4">Total Credit Hour : {totalCreditHour} </p>

        <p className="text-[#423e3e] text-[18px] mt-4">Total Price : {coursePrice} USD</p>
        </div>
        </div>


        </div>
            
        </>
    );
};

export default ShowDetails;