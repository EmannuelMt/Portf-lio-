import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane, 
  FaCheck,
  FaUser,
  FaComment,
  FaExclamationCircle,
  FaWhatsapp,
  FaPhoneAlt
} from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import { Storage } from '../utils/storage';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeMethod, setActiveMethod] = useState('form');
  const formRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    Storage.addLastVisited('/contato');
    document.title = "Contato | Meu Portfólio";
    return () => {
      document.title = "Meu Portfólio"; 
    };
  }, []);

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = 'Por favor, insira seu nome';
    }

    if (!formData.email.trim()) {
      errors.email = 'Por favor, insira seu e-mail';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Por favor, insira um e-mail válido';
    }

    if (!formData.message.trim()) {
      errors.message = 'Por favor, insira sua mensagem';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'A mensagem deve ter pelo menos 10 caracteres';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!validateForm()) return;
    if (isLoading) return;
    
    setIsLoading(true);
    
    await controls.start({
      scale: [1, 0.95, 1],
      transition: { duration: 0.5 }
    });

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Storage.addMessage(formData);
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
      formRef.current.reset();
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
      setError(err.message || 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  const sendViaWhatsApp = () => {
    const { name, email, message } = formData;
    const text = `Olá Emannuel! Meu nome é ${name} (${email}). ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5571999999999?text=${encodedText}`, '_blank');
    
    controls.start({
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: { duration: 0.6 }
    });
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
    hidden: { y: 20, opacity: 0 },
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
      y: -5,
      boxShadow: "0 15px 30px rgba(67, 97, 238, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonHover = {
    hover: {
      scale: 1.02,
      boxShadow: "0 5px 15px rgba(67, 97, 238, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const methodSwitchVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
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
        <motion.h1 
          className="contact-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Vamos <span className="text-highlight">Conversar</span>
        </motion.h1>
        <motion.p 
          className="contact-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Entre em contato para oportunidades, colaborações ou apenas para dizer olá!
        </motion.p>
      </motion.header>
      
      <motion.div 
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section 
          className="contact-info-card"
          variants={itemVariants}
          whileHover={cardHover.hover}
        >
          <div className="card-header">
            <SiMinutemailer className="card-icon" />
            <h2 className="card-title">
              Informações de <span className="text-highlight">Contato</span>
            </h2>
          </div>
          
          <ul className="contact-list">
            <motion.li 
              className="contact-item email"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="item-icon" />
              <a href="mailto:emannuelmatosdeoliveira@gmail.com" className="contact-link">
                emannuelmatosdeoliveira@gmail.com
              </a>
            </motion.li>
            
            <motion.li 
              className="contact-item phone"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <FaPhoneAlt className="item-icon" />
              <a href="tel:+5571999999999" className="contact-link">
                (71) 99999-9999
              </a>
            </motion.li>
            
            <motion.li 
              className="contact-item linkedin"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <FaLinkedin className="item-icon" />
              <a 
                href="https://www.linkedin.com/in/emannuel-matos-a98556261/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                linkedin.com/in/emannuel-matos
              </a>
            </motion.li>
            
            <motion.li 
              className="contact-item github"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <FaGithub className="item-icon" />
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
        
        <motion.section 
          className="contact-form-card"
          variants={itemVariants}
          whileHover={cardHover.hover}
        >
          <div className="card-header">
            <FaPaperPlane className="card-icon" />
            <h2 className="card-title">
              Envie uma <span className="text-highlight">Mensagem</span>
            </h2>
          </div>

          <div className="method-selector">
            <button
              className={`method-tab ${activeMethod === 'form' ? 'active' : ''}`}
              onClick={() => setActiveMethod('form')}
            >
              <FaPaperPlane className="tab-icon" /> Formulário
            </button>
            <button
              className={`method-tab ${activeMethod === 'whatsapp' ? 'active' : ''}`}
              onClick={() => setActiveMethod('whatsapp')}
            >
              <FaWhatsapp className="tab-icon" /> WhatsApp
            </button>
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
                <div className="success-content">
                  <h3>Mensagem enviada com sucesso!</h3>
                  <p>Entrarei em contato em breve.</p>
                </div>
              </motion.div>
            ) : activeMethod === 'form' ? (
              <motion.form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={methodSwitchVariants}
                key="form"
                noValidate
              >
                {error && (
                  <motion.div
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <FaExclamationCircle className="error-icon" />
                    <div className="error-content">
                      <h3>Ocorreu um erro</h3>
                      <p>{error}</p>
                    </div>
                  </motion.div>
                )}
                
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <label htmlFor="name" className="input-label">Nome Completo</label>
                  <div className="input-container">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${formErrors.name ? 'error' : ''}`}
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>
                  {formErrors.name && (
                    <span className="error-text">
                      <FaExclamationCircle /> {formErrors.name}
                    </span>
                  )}
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <label htmlFor="email" className="input-label">E-mail</label>
                  <div className="input-container">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${formErrors.email ? 'error' : ''}`}
                      placeholder="Digite seu e-mail"
                      required
                    />
                  </div>
                  {formErrors.email && (
                    <span className="error-text">
                      <FaExclamationCircle /> {formErrors.email}
                    </span>
                  )}
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  variants={itemVariants}
                >
                  <label htmlFor="message" className="input-label">Mensagem</label>
                  <div className="input-container">
                    <FaComment className="input-icon textarea-icon" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`form-textarea ${formErrors.message ? 'error' : ''}`}
                      placeholder="Digite sua mensagem..."
                      required
                      rows="6"
                    />
                  </div>
                  {formErrors.message && (
                    <span className="error-text">
                      <FaExclamationCircle /> {formErrors.message}
                    </span>
                  )}
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  className="submit-button"
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                  disabled={isLoading}
                  aria-busy={isLoading}
                  animate={controls}
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
            ) : (
              <motion.div
                className="whatsapp-container"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={methodSwitchVariants}
                key="whatsapp"
              >
                <div className="whatsapp-info">
                  <div className="whatsapp-icon-container">
                    <FaWhatsapp className="whatsapp-icon" />
                  </div>
                  <div className="whatsapp-text">
                    <h3>Envie direto para meu WhatsApp!</h3>
                    <p>Preencha os campos abaixo e clique no botão para iniciar a conversa.</p>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="whatsapp-name" className="input-label">Nome Completo</label>
                  <div className="input-container">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      id="whatsapp-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Digite seu nome"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="whatsapp-email" className="input-label">E-mail</label>
                  <div className="input-container">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      id="whatsapp-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Digite seu e-mail"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="whatsapp-message" className="input-label">Mensagem</label>
                  <div className="input-container">
                    <FaComment className="input-icon textarea-icon" />
                    <textarea
                      id="whatsapp-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Digite sua mensagem..."
                      rows="6"
                    />
                  </div>
                </div>
                
                <motion.button 
                  type="button"
                  className="whatsapp-button"
                  onClick={sendViaWhatsApp}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: 'var(--whatsapp-dark)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={controls}
                >
                  <FaWhatsapp className="button-icon" />
                  Enviar via WhatsApp
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default Contact;