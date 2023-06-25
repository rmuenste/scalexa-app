import React, { useEffect, useRef, useState } from 'react';

function Intro() {
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

  return (
        <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="row g-5">
                    <div class="col-lg-6 animated fadeInUp">
                        <div class="section-title position-relative mb-4 pb-2">
                            <h6 class="position-relative text-primary ps-4">The StroemungsRaum Project</h6>
                            <h2 class="mt-2">Combining Efficient, Robust and Verified HPC-Software</h2>
                        </div>
                        <p class="mb-4"> Available HPC methods need to be executed ressource-efficiently and need to 
                            exploit the performance of future Exascale computers. Integration of these techniques into application software 
                            accessible by non HPC-Experts is crucial to deliver these huge computational benefits to relalistic applications.
                            The open-source software FEATFLOW, developed at TU Dortmund University which is a central 
                            component of the StroemungsRaum that is successfully used by the industriual partner of the project IANUS for years
                            is the integration platform for our HPC techniques.
                        </p>
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <h6 class="mb-3"><i class="fa fa-check text-primary me-2"></i>High Performance Numerics</h6>
                                <h6 class="mb-0"><i class="fa fa-check text-primary me-2"></i>Exascale Ready</h6>
                            </div>
                            <div class="col-sm-6">
                                <h6 class="mb-3"><i class="fa fa-check text-primary me-2"></i>Industrial Applications</h6>
                                <h6 class="mb-0"><i class="fa fa-check text-primary me-2"></i>Accessibility</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid animated zoomIn" src="img/about2.png"/>
                    </div>
                </div>
            </div>
        </div>

  );

}

export default Intro;