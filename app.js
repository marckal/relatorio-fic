// Data structure (from JSON)
const appData = {
  contexto: {
    gestor: 'Daniel Christino',
    periodo: '4 anos (2021-2025)',
    total_realizacoes: 60,
    orcamento_total: 116722.84,
    investimentos_realizados: 170206.45
  },
  orcamento_anual: [
    { ano: 2022, valor: 25395.17 },
    { ano: 2023, valor: 26487.16 },
    { ano: 2024, valor: 31784.59 },
    { ano: 2025, valor: 33055.92 }
  ],
  investimentos_categoria: [
    { categoria: 'Infraestrutura TI e Labs', investimento: 31514.50, acoes: 3 },
    { categoria: 'Climatização', investimento: 21839.00, acoes: 2 },
    { categoria: 'Manutenção Espaços', investimento: 8468.50, acoes: 6 },
    { categoria: 'Salas de Aula', investimento: 49494.95, acoes: 4 },
    { categoria: 'Comunica Estúdio', investimento: 29600.00, acoes: 7 },
    { categoria: 'Estúdio Fotografia', investimento: 4289.00, acoes: 2 },
    { categoria: 'Outros', investimento: 25000.00, acoes: 36 }
  ],
  projetos_captacao: [
    { projeto: 'DATA UFG', status: 'Instalado', localizacao: 'LABICOM' },
    { projeto: 'SGM', status: 'Implementado', localizacao: 'FIC' },
    { projeto: 'Parceria FIC-SANEAGO', status: 'Em Implementação', localizacao: 'FIC' },
    { projeto: 'Comunicação Integrada UFG', status: 'Em Elaboração', localizacao: 'UFG' },
    { projeto: 'Moderniza FIC', status: 'Em Elaboração', localizacao: 'FIC/Fundação RTVE' }
  ],
  propostas_futuras: {
    taes: [
      'Ampliação incentivo PGD e turnos contínuos',
      'Estímulo equipes autogerenciáveis',
      'Gestão democrática com autonomia e confiança',
      'Convite participação projetos pesquisa com bolsas'
    ],
    estrategias: [
      'Buscar mais fontes financiamento externo',
      'Expandir parcerias institucionais',
      'Modelo gestão menos centralizador',
      'Manter diálogo aberto comunidade'
    ]
  }
};

// All accomplishments data
const allAccomplishments = {
  'Infraestrutura TI e Labs': [
    { id: 1, acao: 'Compra de 110 SSDs', impacto: 'Melhorou 75% dos computadores', custo: 24084.50, status: 'Concluído' },
    { id: 2, acao: 'Recebimento de 5 notebooks via doação', impacto: 'Empréstimo para docentes e TAEs', custo: 0, status: 'Concluído' },
    { id: 3, acao: 'Compra de 1 notebook', impacto: 'Uso em concursos públicos', custo: 7430.00, status: 'Concluído' }
  ],
  'Climatização': [
    { id: 4, acao: 'Força-tarefa SEINFRA 2023', impacto: '30 ordens de serviço resolvidas', custo: 0, status: 'Concluído' },
    { id: 5, acao: 'Força-tarefa SEINFRA 2025', impacto: 'Prevista para final do ano', custo: 0, status: 'Em Andamento' },
    { id: 6, acao: 'Compra de 7 aparelhos ar-condicionado', impacto: '', custo: 21839.00, status: 'Parcial' },
    { id: 7, acao: 'Projeto reforma auditório', impacto: '', custo: 25000.00, status: 'Pendente' }
  ],
  'Manutenção': [
    { id: 8, acao: 'Materiais elétricos, alvenaria e eletrônicos', impacto: '', custo: 0, status: 'Concluído' },
    { id: 9, acao: 'Materiais de limpeza e escritório', impacto: '', custo: 0, status: 'Concluído' },
    { id: 10, acao: 'Caixa acústica moderna auditório', impacto: '', custo: 3610.50, status: 'Concluído' },
    { id: 11, acao: 'Espaço convivência e troca extintores', impacto: '', custo: 0, status: 'Concluído' },
    { id: 12, acao: 'Higienização auditório', impacto: '', custo: 0, status: 'Concluído' },
    { id: 13, acao: 'Máquina de café', impacto: '', custo: 4858.00, status: 'Concluído' }
  ],
  'Salas de Aula': [
    { id: 14, acao: '10 quadros brancos (3m x 1,20m)', impacto: '', custo: 5300.00, status: 'Concluído' },
    { id: 15, acao: '5 projetores multimídia', impacto: '', custo: 22449.95, status: 'Concluído' },
    { id: 16, acao: '5 televisores 75 pol SMART TV', impacto: '', custo: 21745.00, status: 'Concluído' },
    { id: 17, acao: 'Materiais diversos (microfones, cabos HDMI, conversores)', impacto: '', custo: 0, status: 'Concluído' }
  ],
  'Apoio aos Cursos': [
    { id: 18, acao: 'Apoio verba PROAG 2025', impacto: 'Geral', custo: 0, status: 'Concluído' },
    { id: 19, acao: 'Transferência Ateliê Tipográfico', impacto: 'Geral', custo: 0, status: 'Concluído' },
    { id: 20, acao: 'Materiais preservação Ateliê', impacto: 'Geral', custo: 0, status: 'Concluído' },
    { id: 21, acao: 'Reforma sofás LIBRIS', impacto: 'Biblioteconomia', custo: 0, status: 'Concluído' },
    { id: 22, acao: 'Windbanners Espaço das Profissões', impacto: 'Jornalismo', custo: 0, status: 'Concluído' },
    { id: 23, acao: 'Materiais aulas audiovisual', impacto: 'Jornalismo', custo: 0, status: 'Concluído' },
    { id: 24, acao: 'Reforma armários', impacto: 'Jornalismo', custo: 0, status: 'Concluído' },
    { id: 25, acao: '14 livros, materiais para avaliação MEC (nota 5)', impacto: 'Relações Públicas', custo: 0, status: 'Concluído' },
    { id: 26, acao: 'Materiais Semana RP', impacto: 'Relações Públicas', custo: 0, status: 'Concluído' },
    { id: 27, acao: '10 cadeiras', impacto: 'Relações Públicas', custo: 0, status: 'Concluído' },
    { id: 28, acao: 'Materiais Espaço das Profissões', impacto: 'Publicidade e Propaganda', custo: 0, status: 'Concluído' },
    { id: 29, acao: 'Materiais consumo diversos', impacto: 'Publicidade e Propaganda', custo: 0, status: 'Concluído' },
    { id: 30, acao: 'Cadeados para salas', impacto: 'Gestão da Informação', custo: 0, status: 'Concluído' },
    { id: 31, acao: 'Reestruturação coordenação', impacto: 'Gestão da Informação', custo: 0, status: 'Em Andamento' }
  ],
  'Pós-Graduação': [
    { id: 32, acao: 'Computador e materiais PPGCI', impacto: 'PPGCI', custo: 0, status: 'Concluído' },
    { id: 33, acao: 'Quadro branco e ar-condicionado PPGCOM', impacto: 'PPGCOM', custo: 0, status: 'Concluído' }
  ],
  'Comunica Estúdio': [
    { id: 34, acao: '2 filmadoras PXW-Z280 4K HDR', impacto: '', custo: 29600.00, status: 'Concluído' },
    { id: 35, acao: 'Recuperação 4 filmadoras inoperantes', impacto: '', custo: 0, status: 'Concluído' },
    { id: 36, acao: '2 bolsas transporte filmadoras', impacto: '', custo: 0, status: 'Concluído' },
    { id: 37, acao: '2 baterias novas', impacto: '', custo: 0, status: 'Concluído' },
    { id: 38, acao: '2 câmeras vídeo', impacto: '', custo: 0, status: 'Concluído' },
    { id: 39, acao: '2 processadores áudio', impacto: '', custo: 0, status: 'Concluído' },
    { id: 40, acao: 'Materiais pós-pandemia 2022', impacto: '', custo: 0, status: 'Concluído' }
  ],
  'Estúdio Fotografia': [
    { id: 41, acao: 'Refletores, lâmpadas, adaptadores (2023)', impacto: '', custo: 4289.00, status: 'Concluído' },
    { id: 42, acao: 'Rádio flash, filtros, difusores (2025)', impacto: '', custo: 2000.00, status: 'Em Processo' }
  ],
  'Setor TI': [
    { id: 43, acao: 'Novo código vaga técnico TI', impacto: '', custo: 0, status: 'Concluído' },
    { id: 44, acao: 'Materiais diversos pós-pandemia', impacto: '', custo: 0, status: 'Concluído' },
    { id: 45, acao: 'Ar-condicionado 18.000 BTUS', impacto: '', custo: 0, status: 'Concluído' }
  ],
  'Valorização TAEs': [
    { id: 46, acao: 'Apoio turnos contínuos (Secretaria, Comunica, TI)', impacto: '', custo: 0, status: 'Parcial' },
    { id: 47, acao: 'Adesão PGD aprovada Conselho', impacto: '', custo: 0, status: 'Concluído' },
    { id: 48, acao: 'Flexibilidade horário (LIBRIS, ASCOM, PPGCOM)', impacto: '', custo: 0, status: 'Concluído' },
    { id: 49, acao: 'Recuperação vaga técnico audiovisual', impacto: '', custo: 0, status: 'Concluído' },
    { id: 50, acao: 'Contratação bolsistas', impacto: '', custo: 0, status: 'Concluído' },
    { id: 51, acao: 'Priorização remanejamento servidores', impacto: '', custo: 0, status: 'Concluído' }
  ],
  'Imagem Institucional': [
    { id: 52, acao: 'Projeto Sinalização e Revitalização prédio', impacto: '', custo: 0, status: 'Aguardando UFG' }
  ],
  'Centros Acadêmicos': [
    { id: 58, acao: 'Forno micro-ondas (compra e conserto)', impacto: '', custo: 0, status: 'Concluído' },
    { id: 59, acao: 'Diálogo aberto reuniões pré-Conselho', impacto: '', custo: 0, status: 'Concluído' },
    { id: 60, acao: 'Priorização ar-condicionado sala CA', impacto: '', custo: 0, status: 'Concluído' }
  ]
};

// Feedback storage (in-memory only)
let feedbackData = [];

// Current page state
let currentPage = 'overview';

// Chart instances
let investmentChart = null;
let budgetChart = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeMobileMenu();
  loadPage('overview');
});

// Navigation
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      loadPage(page);
      
      // Update active state
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Close mobile menu
      if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
      }
    });
  });
}

// Mobile menu
function initializeMobileMenu() {
  const menuToggle = document.getElementById('menuToggleMobile');
  const sidebar = document.getElementById('sidebar');
  
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

// Load page content
function loadPage(page) {
  currentPage = page;
  const contentWrapper = document.getElementById('contentWrapper');
  const pageTitle = document.getElementById('pageTitle');
  
  switch(page) {
    case 'overview':
      pageTitle.textContent = 'Visão Geral';
      contentWrapper.innerHTML = renderOverviewPage();
      break;
    case 'investments':
      pageTitle.textContent = 'Investimentos por Categoria';
      contentWrapper.innerHTML = renderInvestmentsPage();
      setTimeout(() => initInvestmentChart(), 100);
      break;
    case 'budget':
      pageTitle.textContent = 'Orçamento Anual';
      contentWrapper.innerHTML = renderBudgetPage();
      setTimeout(() => initBudgetChart(), 100);
      break;
    case 'accomplishments':
      pageTitle.textContent = 'Realizações Detalhadas';
      contentWrapper.innerHTML = renderAccomplishmentsPage();
      setTimeout(() => initAccomplishments(), 100);
      break;
    case 'projects':
      pageTitle.textContent = 'Projetos de Captação';
      contentWrapper.innerHTML = renderProjectsPage();
      break;
    case 'proposals':
      pageTitle.textContent = 'Propostas Futuras';
      contentWrapper.innerHTML = renderProposalsPage();
      break;
    case 'feedback':
      pageTitle.textContent = 'Feedback da Comunidade';
      contentWrapper.innerHTML = renderFeedbackPage();
      setTimeout(() => initFeedbackForm(), 100);
      break;
  }
}

// Overview Page
function renderOverviewPage() {
  return `
    <div class="summary-box">
      <h3>📋 Sumarização Automática</h3>
      <p><strong>Gestor:</strong> ${appData.contexto.gestor} | <strong>Período:</strong> ${appData.contexto.periodo}</p>
      <p>Esta gestão realizou <strong>${appData.contexto.total_realizacoes} ações</strong> distribuídas em 13 categorias diferentes, com um investimento total de <strong>R$ ${formatCurrency(appData.contexto.investimentos_realizados)}</strong>, superando em 45,8% o orçamento recebido de R$ ${formatCurrency(appData.contexto.orcamento_total)}.</p>
      <p><strong>Destaques:</strong></p>
      <ul>
        <li>Maior investimento: Salas de Aula (R$ 49.494,95)</li>
        <li>110 SSDs instalados melhorando 75% dos computadores</li>
        <li>7 aparelhos de ar-condicionado adquiridos</li>
        <li>5 projetos de captação de recursos externos</li>
        <li>Modernização do Comunica Estúdio com equipamentos 4K</li>
      </ul>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <h3>Total de Realizações</h3>
        <div class="stat-value">${appData.contexto.total_realizacoes}</div>
        <div class="stat-label">ações em 4 anos</div>
      </div>
      <div class="stat-card">
        <h3>Orçamento Recebido</h3>
        <div class="stat-value">R$ ${formatCurrency(appData.contexto.orcamento_total)}</div>
        <div class="stat-label">4 anos (2022-2025)</div>
      </div>
      <div class="stat-card">
        <h3>Investimentos Realizados</h3>
        <div class="stat-value">R$ ${formatCurrency(appData.contexto.investimentos_realizados)}</div>
        <div class="stat-label">Execução de 145,8%</div>
      </div>
      <div class="stat-card">
        <h3>Categorias de Ações</h3>
        <div class="stat-value">13</div>
        <div class="stat-label">áreas contempladas</div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">Sobre Este Relatório</h2>
      <p class="section-description">
        Este dashboard interativo apresenta o Relatório de Gestão da Faculdade de Informação e Comunicação (FIC) da UFG 
        no período de 2021-2025, sob a direção de Daniel Christino. O relatório consolida 60 realizações distribuídas em 
        infraestrutura, equipamentos, apoio aos cursos, valorização dos servidores TAEs e projetos de captação de recursos.
      </p>
      <p class="section-description">
        Navegue pelas diferentes seções para explorar os investimentos por categoria, evolução do orçamento, detalhes de 
        cada realização, projetos de captação de recursos externos, propostas para o próximo mandato e deixe seu feedback.
      </p>
      
      <div class="btn-group">
        <button class="btn btn--primary" onclick="loadPage('investments')">📊 Ver Investimentos</button>
        <button class="btn btn--secondary" onclick="loadPage('accomplishments')">✅ Ver Realizações</button>
        <button class="btn btn--outline" onclick="openExportModal()">📄 Exportar Relatório</button>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">Contexto Orçamentário</h2>
      <div class="info-alert">
        <p><strong>⚠️ Desafio de Modernização:</strong> O custo estimado para modernizar todos os laboratórios da FIC é de R$ 1.000.000,00. 
        Com o orçamento médio anual de R$ 29.000,00, seriam necessários <strong>35 anos</strong> para completar a modernização necessária.</p>
      </div>
    </div>
  `;
}

// Investments Page
function renderInvestmentsPage() {
  return `
    <div class="section">
      <h2 class="section-title">Distribuição de Investimentos por Categoria</h2>
      <p class="section-description">
        Análise detalhada dos investimentos realizados em cada categoria durante os 4 anos de gestão.
        Clique nas barras do gráfico para filtrar as informações.
      </p>
    </div>
    
    <div class="chart-container">
      <canvas id="investmentChart"></canvas>
    </div>
    
    <div class="section">
      <h2 class="section-title">Detalhamento por Categoria</h2>
      <div class="stats-grid">
        ${appData.investimentos_categoria.map(cat => `
          <div class="stat-card">
            <h3>${cat.categoria}</h3>
            <div class="stat-value">R$ ${formatCurrency(cat.investimento)}</div>
            <div class="stat-label">${cat.acoes} ${cat.acoes === 1 ? 'ação' : 'ações'}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Budget Page
function renderBudgetPage() {
  return `
    <div class="section">
      <h2 class="section-title">Evolução do Orçamento Anual</h2>
      <p class="section-description">
        Análise da evolução do orçamento recebido pela FIC da UFG entre 2022 e 2025.
        Observe o crescimento gradual ao longo dos anos.
      </p>
    </div>
    
    <div class="chart-container">
      <canvas id="budgetChart"></canvas>
    </div>
    
    <div class="stats-grid">
      ${appData.orcamento_anual.map(item => `
        <div class="stat-card">
          <h3>Ano ${item.ano}</h3>
          <div class="stat-value">R$ ${formatCurrency(item.valor)}</div>
          <div class="stat-label">Orçamento anual</div>
        </div>
      `).join('')}
    </div>
    
    <div class="section">
      <h2 class="section-title">Análise Comparativa</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Orçamento Total 4 Anos</h3>
          <div class="stat-value">R$ ${formatCurrency(appData.contexto.orcamento_total)}</div>
          <div class="stat-label">Receita UFG</div>
        </div>
        <div class="stat-card">
          <h3>Investimentos Realizados</h3>
          <div class="stat-value">R$ ${formatCurrency(appData.contexto.investimentos_realizados)}</div>
          <div class="stat-label">145,8% do orçamento</div>
        </div>
        <div class="stat-card">
          <h3>Necessidade de Modernização</h3>
          <div class="stat-value">R$ 1.000.000</div>
          <div class="stat-label">Todos os laboratórios</div>
        </div>
        <div class="stat-card">
          <h3>Tempo Estimado</h3>
          <div class="stat-value">35 anos</div>
          <div class="stat-label">Para modernização completa</div>
        </div>
      </div>
    </div>
  `;
}

// Accomplishments Page
function renderAccomplishmentsPage() {
  const categories = Object.keys(allAccomplishments);
  
  return `
    <div class="section">
      <h2 class="section-title">Todas as Realizações (60 ações)</h2>
      <p class="section-description">
        Navegue pelas categorias e filtre por status para explorar todas as 60 realizações da gestão.
      </p>
    </div>
    
    <div class="filters">
      <div class="filter-group">
        <label for="categoryFilter">Filtrar por Categoria</label>
        <select id="categoryFilter">
          <option value="all">Todas as Categorias</option>
          ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
        </select>
      </div>
      <div class="filter-group">
        <label for="statusFilter">Filtrar por Status</label>
        <select id="statusFilter">
          <option value="all">Todos os Status</option>
          <option value="Concluído">Concluído</option>
          <option value="Em Andamento">Em Andamento</option>
          <option value="Parcial">Parcial</option>
          <option value="Pendente">Pendente</option>
          <option value="Aguardando UFG">Aguardando UFG</option>
        </select>
      </div>
      <div class="filter-group">
        <label for="searchFilter">Buscar</label>
        <input type="search" id="searchFilter" placeholder="Digite para buscar...">
      </div>
    </div>
    
    <div class="btn-group">
      <button class="btn btn--secondary" onclick="exportAccomplishments()">📄 Exportar Lista</button>
    </div>
    
    <div id="accomplishmentsContainer" class="accordion">
      ${renderAccomplishmentsByCategory()}
    </div>
  `;
}

function renderAccomplishmentsByCategory(categoryFilter = 'all', statusFilter = 'all', searchTerm = '') {
  const categories = Object.keys(allAccomplishments);
  let html = '';
  
  categories.forEach(category => {
    if (categoryFilter !== 'all' && category !== categoryFilter) return;
    
    let items = allAccomplishments[category];
    
    // Apply filters
    if (statusFilter !== 'all') {
      items = items.filter(item => item.status === statusFilter);
    }
    
    if (searchTerm) {
      items = items.filter(item => 
        item.acao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.impacto && item.impacto.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (items.length === 0) return;
    
    html += `
      <div class="accordion-item">
        <div class="accordion-header" data-category="${category}">
          <span><strong>${category}</strong> (${items.length} ${items.length === 1 ? 'ação' : 'ações'})</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-content">
          <div class="accordion-body">
            <ul class="accomplishment-list">
              ${items.map(item => `
                <li class="accomplishment-item">
                  <h4>${item.acao}</h4>
                  ${item.impacto ? `<p><strong>Impacto:</strong> ${item.impacto}</p>` : ''}
                  ${item.custo > 0 ? `<p><strong>Custo:</strong> R$ ${formatCurrency(item.custo)}</p>` : ''}
                  <span class="status-badge ${item.status.toLowerCase().replace(/\s+/g, '-')}">${item.status}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  });
  
  return html || '<div class="empty-state"><p>Nenhuma realização encontrada com os filtros aplicados.</p></div>';
}

// Projects Page
function renderProjectsPage() {
  return `
    <div class="section">
      <h2 class="section-title">Projetos de Captação de Recursos</h2>
      <p class="section-description">
        Iniciativas para buscar financiamento externo e parcerias institucionais, ampliando as possibilidades de investimento na FIC.
      </p>
    </div>
    
    <div class="project-grid">
      ${appData.projetos_captacao.map(proj => `
        <div class="project-card">
          <h3>${proj.projeto}</h3>
          <span class="project-status ${proj.status.toLowerCase().replace(/\s+/g, '-')}">${proj.status}</span>
          <p><strong>Localização:</strong> ${proj.localizacao}</p>
          <p class="section-description">${getProjectDescription(proj.projeto)}</p>
        </div>
      `).join('')}
    </div>
    
    <div class="section">
      <h2 class="section-title">Impacto dos Projetos</h2>
      <p class="section-description">
        Estes projetos representam um esforço estratégico para diversificar as fontes de financiamento e estabelecer 
        parcerias que beneficiem não apenas a FIC, mas toda a comunidade acadêmica da UFG. A captação de recursos externos 
        é fundamental para complementar o orçamento institucional e viabilizar investimentos em modernização e infraestrutura.
      </p>
    </div>
  `;
}

function getProjectDescription(projeto) {
  const descriptions = {
    'DATA UFG': 'Instalação do Data UFG no LABICOM, centralizando recursos de análise de dados.',
    'SGM': 'Sistema de Gestão Municipal implementado na FIC para otimização de processos.',
    'Parceria FIC-SANEAGO': 'Parceria em implementação com a SANEAGO para projetos conjuntos.',
    'Comunicação Integrada UFG': 'Projeto em elaboração para integrar a comunicação institucional da UFG.',
    'Moderniza FIC': 'Projeto de modernização em parceria com a Fundação RTVE.'
  };
  return descriptions[projeto] || 'Projeto de captação de recursos externos.';
}

// Proposals Page
function renderProposalsPage() {
  return `
    <div class="section">
      <h2 class="section-title">Propostas para a Próxima Gestão</h2>
      <p class="section-description">
        Diretrizes e propostas para dar continuidade e aprimorar a gestão da FIC, com foco em valorização dos TAEs, 
        modernização da infraestrutura e ampliação de parcerias.
      </p>
    </div>
    
    <div class="proposal-section">
      <h3>💼 Propostas para Valorização dos TAEs</h3>
      <ul class="proposal-list">
        ${appData.propostas_futuras.taes.map(prop => `<li class="proposal-item">${prop}</li>`).join('')}
      </ul>
    </div>
    
    <div class="proposal-section">
      <h3>🎯 Estratégias Gerais de Gestão</h3>
      <ul class="proposal-list">
        ${appData.propostas_futuras.estrategias.map(prop => `<li class="proposal-item">${prop}</li>`).join('')}
      </ul>
    </div>
    
    <div class="section">
      <h2 class="section-title">Visão de Futuro</h2>
      <p class="section-description">
        As propostas apresentadas refletem o compromisso com uma gestão cada vez mais democrática, transparente e 
        focada no bem-estar da comunidade acadêmica. A ampliação do PGD, o incentivo a equipes autogerenciáveis e 
        a busca por fontes externas de financiamento são pilares para uma FIC mais moderna e eficiente.
      </p>
      <div class="btn-group">
        <button class="btn btn--primary" onclick="loadPage('feedback')">💬 Deixe seu Feedback</button>
      </div>
    </div>
  `;
}

// Feedback Page
function renderFeedbackPage() {
  return `
    <div class="section">
      <h2 class="section-title">Deixe seu Feedback</h2>
      <p class="section-description">
        Sua opinião é importante para aprimorar a gestão da FIC. Compartilhe suas sugestões, críticas ou elogios.
      </p>
      <div class="info-alert">
        <strong>📌 Nota:</strong> Os feedbacks são armazenados apenas durante esta sessão e não serão salvos permanentemente.
      </div>
    </div>
    
    <div class="feedback-form">
      <form id="feedbackFormElement">
        <div class="form-group">
          <label for="feedbackName">Nome (Opcional)</label>
          <input type="text" id="feedbackName" placeholder="Seu nome">
        </div>
        <div class="form-group">
          <label for="feedbackCategory">Categoria</label>
          <select id="feedbackCategory" required>
            <option value="">Selecione uma categoria</option>
            <option value="Infraestrutura">Infraestrutura</option>
            <option value="Cursos">Cursos</option>
            <option value="TAEs">Valorização TAEs</option>
            <option value="Orçamento">Orçamento e Investimentos</option>
            <option value="Projetos">Projetos de Captação</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <div class="form-group">
          <label for="feedbackMessage">Mensagem</label>
          <textarea id="feedbackMessage" required placeholder="Compartilhe sua opinião, sugestão ou comentário..."></textarea>
        </div>
        <div class="form-group">
          <label>Avaliação</label>
          <div class="rating-stars" id="ratingStars">
            <span class="star" data-rating="1">★</span>
            <span class="star" data-rating="2">★</span>
            <span class="star" data-rating="3">★</span>
            <span class="star" data-rating="4">★</span>
            <span class="star" data-rating="5">★</span>
          </div>
          <input type="hidden" id="feedbackRating" value="0">
        </div>
        <button type="submit" class="btn btn--primary">Enviar Feedback</button>
      </form>
    </div>
    
    <div class="feedback-list">
      <h2 class="section-title">Feedbacks da Comunidade</h2>
      <div id="feedbackListContainer">
        ${renderFeedbackList()}
      </div>
    </div>
  `;
}

function renderFeedbackList() {
  if (feedbackData.length === 0) {
    return '<div class="empty-state"><p>Nenhum feedback ainda. Seja o primeiro a compartilhar sua opinião!</p></div>';
  }
  
  return feedbackData.map(feedback => `
    <div class="feedback-item">
      <div class="feedback-header">
        <span class="feedback-author">${feedback.name || 'Anônimo'}</span>
        <span class="feedback-category">${feedback.category}</span>
      </div>
      <p class="feedback-message">${feedback.message}</p>
      <div class="feedback-rating">
        ${Array(5).fill('★').map((star, i) => `<span class="star ${i < feedback.rating ? 'active' : ''}">${star}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Initialize accomplishments interactions
function initAccomplishments() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      header.classList.toggle('active');
      content.classList.toggle('active');
    });
  });
  
  // Filters
  const categoryFilter = document.getElementById('categoryFilter');
  const statusFilter = document.getElementById('statusFilter');
  const searchFilter = document.getElementById('searchFilter');
  
  const applyFilters = () => {
    const container = document.getElementById('accomplishmentsContainer');
    container.innerHTML = renderAccomplishmentsByCategory(
      categoryFilter.value,
      statusFilter.value,
      searchFilter.value
    );
    initAccomplishments(); // Reinitialize accordion
  };
  
  if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
  if (statusFilter) statusFilter.addEventListener('change', applyFilters);
  if (searchFilter) searchFilter.addEventListener('input', applyFilters);
}

// Initialize feedback form
function initFeedbackForm() {
  const form = document.getElementById('feedbackFormElement');
  const stars = document.querySelectorAll('#ratingStars .star');
  const ratingInput = document.getElementById('feedbackRating');
  
  // Star rating
  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.dataset.rating);
      ratingInput.value = rating;
      stars.forEach((s, i) => {
        if (i < rating) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });
  });
  
  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const feedback = {
      name: document.getElementById('feedbackName').value,
      category: document.getElementById('feedbackCategory').value,
      message: document.getElementById('feedbackMessage').value,
      rating: parseInt(ratingInput.value) || 0,
      timestamp: new Date().toISOString()
    };
    
    if (feedback.rating === 0) {
      alert('Por favor, selecione uma avaliação (estrelas).');
      return;
    }
    
    feedbackData.unshift(feedback);
    
    // Reset form
    form.reset();
    ratingInput.value = '0';
    stars.forEach(s => s.classList.remove('active'));
    
    // Update feedback list
    document.getElementById('feedbackListContainer').innerHTML = renderFeedbackList();
    
    // Show success message
    alert('✅ Feedback enviado com sucesso! Obrigado por sua contribuição.');
  });
}

// Initialize investment chart
function initInvestmentChart() {
  const ctx = document.getElementById('investmentChart');
  if (!ctx) return;
  
  if (investmentChart) investmentChart.destroy();
  
  investmentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: appData.investimentos_categoria.map(c => c.categoria),
      datasets: [{
        label: 'Investimento (R$)',
        data: appData.investimentos_categoria.map(c => c.investimento),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C'],
        borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Investimentos por Categoria (R$)',
          font: { size: 16, weight: 'bold' }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return 'R$ ' + formatCurrency(context.parsed.y);
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return 'R$ ' + (value / 1000) + 'k';
            }
          }
        }
      }
    }
  });
}

// Initialize budget chart
function initBudgetChart() {
  const ctx = document.getElementById('budgetChart');
  if (!ctx) return;
  
  if (budgetChart) budgetChart.destroy();
  
  budgetChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: appData.orcamento_anual.map(o => o.ano.toString()),
      datasets: [{
        label: 'Orçamento Anual (R$)',
        data: appData.orcamento_anual.map(o => o.valor),
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        tension: 0.3,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true
        },
        title: {
          display: true,
          text: 'Evolução do Orçamento UFG (2022-2025)',
          font: { size: 16, weight: 'bold' }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return 'R$ ' + formatCurrency(context.parsed.y);
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return 'R$ ' + (value / 1000) + 'k';
            }
          }
        }
      }
    }
  });
}

// Export modal
function openExportModal() {
  const modal = document.getElementById('exportModal');
  modal.classList.add('active');
  
  document.getElementById('closeModal').addEventListener('click', () => {
    modal.classList.remove('active');
  });
  
  document.getElementById('exportPDF').addEventListener('click', exportToPDF);
  document.getElementById('exportText').addEventListener('click', exportToText);
}

function exportToPDF() {
  const result = document.getElementById('exportResult');
  result.innerHTML = '📄 Gerando PDF simulado... Em um ambiente de produção, o PDF seria gerado aqui com todas as informações do relatório.';
  result.classList.add('active');
  setTimeout(() => result.classList.remove('active'), 5000);
}

function exportToText() {
  const text = generateReportText();
  navigator.clipboard.writeText(text).then(() => {
    const result = document.getElementById('exportResult');
    result.innerHTML = '✅ Texto formatado copiado para a área de transferência! Cole em seu editor preferido.';
    result.classList.add('active');
    setTimeout(() => result.classList.remove('active'), 5000);
  });
}

function generateReportText() {
  return `
RELATÓRIO DE GESTÃO FIC 2021-2025
Gestor: ${appData.contexto.gestor}

=== RESUMO EXECUTIVO ===
Total de Realizações: ${appData.contexto.total_realizacoes}
Orçamento Total: R$ ${formatCurrency(appData.contexto.orcamento_total)}
Investimentos Realizados: R$ ${formatCurrency(appData.contexto.investimentos_realizados)}
Execução: 145,8% do orçamento

=== INVESTIMENTOS POR CATEGORIA ===
${appData.investimentos_categoria.map(c => `${c.categoria}: R$ ${formatCurrency(c.investimento)} (${c.acoes} ações)`).join('\n')}

=== ORÇAMENTO ANUAL ===
${appData.orcamento_anual.map(o => `${o.ano}: R$ ${formatCurrency(o.valor)}`).join('\n')}

=== PROJETOS DE CAPTAÇÃO ===
${appData.projetos_captacao.map(p => `${p.projeto} - ${p.status} - ${p.localizacao}`).join('\n')}

Gerado em ${new Date().toLocaleDateString('pt-BR')}
  `;
}

function exportAccomplishments() {
  const text = Object.keys(allAccomplishments).map(cat => {
    return `\n=== ${cat.toUpperCase()} ===\n` + 
      allAccomplishments[cat].map(item => 
        `- ${item.acao} [${item.status}]${item.custo > 0 ? ' - R$ ' + formatCurrency(item.custo) : ''}`
      ).join('\n');
  }).join('\n');
  
  navigator.clipboard.writeText(text).then(() => {
    alert('✅ Lista de realizações copiada para a área de transferência!');
  });
}

// Helper function
function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}