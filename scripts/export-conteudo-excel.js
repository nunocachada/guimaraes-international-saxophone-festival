/**
 * Gera o ficheiro Excel "conteudo-para-editar.xlsx" a partir dos dados do festival.
 * Correr: node scripts/export-conteudo-excel.js
 *
 * Dados em moldes do artistasData.js (apenas texto; imagens como nome de ficheiro).
 */

const ExcelJS = require('exceljs')
const path = require('path')

const days = [
  {
    nome: 'Sobre',
    data: 'Artistas',
    dataHora: '2026-07-07',
    artistas: [
      {
        nome: 'Ties Mellemma',
        papel: 'HOLANDA',
        imagem: 'Ties_Mellema.webp',
        biografia:
          '"Não me prendo a estilos; faço música. Tenho uma curiosidade particular pela música que existe entre os estilos."\n\nEmbora Ties Mellema seja indiscutivelmente um virtuoso do saxofone, vê-se antes de tudo como um músico. A sua arte expressa-se numa exploração contínua dos limites da música. Em 2015, Ties ficou gravemente doente durante vários anos e, para além de tocar saxofone, começou a compor com música electrónica. Após 20 anos como membro fundador do Amstel Quartet, Ties decidiu que era altura de seguir o seu próprio caminho. Lançou o seu grupo crossover PEAX em 2019, com o qual trabalhou até 2025. Atualmente, prossegue uma carreura como artista a solo, colaborando com músicos que partilham a sua visão de fusão de estilos. Ties recebeu inúmeros prémios, incluindo o prestigiado Prémio de Música dos Países Baixos. Vários álbuns, tanto como artista a solo como em conjunto, foram editados pelas suas próprias editoras, Amstel Records e PEAX Records. Ties Mellema utiliza um saxofone baixo Eppelsheim, cedido pela colecção da Fundação Holandesa de Instrumentos Musicais.',
        informacoes: 'em breve',
        eventos: [
          'Dia de Abertura - 7 de Julho',
          'Concertos - 8 de Julho',
          'Workshops & Masterclasses - 9 de Julho',
          'Ties Mellemma Talk - "Find your own voice" - 9 de Julho',
          'Encerramento - 10 de Julho',
        ],
        imagens: ['Ties_Mellema.webp'],
      },
      {
        nome: 'Nicolas Arsinejevic',
        papel: 'FRANÇA',
        imagem: 'Nicolas_Arsenijevic.webp',
        biografia:
          'Nicolas Arsinejevic é professor no CNSMP (Conservatoire National Supérieur de Musique et de Danse de Paris), França. Reconhecido internacionalmente pela sua excelência técnica e artística.',
        informacoes: 'em breve',
        eventos: [
          'Dia de Abertura - 7 de Julho',
          'Concertos - 8 de Julho (Conservatório)',
          'Workshops & Masterclasses - 9 de Julho',
          'Encerramento - 10 de Julho',
        ],
        imagens: ['Nicolas_Arsenijevic.webp', 'Nicolas_Arsenijevic.webp', 'Nicolas_Arsenijevic.webp', 'Nicolas_Arsenijevic.webp'],
      },
      {
        nome: 'Henk Van Twillert',
        papel: 'HOLANDA',
        imagem: 'henk-van-twillert.jpg',
        biografia:
          'Henk Van Twillert é um renomado saxofonista holandês com uma carreira internacional destacada. Especialista em pedagogia do saxofone e performance contemporânea.',
        informacoes: 'em breve',
        eventos: [
          'Dia de Abertura - Stars of the Future (primeira sessão)',
          'Workshops & Masterclasses - 9 de Julho',
          'Conferência - 7 de Julho',
        ],
        imagens: ['henk-van-twillert.jpg'],
      },
      {
        nome: 'Bruno Santos',
        papel: 'PORTUGAL',
        imagem: 'bruno-santos.jpg',
        biografia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        informacoes: 'em breve',
        eventos: [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
        ],
        imagens: ['bruno-santos.jpg'],
      },
      {
        nome: 'Nuno Silva',
        papel: 'PORTUGAL',
        imagem: 'nuno_silva.jpg',
        biografia:
          'Nuno Silva é um saxofonista português com formação no Breda Conservatory. Reconhecido pela sua técnica refinada e interpretação expressiva.',
        informacoes: 'em breve',
        eventos: [
          'Dia de Abertura - 7 de Julho',
          'Concerto de Nuno Silva - 7 de Julho (main hall)',
          'Concertos - 8 de Julho',
          'Workshops & Masterclasses - 9 de Julho',
          'Encerramento - 10 de Julho',
        ],
        imagens: ['nuno_silva.jpg'],
      },
      {
        nome: 'Luis Miguel',
        papel: 'PORTUGAL',
        imagem: 'luis-miguel.jpg',
        biografia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        informacoes:
          'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        eventos: [
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        ],
        imagens: ['luis-miguel.jpg'],
      },
    ],
    atividades: [],
  },
  {
    nome: 'Programação',
    data: '7 de Julho',
    dataHora: '2026-07-07',
    artistas: [],
    atividades: [
      { nome: 'Receção aos participantes', subtitulo: null, descricao: 'Momento de boas-vindas e receção a todos os participantes do festival. Será fornecida informação importante sobre o programa e as instalações.', localizacao: 'Piso 2 do Teatro Jordão, Conservatório de Guimarães', horario: '09:00 - 09:30', informacoes: null },
      { nome: 'Warm up work', subtitulo: 'Henk van Twillert', descricao: 'Sax, Body & Mind - Sessão de aquecimento físico e mental para músicos. Uma abordagem holística que combina técnica do saxofone com exercícios de corpo e mente para preparar os participantes para o dia.', localizacao: 'Piso 2 do Teatro Jordão, Conservatório de Guimarães', horario: '09:45 - 10:15', informacoes: 'Esta sessão será orientada por Henk van Twillert.' },
      { nome: 'Masterclasses', subtitulo: 'Ties Mellema, Nicolas Arsenevich, Nuno Silva', descricao: 'Explicar o que é uma masterclass e descrever o caso específico destas aulas: duração etc', localizacao: 'Piso 2 do Teatro Jordão', horario: 'Vários horários ao longo do festival', informacoes: 'Colocar info sobre as salas por exemplo, "Sala SI12 - Ties Mellema, Sala SI13 - Nicolas Arsenevich, Sala SI14 - Nuno Silva".' },
      { nome: 'Stars of the Future', subtitulo: 'Henk van Twillert (first session)', descricao: 'Programa dedicado aos jovens talentos do saxofone. Sessões especiais com Henk van Twillert para desenvolver e destacar os futuros astros do saxofone.', localizacao: 'Piso 2 do Teatro Jordão', horario: '11:30 - 12:30' },
      { nome: 'Lunch concert', subtitulo: 'Stars of the Future (Grupo 1) · Pátio TJGA (Piso 1 – salas individuais)', descricao: 'Concertos durante o almoço apresentados pelos participantes do programa "Stars of the Future". Uma oportunidade para desfrutar de música enquanto se alimenta.', localizacao: 'Pátio TJGA (Piso 1 – salas individuais) / Bandas de Garagem', horario: '13:10 - 13:30' },
      { nome: 'Masterclasses', subtitulo: 'Prof. Ties Mellema / Nicholas A.', descricao: 'Sessões de masterclass com professores renomados internacionalmente. Oportunidade única para aprender técnicas avançadas, interpretação e receber feedback personalizado dos melhores profissionais do saxofone.', localizacao: 'Piso 2 do Teatro Jordão', horario: 'Vários horários ao longo do festival' },
      { nome: 'Conferência', subtitulo: 'Miguel Pais Clemente, Henk van Twillert e Joaquim Gabriel', descricao: 'Conferência com especialistas sobre temas relevantes para o mundo do saxofone. Uma oportunidade para discussão e partilha de conhecimento.', localizacao: 'Piso 2 do Teatro Jordão', horario: '16:15 - 17:30' },
      { nome: 'All Sax Orchestra', subtitulo: 'Ensaios', descricao: 'Ensaios da All Sax Orchestra: grupo de música de câmara destinado a alunos de nível académico avançado. Os alunos serão colocados mediante o seu nível académico.', localizacao: 'Piso 2 do Teatro Jordão, Conservatório de Guimarães' },
      { nome: 'Concerto de Nuno Silva', subtitulo: 'Main hall of the school', descricao: 'Concerto solo do renomado saxofonista português Nuno Silva. Uma apresentação especial no hall principal da escola.', localizacao: 'Foyer, Piso 2 do Teatro Jordão, Conservatório de Guimarães', horario: '21:00 - 22:30' },
    ],
  },
  {
    nome: 'Programação',
    data: '8 de Julho',
    dataHora: '2026-07-08',
    artistas: [],
    atividades: [
      { nome: 'Masterclasses', subtitulo: 'Ties Mellema, Nicolas Arsenevich, Nuno Silva', descricao: 'Sessões de masterclass com professores renomados internacionalmente. Oportunidade única para aprender técnicas avançadas, interpretação e receber feedback personalizado dos melhores profissionais do saxofone.', localizacao: 'Piso 2 do Teatro Jordão', horario: 'Vários horários ao longo do festival' },
      { nome: 'Stars of the Future', subtitulo: 'Henk van Twillert (second session)', descricao: 'Programa dedicado aos jovens talentos do saxofone. Sessões especiais com Henk van Twillert para desenvolver e destacar os futuros astros do saxofone.', localizacao: 'Piso 2 do Teatro Jordão', horario: '11:30 - 12:30' },
      { nome: 'Lunch concert', subtitulo: 'Stars of the Future (Grupo 2) · Pátio TJGA / Bandas de Garagem', descricao: 'Concertos durante o almoço apresentados pelos participantes do programa "Stars of the Future". Uma oportunidade para desfrutar de música enquanto se alimenta.', localizacao: 'Pátio TJGA (Piso 1 – salas individuais) / Bandas de Garagem', horario: '13:10 - 13:30' },
      { nome: 'Masterclasses', subtitulo: 'Prof. Ties Mellema / Prof. Nicholas Arsenevich', descricao: 'Explicar o que é uma masterclass e descrever o caso específico destas aulas: duração etc', localizacao: 'Piso 2 do Teatro Jordão', horario: 'Vários horários ao longo do festival', informacoes: 'Colocar info sobre as salas por exemplo, "Sala SI12 - Ties Mellema, Sala SI13 - Nicolas Arsenevich, Sala SI14 - Nuno Silva".' },
      { nome: "Sponsors' time", subtitulo: 'Sponsors Happy Hour · Cada sponsor apresenta a sua marca e produtos (15–25 minutos)', descricao: 'Momento dedicado aos patrocinadores do festival. Cada patrocinador terá a oportunidade de apresentar a sua marca e produtos durante 15-25 minutos.', localizacao: 'Piso 2 do Teatro Jordão', horario: '14:30 - 16:30' },
      { nome: 'Coro Cordão', subtitulo: 'Bandas de Garagem', descricao: 'Apresentação do Coro Cordão, uma das bandas de garagem participantes no festival.', localizacao: 'Bandas de Garagem', horario: '15:30 - 16:30' },
      { nome: 'All Sax Orchestra', subtitulo: 'Ensaio', descricao: 'EEEnsaios da All Sax Orchestra: grupo de música de câmara destinado a alunos de nível académico avançado. Os alunos serão colocados mediante o seu nível académico.', localizacao: 'Piso 2 do Teatro Jordão, Conservatório de Guimarães' },
      { nome: 'Concerto no Conservatório', subtitulo: 'Nicolas A.', descricao: 'Concerto especial no Conservatório com Nicolas Arsinejevic. Uma apresentação única num espaço histórico e acústico excecional.', localizacao: 'Conservatório', horario: '21:00 - 22:30' },
    ],
  },
  {
    nome: 'Programação',
    data: '9 de Julho',
    dataHora: '2026-07-09',
    artistas: [],
    atividades: [
      { nome: 'Masterclass', subtitulo: 'Prof. Ties Mellema / Nuno S.', descricao: 'Sessões de masterclass com professores renomados internacionalmente. Oportunidade única para aprender técnicas avançadas, interpretação e receber feedback personalizado dos melhores profissionais do saxofone.', localizacao: 'Piso 2 do Teatro Jordão', horario: 'Vários horários ao longo do festival' },
      { nome: 'Jazz Workshop', subtitulo: 'Eastman artist', descricao: 'Workshop de jazz com um artista Eastman. Aprenda técnicas de improvisação, swing e interpretação jazzística no saxofone.', localizacao: 'Piso 2 do Teatro Jordão', horario: '11:15 - 12:45' },
      { nome: 'Jazz concert', subtitulo: null, descricao: 'Concerto de jazz apresentado pelos participantes do workshop. Uma oportunidade para ouvir e desfrutar de música jazz ao vivo.', localizacao: 'Piso 2 do Teatro Jordão', horario: '13:00 - 13:20' },
      { nome: 'Ties Mellema Talk', subtitulo: 'Find your own voice', descricao: 'Talk inspiracional com Ties Mellema sobre "Find your own voice" (Encontra a tua própria voz). Uma sessão sobre desenvolvimento artístico pessoal e expressão única.', localizacao: 'Piso 2 do Teatro Jordão', horario: '17:30 - 18:35' },
    ],
  },
  {
    nome: 'Programação',
    data: '10 de Julho',
    dataHora: '2026-07-10',
    artistas: [],
    atividades: [
      { nome: 'Preparation time for final concerts', subtitulo: null, descricao: 'Tempo dedicado à preparação final para os concertos de encerramento. Momento para ensaios individuais e em grupo.', localizacao: 'Piso 2 do Teatro Jordão', horario: '09:30 - 13:00' },
      { nome: 'All Sax / Be Sax', subtitulo: 'Ensaios finais' },
      { nome: 'Ensaio Coro Cordão', subtitulo: null, descricao: 'Ensaio final do Coro Cordão, preparando-se para a apresentação no concerto final.', localizacao: 'Piso 2 do Teatro Jordão', horario: '09:30 - 13:00' },
      { nome: 'CAA Concert T2Sax', subtitulo: 'Final concert, with soloists · Teatro Jordão', descricao: 'Concerto final do festival com a participação de solistas. Uma apresentação grandiosa no Teatro Jordão que marca o encerramento do festival.', localizacao: 'Teatro Jordão', horario: '21:00 - 23:00' },
    ],
  },
]

const HEADER_FILL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF2C3E50' } }
const HEADER_FONT = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 }
const ALT_ROW_FILL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8F9FA' } }
const BORDER_STYLE = { style: 'thin', color: { argb: 'FFDEE2E6' } }
const TITLE_FILL = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF3498DB' } }
const TITLE_FONT = { bold: true, color: { argb: 'FFFFFFFF' }, size: 12 }

const empty = (v) => v == null || v === ''

async function run() {
  const workbook = new ExcelJS.Workbook()
  workbook.creator = 'FISG - Festival'
  workbook.created = new Date()

  // —— Folha: Instruções ——
  const instSheet = workbook.addWorksheet('Instruções', { views: [{ state: 'frozen', ySplit: 1 }] })
  instSheet.getColumn(1).width = 90
  const instRows = [
    ['CONTEÚDO DO FESTIVAL — FICHEIRO PARA EDIÇÃO'],
    [],
    ['INSTRUÇÕES:'],
    ['• Edite apenas as células com conteúdo. Não altere os cabeçalhos (primeira linha de cada tabela).'],
    ['• Em colunas "Imagem" ou "Imagens", use apenas o nome do ficheiro da foto (ex: nuno_silva.jpg).'],
    ['• Para campos vazios pode deixar em branco ou escrever (vazio).'],
    ['• As folhas "Artistas" e "7 Jul", "8 Jul", etc. seguem a mesma estrutura do site para depois voltar ao código.'],
    ['• Não apague colunas nem altere a ordem das colunas.'],
    [],
    ['Folhas deste livro:'],
    ['  — Instruções (esta folha)'],
    ['  — Artistas: todos os artistas do festival'],
    ['  — 7 Jul, 8 Jul, 9 Jul, 10 Jul: programação por dia'],
  ]
  instRows.forEach((row, i) => {
    const r = instSheet.getRow(i + 1)
    r.getCell(1).value = row[0]
    r.getCell(1).alignment = { wrapText: true, vertical: 'top' }
    if (i === 0) {
      r.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF2C3E50' } }
      r.getCell(1).font = { bold: true, size: 14, color: { argb: 'FFFFFFFF' } }
    }
    if (row[0] === 'INSTRUÇÕES:') r.getCell(1).font = { bold: true, size: 12 }
  })

  // —— Folha: Artistas ——
  const artistasDay = days[0]
  const artSheet = workbook.addWorksheet('Artistas', { views: [{ state: 'frozen', ySplit: 1 }] })
  const artHeaders = ['Nome', 'Papel', 'Imagem (ficheiro)', 'Biografia', 'Informações', 'Eventos (um por linha)', 'Imagens (ficheiros, um por linha)']
  artSheet.columns = artHeaders.map((h, i) => ({ header: h, key: `col${i}`, width: i === 3 ? 50 : i === 5 || i === 6 ? 30 : 18 }))
  const artHeaderRow = artSheet.getRow(1)
  artHeaders.forEach((h, i) => {
    const cell = artHeaderRow.getCell(i + 1)
    cell.value = h
    cell.fill = HEADER_FILL
    cell.font = HEADER_FONT
    cell.alignment = { wrapText: true, vertical: 'middle' }
    cell.border = { top: BORDER_STYLE, left: BORDER_STYLE, bottom: BORDER_STYLE, right: BORDER_STYLE }
  })
  artistasDay.artistas.forEach((a, idx) => {
    const row = artSheet.addRow([
      a.nome,
      a.papel,
      a.imagem,
      a.biografia || '',
      a.informacoes || '',
      (a.eventos || []).join('\n'),
      (a.imagens || []).join('\n'),
    ])
    row.eachCell((cell, colNumber) => {
      cell.alignment = { wrapText: true, vertical: 'top' }
      cell.border = { top: BORDER_STYLE, left: BORDER_STYLE, bottom: BORDER_STYLE, right: BORDER_STYLE }
      if (idx % 2 === 1) cell.fill = ALT_ROW_FILL
    })
  })

  // —— Folhas por dia (atividades) ——
  const daySheets = days.slice(1)
  const actHeaders = ['Nome', 'Subtítulo', 'Descrição', 'Localização', 'Horário', 'Informações']
  daySheets.forEach((day) => {
    const sheetName = day.data.replace(/ de /g, ' ').trim().slice(0, 10)
    const sheet = workbook.addWorksheet(sheetName, { views: [{ state: 'frozen', ySplit: 1 }] })
    sheet.columns = actHeaders.map((h, i) => ({ header: h, key: `col${i}`, width: i === 2 ? 50 : 22 }))
    const headerRow = sheet.getRow(1)
    actHeaders.forEach((h, i) => {
      const cell = headerRow.getCell(i + 1)
      cell.value = h
      cell.fill = HEADER_FILL
      cell.font = HEADER_FONT
      cell.alignment = { wrapText: true, vertical: 'middle' }
      cell.border = { top: BORDER_STYLE, left: BORDER_STYLE, bottom: BORDER_STYLE, right: BORDER_STYLE }
    })
    day.atividades.forEach((act, idx) => {
      const row = sheet.addRow([
        act.nome || '',
        empty(act.subtitulo) ? '' : act.subtitulo,
        act.descricao || '',
        act.localizacao || '',
        act.horario || '',
        empty(act.informacoes) ? '' : act.informacoes,
      ])
      row.eachCell((cell, colNumber) => {
        cell.alignment = { wrapText: true, vertical: 'top' }
        cell.border = { top: BORDER_STYLE, left: BORDER_STYLE, bottom: BORDER_STYLE, right: BORDER_STYLE }
        if (idx % 2 === 1) cell.fill = ALT_ROW_FILL
      })
    })
  })

  const outPath = path.join(__dirname, '..', 'conteudo-para-editar.xlsx')
  await workbook.xlsx.writeFile(outPath)
  console.log('Ficheiro criado:', outPath)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
