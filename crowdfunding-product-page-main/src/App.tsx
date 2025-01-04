import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import MonitorRiserCard from './component/MonitorRiserCard'
import FundingTracker from './component/FundingTracker'
import Modal from './component/Modal/Modal'
import { ProjectDetails } from './component/ProjectDetails'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className='relative h-auto w-auto'>
    <Header/>
    <main className='px-12 pb-32 flex flex-col space-y-6 justify-center items-center bg-gray-200'>
    <MonitorRiserCard setIsCliked={openModal}/>
    <FundingTracker/>
    <ProjectDetails/>
    </main>
    <div className="p-4">
      <Modal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
    </div>
  )
}

export default App
