import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section */}
      <div className="relative mb-8">
        <img
          src="/images/hermosa-foto-carretera-curva-vacia-campo-nubes-increibles-dia-brumoso.jpg"
          className="w-full h-96 object-cover rounded-lg"
          alt="Carretera en Cochabamba"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center px-4">
          <Link to="/contactanos">
            <button className="bg-custom-purple hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded transition">
              Contáctanos
            </button>
          </Link>
        </div>
      </div>

      {/* Info Section 1 */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Datos de Cochabamba</h1>
          <p className="text-gray-700 leading-relaxed">
            Cochabamba es una ciudad de Bolivia, capital del departamento homónimo y de la provincia de Cercado.
            Está ubicada en el centro del país, en los valles centrales de la región subandina, entre el
            altiplano y los llanos orientales. Se extiende por ambas orillas del río Rocha, que atraviesa la ciudad de este
            a oeste. Con una población estimada de 856 198 habitantes de acuerdo al censo 2024, es la cuarta ciudad más
            poblada de Bolivia
          </p>
        </div>
        <div>
          <img
            src="/images/cocha-vista.jpg"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            alt="Vista de Cochabamba"
          />
        </div>
      </div>

      {/* Info Section 2 */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="order-2 md:order-1">
          <img
            src="/images/cristo_vista_trasera.jpeg"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            alt="Cristo de la Concordia"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-gray-700 leading-relaxed mb-4">
            Cochabamba conserva su personalidad precolombina y virreinal;
            se constituye como un importante centro agropecuario, manufacturero,
            comercial e industrial. Asimismo, es una de las tres ciudades principales de Bolivia,
            formando parte del eje troncal del país, junto con las ciudades de Santa Cruz de la Sierra
            y La Paz
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Para tener mayor información de los pueblos que le recomendamos visitar en el departamento de Cochabamba:
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-custom-purple hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded transition"
          >
            Ver más...
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="border-b px-6 py-4">
              <h5 className="text-xl font-semibold">
                Advertencia, usted saldrá a una página externa
              </h5>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700">
                Si usted de acuerdo con que se le redireccione a otra página web, con información de los pueblos más
                interesantes en el departamento de Cochabamba, haga click en el botón de aceptar
              </p>
            </div>
            <div className="border-t px-6 py-4 flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition"
              >
                Cerrar
              </button>
              <Link to="/pueblos">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                >
                  Aceptar
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
