import React, { useEffect, useRef, useState } from 'react';

function Expertise() {

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(entry.target);
        }, 500); // Add a delay of 0.5 seconds (500 milliseconds)
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
    console.log("Expertise is Visible");
    return "visible";
  }

  // the line "ref={componentRef}" actually updated the componentRef to hold the value of the div the ref property of which gets assigned the componentRef
  return (
    <div 
      ref={componentRef}
      className={`scroll-reveal-component ${isVisible ? isVis() : ''}`}
    >
    {isVisible ? (
    <div class="container-xxl py-5">
        <div class="container px-lg-5">
            <div class="section-title position-relative text-center mb-5 pb-2 animated fadeIn" data-wow-delay="0.1s">
                <h6 class="position-relative d-inline text-primary ps-4">Our Expertise</h6>
                <h2 class="mt-2">StroemungsRaum High-Performance Computing</h2>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 animated zoomIn" data-wow-delay="0.1s">
                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fa fa-home fa-2x"></i>
                        </div>
                        <h5 class="mb-3">Sustainable Performance Engineering</h5>
                        <p>Support of future and current hardware developments by using performance model aided algorithmic co-design.</p>
                        <a class="btn px-3 mt-auto mx-auto" href="fau_proj.html">Read More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 animated zoomIn" data-wow-delay="0.3s">
                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fa fa-home fa-2x"></i>
                        </div>
                        <h5 class="mb-3">Scalable Multilevel Methods</h5>
                        <p>Increase the scalability of existing methods by tailoring them to new parallel architectures and by novel decomposition schemes.</p>
                        <a class="btn px-3 mt-auto mx-auto" href="tudo_proj.html">Read More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 animated zoomIn" data-wow-delay="0.6s">
                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fa fa-home fa-2x"></i>
                        </div>
                        <h5 class="mb-3">FROSch - Domain Decomposition</h5>
                        <p>Fast and Robust Overlapping Schwarz (FROSch) domain decomposition can extend the scalability of fluid solvers to exascale levels.</p>
                        <a class="btn px-3 mt-auto mx-auto" href="uzk_tuf.html">Read More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 animated zoomIn" data-wow-delay="0.1s">
                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fa fa-home fa-2x"></i>
                        </div>
                        <h5 class="mb-3">Parallel In Time Integration</h5>
                        <p>
                         Coupled space and time parallelization on supercomputers, to develop new parallel-in-time integrators increase scalability.
                        </p>
                        <a class="btn px-3 mt-auto mx-auto" href="fzj_tudo_fau.html">Read More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 animated zoomIn" data-wow-delay="0.3s">
                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fa fa-home fa-2x"></i>
                        </div>
                        <h5 class="mb-3">Supercomputers & Acceleration Hardware</h5>
                        <p>Performance studies of the fluid solvers on high-ranking clusters, GPUs and new architectures provide insights to algorithmic design</p>
                        <a class="btn px-3 mt-auto mx-auto" href="super_comp_proj.html">Read More</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 animated zoomIn" data-wow-delay="0.6s">
                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <i class="fa fa-home fa-2x"></i>
                        </div>
                        <h5 class="mb-3">Stroemungsraum for Industrial Applications</h5>
                        <p>In the StroemungsRaum framework the newly developed software can be tested in complex industrial applications.</p>
                        <a class="btn px-3 mt-auto mx-auto" href="ianus_proj.html">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
     ) : null}
    </div>
  );
    // <!-- Service End --> 
}

export default Expertise;