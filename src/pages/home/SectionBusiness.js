
import { useEffect } from "react";
import Aos from "aos";

function SectionBusiness({liBusiness}) {


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const liBusinessList= liBusiness.map((li)=>(
        <li data-aos="fade-up">{li}</li>
    )) ;

   
    return (
        <section id="sectionBusiness">
        <div className="sectionBusiness">

            <h1 data-aos="flip-up">יצירת תוכן לעסקים</h1>

            <ul className="ulInfluencer">

            {liBusinessList}

            </ul>
        </div>
        </section>
    );

}

export default SectionBusiness;