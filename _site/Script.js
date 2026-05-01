// ─── Tailles et positions aléatoires ───────────────────────────────────────

document.querySelectorAll("li").forEach((li) => {
  const carousel = li.querySelector(".carousel");
  if (!carousel) return;
  const h = 35 + Math.floor(Math.random() * 30);
  const w = 20 + Math.floor(Math.random() * 25);
  const x = -10 + Math.floor(Math.random() * 10);
  const y = -20 + Math.floor(Math.random() * 20);
  carousel.style.height = `${h}vh`;
  carousel.style.width = `${w}vw`;
  li.style.transform = `translate(${x}vw, ${y}vh)`;
  li.style.zIndex = 1;
});

// ─── Shuffle ────────────────────────────────────────────────────────────────

const ul = document.querySelector("ul");
const lis = [...ul.querySelectorAll("li")];
lis.sort(() => Math.random() - 0.5);
lis.forEach((li) => ul.appendChild(li));

// ─── Cacher les cartes projet par défaut ────────────────────────────────────

document.querySelectorAll(".carte-projet").forEach((li) => {
  li.style.display = "none";
});

// ─── Drag ───────────────────────────────────────────────────────────────────

let wasDragging = false;
let zCounter = 10;

document.querySelectorAll("li").forEach((li) => {
  let isDragging = false;
  let startX, startY, origX, origY;

  function getActiveTarget() {
    return (
      li.querySelector(".carousel-img.active") ||
      li.querySelector(".carousel-desc.active") ||
      li.querySelector(".carte-desc-projet")
    );
  }

  li.addEventListener("mousedown", (e) => {
    const activeTarget = getActiveTarget();
    if (!activeTarget) return;
    const onImg = e.target === activeTarget;
    const onDesc =
      e.target.closest(".carousel-desc") &&
      li.querySelector(".carousel-desc.active");
    const onCarte = e.target.closest(".carte-desc-projet");
    if (!onImg && !onDesc && !onCarte) return;

    e.preventDefault();
    isDragging = false;
    wasDragging = false;
    startX = e.clientX;
    startY = e.clientY;
    const matrix = new DOMMatrix(getComputedStyle(li).transform);
    origX = matrix.m41;
    origY = matrix.m42;

    zCounter++;
    li.style.zIndex = zCounter;

    function onMove(e) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        isDragging = true;
        wasDragging = true;
      }
      if (!isDragging) return;
      li.style.transform = `translate(${origX + dx}px, ${origY + dy}px)`;
    }

    function onUp() {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });

  li.addEventListener("click", (e) => {
    if (isDragging || wasDragging) {
      isDragging = false;
      e.stopPropagation();
    }
  });
});

// ─── Carrousel ──────────────────────────────────────────────────────────────

document.querySelectorAll(".carousel").forEach((carousel) => {
  carousel.addEventListener("click", (e) => {
    if (wasDragging) {
      wasDragging = false;
      return;
    }
    const onActiveImg =
      e.target.classList.contains("carousel-img") &&
      e.target.classList.contains("active");
    const onDesc = e.target.closest(".carousel-desc");
    if (!onActiveImg && !onDesc) return;

    zCounter++;
    carousel.closest("li").style.zIndex = zCounter;
    carouselNav(carousel);
  });
});

function carouselNav(carousel) {
  const imgs = carousel.querySelectorAll(".carousel-img");
  const desc = carousel.querySelector(".carousel-desc");
  let index = parseInt(carousel.dataset.index);

  if (index === imgs.length - 1) {
    imgs[index].classList.remove("active");
    if (desc) desc.classList.add("active");
    carousel.dataset.index = -1;
    return;
  }

  if (index === -1) {
    if (desc) desc.classList.remove("active");
    imgs[0].classList.add("active");
    carousel.dataset.index = 0;
    const counter = carousel.querySelector(".carousel-current");
    if (counter) counter.textContent = 1;
    return;
  }

  imgs[index].classList.remove("active");
  index += 1;
  imgs[index].classList.add("active");
  carousel.dataset.index = index;

  const counter = carousel.querySelector(".carousel-current");
  if (counter) counter.textContent = index + 1;
}

// ─── Filtres ─────────────────────────────────────────────────────────────────

function getLiValues(li) {
  const clean = (str) => (str ?? "").replace(/"/g, "").trim();
  const toList = (str) =>
    str
      ? str
          .replace(/"/g, "")
          .split(",")
          .map((t) => t.trim())
      : [];
  return {
    categorie: clean(li.dataset.categorie),
    pratiques: toList(li.dataset.pratique),
    documents: toList(li.dataset.document),
    year: clean(li.dataset.year),
    lieu: clean(li.dataset.lieu),
    projet: clean(li.dataset.projet),
  };
}

function getActiveFilters() {
  const val = (name) =>
    document.querySelector(`input[name="${name}"]:checked`)?.value;
  return {
    activeCategorie: val("categorie"),
    activePratique: val("pratique"),
    activeDocument: val("document"),
    activeYear: val("year"),
    activeLieu: val("lieu"),
    activeProjet: val("projet"),
  };
}

function liMatchesFilters(
  li,
  {
    activeCategorie,
    activePratique,
    activeDocument,
    activeYear,
    activeLieu,
    activeProjet,
  },
) {
  const { categorie, pratiques, documents, year, lieu, projet } =
    getLiValues(li);
  return (
    (!activeCategorie || categorie === activeCategorie) &&
    (!activePratique || pratiques.includes(activePratique)) &&
    (!activeDocument || documents.includes(activeDocument)) &&
    (!activeYear || year === activeYear) &&
    (!activeLieu || lieu === activeLieu) &&
    (!activeProjet || projet === activeProjet)
  );
}

function updateAvailableFilters() {
  const filters = getActiveFilters();
  const allLis = [...document.querySelectorAll("li")];

  function updateGroup(name, matchFn) {
    document.querySelectorAll(`input[name="${name}"]`).forEach((radio) => {
      const label = document.querySelector(`label[for="${radio.value}"]`);
      if (!label) return;
      const key = `active${name.charAt(0).toUpperCase() + name.slice(1)}`;
      const isActive = filters[key];
      if (isActive) {
        label.style.opacity = radio.value === isActive ? "1" : "0.3";
      } else {
        const hasMatch = allLis.some((li) => matchFn(li, radio.value));
        label.style.opacity = hasMatch ? "1" : "0.3";
      }
    });
  }

  updateGroup("categorie", (li, val) => {
    const { categorie } = getLiValues(li);
    return (
      categorie === val &&
      liMatchesFilters(li, { ...filters, activeCategorie: null })
    );
  });
  updateGroup("pratique", (li, val) => {
    const { pratiques } = getLiValues(li);
    return (
      pratiques.includes(val) &&
      liMatchesFilters(li, { ...filters, activePratique: null })
    );
  });
  updateGroup("document", (li, val) => {
    const { documents } = getLiValues(li);
    return (
      documents.includes(val) &&
      liMatchesFilters(li, { ...filters, activeDocument: null })
    );
  });
  updateGroup("year", (li, val) => {
    const { year } = getLiValues(li);
    return (
      year === val && liMatchesFilters(li, { ...filters, activeYear: null })
    );
  });
  updateGroup("lieu", (li, val) => {
    const { lieu } = getLiValues(li);
    return (
      lieu === val && liMatchesFilters(li, { ...filters, activeLieu: null })
    );
  });
  updateGroup("projet", (li, val) => {
    const { projet } = getLiValues(li);
    return (
      projet === val && liMatchesFilters(li, { ...filters, activeProjet: null })
    );
  });
}

function applyFilters() {
  const filters = getActiveFilters();

  document.querySelectorAll("li").forEach((li) => {
    const isCarte = li.classList.contains("carte-projet");
    if (isCarte) {
      // Carte projet visible seulement si filtre projet actif ET correspond
      li.style.display =
        filters.activeProjet && liMatchesFilters(li, filters) ? "flex" : "none";
    } else {
      li.style.display = liMatchesFilters(li, filters) ? "flex" : "none";
    }
  });

  // Reset labels
  document
    .querySelectorAll("label")
    .forEach((l) => (l.style.backgroundColor = "transparent"));

  // Griser les labels actifs
  const {
    activeCategorie,
    activePratique,
    activeDocument,
    activeYear,
    activeLieu,
    activeProjet,
  } = filters;
  [
    activeCategorie,
    activePratique,
    activeDocument,
    activeYear,
    activeLieu,
    activeProjet,
  ]
    .filter(Boolean)
    .forEach((val) => {
      document
        .querySelector(`label[for="${val}"]`)
        ?.style.setProperty("background-color", "transparent");
    });

  updateAvailableFilters();
}

// ─── Clic sur titre de projet → activer filtre projet ────────────────────────

document.querySelectorAll(".btn-projet").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (wasDragging) return;
    // e.stopPropagation() ← retirez cette ligne
    const projet = btn.dataset.projet;
    const radio = document.querySelector(
      `input[name="projet"][value="${projet}"]`,
    );
    if (!radio) return;

    if (radio.dataset.checked === "true") {
      radio.checked = false;
      radio.dataset.checked = "false";
    } else {
      document
        .querySelectorAll('input[name="projet"]')
        .forEach((r) => (r.dataset.checked = "false"));
      radio.checked = true;
      radio.dataset.checked = "true";
    }
    applyFilters();
  });
});

// ─── Listeners ───────────────────────────────────────────────────────────────

document
  .querySelectorAll(
    'input[name="categorie"], input[name="pratique"], input[name="document"], input[name="year"], input[name="lieu"], input[name="projet"]',
  )
  .forEach((radio) => {
    radio.addEventListener("change", applyFilters);
    radio.addEventListener("click", function () {
      if (this.dataset.checked === "true") {
        this.checked = false;
        this.dataset.checked = "false";
        applyFilters();
      } else {
        document
          .querySelectorAll(`input[name="${this.name}"]`)
          .forEach((r) => (r.dataset.checked = "false"));
        this.dataset.checked = "true";
      }
    });
  });

// ─── Init ────────────────────────────────────────────────────────────────────

updateAvailableFilters();

// ─── Popup ────────────────────────────────────────────────────────────────────

var firstTime = localStorage.getItem("first_time");
if (firstTime === null) {
  document.querySelector(".popup")?.classList.add("active");
  localStorage.setItem("first_time", "true");
}
document.querySelector("#close-popup")?.addEventListener("click", function () {
  document.querySelector(".popup")?.classList.remove("active");
});

// ─── Switch vue ──────────────────────────────────────────────────────────────

function switchView(view) {
  const chaosView = document.querySelector("ul");
  const portfolioView = document.getElementById("portfolio-view");
  const btnChaos = document.getElementById("btn-chaos");
  const btnPortfolio = document.getElementById("btn-portfolio");

  if (view === "chaos") {
    chaosView.style.display = "grid";
    portfolioView.style.display = "none";
    if (btnChaos) btnChaos.style.color = "black";
    if (btnPortfolio) btnPortfolio.style.color = "blue";
  } else {
    chaosView.style.display = "none";
    portfolioView.style.display = "block";
    if (btnPortfolio) btnPortfolio.style.color = "black";
    if (btnChaos) btnChaos.style.color = "blue";
  }
}

// ─── Pile portfolio ──────────────────────────────────────────────────────────

function togglePile(pile) {
  const isOpen = pile.classList.contains("open");
  if (!isOpen) {
    document
      .querySelectorAll(".projet-pile.open")
      .forEach((p) => p.classList.remove("open"));
    pile.classList.add("open");
    pile.querySelectorAll(".pile-carte").forEach((carte, i) => {
      carte.style.transitionDelay = `${i * 60}ms`;
    });
  } else {
    const cartes = pile.querySelectorAll(".pile-carte");
    cartes.forEach((carte, i) => {
      carte.style.transitionDelay = `${(cartes.length - i) * 40}ms`;
    });
    pile.classList.remove("open");
  }
}

document.querySelectorAll(".projet-pile").forEach((pile) => {
  pile.addEventListener("click", (e) => {
    if (!pile.classList.contains("open")) {
      togglePile(pile);
      return;
    }
    const carte = e.target.closest(".pile-carte");
    if (!carte) return;
    const onActiveImg =
      e.target.classList.contains("carousel-img") &&
      e.target.classList.contains("active");
    const onDesc = e.target.closest(".carousel-desc");
    if (!onActiveImg && !onDesc) return;
    carouselNav(carte);
  });
});
