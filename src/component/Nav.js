
import React, { useState } from "react";



function Nav() {


    const [navbar, setNavbar] = useState(false);

    const changeNavbarBackground = () => {
        if (window.scrollY >= 60) {
            // console.log(window.scrollY)
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavbarBackground);

    return (

        <div>
            <nav className={`${navbar ? "active" : ""} navbar navbar-expand-lg fixed-top`}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="../img/logo.png" alt="Logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#contactUs">צור קשר</a>
                            </li>


                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    בעלי עסקים
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#sectionBusiness">ליווי בעלי עסקים</a></li>
                                    <li><a class="dropdown-item" href="#">סדנה</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    משפיענים
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#sectionInfluencer">ליווי משפיענים</a></li>
                                    <li><a class="dropdown-item" href="#sectionInfluencerCampaign">ניהול קמפיינים משפיענים</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#section-contact-us">אודות</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>


    );
}

export default Nav;

