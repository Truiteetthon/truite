// Tailles et positions aléatoires
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

// Shuffle
const ul = document.querySelector("ul");
const lis = [...ul.querySelectorAll("li")];
lis.sort(() => Math.random() - 0.5);
lis.forEach((li) => ul.appendChild(li));

// Drag
let wasDragging = false;
let zCounter = 10;

document.querySelectorAll("li").forEach((li) => {
  let isDragging = false;
  let startX, startY, origX, origY;

  li.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = false;
    wasDragging = false;
    startX = e.clientX;
    startY = e.clientY;
    const transform = new DOMMatrix(getComputedStyle(li).transform);
    origX = transform.m41;
    origY = transform.m42;

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
      li.style.cursor = "grab";
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

// Carrousel
document.querySelectorAll(".carousel").forEach((carousel) => {
  carousel.addEventListener("click", (e) => {
    if (wasDragging) {
      wasDragging = false;
      return;
    }
    if (
      !e.target.classList.contains("carousel-img") &&
      !e.target.classList.contains("carousel-desc") &&
      !e.target.closest(".carousel-desc")
    )
      return;

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
  index = index + 1;
  imgs[index].classList.add("active");
  carousel.dataset.index = index;

  const counter = carousel.querySelector(".carousel-current");
  if (counter) counter.textContent = index + 1;
}

// Helpers — lecture des data attributes d'un <li>
function getLiValues(li) {
  const pratiques = li.dataset.pratique
    ? li.dataset.pratique
        .replace(/"/g, "")
        .split(",")
        .map((t) => t.trim())
    : [];
  const documents = li.dataset.document
    ? li.dataset.document
        .replace(/"/g, "")
        .split(",")
        .map((t) => t.trim())
    : [];
  const year = (li.dataset.year ?? "").replace(/"/g, "");
  const lieu = (li.dataset.lieu ?? "").replace(/"/g, "");
  return { pratiques, documents, year, lieu };
}

// Filtres
function getActiveFilters() {
  return {
    activePratique: document.querySelector('input[name="pratique"]:checked')
      ?.value,
    activeDocument: document.querySelector('input[name="document"]:checked')
      ?.value,
    activeYear: document.querySelector('input[name="year"]:checked')?.value,
    activeLieu: document.querySelector('input[name="lieu"]:checked')?.value,
  };
}

function liMatchesFilters(
  li,
  { activePratique, activeDocument, activeYear, activeLieu },
) {
  const { pratiques, documents, year, lieu } = getLiValues(li);
  return (
    (!activePratique || pratiques.includes(activePratique)) &&
    (!activeDocument || documents.includes(activeDocument)) &&
    (!activeYear || year === activeYear) &&
    (!activeLieu || lieu === activeLieu)
  );
}

function updateAvailableFilters() {
  const filters = getActiveFilters();
  const allLis = [...document.querySelectorAll("li")];

  // Pour chaque groupe de filtres, on vérifie si une valeur a des résultats
  // en ignorant le filtre du même groupe (pour permettre le changement de valeur)

  // Pratique
  document.querySelectorAll('input[name="pratique"]').forEach((radio) => {
    const label = document.querySelector(`label[for="${radio.value}"]`);
    if (!label) return;
    if (filters.activePratique) {
      label.style.opacity =
        radio.value === filters.activePratique ? "1" : "0.3";
    } else {
      const hasMatch = allLis.some((li) => {
        const { pratiques } = getLiValues(li);
        return (
          pratiques.includes(radio.value) &&
          liMatchesFilters(li, { ...filters, activePratique: null })
        );
      });
      label.style.opacity = hasMatch ? "1" : "0.3";
    }
  });

  // Document
  document.querySelectorAll('input[name="document"]').forEach((radio) => {
    const label = document.querySelector(`label[for="${radio.value}"]`);
    if (!label) return;
    if (filters.activeDocument) {
      label.style.opacity =
        radio.value === filters.activeDocument ? "1" : "0.3";
    } else {
      const hasMatch = allLis.some((li) => {
        const { documents } = getLiValues(li);
        return (
          documents.includes(radio.value) &&
          liMatchesFilters(li, { ...filters, activeDocument: null })
        );
      });
      label.style.opacity = hasMatch ? "1" : "0.3";
    }
  });

  // Année
  document.querySelectorAll('input[name="year"]').forEach((radio) => {
    const label = document.querySelector(`label[for="${radio.value}"]`);
    if (!label) return;
    if (filters.activeYear) {
      label.style.opacity = radio.value === filters.activeYear ? "1" : "0.3";
    } else {
      const hasMatch = allLis.some((li) => {
        const { year } = getLiValues(li);
        return (
          year === radio.value &&
          liMatchesFilters(li, { ...filters, activeYear: null })
        );
      });
      label.style.opacity = hasMatch ? "1" : "0.3";
    }
  });

  // Lieu
  document.querySelectorAll('input[name="lieu"]').forEach((radio) => {
    const label = document.querySelector(`label[for="${radio.value}"]`);
    if (!label) return;
    if (filters.activeLieu) {
      label.style.opacity = radio.value === filters.activeLieu ? "1" : "0.3";
    } else {
      const hasMatch = allLis.some((li) => {
        const { lieu } = getLiValues(li);
        return (
          lieu === radio.value &&
          liMatchesFilters(li, { ...filters, activeLieu: null })
        );
      });
      label.style.opacity = hasMatch ? "1" : "0.3";
    }
  });
}

function applyFilters() {
  const filters = getActiveFilters();

  document.querySelectorAll("li").forEach((li) => {
    li.style.display = liMatchesFilters(li, filters) ? "flex" : "none";
  });

  // Labels actifs en gris
  document.querySelectorAll("label").forEach((label) => {
    label.style.backgroundColor = "white";
  });
  if (filters.activePratique)
    document
      .querySelector(`label[for="${filters.activePratique}"]`)
      ?.style.setProperty("background-color", "grey");
  if (filters.activeDocument)
    document
      .querySelector(`label[for="${filters.activeDocument}"]`)
      ?.style.setProperty("background-color", "grey");
  if (filters.activeYear)
    document
      .querySelector(`label[for="${filters.activeYear}"]`)
      ?.style.setProperty("background-color", "grey");
  if (filters.activeLieu)
    document
      .querySelector(`label[for="${filters.activeLieu}"]`)
      ?.style.setProperty("background-color", "grey");

  updateAvailableFilters();
}

// Listeners filtres
document
  .querySelectorAll(
    'input[name="pratique"], input[name="document"], input[name="year"], input[name="lieu"]',
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

// Init au chargement
updateAvailableFilters();
