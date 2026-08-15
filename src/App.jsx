import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'

import LandingReveal from './components/LandingReveal'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Inventory from './pages/Inventory.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import WhatsappButton from './components/WhatsappButton.jsx'
import ContactButton from './components/ContactButton.jsx'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-bg overflow-x-hidden">

      {/* Landing animation */}
      <LandingReveal />

      <ScrollToTop />

      <Navbar />

      <main className="flex-1">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/inventory"
            element={<Inventory />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>

      <Footer />

      <ContactButton />

      <WhatsappButton />

    </div>
  )
}