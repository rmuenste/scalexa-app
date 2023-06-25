import React from 'react';

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" class="navbar-brand p-0">
            <div class="logo-wrapper2"></div>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="project.html" class="nav-item nav-link">Project</a>
                    <a href="results.html" class="nav-item nav-link">Results</a>
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Header;