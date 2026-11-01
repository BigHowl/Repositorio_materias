// ============================================================
// BASE DE DADOS DO ACERVO
// Para adicionar um material, copie um bloco { ... } abaixo,
// cole no fim da lista (antes do "];") e edite os campos.
//
// Campos:
//   titulo      - nome do material
//   disciplina  - nome da disciplina (padronize a escrita!)
//   tipo        - Prova, Lista, Resumo, Slides ou Roteiro
//   periodo     - ano-semestre, ex.: "2025-1" (pode ficar vazio "")
//   professor   - nome do professor (pode ficar vazio "")
//   descricao   - 1 ou 2 frases sobre o conteúdo
//   link        - endereço do arquivo (Drive, GitHub etc.).
//                 Use "#" enquanto o link não existir.
//
// Os itens abaixo são EXEMPLOS: apague-os quando começar a valer.
// ============================================================

const MATERIAIS = [
  {
    titulo: "Exemplo: Prova P1",
    disciplina: "Física 1",
    tipo: "Prova",
    periodo: "2025-1",
    professor: "Prof. Exemplo",
    descricao: "Cinemática e leis de Newton. Inclui o gabarito oficial.",
    link: "#"
  },
  {
    titulo: "Exemplo: Lista 3 resolvida",
    disciplina: "Física 1",
    tipo: "Lista",
    periodo: "2025-1",
    professor: "Prof. Exemplo",
    descricao: "Resolução comentada dos exercícios de trabalho e energia.",
    link: "#"
  },
  {
    titulo: "Exemplo: Resumo de difusão e membranas",
    disciplina: "Biofísica",
    tipo: "Resumo",
    periodo: "2026-1",
    professor: "",
    descricao: "Visão geral dos conceitos, com foco em aplicações biológicas.",
    link: "#"
  },
  {
    titulo: "Exemplo: Slides da monitoria 1",
    disciplina: "Biofísica",
    tipo: "Slides",
    periodo: "2026-1",
    professor: "",
    descricao: "Material de apoio usado na primeira monitoria.",
    link: "#"
  },
  {
    titulo: "Exemplo: Roteiro de exercícios",
    disciplina: "Biofísica",
    tipo: "Roteiro",
    periodo: "2026-1",
    professor: "",
    descricao: "Sequência guiada de problemas para estudar antes da prova.",
    link: "#"
  }
];