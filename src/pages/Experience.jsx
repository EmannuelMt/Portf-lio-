import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Storage } from '../utils/storage'

const experiences = [
  {
    id: 1,
    position: 'Desenvolvedor Front-end',
    company: 'Empresa X',
    period: '2022 - Presente',
    description: 'Desenvolvimento de interfaces com React, otimização de performance e trabalho em equipe com metodologias ágeis.'
  },
  {
    id: 2,
    position: 'Estagiário em Desenvolvimento',
    company: 'Startup Y',
    period: '2021 - 2022',
    description: 'Auxílio no desenvolvimento de aplicações web, manutenção de código e implementação de novas funcionalidades.'
  }
];

export default function Experience() {
  useEffect(() => {
    Storage.addLastVisited('/experiencias')
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="experience"
    >
      <h1>Experiências Profissionais</h1>
      
      <div className="timeline">
        {experiences.map(exp => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-content">
              <h2>{exp.position}</h2>
              <h3>{exp.company} • {exp.period}</h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}