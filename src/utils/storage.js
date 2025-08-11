// src/utils/storage.js
export const Storage = {
  // Tema
  getTheme: () => localStorage.getItem('darkMode') === 'true',
  setTheme: (darkMode) => localStorage.setItem('darkMode', darkMode),

  // Nome do usuário
  getUserName: () => localStorage.getItem('userName') || '',
  setUserName: (name) => localStorage.setItem('userName', name),
  getUserAvatar() {
    return localStorage.getItem('userAvatar') || ''
  },

  setUserAvatar(avatarUrl) {
    localStorage.setItem('userAvatar', avatarUrl)
  },


  // Últimas páginas visitadas
  getLastVisited: () => {
    const lastVisited = localStorage.getItem('lastVisited');
    return lastVisited ? JSON.parse(lastVisited) : [];
  },
  addLastVisited: (path) => {
    const lastVisited = Storage.getLastVisited();
    const updated = [path, ...lastVisited.filter(p => p !== path)].slice(0, 3);
    localStorage.setItem('lastVisited', JSON.stringify(updated));
  },

  // Projetos favoritos
  getProjects: () => {
    const projects = localStorage.getItem('projects');
    return projects ? JSON.parse(projects) : [
      { id: 1, name: 'Site Pessoal', techs: ['React', 'CSS'], github: '#', isFavorite: false },
      { id: 2, name: 'App de Tarefas', techs: ['React', 'Node'], github: '#', isFavorite: false },
      { id: 3, name: 'E-commerce', techs: ['React', 'Firebase'], github: '#', isFavorite: false }
    ];
  },
  setProjects: (projects) => localStorage.setItem('projects', JSON.stringify(projects)),

  // Progresso de estudos
  getStudies: () => {
    const studies = localStorage.getItem('studies');
    return studies ? JSON.parse(studies) : [
      { id: 1, name: 'React', progress: 70 },
      { id: 2, name: 'Node', progress: 40 },
      { id: 3, name: 'CSS', progress: 85 }
    ];
  },
  setStudies: (studies) => localStorage.setItem('studies', JSON.stringify(studies)),

  // Mensagens de contato
  getMessages: () => {
    const messages = localStorage.getItem('contactMessages');
    return messages ? JSON.parse(messages) : [];
  },
  addMessage: (message) => {
    const messages = Storage.getMessages();
    messages.push({ ...message, date: new Date().toISOString() });
    localStorage.setItem('contactMessages', JSON.stringify(messages));
  }
};
