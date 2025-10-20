import { Link } from 'react-router-dom';    

function CustomNavbar() {
  return (
   <div class="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid bg-secondary text-white">
                            <img src="images/cristo-logo.png" alt="cristo logo" width="40px"/>
                            <a className="navbar-brand text-white" href="#">Guía-Cbba</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" aria-current="page"
                                            href="index.html">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a class="nav-link text-white"
                                            href="10-mejores-lugares-turisticos-que-debes-conocer-en-cbba.html">top
                                            10
                                            lugare</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="contactanos.html">Contáctanos</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
  );
}

export default CustomNavbar;