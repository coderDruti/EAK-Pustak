import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import MainContent from './components/MainContent'
// import Footer from './components/Footer'

function App() {
  const [activeModal, setActiveModal] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleOpenModal = (type = 'apply') => {
    setActiveModal(type)
    setFormSubmitted(false)
  }

  return (
    <>
      <Hero
        onApplyClick={() => handleOpenModal('apply')}
        onEnquireClick={() => handleOpenModal('call')}
      />
      <MainContent
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
      />
      {/* <Footer /> */}
    </>
  )
}

export default App
