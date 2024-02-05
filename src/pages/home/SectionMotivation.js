
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function SectionMotivation({ content }) {


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    const cardList = content.map((card, index) => (
        <div key={index} className={`cardAnim ${index % 2 === 0 && "alignSelfEnd"}`} data-aos={`${index % 2 === 0 ? "fade-in" : "fade-up"}`}>
          {card}
        </div>
      ));


    return (

        <div className="section sectionMotivation container">
            <div className="cardsFlex ">
                {cardList}
            </div>
        </div>
    );


}

export default SectionMotivation;

