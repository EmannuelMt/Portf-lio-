import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiBrain, GiBloodySword, GiDeathSkull, GiBookCover, GiEnergyArrow, GiSpellBook } from 'react-icons/gi';
import { FaDiceD20, FaHeart, FaBrain, FaRunning, FaSearch } from 'react-icons/fa';
import { RiSwordFill, RiGhostLine } from 'react-icons/ri';
import { IoMdSettings } from 'react-icons/io';
import './RPG.css'; // Certifique-se de criar este arquivo CSS para estilização

export default function OrdemParanormalRPG() {
  // Estados do jogo
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [playerHealth, setPlayerHealth] = useState(100);
  const [playerSanity, setPlayerSanity] = useState(80);
  const [playerPE, setPlayerPE] = useState(5);
  const [currentCase, setCurrentCase] = useState({
    title: "O Caso da Casa Assombrada",
    description: "Uma família desapareceu misteriosamente em sua própria casa. Objetos se movem sozinhos e vozes são ouvidas à noite.",
    clues: 0,
    maxClues: 5,
    paranormalActivity: 30
  });
  const [inCombat, setInCombat] = useState(false);
  const [enemy, setEnemy] = useState(null);
  const [inventory, setInventory] = useState(['Lanterna', 'Gravador', 'Kit Médico']);
  const [vereda, setVereda] = useState(null);
  const [characterClass, setCharacterClass] = useState(null);
  const [gamePhase, setGamePhase] = useState('characterCreation'); // 'characterCreation', 'investigation', 'combat'
  const messagesEndRef = useRef(null);

  // Veredas do Paranormal
  const veredas = [
    { name: 'Sangue', icon: <GiBloodySword />, color: '#c62828', description: 'Violência e destruição' },
    { name: 'Morte', icon: <GiDeathSkull />, color: '#5d4037', description: 'Espíritos e necromancia' },
    { name: 'Conhecimento', icon: <GiBookCover />, color: '#1565c0', description: 'Lógica e mente' },
    { name: 'Medo', icon: <RiGhostLine />, color: '#6a1b9a', description: 'Ilusões e controle emocional' },
    { name: 'Energia', icon: <GiEnergyArrow />, color: '#ff8f00', description: 'Tecnologia e manipulação de energia' }
  ];

  // Classes de personagem
  const classes = [
    { 
      name: 'Combatente', 
      description: 'Especialista em combate físico', 
      abilities: ['Ataque Poderoso', 'Resistência Sobrenatural', 'Tática de Combate'] 
    },
    { 
      name: 'Especialista', 
      description: 'Mestre em habilidades técnicas', 
      subclasses: [
        { name: 'Hacker', abilities: ['Invadir Sistemas', 'Rastrear Informações'] },
        { name: 'Investigador', abilities: ['Analisar Cenas', 'Detectar Mentiras'] }
      ] 
    },
    { 
      name: 'Ocultista', 
      description: 'Manipulador das forças paranormais', 
      abilities: ['Rituais Paranormais', 'Sentir o Outro Lado', 'Proteção Contra Entidades'] 
    }
  ];

  // Inimigos/Entidades
  const enemies = [
    { name: 'Zumbi de Sangue', health: 60, damage: [8, 12], sanityDamage: 10, vereda: 'Sangue' },
    { name: 'Assombração', health: 40, damage: [5, 10], sanityDamage: 20, vereda: 'Morte' },
    { name: 'Criatura do Medo', health: 80, damage: [10, 15], sanityDamage: 30, vereda: 'Medo' }
  ];

  // Rituais
  const rituais = [
    { name: 'Sangue de Ferro', vereda: 'Sangue', cost: 2, effect: 'Aumenta resistência física' },
    { name: 'Perturbação', vereda: 'Medo', cost: 3, effect: 'Causa confusão e pânico no alvo' },
    { name: 'Tela de Ruído', vereda: 'Energia', cost: 1, effect: 'Bloqueia dispositivos eletrônicos' }
  ];

  // Efeitos de Sanidade
  const sanityEffects = [
    { threshold: 60, effect: 'Ligeiramente perturbado' },
    { threshold: 40, effect: 'Paranoia leve' },
    { threshold: 20, effect: 'Alucinações ocasionais' },
    { threshold: 0, effect: 'Surto psicótico' }
  ];

  // Inicialização do jogo
  useEffect(() => {
    if (gamePhase === 'investigation') {
      addMessage(`Caso: ${currentCase.title}`);
      addMessage(currentCase.description);
      addMessage("Você chegou à cena. O que faz? (investigar, procurar pistas, usar habilidades)");
    }
  }, [gamePhase]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text) => {
    setMessages(prev => [...prev, text]);
  };

  const rollD20 = () => {
    return Math.floor(Math.random() * 20) + 1;
  };

  const handleCombatAction = (action) => {
    if (!enemy) return;
    
    const playerRoll = rollD20();
    const enemyRoll = rollD20();
    
    switch(action) {
      case 'atacar':
        if (playerRoll >= 10) { // Dificuldade padrão
          const damage = Math.floor(Math.random() * 10) + 5;
          setEnemy(prev => ({ ...prev, health: prev.health - damage }));
          addMessage(`Você acertou o ${enemy.name} causando ${damage} de dano! (Rolou ${playerRoll})`);
        } else {
          addMessage(`Você errou o ataque! (Rolou ${playerRoll})`);
        }
        break;
        
      case 'ritual':
        if (playerPE <= 0) {
          addMessage("Você não tem PE suficiente para usar um ritual!");
          return;
        }
        
        setPlayerPE(prev => prev - 1);
        const ritual = rituais.find(r => r.vereda === vereda.name);
        addMessage(`Você invocou ${ritual.name}! ${ritual.effect}`);
        break;
        
      case 'fugir':
        if (playerRoll > enemyRoll) {
          addMessage("Você fugiu com sucesso da batalha!");
          setInCombat(false);
          setEnemy(null);
        } else {
          addMessage("Falha ao tentar fugir! O inimigo te ataca!");
        }
        break;
    }
    
    // Ataque do inimigo
    if (enemy.health > 0) {
      if (enemyRoll >= 10) {
        const damage = Math.floor(Math.random() * (enemy.damage[1] - enemy.damage[0] + 1)) + enemy.damage[0];
        setPlayerHealth(prev => Math.max(0, prev - damage));
        setPlayerSanity(prev => Math.max(0, prev - enemy.sanityDamage));
        addMessage(`O ${enemy.name} te atacou causando ${damage} de dano físico e ${enemy.sanityDamage} de dano mental!`);
      } else {
        addMessage(`O ${enemy.name} errou o ataque!`);
      }
    }
    
    // Verificar fim de combate
    if (enemy.health <= 0) {
      addMessage(`Você derrotou o ${enemy.name}!`);
      setInCombat(false);
      setEnemy(null);
    }
    
    if (playerHealth <= 0) {
      addMessage("Você foi derrotado! Fim do jogo.");
      setTimeout(() => {
        setPlayerHealth(100);
        setPlayerSanity(80);
        setInCombat(false);
        setEnemy(null);
      }, 3000);
    }
  };

  const handleInvestigationAction = (action) => {
    const roll = rollD20();
    
    switch(action) {
      case 'investigar':
        if (roll >= 12) {
          const newClues = currentCase.clues + 1;
          setCurrentCase(prev => ({ ...prev, clues: newClues }));
          addMessage(`Você encontrou uma pista! (${newClues}/${currentCase.maxClues}) (Rolou ${roll})`);
          
          if (newClues >= currentCase.maxClues) {
            addMessage("Você reuniu pistas suficientes para entender o fenômeno paranormal!");
          }
        } else {
          addMessage("Você não encontrou nada útil. (Rolou ${roll})");
        }
        break;
        
      case 'usar_item':
        if (inventory.includes('Gravador')) {
          addMessage("Você usou o gravador e captou vozes paranormais! A atividade paranormal aumentou.");
          setCurrentCase(prev => ({ ...prev, paranormalActivity: prev.paranormalActivity + 10 }));
        }
        break;
        
      case 'confrontar':
        if (currentCase.clues >= currentCase.maxClues) {
          const enemyType = enemies[Math.floor(Math.random() * enemies.length)];
          setEnemy({ ...enemyType });
          setInCombat(true);
          addMessage(`Você confronta a entidade: ${enemyType.name} aparece!`);
          setGamePhase('combat');
        } else {
          addMessage("Você não tem informações suficientes para confrontar a entidade!");
        }
        break;
    }
    
    // Verificar atividade paranormal
    if (roll < 5 && currentCase.paranormalActivity > 50) {
      addMessage("Você sente uma presença maligna observando você... -5 Sanidade");
      setPlayerSanity(prev => prev - 5);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    addMessage(`> ${input}`);
    
    if (gamePhase === 'characterCreation') {
      if (input.toLowerCase() === 'combatente') {
        setCharacterClass('Combatente');
        addMessage("Você escolheu a classe Combatente. Escolha uma vereda (sangue, morte, conhecimento, medo, energia):");
      } else if (input.toLowerCase() === 'especialista') {
        setCharacterClass('Especialista');
        addMessage("Você escolheu a classe Especialista. Escolha uma subclasse (hacker, investigador):");
      } else if (input.toLowerCase() === 'ocultista') {
        setCharacterClass('Ocultista');
        addMessage("Você escolheu a classe Ocultista. Escolha uma vereda (sangue, morte, conhecimento, medo, energia):");
      } else if (veredas.some(v => v.name.toLowerCase() === input.toLowerCase())) {
        const chosenVereda = veredas.find(v => v.name.toLowerCase() === input.toLowerCase());
        setVereda(chosenVereda);
        addMessage(`Você escolheu a Vereda do ${chosenVereda.name}. ${chosenVereda.description}`);
        addMessage("Personagem criado com sucesso! Iniciando investigação...");
        setGamePhase('investigation');
      } else if (['hacker', 'investigador'].includes(input.toLowerCase())) {
        addMessage(`Subclasse ${input} escolhida. Agora escolha uma vereda (sangue, morte, conhecimento, medo, energia):`);
      } else {
        addMessage("Opção inválida. Escolha uma classe (combatente, especialista, ocultista):");
      }
    } else if (gamePhase === 'combat') {
      const action = input.toLowerCase().split(' ')[0];
      handleCombatAction(action);
    } else {
      const action = input.toLowerCase().split(' ')[0];
      handleInvestigationAction(action);
    }
    
    setInput('');
  };

  const renderSanityEffect = () => {
    const effect = sanityEffects.find(e => playerSanity >= e.threshold) || sanityEffects[sanityEffects.length - 1];
    return (
      <div className="sanity-effect" style={{ color: playerSanity < 40 ? '#f44336' : '#ffeb3b' }}>
        {effect.effect}
      </div>
    );
  };

  return (
    <div className="ordem-container">
      <div className="ordem-header">
        <h1><GiSpellBook /> Ordem Paranormal RPG</h1>
        <div className="game-state">
          {gamePhase === 'characterCreation' && "Criação de Personagem"}
          {gamePhase === 'investigation' && `Investigação: ${currentCase.title}`}
          {gamePhase === 'combat' && `Combate vs ${enemy?.name}`}
        </div>
      </div>
      
      {gamePhase === 'characterCreation' ? (
        <div className="character-creation">
          <h2>Crie seu Personagem</h2>
          <div className="classes-grid">
            {classes.map((cls, index) => (
              <motion.div 
                key={index}
                className="class-card"
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setCharacterClass(cls.name);
                  addMessage(`Você escolheu a classe ${cls.name}. ${cls.description}`);
                  if (cls.name === 'Ocultista') {
                    addMessage("Escolha uma vereda (sangue, morte, conhecimento, medo, energia):");
                  } else if (cls.name === 'Especialista') {
                    addMessage("Escolha uma subclasse (hacker, investigador):");
                  } else {
                    addMessage("Escolha uma vereda (sangue, morte, conhecimento, medo, energia):");
                  }
                }}
              >
                <h3>{cls.name}</h3>
                <p>{cls.description}</p>
                <div className="abilities">
                  {cls.abilities?.map((ability, i) => (
                    <div key={i} className="ability">{ability}</div>
                  ))}
                  {cls.subclasses?.map((sub, i) => (
                    <div key={i} className="subclass">{sub.name}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {characterClass && (
            <div className="veredas-selection">
              <h3>Escolha uma Vereda do Paranormal</h3>
              <div className="veredas-grid">
                {veredas.map((ver, index) => (
                  <motion.div
                    key={index}
                    className="vereda-card"
                    style={{ borderColor: ver.color }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      setVereda(ver);
                      addMessage(`Você escolheu a Vereda do ${ver.name}. ${ver.description}`);
                      addMessage("Personagem criado com sucesso! Iniciando investigação...");
                      setGamePhase('investigation');
                    }}
                  >
                    <div className="vereda-icon" style={{ color: ver.color }}>
                      {ver.icon}
                    </div>
                    <h4>{ver.name}</h4>
                    <p>{ver.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="game-panel">
            <div className="player-stats">
              <div className="stat">
                <FaHeart /> Saúde: {playerHealth}/100
                <div className="stat-bar">
                  <div 
                    className="stat-fill health" 
                    style={{ width: `${playerHealth}%` }}
                  ></div>
                </div>
              </div>
              <div className="stat">
                <FaBrain /> Sanidade: {playerSanity}/80
                <div className="stat-bar">
                  <div 
                    className="stat-fill sanity" 
                    style={{ width: `${playerSanity}%` }}
                  ></div>
                </div>
                {renderSanityEffect()}
              </div>
              <div className="stat">
                <GiEnergyArrow /> PE: {playerPE}/5
                <div className="stat-bar">
                  <div 
                    className="stat-fill pe" 
                    style={{ width: `${playerPE * 20}%` }}
                  ></div>
                </div>
              </div>
              {vereda && (
                <div className="stat vereda-info" style={{ color: vereda.color }}>
                  {vereda.icon} Vereda: {vereda.name}
                </div>
              )}
            </div>
            
            {gamePhase === 'combat' && enemy && (
              <div className="enemy-stats">
                <h3>
                  {veredas.find(v => v.name === enemy.vereda)?.icon} 
                  {enemy.name} ({enemy.vereda})
                </h3>
                <div className="stat">
                  Saúde: {enemy.health}
                  <div className="stat-bar">
                    <div 
                      className="stat-fill enemy-health" 
                      style={{ 
                        width: `${(enemy.health / (enemy.name.includes('Criatura') ? 80 : 60)) * 100}%`,
                        backgroundColor: veredas.find(v => v.name === enemy.vereda)?.color
                      }}
                    ></div>
                  </div>
                </div>
                <div className="combat-actions">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCombatAction('atacar')}
                  >
                    <RiSwordFill /> Atacar
                  </motion.button>
                  {characterClass === 'Ocultista' && (
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCombatAction('ritual')}
                    >
                      <GiSpellBook /> Ritual
                    </motion.button>
                  )}
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCombatAction('fugir')}
                  >
                    <FaRunning /> Fugir
                  </motion.button>
                </div>
              </div>
            )}
            
            {gamePhase === 'investigation' && (
              <div className="case-info">
                <h3>Progresso do Caso</h3>
                <div className="clues">
                  <FaSearch /> Pistas: {currentCase.clues}/{currentCase.maxClues}
                </div>
                <div className="activity">
                  Atividade Paranormal: {currentCase.paranormalActivity}%
                  <div className="activity-bar">
                    <div 
                      className="activity-fill" 
                      style={{ width: `${currentCase.paranormalActivity}%` }}
                    ></div>
                  </div>
                </div>
                <div className="investigation-actions">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleInvestigationAction('investigar')}
                  >
                    <FaSearch /> Investigar
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleInvestigationAction('usar_item')}
                  >
                    <IoMdSettings /> Usar Item
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleInvestigationAction('confrontar')}
                  >
                    <RiSwordFill /> Confrontar
                  </motion.button>
                </div>
              </div>
            )}
          </div>
          
          <div className="game-chat">
            {messages.map((msg, index) => (
              <motion.div 
                key={index} 
                className="message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {msg}
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form onSubmit={handleSubmit} className="game-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                gamePhase === 'characterCreation' ? 
                "Escolha uma classe (combatente, especialista, ocultista)" :
                "Digite um comando..."
              }
              autoFocus
            />
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar
            </motion.button>
          </form>
        </>
      )}
    </div>
  );
}