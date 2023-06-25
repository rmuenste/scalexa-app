import React, { useEffect, useRef, useState } from 'react';

function Carousel() {

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
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
    console.log("Carousel is Visible");
    return "visible";
  }

  return (
    <div 
      ref={componentRef}
      className={`scroll-reveal-component ${isVisible ? isVis() : ''}`}
    >
    {isVisible ? (
    <div class="container-xxl bg-primary testimonial py-5 my-5 animated fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5 px-lg-5">
            <div class="owl-carousel testimonial-carousel">
                <a href="fau.html">
                <div class="testimonial-item bg-transparent border rounded text-white p-4">
                    <i class="fa fa-quote-left fa-2x mb-3"></i>
                    <p>Sustainable Performance Engineering, State-Of-The-Art code analysis and hardware optimization</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded-circle testimonial-img" src="img/nhrfau_logo2.png"/>
                        <div class="ps-3">
                            <h6 class="text-white mb-1">Friedrich-Alexander-Universität Erlangen-Nürnberg</h6>
                        </div>
                    </div>
                </div>
                </a>
                <a href="fzj.html">
                <div class="testimonial-item bg-transparent border rounded text-white p-4">
                    <i class="fa fa-quote-left fa-2x mb-3"></i>
                    <p>High-Performance Computing, Parallel Preconditioning, Parallel-In-Time Methods, Exascale Supercomputing</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded-circle testimonial-img" src="img/logo_juelich.svg"/>
                        <div class="ps-3">
                            <h6 class="text-white mb-1">Forschungszentrum Jülich</h6>
                        </div>
                    </div>
                </div>
                </a>
                <a href="tuf.html">
                <div class="testimonial-item bg-transparent border rounded text-white p-4">
                    <i class="fa fa-quote-left fa-2x mb-3"></i>
                    <p>Highly parallel algebraic Multi-Level-Methods for PDEs, non-linear Domain Decomposition, Multi-Level-FROSch Solver</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded-circle testimonial-img" src="img/tuf_24536.png"/>
                        <div class="ps-3">
                            <h6 class="text-white mb-1">TU Bergakademie Freiberg</h6>
                        </div>
                    </div>
                </div>
                </a>
                <a href="tudo.html">
                <div class="testimonial-item bg-transparent border rounded text-white p-4">
                    <i class="fa fa-quote-left fa-2x mb-3"></i>
                    <p>FEATFLOW package with massively parallel, hardware-oriented numerics, basis for next gen schemes like Parallel-In-Time methods</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded-circle testimonial-img" src="img/tudo.png"/>
                        <div class="ps-3">
                            <h6 class="text-white mb-1">TU Dortmund</h6>
                        </div>
                    </div>
                </div>
                </a>
                <a href="ianus.html">
                <div class="testimonial-item bg-transparent border rounded text-white p-4">
                    <i class="fa fa-quote-left fa-2x mb-3"></i>
                    <p>Industrial application of latest scientific methods, Stroemungsraum framework offers Simulation-as-a-Service</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded-circle testimonial-img" src="img/ianus_logo.svg"/>
                        <div class="ps-3">
                            <h6 class="text-white mb-1">IANUS Simulation</h6>
                        </div>
                    </div>
                </div>
                </a>
                <a href="uzk.html">
                <div class="testimonial-item bg-transparent border rounded text-white p-4">
                    <i class="fa fa-quote-left fa-2x mb-3"></i>
                    <p>Scalable parallel solvers for PDEs focusing on non linear Domain Decomposition and Multi-Level-Methods</p>
                    <div class="d-flex align-items-center">
                        <img class="img-fluid flex-shrink-0 rounded-circle testimonial-img" src="img/koeln.svg.png"/>
                        <div class="ps-3">
                            <h6 class="text-white mb-1">Universität zu Köln</h6>
                        </div>
                    </div>
                </div>
                </a>
            </div>
        </div>
    </div>
    ) : null}
    </div>
  );
}

export default Carousel;