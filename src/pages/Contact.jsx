import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    isRobot: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Mensaje enviado exitosamente!')
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      isRobot: false
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-custom-purple text-center mb-8">
        ¿Cómo podemos ayudarte?
      </h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-purple"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-purple"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-purple"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="10"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-purple resize-none"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isRobot"
              name="isRobot"
              checked={formData.isRobot}
              onChange={handleChange}
              className="w-4 h-4 text-custom-purple border-gray-300 rounded focus:ring-custom-purple"
              required
            />
            <label htmlFor="isRobot" className="ml-2 text-gray-700">
              Haz click para verificar que no seas robot
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-custom-purple hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Contact
