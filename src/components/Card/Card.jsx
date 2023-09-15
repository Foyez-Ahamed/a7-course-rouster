const Card = ({information, handleSelectButton}) => {

    const {image, title, description, price, credit} = information || {};
    
    return (
        <div>
            
  <div className="card p-1 card-compact bg-base-100 shadow-xl">
  <figure>
    <img className="w-full lg:h-[150px]" src={image} alt="all images"/>
  </figure>
  <div>
    <h2 className="text-[#1C1B1B] text-[16px] font-bold mt-4">{title}</h2>
    <p className="mt-4 text-[#a39f9f]">{description}</p>

    <div className="flex justify-between  mt-4 gap-2">
        <p className='flex items-center gap-2'><i className="fa-solid fa-dollar-sign"></i> Price :{price}</p>
        <p className='flex items-center gap-2'><i className="fa-solid fa-book-open text-gray-600"></i>Credit : {credit} hr</p>
    </div>

    <div className="mt-6">
      <button onClick={() => handleSelectButton(information)} className="btn bg-[#2F80ED] hover:bg-gray-600 w-full text-white capitalize">Select</button>
  </div>
  </div>
</div>


  </div>
    );
};

export default Card;