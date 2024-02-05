import Nav from "../../component/Nav";
import SectionTop from "./SectionTop";
import SectionAboutMe from "./SectionAboutMe";
import SectionMotivation from "./SectionMotivation";
import SectionInfluencer from "./SectionInfluencers";
import SectionBusiness from "./SectionBusiness";
import { HomeData } from "../../Data";

function Home() {

  const aboutMe =HomeData.aboutMe;
  const motivationCards=HomeData.motivationCards;
  const liInfluencer=HomeData.liInfluencer;
  const liInfluencerCampaign=HomeData.liInfluencerCampaign;
  const liBusiness=HomeData.liBusiness;


  return (



    <div>
      
      <SectionTop />

      {aboutMe && <SectionAboutMe content={aboutMe} />}
      {motivationCards&& <SectionMotivation content={motivationCards} />}
     { (liInfluencer && liInfluencerCampaign) && <SectionInfluencer liInfluencer={liInfluencer} liInfluencerCampaign={liInfluencerCampaign} />}
     
     {liBusiness && <SectionBusiness liBusiness={liBusiness}/>}
     <hr className='hrSeperate'/>
    </div>
  );


}



export default Home;