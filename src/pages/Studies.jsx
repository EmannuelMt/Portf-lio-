import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Storage } from '../utils/storage'
import ProgressBar from '../components/ProgressBar'

export default function Studies() {
  const [studies, setStudies] = useState(Storage.getStudies())
  const [newStudy, setNewStudy] = useState('')
  const [newProgress, setNewProgress] = useState(0)

  useEffect(() => {
    Storage.addLastVisited('/estudos')
  }, [])

  const updateProgress = (id, newProgress) => {
    const updatedStudies = studies.map(study => 
      study.id === id ? { ...study, progress: newProgress } : study
    )
    setStudies(updatedStudies)
    Storage.setStudies(updatedStudies)
  }

  const addNewStudy = () => {
    if (newStudy.trim() && !studies.some(s => s.name === newStudy.trim())) {
      const newId = Math.max(...studies.map(s => s.id), 0) + 1
      const updated = [...studies, { id: newId, name: newStudy.trim(), progress: newProgress }]
      setStudies(updated)
      Storage.setStudies(updated)
      setNewStudy('')
      setNewProgress(0)
    }
  }

  const removeStudy = (id) => {
    const updated = studies.filter(study => study.id !== id)
    setStudies(updated)
    Storage.setStudies(updated)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="studies"
    >
      <h1>Meus Estudos</h1>
      
      <div className="study-list">
        {studies.map(study => (
          <div key={study.id} className="study-item">
            <div className="study-header">
              <h3>{study.name}</h3>
              <button onClick={() => removeStudy(study.id)}>×</button>
            </div>
            <ProgressBar progress={study.progress} />
            <div className="study-controls">
              <input
                type="range"
                min="0"
                max="100"
                value={study.progress}
                onChange={(e) => updateProgress(study.id, parseInt(e.target.value))}
              />
              <span>{study.progress}%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="add-study">
        <h3>Adicionar Novo Estudo</h3>
        <input
          type="text"
          value={newStudy}
          onChange={(e) => setNewStudy(e.target.value)}
          placeholder="Tecnologia/Ferramenta"
        />
        <div className="add-controls">
          <input
            type="range"
            min="0"
            max="100"
            value={newProgress}
            onChange={(e) => setNewProgress(parseInt(e.target.value))}
          />
          <span>{newProgress}%</span>
          <button onClick={addNewStudy}>Adicionar</button>
        </div>
      </div>
    </motion.div>
  )
}