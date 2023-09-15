import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <>

        <div className="lg:w-3/4">
           <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
           {
            cards.map((information, index) => <Card key={index} information = {information}></Card>)
           }
           </div>
        </div>
            
        </>
    );
};

export default Cards;