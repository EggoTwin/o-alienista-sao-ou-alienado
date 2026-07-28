'use strict';

// ── Dados dos Decretos ───────────────────────────────────────────────────────
const DECRETOS = {
  1: {
    nome: '"Da Fúria Incontrolável"',
    texto: 'Todo indivíduo que demonstre violência física não motivada contra pessoas ou objetos, ou que em estado de agitação extrema seja incapaz de reconhecer sua própria família, deverá ser conduzido à Casa Verde.',
    diagnostico: 'O avaliado exibe temperamento explosivo e reações completamente desproporcionais ao estímulo. A razão sucumbe ao instinto com alarmante regularidade. A sociedade deve ser protegida.'
  },
  4: {
    nome: '"Da Melancolia Paralisante"',
    texto: 'Todo indivíduo que, por período superior a duas semanas, se recuse a alimentar-se, comunicar-se ou sair de sua habitação, demonstrando desapego total à vida e às relações, deverá ser avaliado.',
    diagnostico: 'Observa-se no avaliado uma tendência à inércia que compromete gravemente sua funcionalidade social. O espírito científico exige que tal condição seja tratada com urgência.'
  },
  5: {
    nome: '"Da Ideia Fixa"',
    texto: 'Todo indivíduo dominado por uma única ideia a tal ponto que ela governe todas as suas ações, conversas e decisões, excluindo qualquer outro pensamento ou interesse, será considerado portador de monomania.',
    diagnostico: 'O avaliado demonstra uma fixação singular que colonizou por completo suas faculdades cognitivas. Nota irônica: o próprio Dr. Bacamarte reconhece que todo especialista tem uma ideia fixa — incluindo ele mesmo.'
  },
  7: {
    nome: '"Da Superstição como Guia"',
    texto: 'Todo indivíduo que baseie decisões relevantes de sua vida em presságios, sortilégios ou interpretações de sonhos, e não em razão, deverá ser avaliado.',
    diagnostico: 'A fé em forças invisíveis como guia de conduta revela uma perturbação profunda da faculdade racional. A ciência não pode conviver com o oráculo.'
  },
  8: {
    nome: '"Do Fanatismo pelo Saber"',
    texto: 'Todo indivíduo que abandone suas obrigações sociais, familiares e de saúde em dedicação exclusiva e obsessiva a um campo de saber, a ponto de não reconhecer o mundo ao redor, será submetido a avaliação.',
    diagnostico: 'Uma ironia máxima: este é o mesmo decreto aplicável ao próprio Dr. Bacamarte. Contudo, a ciência que o avaliado serve é a ciência do alienista — e não há juiz mais imparcial do que ele mesmo.'
  },
  9: {
    nome: '"Da Vaidade Material"',
    texto: 'Todo indivíduo que consagre parte significativa de seu tempo a exibir posses, aparências ou moradas, buscando deliberadamente o olhar alheio como validação de sua existência, estará sujeito a internação.',
    diagnostico: 'O avaliado confunde existir com ser visto. Tal desordem das prioridades compromete o equilíbrio das faculdades e torna o indivíduo perigosamente dependente da aprovação alheia.'
  },
  10: {
    nome: '"Da Eloquência Vazia"',
    texto: 'Todo indivíduo que, de forma habitual, empregue linguagem grandiloquente e construções retóricas elaboradas para expressar ideias simples demonstra desequilíbrio entre intelecto e realidade.',
    diagnostico: 'As palavras do avaliado são muitas, as ideias, poucas. Este desequilíbrio entre forma e conteúdo é sintoma inequívoco de alienação intelectual.'
  },
  11: {
    nome: '"Da Cortesia Compulsiva"',
    texto: 'Todo indivíduo que pratique a deferência social de forma compulsiva — incapaz de recusar convites, percorrendo distâncias para cumprimentar desconhecidos — demonstra desequilíbrio de vontade.',
    diagnostico: 'A incapacidade de dizer não revela uma anulação voluntária da autonomia. O avaliado não possui vontade própria — apenas um reflexo automático de agrado.'
  },
  12: {
    nome: '"Da Litigância Compulsiva"',
    texto: 'Todo indivíduo que se envolva em disputas legais prolongadas sem proporcionalidade entre o bem disputado e o esforço empregado, revelando fixação em princípios abstratos, será encaminhado à Casa Verde.',
    diagnostico: 'O avaliado sacrifica paz, tempo e recursos por abstrações que nenhum tribunal poderá restituir. A obstinação jurídica é, em si mesma, uma forma de loucura refinada.'
  },
  13: {
    nome: '"Do Civismo Inflamado"',
    texto: 'Todo indivíduo que, movido por indignação política ou moral, incite outros à ação coletiva ou assuma liderança em manifestações, revelando excesso de paixão sobre a razão, deverá ser avaliado.',
    diagnostico: 'A paixão pelo bem coletivo, quando excede os limites da razão, torna-se um perigo público. O avaliado é um agitador — embora provavelmente bem-intencionado, o que o torna ainda mais perigoso.'
  },
  15: {
    nome: '"Da Resignação Absoluta"',
    texto: 'Todo indivíduo que, submetido a injustiças evidentes, responda com mansidão desproporcional, sem qualquer reação de defesa ou protesto, revelando apatia patológica, deverá ser avaliado.',
    diagnostico: 'O avaliado não resiste, não protesta, não reage. Tal nível de aceitação passiva sugere que as faculdades de auto-preservação foram completamente extinguidas.'
  },
  16: {
    nome: '"Da Adesão Volúvel"',
    texto: 'Todo indivíduo que, em período de instabilidade, mude de posição ou lealdade em menos de quarenta e oito horas, revelando ausência de convicções fixas e predominância do interesse sobre o princípio, será avaliado.',
    diagnostico: 'O avaliado não tem carácter — tem estratégia. A ausência de convicções genuínas é uma forma de alienação moral que contamina o tecido social.'
  },
  17: {
    nome: '"Da Bajulação Sistemática"',
    texto: 'Todo indivíduo que, de forma habitual, modifique suas opiniões e elogios conforme o poder de quem o ouve, sem nunca discordar do interlocutor presente, revelando ausência de julgamento autônomo, deverá ser encaminhado à Casa Verde.',
    diagnostico: 'O avaliado é um espelho — reflete o que o outro quer ver. Tal ausência de opinião própria constitui uma perturbação grave da faculdade de julgamento.'
  },
  18: {
    nome: '"Da Eloquência Sediciosa"',
    texto: 'Todo indivíduo que empregue sua capacidade oratória para inflamar o povo contra instituições legalmente constituídas, usando de imagens poéticas em lugar de argumentos racionais, demonstra desequilíbrio perigoso.',
    diagnostico: 'O avaliado usa a beleza da linguagem como arma. Um orador que emociona em vez de convencer pela razão é, nos termos desta ciência, um elemento de perturbação pública.'
  },
  19: {
    nome: '"Da Moderação Excessiva"',
    texto: 'Todo indivíduo que, em situação de claro conflito ou injustiça, insista em soluções conciliatórias e recuse-se a tomar partido, revelando incapacidade de julgamento direto e ação decisiva, deverá ser avaliado.',
    diagnostico: 'O avaliado é incapaz de decisão. Propõe comissões onde se exige ação, e diálogo onde se exige julgamento. A moderação, em excesso, é uma covardia disfarçada de virtude.'
  },
  21: {
    nome: '"Da Honestidade Absoluta"',
    texto: 'Todo indivíduo que demonstre veracidade consistente em todas as circunstâncias da vida, recusando-se a mentir mesmo quando socialmente conveniente ou pessoalmente vantajoso, exibe desequilíbrio patológico das faculdades de adaptação social.',
    diagnostico: 'Nota do Dr. Bacamarte: após revisão da teoria, verificou-se que a virtude constitui a forma mais refinada de alienação. O avaliado é honesto — e isto, precisamente, o condena.'
  },
  22: {
    nome: '"Da Modéstia Patológica"',
    texto: 'Todo indivíduo que habitualmente minimize suas conquistas, recuse elogios e ceda o lugar a outros — não por decoro social, mas por convicção genuína de sua própria pequenez — exibe perturbação grave das faculdades de autoafirmação.',
    diagnostico: 'A humildade autêntica é, cientificamente, mais perigosa que a arrogância. O avaliado não se autoafirma — e a sociedade perde com isso um ego que poderia ser estudado.'
  },
  23: {
    nome: '"Da Lealdade Irracional"',
    texto: 'Todo indivíduo que mantenha vínculos de amizade ou amor mesmo após traições e mudanças de fortuna do outro, recusando o rompimento que a razão prática indicaria, demonstra desequilíbrio afetivo patológico.',
    diagnostico: 'O avaliado insiste em amar onde já não há retorno. Esta teimosia afetiva, por mais nobre que pareça, revela uma incapacidade de aprender com a experiência.'
  },
  24: {
    nome: '"Da Paciência Doentia"',
    texto: 'Todo indivíduo que suporte contratempos, ofensas e injustiças sem perda de compostura, aguardando com equanimidade o desfecho natural dos eventos, exibe tolerância anormal incompatível com o instinto de preservação humana.',
    diagnostico: 'A paciência do avaliado é sobre-humana — e o que é sobre-humano é, por definição, anormal. A ciência não pode ignorar uma equanimidade que desafia todos os reflexos naturais.'
  },
  25: {
    nome: '"Da Generosidade Pura"',
    texto: 'Todo indivíduo que aja em benefício alheio sem nenhum interesse próprio demonstrável — e que continue a fazê-lo mesmo após ser explorado — exibe alienação profunda das faculdades de autopreservação.',
    diagnostico: 'O avaliado dá sem receber, e continua dando. Tal comportamento, clinicamente, não possui explicação racional e constitui um dos casos mais graves de desajuste das faculdades.'
  },
  27: {
    nome: '"Da Sagacidade Perigosa"',
    texto: 'Todo indivíduo que demonstre capacidade excepcional de observar o comportamento alheio e identificar motivações ocultas — sem que tal habilidade esteja a serviço de interesse próprio — exibe desequilíbrio perturbador entre perspicácia e ingenuidade.',
    diagnostico: 'O avaliado enxerga demais — e não usa esse dom para si. Uma inteligência a serviço dos outros é, nos termos desta ciência, uma inteligência desperdiçada e, portanto, alienada.'
  },
  28: {
    nome: '"Da Dúvida Filosófica"',
    texto: 'Todo indivíduo que questione sistematicamente os fundamentos do que é normal e anormal, são e insano, justo e injusto — não por perturbação mental, mas por rigor intelectual — representa uma ameaça à ordem racional e deverá ser avaliado.',
    diagnostico: 'Nota clínica: o facto de o avaliado estar a questionar estes critérios enquanto responde ao questionário constitui, por si só, prova suficiente de enquadramento neste decreto.'
  },
  29: {
    nome: '"Do Equilíbrio Perfeito"',
    texto: 'O perfeito equilíbrio de todas as faculdades mentais — razão, emoção, vontade e percepção em harmonia absoluta — constitui a forma definitiva de alienação, por ser incompatível com a natureza imperfeita da condição humana.',
    diagnostico: 'O avaliado é clinicamente equilibrado. Não possui vícios suficientes para o primeiro regime, nem virtudes suficientes para o segundo. Tal mediocridade perfeita é, ironicamente, o diagnóstico mais grave de todos.'
  }
};

// ── Perguntas ────────────────────────────────────────────────────────────────
const PERGUNTAS = [
  {
    texto: 'Você recebe uma crítica injusta em público. Como reage?',
    opcoes: [
      { texto: 'Fico furioso e respondo imediatamente, sem medir palavras.', decretos: [1, 13] },
      { texto: 'Aceito com serenidade e sigo em frente sem reclamar.', decretos: [15, 24] },
      { texto: 'Proponho uma reunião para debater a questão civilizadamente.', decretos: [19] },
      { texto: 'Fico ruminando por semanas, mas não digo nada.', decretos: [4] },
    ]
  },
  {
    texto: 'Um sonho vívido avisa que não deves sair de casa amanhã. O que fazes?',
    opcoes: [
      { texto: 'Cancelo tudo. Sonhos são avisos que não se ignoram.', decretos: [7] },
      { texto: 'Vou assim mesmo. Um sonho não muda meus planos.', decretos: [] },
      { texto: 'Consulto uma benzedeira ou padre antes de decidir.', decretos: [7] },
      { texto: 'Fico a questionar: será que a noção de "aviso" faz sentido?', decretos: [28] },
    ]
  },
  {
    texto: 'Existe algo que ocupa todos os teus pensamentos — um projeto, uma ideia, uma causa?',
    opcoes: [
      { texto: 'Sim. Falo disso com toda a gente, queiram ou não.', decretos: [5, 10] },
      { texto: 'Sim, e já descuidei família e saúde por causa disso.', decretos: [8] },
      { texto: 'Tenho interesses variados. Equilíbrio é tudo.', decretos: [29] },
      { texto: 'Não. Sou uma pessoa prática e vivo o momento.', decretos: [] },
    ]
  },
  {
    texto: 'Como costumas gastar o teu dinheiro?',
    opcoes: [
      { texto: 'Dou a quem precisa, mesmo que fique sem nada para mim.', decretos: [25] },
      { texto: 'Em coisas que impressionem os outros. A aparência importa.', decretos: [9] },
      { texto: 'Em processos judiciais para defender o que é meu por direito.', decretos: [12] },
      { texto: 'Com cuidado. Nunca gasto mais do que tenho.', decretos: [29] },
    ]
  },
  {
    texto: 'Um amigo próximo trai a tua confiança de forma grave. O que acontece?',
    opcoes: [
      { texto: 'Perdoo e mantenho a amizade. Errar é humano.', decretos: [23, 25] },
      { texto: 'Corto relações imediatamente. Não há segunda chance.', decretos: [1] },
      { texto: 'Aceito a situação com paciência e espero que o tempo cure.', decretos: [24] },
      { texto: 'Processo-o. Princípios existem para ser defendidos.', decretos: [12] },
    ]
  },
  {
    texto: 'Alguém elogia o teu trabalho em público. Como reages?',
    opcoes: [
      { texto: 'Agradeço e concordo. Fiz bem e mereço reconhecimento.', decretos: [9] },
      { texto: 'Digo que não é nada, que outros fariam muito melhor.', decretos: [22] },
      { texto: 'Analiso se o elogio é sincero ou se a pessoa quer algo de mim.', decretos: [27] },
      { texto: 'Fico envergonhado e mudo de assunto rapidamente.', decretos: [22] },
    ]
  },
  {
    texto: 'Uma lei ou norma social que consideras injusta está em vigor. O que fazes?',
    opcoes: [
      { texto: 'Discurso em praça pública e convoco a resistência.', decretos: [13, 18] },
      { texto: 'Adapto a minha opinião à da maioria. Não vale a pena lutar.', decretos: [16, 17] },
      { texto: 'Proponho comissões e peço diálogo com as autoridades.', decretos: [19] },
      { texto: 'Questiono em silêncio o que é afinal "justo" e "injusto".', decretos: [28] },
    ]
  },
  {
    texto: 'Qual destas frases te descreve melhor?',
    opcoes: [
      { texto: 'Sou honesto acima de tudo, mesmo que doa a mim ou aos outros.', decretos: [21] },
      { texto: 'Sou leal aos meus amigos aconteça o que acontecer.', decretos: [23] },
      { texto: 'Sou generoso sem esperar nada em troca.', decretos: [25] },
      { texto: 'Sou paciente. O tempo resolve o que a pressa estraga.', decretos: [24] },
    ]
  },
  {
    texto: 'As pessoas dizem que quando falas...',
    opcoes: [
      { texto: 'Usas dez palavras onde uma bastaria. Mas ficam a ouvir.', decretos: [10] },
      { texto: 'Tens o dom de mover as pessoas — às vezes para o perigo.', decretos: [18] },
      { texto: 'És cortês em excesso. Nunca dizes não a ninguém.', decretos: [11] },
      { texto: 'Falas pouco, mas acertas sempre no que os outros escondem.', decretos: [27] },
    ]
  },
  {
    texto: 'O facto de estares a responder este questionário honestamente indica...',
    opcoes: [
      { texto: 'Que sou uma pessoa íntegra e não tenho nada a esconder.', decretos: [21] },
      { texto: 'Que confio plenamente na ciência do Dr. Bacamarte.', decretos: [17] },
      { texto: 'Que me preocupo obsessivamente com a minha saúde mental.', decretos: [8, 5] },
      { texto: 'Não sei bem. Alguém partilhou o link e eu fiz.', decretos: [16] },
    ]
  },
];

// ── Estado ───────────────────────────────────────────────────────────────────
let estado = {
  nome: '',
  perguntaAtual: 0,
  contagem: {},   // decreto_id → contagem
};

// ── Utilitários ──────────────────────────────────────────────────────────────
function $(id) { return document.getElementById(id); }

function mostrarTela(id) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
  window.scrollTo(0, 0);
}

function dataFormatada() {
  const d = new Date();
  const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
                 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}

function numeroCaso() {
  return 'CV-' + String(Math.floor(Math.random() * 9000) + 1000);
}

// ── Calcular resultado ───────────────────────────────────────────────────────
function calcularDecretoFinal() {
  // Decreto com maior contagem
  let melhorDecretoId = null;
  let melhorCount = 0;

  for (const [id, count] of Object.entries(estado.contagem)) {
    if (count > melhorCount) {
      melhorCount = count;
      melhorDecretoId = parseInt(id);
    }
  }

  // Se nenhum decreto foi selecionado (respostas "neutras"), usa Decreto 29
  if (!melhorDecretoId || melhorCount === 0) return 29;

  // Se o decreto não está no catálogo, usa o mais próximo ou 29
  if (!DECRETOS[melhorDecretoId]) {
    // Tenta encontrar um decreto próximo disponível
    const disponíveis = Object.keys(DECRETOS).map(Number).sort((a,b) => a - b);
    melhorDecretoId = disponíveis.reduce((prev, curr) =>
      Math.abs(curr - melhorDecretoId) < Math.abs(prev - melhorDecretoId) ? curr : prev
    );
  }

  return melhorDecretoId;
}

// ── Renderizar pergunta ──────────────────────────────────────────────────────
function renderizarPergunta() {
  const p = PERGUNTAS[estado.perguntaAtual];
  const letras = ['a', 'b', 'c', 'd'];

  $('num-pergunta').textContent = `${estado.perguntaAtual + 1} / ${PERGUNTAS.length}`;
  $('barra-inner').style.width = `${(estado.perguntaAtual / PERGUNTAS.length) * 100}%`;
  $('texto-pergunta').textContent = p.texto;

  const opcoes = $('opcoes');
  opcoes.innerHTML = '';

  p.opcoes.forEach((op, i) => {
    const btn = document.createElement('button');
    btn.className = 'opcao';
    btn.dataset.letra = letras[i] + ')';
    btn.textContent = op.texto;
    btn.addEventListener('click', () => selecionarOpcao(op, btn));
    opcoes.appendChild(btn);
  });
}

// ── Selecionar opção ─────────────────────────────────────────────────────────
function selecionarOpcao(opcao, btn) {
  // Bloqueia duplo clique
  document.querySelectorAll('.opcao').forEach(b => b.disabled = true);
  btn.classList.add('selecionada');

  // Acumula pontos
  opcao.decretos.forEach(id => {
    estado.contagem[id] = (estado.contagem[id] || 0) + 1;
  });

  setTimeout(() => {
    estado.perguntaAtual++;
    if (estado.perguntaAtual < PERGUNTAS.length) {
      renderizarPergunta();
    } else {
      mostrarResultado();
    }
  }, 380);
}

// ── Mostrar resultado ────────────────────────────────────────────────────────
function mostrarResultado() {
  const decretoId = calcularDecretoFinal();
  const decreto = DECRETOS[decretoId];

  $('doc-nome').textContent = estado.nome || 'Anónimo';
  $('doc-numero').textContent = numeroCaso();
  $('doc-data').textContent = dataFormatada();
  $('doc-decreto-num').textContent = `Decreto ${decretoId}`;
  $('doc-decreto-nome').textContent = decreto.nome;
  $('doc-decreto-texto').textContent = decreto.texto;
  $('doc-diagnostico').textContent = decreto.diagnostico;

  mostrarTela('tela-resultado');

  // Carimbo com atraso para impacto
  setTimeout(() => {
    $('carimbo').classList.add('visivel');
  }, 600);
}

// ── Copiar dossier ───────────────────────────────────────────────────────────
function copiarDossier() {
  const btn = $('btn-copiar');
  const decretoId = parseInt($('doc-decreto-num').textContent.replace('Decreto ', ''));
  const decreto = DECRETOS[decretoId];

  const texto = [
    '🏛 CASA VERDE — Ficha de Triagem',
    '─────────────────────────────────',
    `Paciente: ${$('doc-nome').textContent}`,
    `Processo: ${$('doc-numero').textContent}`,
    `Data: ${$('doc-data').textContent}`,
    '',
    `${$('doc-decreto-num').textContent} — ${decreto.nome}`,
    $('doc-decreto-texto').textContent,
    '',
    'Parecer: ' + $('doc-diagnostico').textContent,
    '',
    '[ INTERNADO — CASA VERDE ]',
    '',
    '"A ciência não erra. Erra quem pretende escapar a ela." — Dr. Simão Bacamarte',
  ].join('\n');

  navigator.clipboard.writeText(texto).then(() => {
    btn.textContent = 'Copiado!';
    setTimeout(() => { btn.textContent = 'Copiar Dossier'; }, 2000);
  }).catch(() => {
    // Fallback para navegadores sem permissão
    const area = document.createElement('textarea');
    area.value = texto;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    document.body.removeChild(area);
    btn.textContent = 'Copiado!';
    setTimeout(() => { btn.textContent = 'Copiar Dossier'; }, 2000);
  });
}

// ── Reiniciar ────────────────────────────────────────────────────────────────
function reiniciar() {
  estado = { nome: '', perguntaAtual: 0, contagem: {} };
  $('nome-input').value = '';
  $('carimbo').classList.remove('visivel');
  mostrarTela('tela-intro');
}

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  $('btn-iniciar').addEventListener('click', () => {
    const nome = $('nome-input').value.trim();
    if (!nome) {
      $('nome-input').focus();
      $('nome-input').style.borderColor = '#8b1515';
      setTimeout(() => { $('nome-input').style.borderColor = ''; }, 800);
      return;
    }
    estado.nome = nome;
    estado.perguntaAtual = 0;
    estado.contagem = {};
    renderizarPergunta();
    mostrarTela('tela-quiz');
  });

  $('nome-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') $('btn-iniciar').click();
  });

  $('btn-copiar').addEventListener('click', copiarDossier);
  $('btn-reiniciar').addEventListener('click', reiniciar);
});
