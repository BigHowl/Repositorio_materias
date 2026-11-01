// Monta a lista de materiais, os filtros e a busca.
(function () {
  "use strict";

  var dados = typeof MATERIAIS !== "undefined" ? MATERIAIS : [];

  var campoBusca = document.getElementById("busca");
  var selDisciplina = document.getElementById("filtro-disciplina");
  var selTipo = document.getElementById("filtro-tipo");
  var lista = document.getElementById("lista");
  var contagem = document.getElementById("contagem");

  // Remove acentos e maiúsculas para a busca ser mais tolerante
  function normaliza(texto) {
    return String(texto || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function cria(tag, classe, texto) {
    var el = document.createElement(tag);
    if (classe) el.className = classe;
    if (texto) el.textContent = texto;
    return el;
  }

  function preencheSelect(select, valores) {
    var unicos = Array.from(new Set(valores.filter(Boolean)));
    unicos.sort(function (a, b) { return a.localeCompare(b, "pt-BR"); });
    unicos.forEach(function (valor) {
      var opcao = document.createElement("option");
      opcao.value = valor;
      opcao.textContent = valor;
      select.appendChild(opcao);
    });
  }

  function linkValido(link) {
    return /^https?:\/\//i.test(link || "");
  }

  function criaCard(m) {
    var card = cria("article", "card");

    var topo = cria("div", "card-topo");
    var tag = cria("span", "tag", m.tipo || "Material");
    tag.dataset.tipo = normaliza(m.tipo);
    topo.appendChild(tag);
    if (m.periodo) topo.appendChild(cria("span", "periodo", m.periodo));
    card.appendChild(topo);

    card.appendChild(cria("h3", "", m.titulo));

    var meta = [m.disciplina, m.professor].filter(Boolean).join(" · ");
    if (meta) card.appendChild(cria("span", "meta", meta));

    if (m.descricao) card.appendChild(cria("p", "", m.descricao));

    if (linkValido(m.link)) {
      var a = cria("a", "botao", "Abrir material");
      a.href = m.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      card.appendChild(a);
    } else {
      card.appendChild(cria("span", "botao desativado", "Link em breve"));
    }

    return card;
  }

  function renderiza() {
    var termo = normaliza(campoBusca.value);
    var disciplina = selDisciplina.value;
    var tipo = selTipo.value;

    var filtrados = dados.filter(function (m) {
      if (disciplina && m.disciplina !== disciplina) return false;
      if (tipo && m.tipo !== tipo) return false;
      if (!termo) return true;
      var texto = normaliza(
        [m.titulo, m.disciplina, m.tipo, m.periodo, m.professor, m.descricao].join(" ")
      );
      return texto.indexOf(termo) !== -1;
    });

    lista.textContent = "";

    if (filtrados.length === 0) {
      lista.appendChild(
        cria("p", "vazio", "Nada encontrado com esses filtros. Tente outra palavra ou limpe a busca.")
      );
    } else {
      filtrados.forEach(function (m) { lista.appendChild(criaCard(m)); });
    }

    contagem.textContent =
      filtrados.length === 1 ? "1 material encontrado" : filtrados.length + " materiais encontrados";
  }

  preencheSelect(selDisciplina, dados.map(function (m) { return m.disciplina; }));
  preencheSelect(selTipo, dados.map(function (m) { return m.tipo; }));

  campoBusca.addEventListener("input", renderiza);
  selDisciplina.addEventListener("change", renderiza);
  selTipo.addEventListener("change", renderiza);

  renderiza();
})();