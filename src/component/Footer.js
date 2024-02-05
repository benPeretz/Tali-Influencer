import { useEffect,useRef } from "react";
import Aos from "aos";
import emailjs from '@emailjs/browser'

function Footer() {


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_el714kb', 'template_ud7843c', form.current, 'QmaQixzNDcGBqByZc')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();//clean the from after sending email
          
      };

    return (

        <section id="contactUs">
        <div className="footer">

            <div className="contactUsForm" data-aos="flip-right">

                <h1>צור קשר</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="d-flex mt-4 justify-content-evenly flex-wrap">
                        <input type="text" placeholder="שם פרטי" name="user_fName" required/>
                        <input type="text" placeholder="שם משפחה" name="user_lName" required/>
                    </div> 

                    <div className="d-flex mt-4 justify-content-evenly flex-wrap">
                        <input type="text" placeholder="טלפון" name="user_phone" required />
                        <input type="email" placeholder="אימייל" name="user_email" required/>
                    </div>
                    <div className="d-flex mt-4 justify-content-center">
                        <textarea cols={4} rows={4} placeholder="הודעה" className="w-75 " name="message" required/>
                    </div>

                    <button className="btn" type="submit">שלח</button>



                </form>

            </div>

            <div className="contactUsIcons text-center">

                <div>
                    <a href="https://www.instagram.com/talirivkin/" target="_blank">
                        <img src="../img/icons8-instegram.png"/>
                    </a>
                    <h5 style={{ color: "rgb(181 170 173)" }}>instagram</h5>
                </div>
              
                <div>
               
                    <img src="../img/icons8-email.png"/>
                    <h5 style={{ color: "rgb(181 170 173)" }}>benper121@gmail.com</h5>
                </div>
                <div>
                <img src="../img/icons8-phone.png"/>
                    <h5 style={{ color: "rgb(181 170 173)" }}>ben123@gmail.com</h5>
                </div>
            </div>

        </div>
        </section>
    );

}

export default Footer;
