const CONFIG = {
  email: "contatoluanalucas@gmail.com",
  linkedin: "https://www.linkedin.com/in/luana-storch-b7395a236/",
};

const PROJECTS = {
  orderflow: {
    category: "BACK-END · API REST · PROJETO DE ESTUDO",
    title: "OrderFlow API — Gestão de Pedidos",
    lead: "Uma API REST para praticar regras de negócio, persistência de dados e testes com Python.",
    description:
      "Projeto educacional de back-end desenvolvido com FastAPI e SQLAlchemy. A aplicação gerencia clientes, produtos e pedidos, valida entradas, registra requisições e documenta endpoints automaticamente. Utiliza SQLite por padrão e permite configurar PostgreSQL.",
    highlights: [
      "Endpoints REST para cadastro e consulta de clientes, produtos e pedidos.",
      "Criação e cancelamento de pedidos com atualização do estoque.",
      "Validação com Pydantic e tratamento de respostas HTTP 404, 409 e 422.",
      "Idempotência básica na criação de pedidos e logs com X-Request-ID.",
      "15 testes automatizados com Pytest e documentação OpenAPI/Swagger.",
    ],
    tech: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "SQLite", "Pytest"],
    repo: "https://github.com/Luanablucas/orderflow-api",
  },


  "lista-compras": {
    category: "DESENVOLVIMENTO WEB · PROJETO ACADÊMICO",
    title: "Cadastro e Lista de Compras",
    lead: "Da organização dos produtos ao acompanhamento das compras e envio à API.",
    description:
      "Projeto desenvolvido para a disciplina de Tecnologia Web. A aplicação permite cadastrar produtos, organizar uma lista de compras, controlar quantidades e enviar os dados para uma API usando JavaScript e MockAPI.",
    highlights: [
      "Cadastro, edição e exclusão de produtos, com campos de unidade, quantidade e código de barras.",
      "Armazenamento dos produtos no localStorage do navegador.",
      "Registro da quantidade comprada e indicação visual dos itens concluídos.",
      "Envio da lista por requisição POST à MockAPI quando todos os itens forem coletados.",
    ],
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "localStorage",
      "Fetch API",
      "MockAPI",
    ],
    repo: "https://github.com/Luanablucas/Site-Cadastro-Lista-de-Compras",
  },

  mercado: {
    category: "DESENVOLVIMENTO WEB · PROJETO REAL",
    title: "E-commerce de supermercado",
    lead: "Um sistema de vendas online pensado para conectar a operação do mercado à experiência de compra.",
    description:
      "Desenvolvimento de uma aplicação web que combina vitrine de produtos, contas de clientes e administração de catálogo e estoque. O projeto segue em evolução, com novas funcionalidades sendo construídas e aprimoradas.",
    highlights: [
      "Implementação de rotas e API com Node.js e Express.",
      "Persistência de informações com PostgreSQL.",
      "Fluxos de autenticação, recuperação de senha e verificação de e-mail.",
      "Painel de produtos com filtros, upload de imagens e controle de estoque.",
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "JavaScript", "HTML/CSS", "EJS"],
    repo: "https://github.com/Luanablucas/Site-Bom-Preco",
  },
  pethelp: {
    category: "UX/UI DESIGN · CASE ACADÊMICO",
    title: "PetHELP — cuidado animal",
    lead: "Uma experiência digital para tornar o cuidado com os pets mais simples e conectado.",
    description:
      "Conceito de aplicativo mobile criado para aproximar tutores e profissionais veterinários. A proposta reúne busca por serviços, agendamentos e uma carteira de vacinação organizada.",
    highlights: [
      "Estruturação das jornadas de tutores e profissionais.",
      "Organização da arquitetura de informações e da navegação.",
      "Criação de componentes e padrões visuais no Figma.",
      "Desenho de fluxos de agendamento e acompanhamento de vacinas.",
    ],
    tech: [
      "Figma",
      "UX/UI",
      "Design System",
      "Prototipação",
      "Fluxos de usuário",
    ],
    repo: "https://www.figma.com/proto/IBJwcSDDouvJZLLOdgk0vQ/Prototipo-PetHELP-alta-fidelidade?node-id=1-4&starting-point-node-id=1%3A4&t=DwhY50cN0QpKEHJA-1"
  },
  fertirrigacao: {
    category: "DESENVOLVIMENTO MOBILE · PROJETO ACADÊMICO",
    title: "Fertirrigação inteligente",
    lead: "Tecnologia aplicada ao monitoramento e à automação de processos agrícolas.",
    description:
      "Aplicação desenvolvida em contexto acadêmico para explorar a integração entre software e soluções de fertirrigação. A proposta busca facilitar o acompanhamento de informações e ações relacionadas ao cultivo.",
    highlights: [
      "Desenvolvimento de interface mobile com Flutter.",
      "Organização da experiência de acompanhamento de informações.",
      "Exploração de integração entre aplicativos e dispositivos.",
      "Prática de lógica, componentes e desenvolvimento de aplicações.",
    ],
    tech: ["Flutter", "Dart", "Mobile", "IoT", "Interfaces"],
    repo: "https://github.com/Luanablucas/ProjetoApp-AgroUCL",
  },
  dados: {
    category: "DADOS · ESTUDOS EM ANDAMENTO",
    title: "Python & análise de dados",
    lead: "Aprendendo a transformar dados em perguntas melhores, descobertas e decisões.",
    description:
      "Coleção em formação de práticas e exercícios com Python, Jupyter e Pandas. O foco atual é construir uma base sólida de programação, manipulação de dados e raciocínio analítico.",
    highlights: [
      "Exercícios de lógica e estrutura de dados em Python.",
      "Primeiros experimentos com Pandas e notebooks.",
      "Prática de organização, leitura e exploração de dados.",
      "Evolução gradual para projetos de ciência de dados.",
    ],
    tech: ["Python", "Pandas", "Jupyter", "Lógica de programação"],
    repo: "https://github.com/Luanablucas/vendas-restaurante",
  },
};

const SKILLS = {
  dev: {
    title: "Desenvolvimento",
    description:
      "Da ideia à interface, e da interface à lógica que faz tudo funcionar.",
    icon: "⌘",
    items: [
      "HTML & CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Python",
      "Flutter",
      "Git / GitHub",
    ],
  },
  design: {
    title: "Design & Produto",
    description: "Experiências bonitas, consistentes e centradas em pessoas.",
    icon: "✳",
    items: [
      "Figma",
      "UI Design",
      "UX Design",
      "Design System",
      "Auto Layout",
      "Prototipação",
      "Illustrator / Photoshop",
    ],
  },
  data: {
    title: "Dados & Ferramentas",
    description:
      "Um olhar curioso para entender informações e encontrar caminhos.",
    icon: "◈",
    items: [
      "Python",
      "Pandas",
      "Jupyter",
      "SQL",
      "Excel",
      "Power BI",
      "GitHub",
      "Notion",
    ],
  },
};

// PT/EN — Traduções revisadas para este portfólio.
// Os textos originais em português continuam no HTML, em PROJECTS e em SKILLS.
// Para editar traduções simples, altere os textos correspondentes abaixo.
const EN = {
  text: {
  "Gestão de clientes, produtos e pedidos.": "Customer, product, and order management.",
  "15 TESTES AUTOMATIZADOS": "15 AUTOMATED TESTS",
  "DESENVOLVIMENTO BACK-END": "BACK-END DEVELOPMENT",
  "PROJETO DE ESTUDO": "LEARNING PROJECT",
  "OrderFlow API — Gestão de Pedidos": "OrderFlow API — Order Management",
  "API REST em Python para gerenciar clientes, produtos e pedidos, com validações, controle de estoque e testes automatizados.": "Python REST API for managing customers, products, and orders with validation, inventory control, and automated tests.",

  "Pular para o conteúdo": "Skip to content",
  "Início": "Home",
  "Sobre": "About",
  "Projetos": "Projects",
  "Skills": "Skills",
  "Jornada": "Journey",
  "Vamos conversar": "Let’s talk",
  "PORTFÓLIO CRIATIVO / 2026": "INTERACTIVE PORTFOLIO / 2026",
  "Oi, eu sou": "Hi, I’m",
  "Conheça meus projetos": "Explore my projects",
  "Um pouco sobre mim": "A little about me",
  "Curiosidade": "Curiosity",
  "é meu combustível.": "fuels me.",
  "CRIATIVA POR NATUREZA": "CREATIVE BY NATURE",
  "DESENVOLVENDO SOLUÇÕES": "BUILDING SOLUTIONS",
  "CÓDIGO COM CRIATIVIDADE": "CODING WITH CREATIVITY",
  "EXPERIÊNCIAS DIGITAIS": "DIGITAL EXPERIENCES",
  "SEMPRE APRENDENDO": "ALWAYS LEARNING",
  "01 / QUEM SOU": "01 / WHO I AM",
  "Muito prazer, :)": "Nice to meet you, :)",
  "SOBRE MIM": "ABOUT ME",
  "✳ Pensamento lógico": "✳ Logical thinking",
  "↗ Aprendizado contínuo": "↗ Lifelong learning",
  "♡ Resolução de problemas": "♡ Problem-solving",
  "Conheça minha trajetória": "Explore my journey",
  "02 / O QUE EU CRIO": "02 / WHAT I BUILD",
  "MEUS PROJETOS ✳": "MY PROJECTS ✳",
  "Uma seleção de trabalhos acadêmicos, cases de produto e experiências práticas. Cada um conta um pouco do meu jeito de pensar e criar.": "A selection of academic work, product case studies, and hands-on projects. Each one reflects how I approach challenges and build solutions.",
  "Todos": "All",
  "Desenvolvimento": "Development",
  "Dados": "Data",
  "mercado / loja online": "market / online store",
  "Início Ofertas Categorias": "Home Offers Categories",
  "OFERTAS DA SEMANA": "WEEKLY DEALS",
  "Compre sem sair de casa ↗": "Shop from home ↗",
  "Hortifruti": "Fresh produce",
  "Mercearia": "Groceries",
  "Bebidas": "Drinks",
  "DESENVOLVIMENTO WEB": "WEB DEVELOPMENT",
  "EM DESENVOLVIMENTO": "IN DEVELOPMENT",
  "E-commerce de supermercado": "Supermarket e-commerce",
  "Loja online completa, com autenticação, catálogo, gestão de produtos e painel administrativo.": "Full-featured online store with authentication, product catalog, inventory management, and an admin dashboard.",
  "minha lista de compras": "my shopping list",
  "ORGANIZE SUAS COMPRAS": "KEEP SHOPPING ORGANIZED",
  "Minha lista": "My list",
  "produtos": "products",
  "coletados": "collected",
  "quase lá! ↗": "almost done! ↗",
  "PRODUTOS": "PRODUCTS",
  "QUANTIDADE": "QUANTITY",
  "Arroz": "Rice",
  "Unidade": "Unit",
  "Leite": "Milk",
  "Litro": "Liter",
  "Maçã": "Apple",
  "Quilograma": "Kilogram",
  "Enviar lista para API": "Send list to API",
  "PROJETO ACADÊMICO": "ACADEMIC PROJECT",
  "Cadastro e Lista de Compras": "Shopping List & Product Manager",
  "Sistema para cadastrar produtos, acompanhar uma lista de compras e enviar os dados para uma API.": "Web app to manage products, track a shopping list, and send data to an API.",
  "Olá, Amora! ♡": "Hi, Amora! ♡",
  "Próximas vacinas": "Upcoming vaccines",
  "⌕   Encontre um profissional": "⌕   Find a professional",
  "Encontre um profissional": "Find a professional",
  "Veterinário": "Veterinarian",
  "Vacinas": "Vaccines",
  "CASE UX/UI": "UX/UI CASE STUDY",
  "PetHELP — cuidado animal": "PetHELP — Pet Care",
  "Experiência mobile que conecta tutores a veterinários e organiza os cuidados dos pets.": "Mobile experience connecting pet owners with veterinarians and organizing pet care.",
  "OLÁ, BEM-VINDA!": "HELLO, WELCOME!",
  "Minha plantação": "My crops",
  "Umidade do solo": "Soil moisture",
  "Condição ideal ✦": "Ideal conditions ✦",
  "Monitoramento ativo": "Monitoring active",
  "💧 Irrigação automática": "💧 Automatic irrigation",
  "APLICAÇÃO MOBILE": "MOBILE APP",
  "Fertirrigação inteligente": "Smart fertigation",
  "Aplicação para apoiar o acompanhamento e a automação de processos de fertirrigação.": "App for monitoring and automating fertigation processes.",
  "Explorando padrões": "Exploring patterns",
  "EM EVOLUÇÃO": "IN PROGRESS",
  "ESTUDOS EM DADOS": "DATA STUDIES",
  "EM ANDAMENTO": "ONGOING",
  "Python & análise de dados": "Python & Data Analysis",
  "Exercícios e projetos de aprendizagem com exploração de dados e fundamentos de Python.": "Hands-on exercises and learning projects focused on data exploration and Python fundamentals.",
  "✳ Mais projetos e experimentos estão sempre a caminho.": "✳ More projects and experiments are always on the way.",
  "03 / MINHA CAIXA DE FERRAMENTAS": "03 / MY TOOLBOX",
  "SKILLS & FERRAMENTAS": "SKILLS & TOOLS",
  "Gosto de transitar entre diferentes áreas. Estas são algumas das tecnologias, práticas e ferramentas que já fazem parte da minha jornada.": "I enjoy exploring different areas of tech. Here are some of the technologies, practices, and tools I use along the way.",
  "03 / Dados": "03 / Data",
  "Da ideia à interface, e da interface à lógica que faz tudo funcionar.": "From the initial idea to the interface — and the logic that brings it to life.",
  "HABILIDADES EM CONSTANTE EVOLUÇÃO": "ALWAYS GROWING MY SKILLS",
  "04 / MEU CAMINHO": "04 / MY JOURNEY",
  "ESTUDOS & EXPERIÊNCIAS": "STUDIES & EXPERIENCE",
  "Cada desafio é mais uma peça nessa trajetória — e a parte mais interessante é que ela ainda está sendo escrita.": "Every challenge is another part of my journey — and the most exciting part is that I’m still writing it.",
  "AGORA": "NOW",
  "Desenvolvimento de software": "Software Development",
  "Desenvolvimento de aplicações web, explorando front-end, back-end, bancos de dados e integração de sistemas.": "Building web applications while exploring front-end, back-end, databases, and systems integration.",
  "Python, Dados & Inteligência Artificial": "Python, Data & Artificial Intelligence",
  "Aprofundamento em programação, análise de dados, bibliotecas Python e fundamentos de machine learning.": "Deepening my knowledge of programming, data analysis, Python libraries, and machine learning fundamentals.",
  "FORMAÇÃO": "EDUCATION",
  "Sistemas de Informação": "Information Systems",
  "Formação superior em tecnologia, com projetos práticos envolvendo aplicações mobile, lógica, programação e resolução de problemas.": "Undergraduate studies in technology, with practical projects involving mobile apps, logic, programming, and problem-solving.",
  "EXPERIÊNCIA": "EXPERIENCE",
  "Suporte & infraestrutura de TI": "IT Support & Infrastructure",
  "Vivência profissional com suporte técnico, hardware, sistemas e atendimento às necessidades de pessoas e equipes.": "Professional experience in technical support, hardware, IT systems, and helping people and teams solve problems.",
  "05 / VAMOS CRIAR ALGO?": "05 / LET’S BUILD SOMETHING?",
  "Tem um projeto, uma oportunidade ou só quer trocar uma ideia? Vou adorar conversar com você.": "Have a project, an opportunity, or just want to say hello? I’d love to hear from you.",
  "Me mande um e-mail": "Send me an email",
  "WITH PURPOSE AND A LI TTLE MAGIC ✦": "WITH PURPOSE AND A LITTLE MAGIC ✦",
  "Feito com ♥, café e boas ideias.": "Made with ♥, coffee, and good ideas.",
  "Luana — All rights reserved.": "Luana — All rights reserved.",
  "O projeto": "The project",
  "O que explorei": "What I explored",
  "Ver código no GitHub ↗": "View code on GitHub ↗",
  "← Voltar aos projetos": "← Back to projects"
},
  rich: {
  ".hero-subtitle": "I turn <em>challenges</em> into digital solutions, <strong>exploring the potential of programming, data, and technology.</strong>",
  "#sobre-title": "Nice to meet you,<br />I’m <em>Luana.</em>",
  ".about-text p:nth-child(1)": "I’m an <strong>Information Systems</strong> student passionate about technology, programming, and using code to turn real-world problems into solutions.",
  ".about-text p:nth-child(2)": "My professional journey began in <strong>IT support and infrastructure</strong>, where I built a solid foundation in technology, troubleshooting, and analytical thinking. Along the way, I expanded my skills through software development and web application projects.",
  ".about-text p:nth-child(3)": "I’m currently diving deeper into <strong>software development, Python, data analysis, and artificial intelligence</strong>. I’m driven by curiosity, continuous learning, and the desire to turn what I learn into real projects.",
  "#projetos-title": "Ideas turned into<br /><em>real projects.</em>",
  "#skills-title": "Between code<br />and <em>possibilities.</em>",
  "#jornada-title": "A journey<br /><em>in progress.</em>",
  "#contato-title": "Great ideas<br />deserve <em>connections.</em>",
  ".market-offer strong": "Make your day,<br />a little easier.",
  ".pet-happy": "Care that<br /><strong>connects.</strong>"
},
  attributes: {
  "Ver detalhes do projeto OrderFlow API": "View OrderFlow API project details",
  "Abrir OrderFlow API": "Open OrderFlow API",

  "Navegação principal": "Main navigation",
  "Luana, voltar ao início": "Luana, go to homepage",
  "Abrir menu": "Open menu",
  "Fechar menu": "Close menu",
  "Alterar idioma": "Change language",
  "Ativar modo escuro": "Enable dark mode",
  "Ativar modo claro": "Enable light mode",
  "Alternar tema": "Toggle theme",
  "Ilustração decorativa de design e tecnologia": "Decorative illustration of design and technology",
  "Filtrar projetos": "Filter projects",
  "Ver detalhes do projeto E-commerce de supermercado": "View supermarket e-commerce project details",
  "Abrir E-commerce de supermercado": "Open supermarket e-commerce project",
  "Ver detalhes do projeto Cadastro e Lista de Compras": "View shopping list project details",
  "Abrir Cadastro e Lista de Compras": "Open shopping list project",
  "Ver detalhes do projeto PetHELP": "View PetHELP project details",
  "Abrir PetHELP": "Open PetHELP project",
  "Ver detalhes do projeto de fertirrigação": "View fertigation project details",
  "Abrir Fertirrigação inteligente": "Open smart fertigation project",
  "Ver detalhes de Estudos em dados com Python": "View Python data studies details",
  "Abrir Python e análise de dados": "Open Python and data analysis project",
  "Categorias de habilidades": "Skill categories",
  "Voltar ao topo": "Back to top",
  "Fechar detalhes": "Close details"
},
  projects: {
  "orderflow": {
    "category": "BACK-END · REST API · LEARNING PROJECT",
    "title": "OrderFlow API — Order Management",
    "lead": "A REST API for learning business logic, data persistence, and automated testing with Python.",
    "description": "A hands-on back-end learning project built with FastAPI and SQLAlchemy. The API manages customers, products, and orders; validates inputs; logs requests; and generates endpoint documentation. It uses SQLite by default and can be configured for PostgreSQL.",
    "highlights": [
      "Created REST endpoints to add and retrieve customers, products, and orders.",
      "Implemented order creation and cancellation with inventory updates.",
      "Validated data with Pydantic and handled HTTP responses 404, 409, and 422.",
      "Added basic order-creation idempotency and request logs with X-Request-ID.",
      "Included 15 automated tests with Pytest and OpenAPI/Swagger documentation."
    ],
    "tech": ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "SQLite", "Pytest"]
  },

  "lista-compras": {
    "category": "WEB DEVELOPMENT · ACADEMIC PROJECT",
    "title": "Shopping List & Product Manager",
    "lead": "From organizing products to tracking purchases and sending data to an API.",
    "description": "Built for a Web Technology course, this app lets users add, edit, and remove products, organize shopping lists, track quantities, and send data to an API using JavaScript and MockAPI.",
    "highlights": [
      "Add, edit, and delete products with units, quantities, and barcodes.",
      "Store product information locally using the browser’s localStorage.",
      "Track purchased quantities and visually mark collected items.",
      "Send the completed shopping list to MockAPI via a POST request."
    ],
    "tech": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "localStorage",
      "Fetch API",
      "MockAPI"
    ]
  },
  "mercado": {
    "category": "WEB DEVELOPMENT · REAL-WORLD PROJECT",
    "title": "Supermarket e-commerce",
    "lead": "An online shopping system connecting store operations with the customer experience.",
    "description": "A web application with a product storefront, customer accounts, and tools to manage the product catalog and inventory. Development is ongoing, with additional features being built and improved.",
    "highlights": [
      "Built routes and an API using Node.js and Express.",
      "Stored application data in PostgreSQL.",
      "Implemented authentication, password recovery, and email verification flows.",
      "Created an admin panel with filters, image uploads, and inventory management."
    ],
    "tech": [
      "Node.js",
      "Express",
      "PostgreSQL",
      "JavaScript",
      "HTML/CSS",
      "EJS"
    ]
  },
  "pethelp": {
    "category": "UX/UI DESIGN · ACADEMIC CASE STUDY",
    "title": "PetHELP — Pet Care",
    "lead": "A digital experience designed to make pet care easier and more connected.",
    "description": "Mobile app concept designed to connect pet owners with veterinary professionals, bringing together service discovery, appointment scheduling, and organized vaccination records.",
    "highlights": [
      "Mapped user journeys for pet owners and veterinary professionals.",
      "Designed the information architecture and navigation.",
      "Created components and visual patterns in Figma.",
      "Designed appointment-booking and vaccine-tracking flows."
    ],
    "tech": [
      "Figma",
      "UX/UI",
      "Design System",
      "Prototyping",
      "User flows"
    ]
  },
  "fertirrigacao": {
    "category": "MOBILE DEVELOPMENT · ACADEMIC PROJECT",
    "title": "Smart fertigation",
    "lead": "Technology applied to monitoring and automating agricultural processes.",
    "description": "An academic application exploring the intersection of software and smart fertigation, designed to support monitoring and actions related to crop cultivation.",
    "highlights": [
      "Developed a mobile interface with Flutter.",
      "Designed a clear view of key monitoring information.",
      "Explored integration between apps and connected devices.",
      "Practiced programming logic, components, and application development."
    ],
    "tech": [
      "Flutter",
      "Dart",
      "Mobile",
      "IoT",
      "User interfaces"
    ]
  },
  "dados": {
    "category": "DATA · ONGOING STUDIES",
    "title": "Python & Data Analysis",
    "lead": "Learning to turn data into better questions, insights, and decisions.",
    "description": "An evolving collection of exercises and experiments using Python, Jupyter, and Pandas, with a focus on building strong foundations in programming, data manipulation, and analytical thinking.",
    "highlights": [
      "Practiced Python logic and data structures.",
      "Explored Pandas and notebooks through initial experiments.",
      "Learned to organize, load, and explore datasets.",
      "Gradually progressing toward data science projects."
    ],
    "tech": [
      "Python",
      "Pandas",
      "Jupyter",
      "Programming fundamentals"
    ]
  }
},
  skills: {
  "dev": {
    "title": "Development",
    "description": "From an initial idea to the interface — and the logic that makes it all work."
  },
  "design": {
    "title": "Design & Product",
    "description": "Thoughtful, consistent experiences designed around people.",
    "items": [
      "Figma",
      "UI Design",
      "UX Design",
      "Design System",
      "Auto Layout",
      "Prototyping",
      "Illustrator / Photoshop"
    ]
  },
  "data": {
    "title": "Data & Tools",
    "description": "Curiosity-driven exploration to understand information and find new possibilities."
  }
},
};

let currentLanguage = "pt";

const richOriginals = Object.entries(EN.rich).map(([selector, translated]) => {
  const element = document.querySelector(selector);
  return { element, original: element?.innerHTML, translated };
}).filter(({element}) => element);

// Salva o conteúdo original dos nós de texto; não altera <em>, <strong>, animações ou botões.
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const translatedNodes = [];
while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  if (!node.parentElement || node.parentElement.closest(
    "#project-dialog, #skill-panel, #toast, .language-toggle, script, style"
  )) continue;
  if (richOriginals.some(({element}) => element.contains(node))) continue;
  const original = node.nodeValue;
  const key = original.replace(/\s+/g, " ").trim();
  // Captura inclusive termos ainda não traduzidos para diagnóstico/atualizações.
  if (Object.prototype.hasOwnProperty.call(EN.text, key)) {
    translatedNodes.push({node, original, key});
  }
}

const attributeOriginals = [];
document.querySelectorAll("[aria-label], [title], [alt]").forEach(element => {
  for (const name of ["aria-label", "title", "alt"]) {
    if (element.hasAttribute(name)) {
      const original = element.getAttribute(name);
      if (Object.prototype.hasOwnProperty.call(EN.attributes, original)) {
        attributeOriginals.push({element, name, original});
      }
    }
  }
});

function translateLanguage(language, save = true) {
  currentLanguage = language === "en" ? "en" : "pt";
  const english = currentLanguage === "en";

  // Troca os textos com trechos em negrito/itálico sem eliminar o destaque visual.
  for (const {element, original, translated} of richOriginals) {
    element.innerHTML = english ? translated : original;
  }

  for (const {node, original, key} of translatedNodes) {
    const match = /^(\s*)([\s\S]*?)(\s*)$/.exec(original);
    node.nodeValue = english ? match[1] + EN.text[key] + match[3] : original;
  }

  for (const {element, name, original} of attributeOriginals) {
    element.setAttribute(name, english ? EN.attributes[original] : original);
  }

  document.documentElement.lang = english ? "en" : "pt-BR";
  document.title = english
    ? "Luana — Code, Data & Technology"
    : "Luana — Código, Dados & Tecnologia";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content", english
      ? "Luana's interactive portfolio — software development, Python, data, and technology."
      : "Portfólio pessoal de Luana — desenvolvimento de software, Python, dados e tecnologia."
  );

  const button = document.querySelector(".language-toggle");
  if (button) {
    button.textContent = english ? "PT" : "EN";
    button.setAttribute("aria-label", english ? "Mudar para português" : "Switch to English");
    button.setAttribute("title", english ? "Mudar para português" : "Switch to English");
    button.setAttribute("aria-pressed", String(english));
  }
  syncThemeButton();
  menuToggle?.setAttribute(
    "aria-label",
    english
      ? (menuToggle.getAttribute("aria-expanded") === "true" ? "Close menu" : "Open menu")
      : (menuToggle.getAttribute("aria-expanded") === "true" ? "Fechar menu" : "Abrir menu")
  );

  // Recria o painel de skills no idioma escolhido, sem mudar a aba selecionada.
  const activeSkill = document.querySelector(".skill-tab.active");
  if (activeSkill) chooseSkill(activeSkill);
  // Se um projeto estiver aberto, atualiza seu conteúdo sem fechar a janela.
  if (dialog?.open && activeProjectId) renderProject(activeProjectId);
  if (save) {
    try { localStorage.setItem("luana-language", currentLanguage); }
    catch (_) { /* Armazenamento indisponível. */ }
  }
}

document.querySelector(".language-toggle")?.addEventListener("click", () => {
  translateLanguage(currentLanguage === "pt" ? "en" : "pt");
});

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

const progressBar = $(".scroll-progress");
const navLinks = $$(".nav-link");
const menu = $(".nav-links");
const menuToggle = $(".menu-toggle");
let tickingScroll = false;

function updateScroll() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const value =
    available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0;
  progressBar.style.transform = `scaleX(${value})`;
  tickingScroll = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!tickingScroll) {
      window.requestAnimationFrame(updateScroll);
      tickingScroll = true;
    }
  },
  { passive: true },
);
updateScroll();

const sections = [
  "inicio",
  "sobre",
  "projetos",
  "habilidades",
  "jornada",
  "contato",
]
  .map((id) => document.getElementById(id))
  .filter(Boolean);
if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) =>
            link.classList.toggle(
              "is-active",
              link.hash === `#${entry.target.id}`,
            ),
          );
        }
      });
    },
    { rootMargin: "-20% 0px -67% 0px" },
  );
  sections.forEach((section) => navObserver.observe(section));
}
menuToggle?.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute(
    "aria-label",
    expanded
      ? (currentLanguage === "en" ? "Open menu" : "Abrir menu")
      : (currentLanguage === "en" ? "Close menu" : "Fechar menu"),
  );
  menu.classList.toggle("open", !expanded);
});
$$(".nav-link, .brand, .nav-contact").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", currentLanguage === "en" ? "Open menu" : "Abrir menu");
  }),
);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu?.classList.contains("open")) {
    menu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.focus();
  }
});

const revealItems = $$(".reveal");
if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -25px 0px" },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Modo claro / escuro
const themeButton = $(".theme-toggle");
try {
  if (localStorage.getItem("luana-theme") === "dark")
    document.body.classList.add("dark");
} catch (_) {
  /* continua funcionando quando o armazenamento está bloqueado. */
}
function syncThemeButton() {
  themeButton?.setAttribute(
    "aria-label",
    document.body.classList.contains("dark")
      ? (currentLanguage === "en" ? "Enable light mode" : "Ativar modo claro")
      : (currentLanguage === "en" ? "Enable dark mode" : "Ativar modo escuro"),
  );
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute(
      "content",
      document.body.classList.contains("dark") ? "#201921" : "#f9f5f1",
    );
}
syncThemeButton();
themeButton?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  try {
    localStorage.setItem(
      "luana-theme",
      document.body.classList.contains("dark") ? "dark" : "light",
    );
  } catch (_) {}
  syncThemeButton();
});

const filterButtons = $$(".filter-btn");
const cards = $$(".project-card");
filterButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    cards.forEach((card) => {
      card.classList.toggle(
        "is-hidden",
        filter !== "all" && card.dataset.category !== filter,
      );
      if (!card.classList.contains("is-hidden"))
        card.classList.add("is-visible");
    });
  }),
);

const skillTabs = $$(".skill-tab");
const panel = $("#skill-panel");
function chooseSkill(tab) {
  const base = SKILLS[tab.dataset.skill];
  const data = currentLanguage === "en"
    ? {...base, ...EN.skills[tab.dataset.skill]} : base;
  if (!data) return;
  skillTabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panel.setAttribute("aria-labelledby", tab.id);
  $("#skill-category-title").textContent = data.title;
  $("#skill-category-description").textContent = data.description;
  $(".skill-icon").textContent = data.icon;
  const skillFootnote = $(".skill-panel-bottom span:first-child");
  if (skillFootnote) skillFootnote.textContent = currentLanguage === "en"
    ? "ALWAYS GROWING MY SKILLS" : "HABILIDADES EM CONSTANTE EVOLUÇÃO";
  const chips = $("#skill-chips");
  chips.replaceChildren(
    ...data.items.map((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      return span;
    }),
  );
}
skillTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => chooseSkill(tab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? skillTabs.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : -1) + skillTabs.length) %
            skillTabs.length;
    chooseSkill(skillTabs[next]);
    skillTabs[next].focus();
  });
});

const dialog = $("#project-dialog");
const dialogClose = $(".dialog-close");
let lastFocusedCard = null;
let activeProjectId = null;
function renderProject(id) {
  const base = PROJECTS[id];
  if (!base || !dialog) return;
  const data = currentLanguage === "en" ? {...base, ...EN.projects[id]} : base;
  $("#dialog-type").textContent = data.category;
  $("#dialog-title").textContent = data.title;
  $("#dialog-lead").textContent = data.lead;
  $("#dialog-description").textContent = data.description;
  $("#dialog-points").replaceChildren(
    ...data.highlights.map(item => {
      const li = document.createElement("li");
      li.textContent = item;
      return li;
    })
  );
  $("#dialog-tech").replaceChildren(
    ...data.tech.map(item => {
      const tag = document.createElement("span");
      tag.textContent = item;
      return tag;
    })
  );
  const repoLink = $("#dialog-repo");
  if (repoLink) {
    repoLink.hidden = !data.repo;
    if (data.repo) {
      repoLink.href = data.repo;
      repoLink.textContent = id === "pethelp"
        ? (currentLanguage === "en" ? "View prototype on Figma ↗" : "Ver protótipo no Figma ↗")
        : (currentLanguage === "en" ? "View code on GitHub ↗" : "Ver código no GitHub ↗");
    } else repoLink.removeAttribute("href");
  }
  $(".dialog-grid > div:first-child h3").textContent = currentLanguage === "en" ? "The project" : "O projeto";
  $(".dialog-grid > div:last-child h3").textContent = currentLanguage === "en" ? "What I explored" : "O que explorei";
  $(".dialog-back").textContent = currentLanguage === "en" ? "← Back to projects" : "← Voltar aos projetos";
}
function openProject(id) {
  if (!PROJECTS[id] || !dialog) return;
  lastFocusedCard = document.activeElement;
  activeProjectId = id;
  renderProject(id);
  dialog.showModal();
  document.body.classList.add("modal-open");
  dialogClose?.focus();
}
function closeProject() {
  if (!dialog.open) return;
  dialog.close();
}
cards.forEach((card) => {
  card.addEventListener("click", () => openProject(card.dataset.project));
  card.addEventListener("keydown", (event) => {
    if (event.target === card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openProject(card.dataset.project);
    }
  });
});
dialogClose?.addEventListener("click", closeProject);
$(".dialog-back")?.addEventListener("click", closeProject);
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeProject();
});
dialog?.addEventListener("close", () => {
  activeProjectId = null;
  document.body.classList.remove("modal-open");
  lastFocusedCard?.focus?.();
});

let toastTimeout;
function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => el.classList.remove("show"), 4500);
}
$("#email-cta")?.addEventListener("click", () => {
  if (!CONFIG.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email)) {
    toast(currentLanguage === "en" ? "Email address is not configured." : "E-mail não configurado.");
    return;
  }
  const subject = encodeURIComponent(currentLanguage === "en" ? "Hi Luana! I saw your portfolio" : "Olá, Luana! Vi seu portfólio");
  window.location.href = `mailto:${CONFIG.email}?subject=${subject}`;
});
$("#linkedin-cta")?.addEventListener("click", () => {
  if (!/^https:\/\/(www\.)?linkedin\.com\//i.test(CONFIG.linkedin)) {
    toast(currentLanguage === "en" ? "LinkedIn is not configured." : "LinkedIn não configurado.");
    return;
  }
  window.open(CONFIG.linkedin, "_blank", "noopener,noreferrer");
});
$("#footer-year").textContent = String(new Date().getFullYear());

if (
  window.matchMedia("(hover:hover) and (pointer:fine)").matches &&
  !reduceMotion
) {
  const halo = $(".cursor-halo");
  let mx = 0,
    my = 0,
    cursorRaf = 0;
  window.addEventListener(
    "pointermove",
    (event) => {
      mx = event.clientX;
      my = event.clientY;
      if (!cursorRaf)
        cursorRaf = requestAnimationFrame(() => {
          halo.style.left = `${mx}px`;
          halo.style.top = `${my}px`;
          halo.style.opacity = "1";
          cursorRaf = 0;
        });
    },
    { passive: true },
  );
  document.addEventListener("mouseleave", () => {
    halo.style.opacity = "0";
  });

  $$(".magnetic").forEach((element) => {
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.12;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.15;
      element.style.transform = `translate3d(${x}px,${y}px,0)`;
    });
    element.addEventListener("mouseleave", () => {
      element.style.transform = "";
    });
  });
  const board = $("#hero-art");
  const visual = $(".hero-visual");
  visual?.addEventListener("mousemove", (event) => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    board.style.transform = `rotate(${7 + x * 4}deg) rotateY(${x * 9}deg) rotateX(${-y * 9}deg)`;
  });
  visual?.addEventListener("mouseleave", () => {
    board.style.transform = "";
  });
}

// Inicializa o idioma após registrar todos os componentes e eventos.
let savedLanguage = "pt";
try { savedLanguage = localStorage.getItem("luana-language") === "en" ? "en" : "pt"; }
catch (_) { /* Sem armazenamento local. */ }
translateLanguage(savedLanguage, false);
