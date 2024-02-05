
import { useEffect } from "react";
import Aos from "aos";

function SectionInfluencer({ liInfluencerCampaign, liInfluencer }) {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    const liInfluencerCampaignList = liInfluencerCampaign.map((li) => (
        <li>
            {li}
        </li>
    ));

    const liInfluencerList = liInfluencer.map((li) => (
        <li>{li}</li>
    ));




    return (


        <div className="section  container" id="sectionInfluencer">
            <div className=" sectionInfluencer ">

                <div className="contentInfluencerDiv">
                    <a href="/influencer">
                        <h1>ליווי עיסקי למשפיענים</h1>
                    </a>
                    <ul className="ulInfluencer">
                        {liInfluencerList}
                    </ul>

                </div>

                <div className="titleInfluencerDiv">
                    <h1 data-aos="fade-up">Influencer ? </h1>
                    <h1 data-aos="fade-in">This Is </h1>
                    <h1 data-aos="fade-down">For You</h1>
                </div>

            </div>

            <div className="sectionInfluencer mt-2" id="sectionInfluencerCampaign">

                <div className="titleInfluencerDiv2">
                    <h1 data-aos="fade-up">Influencer ? </h1>
                    <h1 data-aos="fade-in">This Is </h1>
                    <h1 data-aos="fade-down">For You</h1>
                </div>

                <div className="contentInfluencerDiv">
<a></a>
                    <h1>ניהול קמפיין משפיענים</h1>
                    <ul className="ulInfluencer">
                        {liInfluencerCampaignList}
                    </ul>

                </div>

            </div>
        </div>

    );


}

export default SectionInfluencer;