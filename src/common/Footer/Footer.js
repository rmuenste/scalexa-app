import React, { useEffect, useRef, useState } from 'react';

function Footer() {

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(entry.target);
        }, 1500); // Add a delay of 0.5 seconds (500 milliseconds)
        }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);  

  function isVis() {
    console.log("Footer is Visible");
    return "visible";
  }

  return (
    <div
      ref={componentRef}
      className={`scroll-reveal-component ${isVisible ? isVis() : ''}`}
    >
        {isVisible ? (
        <div class="container-fluid bg-primary text-light footer mt-5 pt-5 animated fadeIn" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-4">
                        <h5 class="text-white mb-4">Contact Us</h5>
                        <p><i class="fa fa-map-marker-alt me-3"></i>Vogelpothsweg 87, 44227 Dortmund Germany</p>
                        <p><i class="fa fa-phone-alt me-3"></i>+49 231 7556825</p>
                        <p><i class="fa fa-envelope me-3"></i><span id="email"></span></p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h5 class="text-white mb-4">Project Gallery</h5>
                        <div class="row g-2">
                            <div class="col-4">
                                <img class="img-fluid" src="../../img/port-1.png" alt="Image"/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/port-2.png" alt="Image"/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/port-3.png" alt="Image"/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/port-4.png" alt="Image"/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/port-5.png" alt="Image"/>
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/port-6.png" alt="Image"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <h5 class="text-white mb-4">Links</h5>
                        <a class="btn btn-link" href="">Partners</a>
                        <a class="btn btn-link" href="">Official Information</a>
                        <a class="btn btn-link" href="">Privacy Policy</a>
                        <a class="btn btn-link" href="">Terms & Condition</a>
                    </div>
                </div>
            </div>
            <div class="container px-lg-5">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">StroemungsRaum Team</a>, All Right Reserved.<br/> 
							{/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
							Template designed by <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                            <br/>Template distributed by: <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> ) : null}
    </div>
  );
}

export default Footer;