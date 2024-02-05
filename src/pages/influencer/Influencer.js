import { useEffect } from "react";
import Aos from "aos";
import ReactPlayer from 'react-player';
import CustomCarousel from "../../component/CustomCarusel";


function Influencer({ liInfluencer }) {

    useEffect(() => {
        Aos.init({ duration: 1000 });


    }, []);


    const liInfluencerList = liInfluencer.map((li) => (
        <li>{li}</li>
    ));

    

    const videoList = [
        "/videoPro/video1.mp4",
        "/videoPro/video2.mp4",

    ];


    const list = videoList.map(item => (

        <div >
            {/* {console.log(item)} */}
            <ReactPlayer controls={true} url={item} height="400px" />
        </div>
    ));

    console.log(list);


    return (

        <div className="influencer  ">

            <div className="sectionTopInfluencer">

            </div>
            <div className="d-flex section justify-content-center">

                <div className="contentInfluencer ">

                    <h1>ליווי עיסקי למשפיענים</h1>
                    <ul className="ulInfluencer">
                        {liInfluencerList}
                    </ul>
                </div>

            </div>





            <div className="influencerExplain">


                <h1 className="mt-5" data-aos="fade-up">INDIVIDUALZ</h1>

                <p data-aos="fade-right">יש לך עוקבים באינסטגרם, את שומעת כל הזמן על משפיעניות  שעובדות  עם מותגים ומתפרנסות מזה אבל את שולחת מיילים למותגים ולא מקבלת תשובות,  כל התעשייה נראת לך מבלבלת ואת לא יודעת מאיפה להתחיל?</p>

                <p data-aos="fade-left">מזל טוב, הבנת שאת עסק ועכשיו הגיע הזמן להתחיל לעבוד .אבל אל תדאגי, את לא לבד</p>

                <h2 data-aos="fade-up" style={{ "color": "#edf396" }}>הגעת למקום הנכון  </h2>

                <p data-aos="fade-right" data-aos-duration="3000">תוכנית הליווי העסקי והבוטיקית שלנו (עד 6 משפיעניות בקבוצה) נועדה לספק לך חוויה ממדרגה ראשונה, המותאמת במיוחד כדי לענות על הצרכים הייחודיים של משפיענים כמוך.</p>

                <p data-aos="fade-left" data-aos-duration="3000">תכירי את התוכנית ליווי הבוטיקית שלנו שהוקמה כדי לתת לך את המעטפת  המלאה שאת צריכה כדי לעבוד בתעשיית המשפיענים.</p>

                <h2 data-aos="fade-up" style={{ "color": "rgb(255 207 218)" }}>?אז מה תלמדי</h2>

                <div className="whatYouLearn d-flex justify-content-around">

                    <h4 data-aos="zoom-in-up" data-aos-duration="1000">איך לתמחר</h4>
                    <h4 data-aos="zoom-in-up" data-aos-duration="2000">איך לפנות נכון למותגים</h4>
                    <h4 data-aos="zoom-in-up" data-aos-duration="3000">הדגשים בחתימת חוזים</h4>
                    <h4 data-aos="zoom-in-up" data-aos-duration="4000">איך למכור נכון</h4>

                </div>

                <h2 className="mt-3" style={{ "color": "white" }}>והכי חשוב!! --> איך להפוך את כל הדבר הזה לעסק יציב</h2>


            </div>

            <div className="container s my-5 " data-aos="zoom-in-up" data-aos-duration="4000">

                <CustomCarousel list={list} />

            </div>


            <div className="influencerExplain2">

                <h1 data-aos="fade-up">?למה לבחור בתכנית הלויווי העסקי שלנו</h1>

                {/* <img src="../img/woman.png"/> */}

                <h3 data-aos="fade-up" data-aos-duration="2000" className=" mt-3" style={{ "color": "#690395" }}>אנחנו מבינים בדיוק איך מנהלי המותגים חושבים</h3>

                <p >על ידי ניסיון ממקור ראשון בניהול קמפיינים, השגנו תובנות חשובות לגבי הפרטים המורכבים הכרוכים בבחירת משפיענים. אנחנו  מבינים שמנהלי מותגים לוקחים בחשבון גורמים כגון דמוגרפיה של קהל, שיעורי מעורבות, איכות תוכן והתאמה למותג בעת קבלת ההחלטות שלהם.</p>

                <p style={{ "color": "#b44060" }}>!לכן אנחנו יודעים איך לגרום להם לבחור בך</p>

                <h3 data-aos="fade-up" data-aos-duration="2000" style={{ "color": "#690395" }}>גישה מבפנים לדברים החשובים</h3>

                <p>כמשפיענים, גישה לאירועים והזדמנויות בלעדיות היא קריטית להצלחה. יש לנו גישות  וקשרים נרחבים בתוך התעשייה, המעניקים לך גישה לאירועים, השקות, מסיבות בלעדיות ומפגשים מתוקשרים. נטוורקינג בתוך התעשייה זה אחד הדברים החשובים לקריירה שלך</p>
           
                <h3 data-aos="fade-up" data-aos-duration="2000" style={{ "color": "#690395" }}>פיתוח מותג ואסטרטגיה</h3>

                <p>בנייה ותחזוקה של מותג אישי חזק חיונית בשוק המשפיענים התחרותי של היום. התוכנית שלנו כוללת תמיכה בפיתוח מותג מותאם אישית, שעוזרת לך לחדד את התדמית שלך, ליצור תוכן מרתק ולפתח שותפויות אסטרטגיות כדי להגביר את הנוכחות המקוונת שלך ולהגדיל את טווח ההגעה שלך למותגים שמעניינים אותך באמת</p>
           
           
           
           
           
            </div>

        </div>
    );

}


export default Influencer;