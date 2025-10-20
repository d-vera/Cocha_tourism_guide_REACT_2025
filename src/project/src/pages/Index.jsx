export default function Index() {
  return (
    <>
       <div className="row">
            <div className="col-md-12">
                <main>
                    <div className="position-relative">
                        <img src="images/hermosa-foto-carretera-curva-vacia-campo-nubes-increibles-dia-brumoso.jpg"
                            className="img-fluid" alt="Sample image"/>
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
                         {/* Button positioned at the center-bottom, inside the position-relative container  */}
                        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2 w-100 text-center px-2">
                            <a href="contactanos.html">
                                <button type="button" className="btn text-white" style={{ backgroundColor: "#6f42c1" }}>
                                    Contáctanos
                                </button>
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>

      <div className="row">
            <div className="col-md-6">
                <h1>Datos de Cochabamba</h1>
                <p>
                    Cochabamba es una ciudad de Bolivia, capital del departamento homónimo y de la provincia de Cercado.
                    Está ubicada en el centro del país, en los valles centrales de la región subandina, entre el
                    altiplano y
                    los llanos orientales. Se extiende por ambas orillas del río Rocha, que atraviesa la ciudad de este
                    a oeste.
                    Con una población estimada de 856 198 habitantes de acuerdo al censo 2024, es la cuarta ciudad más
                    poblada de Bolivia
                </p>
            </div>
            <div className="col-md-6">
                <img src="images/cocha-vista.jpg" className="img-fluid" alt=""/>
            </div>
        </div>
        </>
  );
}

