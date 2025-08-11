import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Storage } from '../utils/storage';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane, 
  FaCheck,
  FaUser,
  FaComment
} from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Storage.addLastVisited('/contato');
    document.title = "Contato | Meu Portfólio";
    return () => {
      document.title = "Meu Portfólio"; 
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isLoading) return;
    
    setIsLoading(true);
    
    try {
      // Simulação de envio assíncrono
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Storage.addMessage(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      boxShadow: "0 12px 24px rgba(67, 97, 238, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonHover = {
    hover: {
      scale: 1.03,
      boxShadow: "0 4px 12px rgba(67, 97, 238, 0.25)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.97
    }
  };

  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.header 
        className="contact-header"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        <h1 className="contact-title">
          Vamos <span className="text-highlight">Conversar</span>
        </h1>
        <p className="contact-subtitle">
          Entre em contato para oportunidades, colaborações ou apenas para dizer olá!
        </p>
      </motion.header>
      
      <motion.div 
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Card de Informações */}
        <motion.section 
          className="contact-info-card"
          variants={itemVariants}
          whileHover="hover"
          variants={cardHover}
        >
          <div className="card-header">
            <SiMinutemailer className="card-icon" />
            <h2 className="card-title">
              Informações de <span className="text-highlight">Contato</span>
            </h2>
          </div>
          
          <ul className="contact-list">
            <motion.li 
              className="contact-item"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="item-icon email" />
              <a href="mailto:emannuelmatosdeoliveira@gmail.com" className="contact-link">
                emannuelmatosdeoliveira@gmail.com
              </a>
            </motion.li>
            
            <motion.li 
              className="contact-item"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <FaLinkedin className="item-icon linkedin" />
              <a 
                href="https://www.linkedin.com/in/emannuel-matos-a98556261/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/Emannuel Matos
              </a>
            </motion.li>
            
            <motion.li 
              className="contact-item"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <FaGithub className="item-icon github" />
              <a 
                href="https://github.com/EmannuelMt/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                github.com/EmannuelMt
              </a>
            </motion.li>
          </ul>
        </motion.section>
        
        {/* Formulário de Contato */}
        <motion.section 
          className="contact-form-card"
          variants={itemVariants}
          whileHover="hover"
          variants={cardHover}
        >
          <div className="card-header">
            <FaPaperPlane className="card-icon" />
            <h2 className="card-title">
              Envie uma <span className="text-highlight">Mensagem</span>
            </h2>
          </div>
          
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: 'spring' }}
                key="success"
              >
                <FaCheck className="success-icon" />
                Mensagem enviada com sucesso!
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit}
                className="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="form"
              >
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <div className="input-container">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <div className="input-container">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <div className="input-container">
                    <FaComment className="input-icon textarea-icon" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Sua mensagem..."
                      required
                      rows="6"
                    />
                  </div>
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  className="submit-button"
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="loading-spinner" aria-label="Enviando">
                      <span className="spinner-dot"></span>
                      <span className="spinner-dot"></span>
                      <span className="spinner-dot"></span>
                    </span>
                  ) : (
                    <>
                      <FaPaperPlane className="button-icon" />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}