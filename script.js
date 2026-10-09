
const CONFIG = {
  email: 'contatoluanalucas@gmail.com',
  linkedin: 'https://www.linkedin.com/in/luana-storch-b7395a236/',  
};  

const PROJECTS = {
  mercado: {
    category: 'DESENVOLVIMENTO WEB · PROJETO REAL',
    title: 'E-commerce de supermercado',
    lead: 'Um sistema de vendas online pensado para conectar a operação do mercado à experiência de compra.',
    description: 'Desenvolvimento de uma aplicação web que combina vitrine de produtos, contas de clientes e administração de catálogo e estoque. O projeto segue em evolução, com novas funcionalidades sendo construídas e aprimoradas.',
    highlights: [
      'Implementação de rotas e API com Node.js e Express.',
      'Persistência de informações com PostgreSQL.',
      'Fluxos de autenticação, recuperação de senha e verificação de e-mail.',
      'Painel de produtos com filtros, upload de imagens e controle de estoque.',
    ],
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'EJS'],
  },
  pethelp: {
    category: 'UX/UI DESIGN · CASE ACADÊMICO',
    title: 'PetHELP — cuidado animal',
    lead: 'Uma experiência digital para tornar o cuidado com os pets mais simples e conectado.',
    description: 'Conceito de aplicativo mobile criado para aproximar tutores e profissionais veterinários. A proposta reúne busca por serviços, agendamentos e uma carteira de vacinação organizada.',
    highlights: [
      'Estruturação das jornadas de tutores e profissionais.',
      'Organização da arquitetura de informações e da navegação.',
      'Criação de componentes e padrões visuais no Figma.',
      'Desenho de fluxos de agendamento e acompanhamento de vacinas.',
    ],
    tech: ['Figma', 'UX/UI', 'Design System', 'Prototipação', 'Fluxos de usuário'],
  },
  fertirrigacao: {
    category: 'DESENVOLVIMENTO MOBILE · PROJETO ACADÊMICO',
    title: 'Fertirrigação inteligente',
    lead: 'Tecnologia aplicada ao monitoramento e à automação de processos agrícolas.',
    description: 'Aplicação desenvolvida em contexto acadêmico para explorar a integração entre software e soluções de fertirrigação. A proposta busca facilitar o acompanhamento de informações e ações relacionadas ao cultivo.',
    highlights: [
      'Desenvolvimento de interface mobile com Flutter.',
      'Organização da experiência de acompanhamento de informações.',
      'Exploração de integração entre aplicativos e dispositivos.',
      'Prática de lógica, componentes e desenvolvimento de aplicações.',
    ],
    tech: ['Flutter', 'Dart', 'Mobile', 'IoT', 'Interfaces'],
  },
  dados: {
    category: 'DADOS · ESTUDOS EM ANDAMENTO',
    title: 'Python & análise de dados',
    lead: 'Aprendendo a transformar dados em perguntas melhores, descobertas e decisões.',
    description: 'Coleção em formação de práticas e exercícios com Python, Jupyter e Pandas. O foco atual é construir uma base sólida de programação, manipulação de dados e raciocínio analítico.',
    highlights: [
      'Exercícios de lógica e estrutura de dados em Python.',
      'Primeiros experimentos com Pandas e notebooks.',
      'Prática de organização, leitura e exploração de dados.',
      'Evolução gradual para projetos de ciência de dados.',
    ],
    tech: ['Python', 'Pandas', 'Jupyter', 'Lógica de programação'],
  },
};

const SKILLS = {
  dev: {
    title: 'Desenvolvimento',
    description: 'Da ideia à interface, e da interface à lógica que faz tudo funcionar.',
    icon: '⌘',
    items: ['HTML & CSS', 'JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Python', 'Flutter', 'Git / GitHub'],
  },
  design: {
    title: 'Design & Produto',
    description: 'Experiências bonitas, consistentes e centradas em pessoas.',
    icon: '✳',
    items: ['Figma', 'UI Design', 'UX Design', 'Design System', 'Auto Layout', 'Prototipação', 'Canva', 'Illustrator / Photoshop'],
  },
  data: {
    title: 'Dados & Ferramentas',
    description: 'Um olhar curioso para entender informações e encontrar caminhos.',
    icon: '◈',
    items: ['Python', 'Pandas (aprendendo)', 'Jupyter', 'SQL', 'Excel', 'Power BI', 'GitHub', 'Notion'],
  },
};

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));


const progressBar = $('.scroll-progress');
const navLinks = $$('.nav-link');
const menu = $('.nav-links');
const menuToggle = $('.menu-toggle');
let tickingScroll = false;

function updateScroll() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const value = available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0;
  progressBar.style.transform = `scaleX(${value})`;
  tickingScroll = false;
}
window.addEventListener('scroll', () => {
  if (!tickingScroll) {
    window.requestAnimationFrame(updateScroll);
    tickingScroll = true;
  }
}, { passive: true });
updateScroll();

const sections = ['inicio', 'sobre', 'projetos', 'habilidades', 'jornada', 'contato']
  .map(id => document.getElementById(id)).filter(Boolean);
if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle('is-active', link.hash === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-20% 0px -67% 0px' });
  sections.forEach(section => navObserver.observe(section));
}
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
  menu.classList.toggle('open', !expanded);
});
$$('.nav-link, .brand, .nav-contact').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Abrir menu');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.classList.contains('open')) {
    menu.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.focus();
  }
});

const revealItems = $$('.reveal');
if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -25px 0px' });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

// Modo claro / escuro
const themeButton = $('.theme-toggle');
try {
  if (localStorage.getItem('luana-theme') === 'dark') document.body.classList.add('dark');
} catch (_) { /* continua funcionando quando o armazenamento está bloqueado. */ }
function syncThemeButton() {
  themeButton?.setAttribute('aria-label', document.body.classList.contains('dark') ? 'Ativar modo claro' : 'Ativar modo escuro');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', document.body.classList.contains('dark') ? '#201921' : '#f9f5f1');
}
syncThemeButton();
themeButton?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  try { localStorage.setItem('luana-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); } catch (_) {}
  syncThemeButton();
});


const filterButtons = $$('.filter-btn');
const cards = $$('.project-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  cards.forEach(card => {
    card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
    if (!card.classList.contains('is-hidden')) card.classList.add('is-visible');
  });
}));

const skillTabs = $$('.skill-tab');
const panel = $('#skill-panel');
function chooseSkill(tab) {
  const data = SKILLS[tab.dataset.skill];
  if (!data) return;
  skillTabs.forEach(item => {
    const selected = item === tab;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', tab.id);
  $('#skill-category-title').textContent = data.title;
  $('#skill-category-description').textContent = data.description;
  $('.skill-icon').textContent = data.icon;
  const chips = $('#skill-chips');
  chips.replaceChildren(...data.items.map(item => {
    const span = document.createElement('span');
    span.textContent = item;
    return span;
  }));
}
skillTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => chooseSkill(tab));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? skillTabs.length - 1
      : (index + (event.key === 'ArrowRight' ? 1 : -1) + skillTabs.length) % skillTabs.length;
    chooseSkill(skillTabs[next]);
    skillTabs[next].focus();
  });
});

const dialog = $('#project-dialog');
const dialogClose = $('.dialog-close');
let lastFocusedCard = null;
function openProject(id) {
  const data = PROJECTS[id];
  if (!data || !dialog) return;
  lastFocusedCard = document.activeElement;
  $('#dialog-type').textContent = data.category;
  $('#dialog-title').textContent = data.title;
  $('#dialog-lead').textContent = data.lead;
  $('#dialog-description').textContent = data.description;
  const points = $('#dialog-points');
  points.replaceChildren(...data.highlights.map(item => {
    const li = document.createElement('li');
    li.textContent = item;
    return li;
  }));
  $('#dialog-tech').replaceChildren(...data.tech.map(item => {
    const tag = document.createElement('span');
    tag.textContent = item;
    return tag;
  }));
  dialog.showModal();
  document.body.classList.add('modal-open');
  dialogClose.focus();
}
function closeProject() {
  if (!dialog.open) return;
  dialog.close();
}
cards.forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.project));
  card.addEventListener('keydown', event => {
    if (event.target === card && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
});
dialogClose?.addEventListener('click', closeProject);
$('.dialog-back')?.addEventListener('click', closeProject);
dialog?.addEventListener('click', event => {
  if (event.target === dialog) closeProject();
});
dialog?.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  lastFocusedCard?.focus?.();
});

let toastTimeout;
function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => el.classList.remove('show'), 4500);
}
$('#email-cta')?.addEventListener('click', () => {
  if (!CONFIG.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email)) {
    toast('configurar email.');
    return;
  }
  const subject = encodeURIComponent('Olá, Luana! Vi seu portfólio');
  window.location.href = `mailto:${CONFIG.email}?subject=${subject}`;
});
$('#linkedin-cta')?.addEventListener('click', () => {
  if (!/^https:\/\/(www\.)?linkedin\.com\//i.test(CONFIG.linkedin)) {
    toast('configurar linkedin.');
    return;
  }
  window.open(CONFIG.linkedin, '_blank', 'noopener,noreferrer');
});
$('#footer-year').textContent = String(new Date().getFullYear());


if (window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reduceMotion) {
  const halo = $('.cursor-halo');
  let mx = 0, my = 0, cursorRaf = 0;
  window.addEventListener('pointermove', event => {
    mx = event.clientX; my = event.clientY;
    if (!cursorRaf) cursorRaf = requestAnimationFrame(() => {
      halo.style.left = `${mx}px`; halo.style.top = `${my}px`;
      halo.style.opacity = '1'; cursorRaf = 0;
    });
  }, { passive:true });
  document.addEventListener('mouseleave', () => { halo.style.opacity = '0'; });

  $$('.magnetic').forEach(element => {
    element.addEventListener('mousemove', event => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * .12;
      const y = (event.clientY - rect.top - rect.height / 2) * .15;
      element.style.transform = `translate3d(${x}px,${y}px,0)`;
    });
    element.addEventListener('mouseleave', () => { element.style.transform = ''; });
  });
  const board = $('#hero-art');
  const visual = $('.hero-visual');
  visual?.addEventListener('mousemove', event => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    board.style.transform = `rotate(${7 + x * 4}deg) rotateY(${x * 9}deg) rotateX(${-y * 9}deg)`;
  });
  visual?.addEventListener('mouseleave', () => { board.style.transform = ''; });
}
