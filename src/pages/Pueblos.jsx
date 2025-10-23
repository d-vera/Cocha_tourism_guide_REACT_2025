function Pueblos() {
  const pueblos = [
    { id: 1, name: 'Tarata', population: '8,000', mapsUrl: 'https://www.google.com/maps/place/Tarata,+Bolivia/@-17.6172222,-65.8772222,15z' },
    { id: 2, name: 'Cliza', population: '22,000', mapsUrl: 'https://www.google.com/maps/place/Cliza,+Bolivia/@-17.5933333,-65.9333333,15z' },
    { id: 3, name: 'Totora', population: '4,000', mapsUrl: 'https://www.google.com/maps/place/Totora,+Bolivia/@-17.7688889,-65.2363889,15z' },
    { id: 4, name: 'Arani', population: '13,000', mapsUrl: 'https://www.google.com/maps/place/Arani,+Bolivia/@-17.5666667,-65.8666667,15z' },
    { id: 5, name: 'Villa Tunari', population: '20,000', mapsUrl: 'https://www.google.com/maps/place/Villa+Tunari,+Bolivia/@-16.9747222,-65.4208333,15z' },
    { id: 6, name: 'Quillacollo', population: '137,000', mapsUrl: 'https://www.google.com/maps/place/Quillacollo,+Bolivia/@-17.3975,-66.2819444,15z' },
    { id: 7, name: 'Sacaba', population: '170,000', mapsUrl: 'https://www.google.com/maps/place/Sacaba,+Bolivia/@-17.4022222,-66.0388889,15z' },
    { id: 8, name: 'Colomi', population: '15,000', mapsUrl: 'https://www.google.com/maps/place/Colomi,+Bolivia/@-17.3333333,-65.8666667,15z' },
    { id: 9, name: 'Arque', population: '2,500', mapsUrl: 'https://www.google.com/maps/place/Arque,+Bolivia/@-17.9833333,-66.4333333,15z' },
    { id: 10, name: 'Sipe Sipe', population: '35,000', mapsUrl: 'https://www.google.com/maps/place/Sipe+Sipe,+Bolivia/@-17.45,-66.4166667,15z' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Top 10 Pueblos para Visitar en Cochabamba
      </h1>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Pueblo</th>
              <th className="py-3 px-6 text-left">Habitantes</th>
              <th className="py-3 px-6 text-left">Dirección en Google Maps</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {pueblos.map((pueblo, index) => (
              <tr 
                key={pueblo.id} 
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="py-3 px-6 border-b">{pueblo.id}</td>
                <td className="py-3 px-6 border-b font-semibold">{pueblo.name}</td>
                <td className="py-3 px-6 border-b">{pueblo.population}</td>
                <td className="py-3 px-6 border-b">
                  <a
                    href={pueblo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Ver en Google Maps
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pueblos
