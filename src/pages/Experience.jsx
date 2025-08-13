import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Storage } from '../utils/storage';
import { 
  FiCalendar, 
  FiDollarSign, 
  FiBriefcase, 
  FiMapPin, 
  FiClock,
  FiTruck,
  FiPackage,
  FiUser,
  FiAward,
  FiBox,
  FiCoffee,
  FiTool,
  FiLayers,
  FiShoppingBag
} from 'react-icons/fi';
import './Experience.css';


const experiences = [
  {
    id: 1,
    position: 'Auxiliar de Produção II',
    company: 'Plumatex Colchões Industrial Ltda',
    period: '19/05/2025 - 17/06/2025',
    salary: 'R$ 1.800,00/mês',
    location: 'Anápolis, GO',
    contract: 'Prazo determinado',
    description: [
      'Trabalho na linha de produção de colchões',
      'Controle de qualidade dos produtos',
      'Manutenção de equipamentos industriais',
      'Organização do ambiente de trabalho'
    ],
    cbo: '7842-05',
    icon: <FiLayers />,
    color: '#4361ee',
    iconColor: '#e0e7ff'
  },
  {
    id: 2,
    position: 'Armazenista A',
    company: 'Trade e Talentos Soluções',
    period: '06/06/2024 - 01/07/2024',
    salary: 'R$ 1.412,00/mês',
    location: 'Anápolis, GO',
    contract: 'Temporário',
    description: [
      'Gestão de estoque e armazenamento',
      'Movimentação de mercadorias',
      'Controle de entrada e saída de produtos',
      'Organização do espaço físico'
    ],
    cbo: '4141-10',
    icon: <FiShoppingBag />,
    color: '#4cc9f0',
    iconColor: '#e0f2fe'
  },
  {
    id: 3,
    position: 'Auxiliar de Produção',
    company: 'Sopromax Embalagens Ltda',
    period: '19/03/2024 - 01/05/2024',
    salary: 'R$ 1.547,72/mês',
    location: 'Anápolis, GO',
    contract: 'Prazo determinado',
    description: [
      'Operação de máquinas industriais',
      'Produção de embalagens plásticas',
      'Controle de qualidade',
      'Embalagem de produtos'
    ],
    cbo: '7842-05',
    icon: <FiTool />,
    color: '#3a0ca3',
    iconColor: '#e0e7ff'
  },
  {
    id: 4,
    position: 'Auxiliar de Salgadeiro(a)',
    company: 'Lannfest Lanchonete Ltda',
    period: '15/02/2024 - 05/03/2024',
    salary: 'R$ 1.421,00/mês',
    location: 'Anápolis, GO',
    contract: 'Prazo determinado',
    description: [
      'Preparo de salgados e lanches',
      'Atendimento ao público',
      'Organização do estabelecimento',
      'Controle de estoque'
    ],
    cbo: '5135-05',
    icon: <FiCoffee />,
    color: '#f72585',
    iconColor: '#fce7f3'
  },
  {
    id: 5,
    position: 'Operador de Processos Industriais - Aprendiz',
    company: 'Instituto Euvaldo Lodi',
    period: '19/05/2023 - 01/02/2024',
    salary: 'R$ 928,49/mês',
    location: 'Vila Nova, GO',
    contract: 'Aprendiz (30h semanais)',
    description: [
      'Operação de processos industriais',
      'Controle de qualidade',
      'Manutenção preventiva',
      'Segurança no trabalho',
      'Programa de aprendizagem industrial'
    ],
    cbo: '8131-20',
    icon: <FiAward />,
    color: '#2ec4b6',
    iconColor: '#ccfbf1'
  },
  {
    id: 6,
    position: 'Ajudante de Motorista',
    company: 'Autônomo',
    period: 'Junho/2019 - Setembro/2019',
    salary: 'Não registrado',
    location: 'Anápolis, GO',
    contract: 'Autônomo',
    description: [
      'Auxílio nas entregas e transporte de cargas',
      'Carregamento e descarregamento de mercadorias',
      'Planejamento de rotas para otimização de tempo',
      'Conferência de documentos e notas fiscais',
      'Atendimento direto ao cliente durante entregas'
    ],
    cbo: 'Não aplicável',
    icon: <FiTruck />,
    color: '#7209b7',
    iconColor: '#f3e8ff'
  },
  {
    id: 7,
    position: 'Auxiliar de Carga e Descarga',
    company: 'Autônomo',
    period: 'Março/2018 - Outubro/2018',
    salary: 'Não registrado',
    location: 'Anápolis, GO',
    contract: 'Autônomo',
    description: [
      'Movimentação e organização de mercadorias com segurança',
      'Otimização de espaço de armazenamento',
      'Cumprimento rigoroso de prazos',
      'Trabalho físico intenso com foco em eficiência'
    ],
    cbo: 'Não aplicável',
    icon: <FiPackage />,
    color: '#4895ef',
    iconColor: '#dbeafe'
  }
];

export default function Experience() {
  useEffect(() => {
    Storage.addLastVisited('/experiencias');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="experience-container"
    >
      <motion.div 
        className="experience-header"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.h1
          className="experience-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Minha Jornada Profissional
        </motion.h1>
        <motion.p
          className="experience-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Cada experiência contribuiu para meu desenvolvimento pessoal e profissional
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="experience-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="experience-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.5 + (index * 0.1),
              type: 'spring',
              stiffness: 300,
              damping: 15
            }}
            whileHover={{ 
              y: -8,
              boxShadow: 'var(--shadow-lg)'
            }}
            style={{ 
              borderTop: `4px solid ${exp.color}`,
              '--card-color': exp.color,
              '--icon-bg': exp.iconColor
            }}
          >
            <div className="card-icon-container">
              <div className="card-icon">
                {exp.icon}
              </div>
            </div>
            
            <div className="card-content">
              <div className="card-header">
                <h2>{exp.position}</h2>
                <h3>{exp.company}</h3>
                <div className="card-period">
                  <FiCalendar className="period-icon" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <div className="card-meta">
                <div className="meta-item">
                  <FiMapPin className="meta-icon" />
                  <span>{exp.location}</span>
                </div>
                <div className="meta-item">
                  <FiDollarSign className="meta-icon" />
                  <span>{exp.salary}</span>
                </div>
                <div className="meta-item">
                  <FiBriefcase className="meta-icon" />
                  <span>{exp.contract}</span>
                </div>
              </div>
              
              <div className="card-description">
                <h4>Principais Responsabilidades:</h4>
                <motion.ul>
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ x: -10 }}
                      whileInView={{ x: 0 }}
                      whileHover={{ 
                        x: 5,
                        color: exp.color
                      }}
                      transition={{ 
                        type: 'spring',
                        stiffness: 500
                      }}
                    >
                      <span className="li-bullet" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}