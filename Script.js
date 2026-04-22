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

// ─── Drag ───────────────────────────────────────────────────────────────────

let wasDragging = false;
let zCounter = 10;

document.querySelectorAll("li").forEach((li) => {
  let isDragging = false;
  let startX, startY, origX, origY;

  function getActiveTarget() {
    return (
      li.querySelector(".carousel-img.active") ||
      li.querySelector(".carousel-desc.active")
    );
  }

  li.addEventListener("mousedown", (e) => {
    const activeTarget = getActiveTarget();
    if (!activeTarget) return;
    const onImg = e.target === activeTarget;
    const onDesc =
      e.target.closest(".carousel-desc") &&
      li.querySelector(".carousel-desc.active");
    if (!onImg && !onDesc) return;

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
    li.style.cursor = "grabbing";

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
      li.style.cursor = "default";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });

  li.addEventListener("mouseover", (e) => {
    const activeImg = li.querySelector(".carousel-img.active");
    const onActive =
      e.target === activeImg || e.target.closest(".carousel-desc.active");
    li.style.cursor = onActive ? "grab" : "default";
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
  };
}

function liMatchesFilters(
  li,
  { activeCategorie, activePratique, activeDocument, activeYear, activeLieu },
) {
  const { categorie, pratiques, documents, year, lieu } = getLiValues(li);
  return (
    (!activeCategorie || categorie === activeCategorie) &&
    (!activePratique || pratiques.includes(activePratique)) &&
    (!activeDocument || documents.includes(activeDocument)) &&
    (!activeYear || year === activeYear) &&
    (!activeLieu || lieu === activeLieu)
  );
}

function updateAvailableFilters() {
  const filters = getActiveFilters();
  const allLis = [...document.querySelectorAll("li")];

  function updateGroup(name, matchFn) {
    document.querySelectorAll(`input[name="${name}"]`).forEach((radio) => {
      const label = document.querySelector(`label[for="${radio.value}"]`);
      if (!label) return;
      const isActive =
        filters[`active${name.charAt(0).toUpperCase() + name.slice(1)}`];
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
}

function applyFilters() {
  const filters = getActiveFilters();

  document.querySelectorAll("li").forEach((li) => {
    li.style.display = liMatchesFilters(li, filters) ? "flex" : "none";
  });

  // Reset labels
  document
    .querySelectorAll("label")
    .forEach((l) => (l.style.backgroundColor = "white"));

  // Griser les labels actifs
  const {
    activeCategorie,
    activePratique,
    activeDocument,
    activeYear,
    activeLieu,
  } = filters;
  [activeCategorie, activePratique, activeDocument, activeYear, activeLieu]
    .filter(Boolean)
    .forEach((val) => {
      document
        .querySelector(`label[for="${val}"]`)
        ?.style.setProperty("background-color", "grey");
    });

  updateAvailableFilters();
}

// ─── Listeners ───────────────────────────────────────────────────────────────

document
  .querySelectorAll(
    'input[name="categorie"], input[name="pratique"], input[name="document"], input[name="year"], input[name="lieu"]',
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
