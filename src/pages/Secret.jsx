import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Storage } from '../utils/storage'

const secretLinks = [
  { name: 'Projeto Secreto 1', url: '#', emoji: '🔐' },
  { name: 'Blog Pessoal', url: '#', emoji: '📝' },
  { name: 'Galeria de Fotos', url: '#', emoji: '🖼️' },
  { name: 'Experimentos', url: '#', emoji: '🧪' }
];

export default function Secret() {
  useEffect(() => {
    Storage.addLastVisited('/secreto')
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="secret"
    >
      <h1>🤫 Seção Secreta! 🤫</h1>
      <p className="congrats">Parabéns por encontrar essa página secreta!</p>
      
      <div className="easter-egg">
        <p>Você desbloqueou um conteúdo especial!</p>
        <div className="egg">🥚</div>
      </div>
      
      <div className="secret-links">
        <h2>Links Secretos</h2>
        <ul>
          {secretLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.emoji} {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="secret-message">
        <h2>Mensagem Especial</h2>
        <p>
          Obrigado por explorar meu site com tanto cuidado! 
          Essa seção é um agradecimento especial para visitantes curiosos como você.
        </p>
      </div>
    </motion.div>
  )
}