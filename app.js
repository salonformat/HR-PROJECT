const phaseContent = [
  {
    index: "PHASE A",
    title: "Erst verstehen, dann funktionieren.",
    text: "Du lernst nicht zuerst alle Tools. Du lernst die Menschen, Fragen und Entscheidungen kennen, die deine Arbeit prägen.",
    items: ["Produkt einmal aus Kund:innensicht erleben", "Drei Perspektiven aus Sales, Support und Produkt hören", "Eine ungeschriebene Regel entschlüsseln"]
  },
  {
    index: "PHASE B",
    title: "Sehen, was zwischen den Zeilen passiert.",
    text: "Du beobachtest reale Situationen und erkennst, wie gute Entscheidungen entstehen – einschließlich der Perspektiven, die leicht fehlen.",
    items: ["Zwei Kundengespräche mit unterschiedlichen Zielen vergleichen", "Einen schwierigen Fall gemeinsam rekonstruieren", "Ein Warnsignal erkennen und richtig weitergeben"]
  },
  {
    index: "PHASE C",
    title: "Nicht üben für später. Jetzt ausprobieren.",
    text: "Mit Rückendeckung übernimmst du echte Gesprächsteile und entwickelst einen ersten Success Plan.",
    items: ["Ein Gespräch vorbereiten und teilweise moderieren", "Feedback unmittelbar in den nächsten Versuch übersetzen", "Eine kleine Prozessverbesserung vorschlagen"]
  },
  {
    index: "PHASE D",
    title: "Verantwortung mit Rückhalt übernehmen.",
    text: "Du führst erste Kund:innen eigenständig – und weißt, wann du andere Perspektiven oder Unterstützung brauchst.",
    items: ["Ein kleines Portfolio übernehmen", "Einen Recovery Plan für einen gefährdeten Kunden entwerfen", "Eine schwierige Entscheidung transparent begründen"]
  },
  {
    index: "PHASE E",
    title: "Aus Erfahrung wird etwas, das bleibt.",
    text: "Du machst deinen Lernweg sichtbar, gibst Wissen weiter und hilfst, die Journey für die Nächsten besser zu machen.",
    items: ["Einen echten Kundenerfolg erzählen", "Einer neuen Person einen Bereich erklären", "Im Fresh Eyes Forum Beobachtungen und Ideen teilen"]
  }
];

const phaseButtons = document.querySelectorAll(".phase");
const detail = document.querySelector(".phase-detail");

phaseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = phaseContent[Number(button.dataset.phase)];
    phaseButtons.forEach((item) => {
      item.classList.remove("active");
      item.removeAttribute("aria-current");
    });
    button.classList.add("active");
    button.setAttribute("aria-current", "step");
    detail.innerHTML = `
      <div><p class="phase-index">${content.index}</p><h3>${content.title}</h3></div>
      <div class="phase-body"><p>${content.text}</p><ul>${content.items.map((item) => `<li>${item}</li>`).join("")}</ul></div>`;
  });
});

const noteForm = document.querySelector("#field-note-form");
const noteInput = document.querySelector("#field-note");
const saveState = document.querySelector(".save-state");
noteInput.value = localStorage.getItem("first100-field-note") || "";

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = noteInput.value.trim();
  if (!value) {
    saveState.textContent = "Schreib zuerst einen Gedanken auf.";
    noteInput.focus();
    return;
  }
  localStorage.setItem("first100-field-note", value);
  saveState.textContent = "Gesichert. Nur in diesem Browser.";
});

const dialog = document.querySelector("#time-dialog");
document.querySelector("[data-open-dialog]").addEventListener("click", () => dialog.showModal());
document.querySelectorAll("[data-close-dialog], .dialog-close").forEach((button) => button.addEventListener("click", () => dialog.close()));
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector(".sound-toggle").addEventListener("click", (event) => {
  const active = document.body.classList.toggle("focus-mode");
  event.currentTarget.setAttribute("aria-pressed", String(active));
  event.currentTarget.lastChild.textContent = active ? " Fokus an" : " Fokus";
});

const space = document.querySelector("#my-space");
const spaceTrigger = document.querySelector(".my-space-trigger");
const spaceBackdrop = document.querySelector(".space-backdrop");
const spaceClose = document.querySelector(".space-close");

function setSpace(open) {
  space.classList.toggle("open", open);
  space.setAttribute("aria-hidden", String(!open));
  spaceTrigger.setAttribute("aria-expanded", String(open));
  spaceBackdrop.hidden = !open;
  document.body.style.overflow = open ? "hidden" : "";
  if (open) spaceClose.focus();
  else spaceTrigger.focus();
}

spaceTrigger.addEventListener("click", () => setSpace(true));
spaceClose.addEventListener("click", () => setSpace(false));
spaceBackdrop.addEventListener("click", () => setSpace(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && space.classList.contains("open")) setSpace(false);
});

const journalForm = document.querySelector("#journal-form");
const journalEntry = document.querySelector("#journal-entry");
const journalTag = document.querySelector("#journal-tag");
const journalList = document.querySelector(".journal-list");
let notes = JSON.parse(localStorage.getItem("first100-journal") || "[]");

function renderNotes() {
  if (!notes.length) {
    journalList.innerHTML = '<p class="journal-empty">Hier ist noch viel Platz. Vielleicht beginnt es mit einer Frage.</p>';
    return;
  }
  journalList.innerHTML = notes.map((note) => `
    <article class="journal-note">
      <p class="note-meta">${note.tag} · ${note.date}</p>
      <p>${note.text.replace(/[&<>]/g, (character) => ({"&":"&amp;","<":"&lt;",">":"&gt;"}[character]))}</p>
      <button type="button" data-delete-note="${note.id}" aria-label="Notiz löschen">×</button>
    </article>`).join("");
}

journalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = journalEntry.value.trim();
  if (!text) return journalEntry.focus();
  notes.unshift({ id: Date.now(), text, tag: journalTag.value, date: new Intl.DateTimeFormat("de-AT", { day: "2-digit", month: "short" }).format(new Date()) });
  localStorage.setItem("first100-journal", JSON.stringify(notes));
  journalEntry.value = "";
  renderNotes();
});

journalList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-note]");
  if (!button) return;
  notes = notes.filter((note) => note.id !== Number(button.dataset.deleteNote));
  localStorage.setItem("first100-journal", JSON.stringify(notes));
  renderNotes();
});
renderNotes();
