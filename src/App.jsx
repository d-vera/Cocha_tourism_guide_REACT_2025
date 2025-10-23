import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TopPlaces from './pages/TopPlaces'
import Contact from './pages/Contact'
import Pueblos from './pages/Pueblos'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-10-lugares" element={<TopPlaces />} />
          <Route path="/contactanos" element={<Contact />} />
          <Route path="/pueblos" element={<Pueblos />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
