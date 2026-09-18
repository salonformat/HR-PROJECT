const phases = [
  { id: "start", label: "Tag 1–10", name: "Orientieren" },
  { id: "patterns", label: "Tag 11–30", name: "Zusammenhänge verstehen" },
  { id: "practice", label: "Tag 31–60", name: "Selbst ausprobieren" },
  { id: "own", label: "Tag 61–90", name: "Verantwortung übernehmen" },
  { id: "share", label: "Tag 91–100", name: "Wissen weitergeben" }
];

const missions = [
  {
    id: "customer-view", phase: "start", number: "01", title: "Teste das Produkt wie ein neuer Kunde", duration: "40 Minuten",
    intro: "Richte ohne interne Anleitung einen Test-Account ein. Achte darauf, was verständlich ist und wo du hängen bleibst.",
    steps: ["Starte mit der öffentlichen Anleitung.", "Notiere einen guten und einen schwierigen Moment.", "Formuliere eine Frage, die du einem Kunden stellen würdest."],
    prompts: [["Was war sofort verständlich?", "Zum Beispiel: Der erste Schritt war klar, weil …"], ["Wo bist du hängen geblieben?", "Beschreibe die konkrete Stelle."], ["Welche Frage würdest du einem Kunden dazu stellen?", "Zum Beispiel: Was hätten Sie an dieser Stelle erwartet?"]]
  },
  {
    id: "three-views", phase: "start", number: "02", title: "Hol dir drei Perspektiven", duration: "3 × 20 Minuten",
    intro: "Sprich kurz mit je einer Person aus Sales, Support und Produkt. Stell allen dieselben zwei Fragen: Was brauchen Kunden am Anfang am meisten? Wo entstehen oft Missverständnisse?",
    steps: ["Vereinbare drei kurze Gespräche.", "Stell jeweils dieselben zwei Fragen.", "Vergleiche die Antworten."],
    prompts: [["Was sagt Sales?", "Die wichtigsten Aussagen aus dem Gespräch."], ["Was sagt Support?", "Die wichtigsten Aussagen aus dem Gespräch."], ["Was sagt Produkt?", "Die wichtigsten Aussagen aus dem Gespräch."], ["Was ist dir beim Vergleich aufgefallen?", "Wo stimmen die Perspektiven überein, wo nicht?"]]
  },
  {
    id: "unwritten-rule", phase: "start", number: "03", title: "Finde eine ungeschriebene Regel", duration: "20 Minuten",
    intro: "Viele Abläufe stehen in keinem Handbuch. Beobachte eine konkrete Situation und halte fest, was du daraus gelernt hast.",
    steps: ["Wähle ein Meeting oder eine Übergabe.", "Beobachte, wie Entscheidungen tatsächlich getroffen werden.", "Prüfe deine Vermutung mit deinem Buddy."],
    prompts: [["Welche Situation hast du beobachtet?", "Meeting, Übergabe oder eine andere konkrete Situation."], ["Welche ungeschriebene Regel vermutest du?", "Zum Beispiel: Entscheidungen werden erst nach dem Meeting abgestimmt."], ["Was möchtest du dazu nachfragen?", "Formuliere eine sachliche Frage an deinen Buddy."]]
  },
  {
    id: "listen-call", phase: "patterns", number: "04", title: "Beobachte ein Kundengespräch", duration: "60 Minuten",
    intro: "Hör bei einem Kundengespräch zu. Konzentriere dich auf Ziele, Unsicherheiten und nächste Schritte.",
    steps: ["Lies vorab die wichtigsten Kundendaten.", "Hör im Gespräch zu und mach kurze Notizen.", "Vergleiche deine Beobachtung danach mit der Gesprächsleitung."],
    prompts: [["Was wollte der Kunde erreichen?", "Das wichtigste Ziel in einem Satz."], ["Wo war Unsicherheit zu hören?", "Konkrete Aussage oder Situation."], ["Was wurde als Nächstes vereinbart?", "Aufgabe, verantwortliche Person und Termin."]]
  },
  {
    id: "case-rebuild", phase: "patterns", number: "05", title: "Rekonstruiere einen schwierigen Fall", duration: "45 Minuten",
    intro: "Nimm einen abgeschlossenen Support- oder Churn-Fall und arbeite rückwärts: Was ist passiert und wann hätte man früher reagieren können?",
    steps: ["Wähle mit deinem Buddy einen anonymisierten Fall.", "Ordne die wichtigsten Ereignisse zeitlich.", "Markiere den frühesten sinnvollen Eingriff."],
    prompts: [["Was ist passiert?", "Kurzer Ablauf in deinen Worten."], ["Welches Signal war früh erkennbar?", "Nutzung, Kommunikation oder ein anderer Hinweis."], ["Was hätte man früher tun können?", "Eine konkrete Maßnahme."]]
  },
  {
    id: "risk-signal", phase: "patterns", number: "06", title: "Bewerte ein Risikosignal", duration: "30 Minuten",
    intro: "Ein Kunde nutzt das Produkt kaum, sagt aber, alles sei in Ordnung. Entscheide, was du als Nächstes prüfen würdest.",
    steps: ["Sammle die verfügbaren Fakten.", "Trenne Fakten von Vermutungen.", "Lege einen nächsten Schritt fest."],
    prompts: [["Welche Fakten kennst du?", "Nur das, was tatsächlich belegt ist."], ["Was vermutest du?", "Mögliche Erklärung, klar als Vermutung formuliert."], ["Was tust du als Nächstes?", "Eine konkrete Handlung und wen du einbeziehst."]]
  },
  {
    id: "first-part", phase: "practice", number: "07", title: "Übernimm einen Teil des Gesprächs", duration: "45 Minuten Vorbereitung",
    intro: "Bereite einen klar abgegrenzten Teil eines echten Kundengesprächs vor und führe ihn selbst durch.",
    steps: ["Stimme deinen Teil mit der Gesprächsleitung ab.", "Bereite Ziel und zwei Fragen vor.", "Hol dir direkt danach Feedback."],
    prompts: [["Welchen Teil übernimmst du?", "Zum Beispiel: Einstieg, Rückblick oder nächste Schritte."], ["Was ist dein Ziel?", "Was soll am Ende dieses Gesprächsteils klar sein?"], ["Welche zwei Fragen stellst du?", "Schreib beide Fragen aus."]]
  },
  {
    id: "use-feedback", phase: "practice", number: "08", title: "Setze Feedback direkt um", duration: "20 Minuten",
    intro: "Wähle einen konkreten Feedbackpunkt aus deinem letzten Gespräch und plane, wie du ihn beim nächsten Mal umsetzt.",
    steps: ["Schreib das Feedback möglichst genau auf.", "Übersetze es in beobachtbares Verhalten.", "Leg eine passende nächste Situation fest."],
    prompts: [["Welches Feedback hast du bekommen?", "Möglichst nah am Wortlaut."], ["Was machst du beim nächsten Mal anders?", "Ein konkretes Verhalten."], ["Wann probierst du es aus?", "Gespräch oder Termin."]]
  },
  {
    id: "success-plan", phase: "practice", number: "09", title: "Erstelle deinen ersten Success Plan", duration: "60 Minuten",
    intro: "Erstelle gemeinsam mit deinem Lead einen einfachen Plan für einen bestehenden Kunden.",
    steps: ["Klär das Geschäftsziel des Kunden.", "Definiere ein sichtbares Erfolgssignal.", "Vereinbare den nächsten überprüfbaren Schritt."],
    prompts: [["Welches Ziel hat der Kunde?", "In der Sprache des Kunden, nicht als Produktfunktion."], ["Woran erkennt ihr Erfolg?", "Ein beobachtbares oder messbares Signal."], ["Was ist der nächste Schritt?", "Aufgabe, verantwortliche Person und Termin."]]
  },
  {
    id: "small-portfolio", phase: "own", number: "10", title: "Übernimm erste Kunden selbst", duration: "laufende Arbeit",
    intro: "Übernimm ein kleines, passendes Portfolio. Dokumentiere pro Kunde nur das, was du für die nächste gute Entscheidung brauchst.",
    steps: ["Klär gemeinsam mit deinem Lead den Umfang.", "Prüfe Ziele, Status und offene Punkte.", "Plane die nächste sinnvolle Kontaktaufnahme."],
    prompts: [["Welche Kunden übernimmst du?", "Namen oder interne Kürzel."], ["Wo besteht aktuell Handlungsbedarf?", "Pro Kunde ein kurzer Satz."], ["Was klärst du mit deinem Lead?", "Offene Entscheidung oder Unsicherheit."]]
  },
  {
    id: "recovery-plan", phase: "own", number: "11", title: "Entwirf einen Recovery Plan", duration: "45 Minuten",
    intro: "Wähle einen gefährdeten Kunden und entwickle einen realistischen Plan. Ziel ist der nächste sinnvolle Schritt, nicht eine sofortige Komplettlösung.",
    steps: ["Fass die Risikosignale zusammen.", "Prüfe, wer auf Kundenseite beteiligt sein muss.", "Schlag eine kleine, überprüfbare Maßnahme vor."],
    prompts: [["Warum ist der Kunde gefährdet?", "Beobachtete Signale."], ["Wer sollte beteiligt sein?", "Auf Kunden- und auf Nexa-Seite."], ["Was schlägst du vor?", "Maßnahme, Ziel und Zeitpunkt der Prüfung."]]
  },
  {
    id: "tradeoff", phase: "own", number: "12", title: "Begründe eine schwierige Entscheidung", duration: "30 Minuten",
    intro: "Bearbeite einen Fall, in dem Kundenwunsch, Aufwand und verantwortungsvoller Produkteinsatz nicht automatisch zusammenpassen.",
    steps: ["Benenne die betroffenen Interessen.", "Prüfe mögliche Folgen.", "Entscheide und begründe transparent."],
    prompts: [["Welche Interessen stehen gegenüber?", "Kunde, Nutzer:innen, Unternehmen oder andere Betroffene."], ["Welche Folgen sind möglich?", "Kurzfristig und längerfristig."], ["Wie entscheidest du?", "Entscheidung, Begründung und offene Unsicherheit."]]
  },
  {
    id: "success-story", phase: "share", number: "13", title: "Dokumentiere einen Kundenerfolg", duration: "40 Minuten",
    intro: "Wähle einen echten Fall und beschreibe knapp, was sich für den Kunden verbessert hat und welchen Beitrag du geleistet hast.",
    steps: ["Beschreibe die Ausgangslage.", "Zeig die wichtigste Veränderung.", "Halte fest, was du beim nächsten Mal wieder so machen würdest."],
    prompts: [["Wie war die Ausgangslage?", "Problem oder Ziel des Kunden."], ["Was hat sich verändert?", "Konkreter Nutzen oder beobachtbares Ergebnis."], ["Was hast du daraus gelernt?", "Ein Punkt, den du mitnimmst."]]
  },
  {
    id: "explain", phase: "share", number: "14", title: "Erklär es einer neuen Person", duration: "30 Minuten",
    intro: "Erklär einer neueren Kollegin oder einem neueren Kollegen einen Bereich, den du inzwischen gut kennst. So merkst du, was wirklich klar ist.",
    steps: ["Wähle ein überschaubares Thema.", "Erklär es ohne interne Abkürzungen.", "Frag nach, was noch unklar ist."],
    prompts: [["Welches Thema erklärst du?", "Ein klar abgegrenzter Bereich."], ["Was war schwer verständlich?", "Rückfrage oder sichtbare Unsicherheit."], ["Was würdest du an der Erklärung ändern?", "Eine konkrete Verbesserung."]]
  },
  {
    id: "fresh-eyes", phase: "share", number: "15", title: "Zieh Bilanz nach 100 Tagen", duration: "45 Minuten",
    intro: "Schau auf deine ersten 100 Tage zurück. Du entscheidest selbst, welche Punkte du für dich behältst und welche du im Abschlussgespräch teilen möchtest.",
    steps: ["Sieh deine bisherigen Einträge durch.", "Wähle je einen Punkt zum Beibehalten und Verbessern.", "Entscheide bewusst, was du teilen möchtest."],
    prompts: [["Was hat dir den Einstieg erleichtert?", "Etwas, das beibehalten werden sollte."], ["Was war unnötig schwer?", "Prozess, Information oder Situation."], ["Welche kleine Änderung würdest du empfehlen?", "Ein konkreter, realistischer Vorschlag."], ["Was davon möchtest du teilen?", "Du kannst dieses Feld auch leer lassen.", false]]
  }
];

let activePhase = localStorage.getItem("first100-active-phase") || "start";
let activeMissionId = localStorage.getItem("first100-active-mission") || missions[0].id;
let missionAnswers = JSON.parse(localStorage.getItem("first100-mission-answers") || "{}");
let completedMissions = JSON.parse(localStorage.getItem("first100-completed") || "[]");

const phaseFilter = document.querySelector(".phase-filter");
const missionList = document.querySelector(".mission-list");
const workspace = document.querySelector(".mission-workspace");

function saveState() {
  localStorage.setItem("first100-active-phase", activePhase);
  localStorage.setItem("first100-active-mission", activeMissionId);
  localStorage.setItem("first100-mission-answers", JSON.stringify(missionAnswers));
  localStorage.setItem("first100-completed", JSON.stringify(completedMissions));
}

function updateProgress() {
  document.querySelector("#completed-count").textContent = completedMissions.length;
  document.querySelector("#progress-fill").style.width = `${(completedMissions.length / missions.length) * 100}%`;
}

function renderPhases() {
  phaseFilter.innerHTML = phases.map((phase) => {
    const phaseMissions = missions.filter((mission) => mission.phase === phase.id);
    const done = phaseMissions.filter((mission) => completedMissions.includes(mission.id)).length;
    return `<button type="button" role="tab" aria-selected="${phase.id === activePhase}" data-phase-id="${phase.id}"><span>${phase.label}</span><strong>${phase.name}</strong><small>${done}/${phaseMissions.length}</small></button>`;
  }).join("");
}

function renderMissionList() {
  const phase = phases.find((item) => item.id === activePhase);
  const items = missions.filter((mission) => mission.phase === activePhase);
  missionList.innerHTML = `<div class="mission-list-head"><span>${phase.label}</span><h3>${phase.name}</h3></div>` + items.map((mission) => `
    <button type="button" class="mission-link ${mission.id === activeMissionId ? "active" : ""}" data-mission-id="${mission.id}"><span class="mission-status" aria-hidden="true">${completedMissions.includes(mission.id) ? "✓" : mission.number}</span><span><strong>${mission.title}</strong><small>${mission.duration}</small></span></button>`).join("");
}

function escapeHtml(value) {
  return value.replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char]));
}

function renderWorkspace() {
  const mission = missions.find((item) => item.id === activeMissionId) || missions[0];
  const phase = phases.find((item) => item.id === mission.phase);
  const answers = missionAnswers[mission.id] || [];
  const isComplete = completedMissions.includes(mission.id);
  workspace.innerHTML = `
    <header class="mission-head"><div class="mission-position"><span>Mission ${mission.number} von 15</span><span>${phase.label}</span><span>${mission.duration}</span></div><h2>${mission.title}</h2><p>${mission.intro}</p></header>
    <section class="mission-steps" aria-labelledby="steps-title"><h3 id="steps-title">So gehst du vor</h3><ol>${mission.steps.map((step) => `<li>${step}</li>`).join("")}</ol></section>
    <form class="mission-form" data-mission-form="${mission.id}">
      <div class="form-intro"><h3>Trag hier deine Ergebnisse ein</h3><p>Die Einträge werden automatisch in diesem Browser gespeichert.</p></div>
      ${mission.prompts.map((prompt, index) => `<label class="mission-field"><span>${prompt[0]}${prompt[2] === false ? " <small>optional</small>" : ""}</span><textarea rows="4" data-answer-index="${index}" ${prompt[2] === false ? "" : "required"} placeholder="${prompt[1]}">${escapeHtml(answers[index] || "")}</textarea></label>`).join("")}
      <p class="mission-form-status" role="status"></p>
      <div class="mission-actions"><button class="save-mission" type="button">Zwischenspeichern</button><button class="complete-mission ${isComplete ? "is-complete" : ""}" type="submit">${isComplete ? "Erledigt ✓" : "Speichern und abschließen"}</button></div>
    </form>
    <nav class="mission-next" aria-label="Zwischen Missionen wechseln">${mission.number !== "01" ? '<button type="button" data-direction="prev">← Vorherige Mission</button>' : '<span></span>'}${mission.number !== "15" ? '<button type="button" data-direction="next">Nächste Mission →</button>' : '<span></span>'}</nav>`;
}

function renderAll() { renderPhases(); renderMissionList(); renderWorkspace(); updateProgress(); }

function collectAnswers() {
  const mission = missions.find((item) => item.id === activeMissionId);
  const values = [...workspace.querySelectorAll("[data-answer-index]")].map((field) => field.value.trim());
  missionAnswers[mission.id] = values;
  saveState();
  return values;
}

document.querySelector(".journey-app").addEventListener("click", (event) => {
  const phaseButton = event.target.closest("[data-phase-id]");
  if (phaseButton) {
    collectAnswers();
    activePhase = phaseButton.dataset.phaseId;
    activeMissionId = missions.find((mission) => mission.phase === activePhase).id;
    saveState(); renderAll(); return;
  }
  const missionButton = event.target.closest("[data-mission-id]");
  if (missionButton) {
    collectAnswers(); activeMissionId = missionButton.dataset.missionId; saveState(); renderAll();
    document.querySelector("#mission-workspace").scrollIntoView({ behavior: "smooth", block: "start" }); return;
  }
  if (event.target.closest(".save-mission")) {
    collectAnswers(); workspace.querySelector(".mission-form-status").textContent = "Gespeichert."; return;
  }
  const directionButton = event.target.closest("[data-direction]");
  if (directionButton) {
    collectAnswers();
    const currentIndex = missions.findIndex((mission) => mission.id === activeMissionId);
    const nextMission = missions[currentIndex + (directionButton.dataset.direction === "next" ? 1 : -1)];
    activeMissionId = nextMission.id; activePhase = nextMission.phase; saveState(); renderAll();
    document.querySelector("#mission-workspace").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

document.querySelector(".journey-app").addEventListener("input", (event) => {
  if (!event.target.matches("[data-answer-index]")) return;
  window.clearTimeout(window.answerSaveTimer);
  window.answerSaveTimer = window.setTimeout(() => { collectAnswers(); workspace.querySelector(".mission-form-status").textContent = "Automatisch gespeichert."; }, 500);
});

document.querySelector(".journey-app").addEventListener("submit", (event) => {
  if (!event.target.matches("[data-mission-form]")) return;
  event.preventDefault();
  const emptyField = [...event.target.querySelectorAll("textarea[required]")].find((field) => !field.value.trim());
  if (emptyField) {
    event.target.querySelector(".mission-form-status").textContent = "Bitte füll zuerst alle Pflichtfelder aus. Optional markierte Felder kannst du leer lassen.";
    emptyField.focus(); return;
  }
  collectAnswers();
  if (!completedMissions.includes(activeMissionId)) completedMissions.push(activeMissionId);
  saveState(); renderAll();
});

renderAll();

const dialog = document.querySelector("#time-dialog");
document.querySelector("[data-open-dialog]").addEventListener("click", () => dialog.showModal());
document.querySelectorAll("[data-close-dialog], .dialog-close").forEach((button) => button.addEventListener("click", () => dialog.close()));
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });

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
  space.classList.toggle("open", open); space.setAttribute("aria-hidden", String(!open)); spaceTrigger.setAttribute("aria-expanded", String(open)); spaceBackdrop.hidden = !open; document.body.style.overflow = open ? "hidden" : "";
  if (open) spaceClose.focus(); else spaceTrigger.focus();
}
spaceTrigger.addEventListener("click", () => setSpace(true));
spaceClose.addEventListener("click", () => setSpace(false));
spaceBackdrop.addEventListener("click", () => setSpace(false));
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && space.classList.contains("open")) setSpace(false); });

const journalForm = document.querySelector("#journal-form");
const journalEntry = document.querySelector("#journal-entry");
const journalTag = document.querySelector("#journal-tag");
const journalList = document.querySelector(".journal-list");
let notes = JSON.parse(localStorage.getItem("first100-journal") || "[]");
function renderNotes() {
  if (!notes.length) { journalList.innerHTML = '<p class="journal-empty">Noch keine Notizen.</p>'; return; }
  journalList.innerHTML = notes.map((note) => `<article class="journal-note"><p class="note-meta">${note.tag} · ${note.date}</p><p>${escapeHtml(note.text)}</p><button type="button" data-delete-note="${note.id}" aria-label="Notiz löschen">×</button></article>`).join("");
}
journalForm.addEventListener("submit", (event) => {
  event.preventDefault(); const text = journalEntry.value.trim(); if (!text) return journalEntry.focus();
  notes.unshift({ id: Date.now(), text, tag: journalTag.value, date: new Intl.DateTimeFormat("de-AT", { day: "2-digit", month: "short" }).format(new Date()) });
  localStorage.setItem("first100-journal", JSON.stringify(notes)); journalEntry.value = ""; renderNotes();
});
journalList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-note]"); if (!button) return;
  notes = notes.filter((note) => note.id !== Number(button.dataset.deleteNote)); localStorage.setItem("first100-journal", JSON.stringify(notes)); renderNotes();
});
renderNotes();
