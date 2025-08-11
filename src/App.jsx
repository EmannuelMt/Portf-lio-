import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Studies from './pages/Studies'
import Contact from './pages/Contact'
import Secret from './pages/Secret'
import RPG from './pages/RPG'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <AnimatePresence mode='wait'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/experiencias" element={<Experience />} />
              <Route path="/projetos" element={<Projects />} />
              <Route path="/estudos" element={<Studies />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/secreto" element={<Secret />} />
              <Route path="/rpg" element={<RPG />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App