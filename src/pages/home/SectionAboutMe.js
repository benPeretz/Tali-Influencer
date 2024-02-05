
import { HomeData } from "../../Data";

function SectionAboutMe({content}) {

  

    return (
        <section id="sectionAboutMe">
        <div className="section sectionAboutMe">
      
                    <h2> <span className="specialSpan">T.R</span> תכירו את</h2>
                    <br/>
                    <p>
                    {content}
                    </p>
              
        </div>
        </section>
    );

}

export default SectionAboutMe;