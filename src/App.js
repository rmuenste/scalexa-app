import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import Nav from './common/Nav/Nav';
import Footer from './common/Footer/Footer';
import Intro from './components/Intro/Intro';
import Expertise from './components/Expertise/Expertise';
import Carousel from './components/Carousel/Carousel';
import './App.css';

function App() {

  useEffect( () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const [loading, setLoading] = useState(true);
  return (
    <>
    <div class="container-xxl bg-white p-0">
      {loading ? (
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary main-spinner" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
      ) : ( 
        <div class="container-xxl position-relative p-0">
          <Nav/>
            <div class="container-xxl py-5 bg-primary hero-header mb-5">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="text-white mb-4 animated zoomIn">StroemungsRaum - High performance computation for realistic applications</h1>
                            <p class="text-white pb-3 animated zoomIn">Novel Exascale-ready methods with heterogeneous hardware components for 
                            Computational Fluid Dynamics Simulations in the Stroemungsraum platform.
                            </p>
                            <a href="project.html" class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">About StroemungsRaum</a>
                            <a href="contact.html" class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                        </div>
                        <div class="col-lg-6 text-center text-lg-start">
                            <img class="img-fluid" src="../img/hero4.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        <Intro/>
        <Expertise/>
        <Carousel/>
        <Footer/>
        </div>
      )
      }
      </div>
    </>
  );
}

export default App;
