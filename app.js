const phases = [
  ["start", "Tag 1–10", "Orientieren"],
  ["patterns", "Tag 11–30", "Zusammenhänge verstehen"],
  ["practice", "Tag 31–60", "Selbst ausprobieren"],
  ["own", "Tag 61–90", "Verantwortung übernehmen"],
  ["share", "Tag 91–100", "Wissen weitergeben"]
].map(([id, label, name]) => ({ id, label, name }));

const m = (id, phase, number, title, duration, intro, steps, prompts) => ({ id, phase, number, title, duration, intro, steps, prompts });
const missions = [
  m("customer-view", "start", "01", "Teste das Produkt wie ein neuer Kunde", "40 Minuten", "Richte ohne interne Anleitung einen Test-Account ein. Achte darauf, was verständlich ist und wo du hängen bleibst.", ["Starte mit der öffentlichen Anleitung.", "Notiere einen guten und einen schwierigen Moment.", "Formuliere eine Frage an einen Kunden."], [["Was war sofort verständlich?", "Der erste Schritt war klar, weil …"], ["Wo bist du hängen geblieben?", "Beschreibe die konkrete Stelle."], ["Was würdest du einen Kunden fragen?", "Was hätten Sie an dieser Stelle erwartet?"]]),
  m("three-views", "start", "02", "Hol dir drei Perspektiven", "3 × 20 Minuten", "Sprich mit je einer Person aus Sales, Support und Produkt. Stell allen dieselben zwei Fragen: Was brauchen Kunden am Anfang? Wo entstehen oft Missverständnisse?", ["Plane drei kurze Gespräche.", "Stell jeweils dieselben Fragen.", "Vergleiche die Antworten."], [["Was sagt Sales?", "Die wichtigsten Aussagen."], ["Was sagt Support?", "Die wichtigsten Aussagen."], ["Was sagt Produkt?", "Die wichtigsten Aussagen."], ["Was ist dir beim Vergleich aufgefallen?", "Gemeinsamkeiten und Unterschiede."]]),
  m("unwritten-rule", "start", "03", "Finde eine ungeschriebene Regel", "20 Minuten", "Beobachte eine konkrete Arbeitssituation und halte fest, was in keinem Handbuch steht.", ["Wähle ein Meeting oder eine Übergabe.", "Beobachte, wie Entscheidungen getroffen werden.", "Prüfe deine Vermutung mit deinem Buddy."], [["Welche Situation hast du beobachtet?", "Meeting, Übergabe oder eine andere Situation."], ["Welche Regel vermutest du?", "Entscheidungen werden zum Beispiel erst danach abgestimmt."], ["Was möchtest du nachfragen?", "Eine sachliche Frage an deinen Buddy."]]),
  m("listen-call", "patterns", "04", "Beobachte ein Kundengespräch", "60 Minuten", "Hör bei einem Kundengespräch zu. Achte auf Ziele, Unsicherheiten und nächste Schritte.", ["Lies vorab die wichtigsten Kundendaten.", "Mach im Gespräch kurze Notizen.", "Vergleiche sie danach mit der Gesprächsleitung."], [["Was wollte der Kunde erreichen?", "Das wichtigste Ziel in einem Satz."], ["Wo war Unsicherheit zu hören?", "Eine konkrete Aussage oder Situation."], ["Was wurde vereinbart?", "Aufgabe, Person und Termin."]]),
  m("case-rebuild", "patterns", "05", "Rekonstruiere einen schwierigen Fall", "45 Minuten", "Nimm einen abgeschlossenen Fall und arbeite rückwärts: Was ist passiert und wann hätte man reagieren können?", ["Wähle einen anonymisierten Fall.", "Ordne die Ereignisse zeitlich.", "Markiere den frühesten sinnvollen Eingriff."], [["Was ist passiert?", "Kurzer Ablauf."], ["Welches Signal war früh erkennbar?", "Nutzung, Kommunikation oder ein anderer Hinweis."], ["Was hätte man tun können?", "Eine konkrete Maßnahme."]]),
  m("risk-signal", "patterns", "06", "Bewerte ein Risikosignal", "30 Minuten", "Ein Kunde nutzt das Produkt kaum, sagt aber, alles sei in Ordnung. Entscheide, was du als Nächstes prüfst.", ["Sammle die verfügbaren Fakten.", "Trenne Fakten von Vermutungen.", "Lege den nächsten Schritt fest."], [["Welche Fakten kennst du?", "Nur belegte Informationen."], ["Was vermutest du?", "Mögliche Erklärung."], ["Was tust du als Nächstes?", "Handlung und beteiligte Personen."]]),
  m("first-part", "practice", "07", "Übernimm einen Teil des Gesprächs", "45 Minuten Vorbereitung", "Bereite einen klar abgegrenzten Teil eines echten Kundengesprächs vor und führe ihn selbst durch.", ["Stimme deinen Teil ab.", "Bereite Ziel und zwei Fragen vor.", "Hol dir direkt danach Feedback."], [["Welchen Teil übernimmst du?", "Einstieg, Rückblick oder nächste Schritte."], ["Was ist dein Ziel?", "Was soll danach klar sein?"], ["Welche zwei Fragen stellst du?", "Schreib beide Fragen aus."]]),
  m("use-feedback", "practice", "08", "Setze Feedback direkt um", "20 Minuten", "Wähle einen Feedbackpunkt aus deinem letzten Gespräch und plane, wie du ihn beim nächsten Mal umsetzt.", ["Schreib das Feedback genau auf.", "Übersetze es in sichtbares Verhalten.", "Leg eine passende Situation fest."], [["Welches Feedback hast du bekommen?", "Möglichst nah am Wortlaut."], ["Was machst du anders?", "Ein konkretes Verhalten."], ["Wann probierst du es aus?", "Gespräch oder Termin."]]),
  m("success-plan", "practice", "09", "Erstelle deinen ersten Success Plan", "60 Minuten", "Erstelle mit deinem Lead einen einfachen Plan für einen bestehenden Kunden.", ["Klär das Geschäftsziel.", "Definiere ein Erfolgssignal.", "Vereinbare den nächsten Schritt."], [["Welches Ziel hat der Kunde?", "In der Sprache des Kunden."], ["Woran erkennt ihr Erfolg?", "Ein sichtbares oder messbares Signal."], ["Was ist der nächste Schritt?", "Aufgabe, Person und Termin."]]),
  m("small-portfolio", "own", "10", "Übernimm erste Kunden selbst", "laufende Arbeit", "Übernimm ein kleines Portfolio. Dokumentiere nur, was du für die nächste gute Entscheidung brauchst.", ["Klär mit deinem Lead den Umfang.", "Prüfe Ziele, Status und offene Punkte.", "Plane die nächste Kontaktaufnahme."], [["Welche Kunden übernimmst du?", "Namen oder interne Kürzel."], ["Wo besteht Handlungsbedarf?", "Pro Kunde ein Satz."], ["Was klärst du mit deinem Lead?", "Offene Entscheidung oder Unsicherheit."]]),
  m("recovery-plan", "own", "11", "Entwirf einen Recovery Plan", "45 Minuten", "Wähle einen gefährdeten Kunden und plane den nächsten realistischen Schritt.", ["Fass die Risikosignale zusammen.", "Prüfe, wer beteiligt sein muss.", "Schlag eine überprüfbare Maßnahme vor."], [["Warum ist der Kunde gefährdet?", "Beobachtete Signale."], ["Wer sollte beteiligt sein?", "Auf beiden Seiten."], ["Was schlägst du vor?", "Maßnahme, Ziel und Prüfzeitpunkt."]]),
  m("tradeoff", "own", "12", "Begründe eine schwierige Entscheidung", "30 Minuten", "Bearbeite einen Fall, in dem Kundenwunsch, Aufwand und verantwortungsvoller Einsatz nicht zusammenpassen.", ["Benenne die Interessen.", "Prüfe mögliche Folgen.", "Entscheide und begründe."], [["Welche Interessen stehen gegenüber?", "Kunde, Nutzer:innen, Unternehmen."], ["Welche Folgen sind möglich?", "Kurz- und langfristig."], ["Wie entscheidest du?", "Entscheidung und Begründung."]]),
  m("success-story", "share", "13", "Dokumentiere einen Kundenerfolg", "40 Minuten", "Beschreibe knapp, was sich für den Kunden verbessert hat und welchen Beitrag du geleistet hast.", ["Beschreibe die Ausgangslage.", "Zeig die wichtigste Veränderung.", "Halte fest, was du wieder so machen würdest."], [["Wie war die Ausgangslage?", "Problem oder Ziel."], ["Was hat sich verändert?", "Konkreter Nutzen."], ["Was hast du gelernt?", "Ein Punkt für das nächste Mal."]]),
  m("explain", "share", "14", "Erklär es einer neuen Person", "30 Minuten", "Erklär einer neueren Person einen Bereich, den du inzwischen gut kennst.", ["Wähle ein überschaubares Thema.", "Erklär es ohne interne Abkürzungen.", "Frag nach, was unklar ist."], [["Welches Thema erklärst du?", "Ein klarer Bereich."], ["Was war schwer verständlich?", "Rückfrage oder Unsicherheit."], ["Was würdest du ändern?", "Eine konkrete Verbesserung."]]),
  m("fresh-eyes", "share", "15", "Zieh Bilanz nach 100 Tagen", "45 Minuten", "Schau auf deine ersten 100 Tage zurück. Du entscheidest, was privat bleibt und was du teilen möchtest.", ["Sieh deine Einträge durch.", "Wähle einen Punkt zum Beibehalten und Verbessern.", "Entscheide, was du teilen möchtest."], [["Was hat den Einstieg erleichtert?", "Was sollte so bleiben?"], ["Was war unnötig schwer?", "Prozess, Information oder Situation."], ["Was sollte sich ändern?", "Ein realistischer Vorschlag."], ["Was möchtest du teilen?", "Dieses Feld kann leer bleiben.", false]])
];

const people = [
  { id: "mara", initials: "MH", name: "Mara Hoffmann", role: "Buddy · Customer Success", text: "Arbeitsalltag, informelle Fragen und erste Orientierung", topics: ["Kennenlernen", "Ungeschriebene Regeln", "Fragen zum Arbeitsalltag"] },
  { id: "noah", initials: "NB", name: "Noah Berger", role: "Team Lead · Customer Success", text: "Prioritäten, Erwartungen, Feedback und Kundenübernahme", topics: ["Erwartungen an die Rolle", "Feedbackgespräch", "Kundenportfolio übernehmen"] },
  { id: "lara", initials: "LK", name: "Lara König", role: "Sales", text: "Kundenziele, Versprechen im Verkaufsprozess und Übergaben", topics: ["Sales-Perspektive", "Kundenübergabe", "Typische Erwartungen"] },
  { id: "david", initials: "DS", name: "David Stein", role: "Support", text: "Häufige Probleme, Frustmomente und gute Eskalationen", topics: ["Support-Perspektive", "Häufige Probleme", "Eskalationswege"] },
  { id: "sofia", initials: "SR", name: "Sofia Rossi", role: "Produkt", text: "Produktentscheidungen, Nutzungsmuster und Roadmap", topics: ["Produkt-Perspektive", "Nutzungsverhalten", "Produktfragen"] }
];

const missionPeople = {
  "three-views": ["lara", "david", "sofia"],
  "unwritten-rule": ["mara"],
  "listen-call": ["noah"],
  "first-part": ["noah"],
  "use-feedback": ["noah"],
  "success-plan": ["noah"],
  "small-portfolio": ["noah"],
  "recovery-plan": ["noah"],
  "explain": ["mara"]
};

const germanMissions = JSON.parse(JSON.stringify(missions));
const germanPeople = JSON.parse(JSON.stringify(people));
let language = localStorage.getItem("first100-language") || "de";
const copy = () => window.FIRST100_LOCALES[language];
function durationLabel(value) {
  if (language === "de") return value;
  const en = { "40 Minuten":"40 minutes", "3 × 20 Minuten":"3 × 20 minutes", "20 Minuten":"20 minutes", "60 Minuten":"60 minutes", "45 Minuten":"45 minutes", "30 Minuten":"30 minutes", "45 Minuten Vorbereitung":"45 minutes preparation", "laufende Arbeit":"ongoing work" };
  const fr = { "40 Minuten":"40 minutes", "3 × 20 Minuten":"3 × 20 minutes", "20 Minuten":"20 minutes", "60 Minuten":"60 minutes", "45 Minuten":"45 minutes", "30 Minuten":"30 minutes", "45 Minuten Vorbereitung":"45 minutes de préparation", "laufende Arbeit":"travail en cours" };
  return (language === "en" ? en : fr)[value] || value;
}

function applyLanguage(nextLanguage, rerender = true) {
  language = nextLanguage;
  localStorage.setItem("first100-language", language);
  document.documentElement.lang = language;
  phases.forEach((phase, index) => { phase.label = copy().phases[index][0]; phase.name = copy().phases[index][1]; });
  missions.forEach((mission, index) => {
    Object.assign(mission, germanMissions[index]);
    const localized = window.FIRST100_MISSIONS[language]?.[mission.id];
    if (localized) [mission.title, mission.intro, mission.steps, mission.prompts] = localized;
  });
  people.forEach((person, index) => Object.assign(person, germanPeople[index]));
  if (language === "en") {
    const values = [["Buddy · Customer Success","Everyday work, informal questions and initial orientation",["Introduction","Unwritten rules","Everyday questions"]],["Team Lead · Customer Success","Priorities, expectations, feedback and client ownership",["Role expectations","Feedback","Taking on clients"]],["Sales","Client goals, sales promises and handovers",["Sales perspective","Client handover","Common expectations"]],["Support","Common issues, points of frustration and escalation",["Support perspective","Common issues","Escalation paths"]],["Product","Product decisions, usage patterns and roadmap",["Product perspective","Usage patterns","Product questions"]]];
    people.forEach((person, i) => [person.role, person.text, person.topics] = values[i]);
  }
  if (language === "fr") {
    const values = [["Buddy · Customer Success","Quotidien, questions informelles et première orientation",["Faire connaissance","Règles implicites","Questions du quotidien"]],["Responsable · Customer Success","Priorités, attentes, retours et reprise des clients",["Attentes liées au poste","Retour d’expérience","Reprise des clients"]],["Sales","Objectifs clients, promesses commerciales et passations",["Point de vue Sales","Passation client","Attentes fréquentes"]],["Support","Problèmes fréquents, irritants et escalades",["Point de vue Support","Problèmes fréquents","Processus d’escalade"]],["Produit","Décisions produit, usages et feuille de route",["Point de vue Produit","Usages","Questions produit"]]];
    people.forEach((person, i) => [person.role, person.text, person.topics] = values[i]);
  }
  const navButtons = $$(".app-nav button"); copy().nav.forEach((label, index) => navButtons[index].textContent = label);
  $$(".app-nav a, .app-footer a[href*='#projects']").forEach((link) => link.textContent = copy().all);
  $$("[data-lang]").forEach((button) => button.classList.toggle("active", button.dataset.lang === language));
  const d = copy().dashboard;
  $(".dashboard-copy .context-label").textContent = d.context; $("#dashboard-title").textContent = d.title; $(".dashboard-copy > p:not(.context-label)").textContent = d.intro;
  const facts = $$(".dashboard-facts > div"); facts[0].children[0].textContent = d.goal; facts[0].children[1].textContent = d.goalText; facts[1].children[0].textContent = d.program; facts[1].children[1].textContent = d.programText;
  $(".next-mission-panel > p").textContent = d.next; $(".progress-panel .panel-head h2").textContent = d.progress; $(".progress-panel .panel-head button").textContent = d.allMissions; $(".meetings-panel .panel-head h2").textContent = d.meetings; $(".meetings-panel .panel-head button").textContent = d.plan; $(".how-panel h2").textContent = d.how; $$(".how-panel li").forEach((item, index) => item.textContent = d.steps[index]); $(".how-panel > p").textContent = d.local;
  $("#view-journey .view-head > div > p").textContent = copy().journey.meta; $("#journey-title").textContent = copy().journey.title; $("#view-journey .view-head > p").textContent = copy().journey.intro; $("#view-mission .back-link").textContent = copy().journey.back;
  $("#view-people .view-head > div > p").textContent = copy().people.meta; $("#people-title").textContent = copy().people.title; $("#view-people .view-head > p").textContent = copy().people.intro;
  $("#view-notes .view-head > div > p").textContent = copy().notes.meta; $("#notes-title").textContent = copy().notes.title; $("#view-notes .view-head > p").textContent = copy().notes.intro; $(".notes-form label").textContent = copy().notes.label; $("#journal-entry").placeholder = copy().notes.placeholder; $(".notes-form button").textContent = copy().notes.save;
  const noteOptions = language === "fr" ? ["Observation","Question","Déclic","Pour plus tard"] : language === "en" ? ["Observation","Question","Aha moment","For later"] : ["Beobachtung","Frage","Aha-Moment","Für später"];
  $$("#journal-tag option").forEach((option, index) => option.textContent = noteOptions[index]);
  const scheduleText = language === "fr" ? ["PRÉPARER UN ÉVÉNEMENT","Rendez-vous avec","Quel est le sujet ?","Date","Heure","Durée","Note","Enregistrer le brouillon","BROUILLON ENREGISTRÉ","Le brouillon apparaît dans votre accueil.","Téléchargez l’événement pour l’ajouter à votre calendrier. Aucune invitation n’est envoyée automatiquement.","Télécharger l’événement","Terminé"] : language === "en" ? ["PREPARE A CALENDAR EVENT","Meeting with","What is it about?","Date","Time","Duration","Note","Save draft","DRAFT SAVED","The draft now appears on your home screen.","Download the event to add it to your calendar. No invitation is sent automatically.","Download calendar event","Done"] : ["KALENDERENTWURF ERSTELLEN","Termin mit","Worum geht es?","Datum","Uhrzeit","Dauer","Notiz","Entwurf speichern","ENTWURF GESPEICHERT","Der Entwurf steht in deinem Dashboard.","Lade den Eintrag herunter, um ihn deinem Kalender hinzuzufügen. Es wird nicht automatisch eine Einladung verschickt.","Kalendereintrag herunterladen","Fertig"];
  $("#schedule-dialog .context-label").textContent = scheduleText[0]; $("#schedule-dialog label").childNodes[0].nodeValue = scheduleText[2]; const scheduleLabels = $$("#schedule-form label"); scheduleLabels[1].childNodes[0].nodeValue = scheduleText[3]; scheduleLabels[2].childNodes[0].nodeValue = scheduleText[4]; scheduleLabels[3].childNodes[0].nodeValue = scheduleText[5]; scheduleLabels[4].childNodes[0].nodeValue = scheduleText[6]; $("#schedule-form .primary-action").textContent = scheduleText[7]; $("#scheduled-dialog .context-label").textContent = scheduleText[8]; $("#scheduled-dialog h2").textContent = scheduleText[9]; $("#scheduled-dialog > p:not(.context-label)").textContent = scheduleText[10]; $("#download-ics").textContent = scheduleText[11]; $("#scheduled-dialog [data-close-confirmation]").textContent = scheduleText[12];
  $("#schedule-note").closest("label").querySelector("small").textContent = copy().mission.optional;
  $$("#schedule-duration option").forEach((option) => option.textContent = `${option.value} ${language === "de" ? "Minuten" : "minutes"}`);
  const a11y = copy().a11y; $(".skip-link").textContent = a11y.skip; $(".app-brand").setAttribute("aria-label", a11y.home); $(".app-nav").setAttribute("aria-label", a11y.nav); $(".language-switch").setAttribute("aria-label", a11y.language); $(".header-progress").setAttribute("aria-label", a11y.progress); $("#view-mission").setAttribute("aria-label", a11y.mission); $("#journey-phase-tabs").setAttribute("aria-label", a11y.phases); $("#journal-tag").setAttribute("aria-label", a11y.noteCategory); $$(".dialog-close").forEach((button) => button.setAttribute("aria-label", a11y.close)); $("#schedule-note").placeholder = language === "fr" ? "Que souhaitez-vous aborder ?" : language === "en" ? "What would you like to discuss?" : "Was möchtest du besprechen?";
  $("#reset-demo").textContent = copy().demo.reset;
  $(".app-footer span:last-child").textContent = language === "fr" ? "Toutes les données restent locales" : language === "en" ? "All data stays local" : "Alle Daten bleiben lokal";
  if (rerender && typeof activeView !== "undefined") route(activeView, { push: false });
}

let activeView = "dashboard";
let activePhase = localStorage.getItem("first100-active-phase") || "start";
let activeMissionId = localStorage.getItem("first100-active-mission") || missions[0].id;
let answers = JSON.parse(localStorage.getItem("first100-mission-answers") || "{}");
let completed = JSON.parse(localStorage.getItem("first100-completed") || "[]");
let meetings = JSON.parse(localStorage.getItem("first100-meetings") || "[]");
let notes = JSON.parse(localStorage.getItem("first100-journal") || "[]");
let latestMeetingId = null;
let deletedNote = null;
let undoTimer = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const escapeHtml = (value = "") => value.replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char]));
const save = () => {
  localStorage.setItem("first100-active-phase", activePhase);
  localStorage.setItem("first100-active-mission", activeMissionId);
  localStorage.setItem("first100-mission-answers", JSON.stringify(answers));
  localStorage.setItem("first100-completed", JSON.stringify(completed));
  localStorage.setItem("first100-meetings", JSON.stringify(meetings));
  localStorage.setItem("first100-journal", JSON.stringify(notes));
};

function route(view, { push = true } = {}) {
  activeView = view;
  $$(".app-view").forEach((section) => { const active = section.dataset.view === view; section.hidden = !active; section.classList.toggle("active", active); });
  $$(".app-nav [data-route]").forEach((button) => button.classList.toggle("active", button.dataset.route === view));
  if (view === "dashboard") renderDashboard();
  if (view === "journey") renderJourney();
  if (view === "mission") renderMission();
  if (view === "people") renderPeople();
  if (view === "notes") renderNotes();
  const routeState = { view, phase: activePhase, mission: activeMissionId };
  if (push) history.pushState(routeState, "", `#/${view}${view === "mission" ? `/${activeMissionId}` : ""}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateHeader() {
  $("#header-progress-text").textContent = `${completed.length}/15`;
  $("#header-progress-fill").style.width = `${completed.length / 15 * 100}%`;
}

function nextMission() { return missions.find((mission) => !completed.includes(mission.id)) || missions[14]; }

function renderDashboard() {
  const next = nextMission();
  $("#dashboard-next-mission").innerHTML = `<span>${phases.find((p) => p.id === next.phase).label} · ${durationLabel(next.duration)}</span><h2>${next.title}</h2><p>${next.intro}</p><button type="button" data-open-mission="${next.id}">${copy().dashboard.open}</button>`;
  $("#dashboard-phase-progress").innerHTML = phases.map((phase) => {
    const all = missions.filter((mission) => mission.phase === phase.id); const done = all.filter((mission) => completed.includes(mission.id)).length;
    return `<button type="button" data-open-phase="${phase.id}"><span><strong>${phase.name}</strong><small>${phase.label}</small></span><i><b style="width:${done / all.length * 100}%"></b></i><em>${done}/${all.length}</em></button>`;
  }).join("");
  const upcoming = [...meetings].sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`)).slice(0, 3);
  $("#dashboard-meetings").innerHTML = upcoming.length ? upcoming.map(meetingCard).join("") : `<div class="empty-state"><p>${copy().dashboard.noMeetings}</p><button type="button" data-route="people">${copy().dashboard.showPeople}</button></div>`;
  updateHeader();
}

function renderJourney() {
  $("#journey-phase-tabs").innerHTML = phases.map((phase) => {
    const pm = missions.filter((x) => x.phase === phase.id); const done = pm.filter((x) => completed.includes(x.id)).length;
    return `<button type="button" role="tab" aria-selected="${phase.id === activePhase}" data-open-phase="${phase.id}"><span>${phase.label}</span><strong>${phase.name}</strong><small>${done}/${pm.length}</small></button>`;
  }).join("");
  const phase = phases.find((x) => x.id === activePhase);
  $("#journey-phase-head").innerHTML = `<p>${phase.label}</p><h2>${phase.name}</h2>`;
  $("#journey-mission-list").innerHTML = missions.filter((x) => x.phase === activePhase).map((mission) => `<button type="button" data-open-mission="${mission.id}" class="${completed.includes(mission.id) ? "done" : ""}"><span>${completed.includes(mission.id) ? "✓" : mission.number}</span><div><h3>${mission.title}</h3><p>${mission.intro}</p><small>${durationLabel(mission.duration)}</small></div><b>${copy().journey.open}</b></button>`).join("");
  updateHeader();
}

function renderMission() {
  const mission = missions.find((x) => x.id === activeMissionId); const phase = phases.find((x) => x.id === mission.phase); const saved = answers[mission.id] || [];
  const mc = copy().mission; const isDone = completed.includes(mission.id); const collaborators = (missionPeople[mission.id] || []).map((id) => people.find((person) => person.id === id)); const missionIndex = missions.findIndex((item) => item.id === mission.id); const isLast = missionIndex === missions.length - 1;
  const support = collaborators.length ? `<section class="mission-support"><h2>${mc.support}</h2><div>${collaborators.map((person) => `<article><span class="person-avatar">${person.initials}</span><p><strong>${person.name}</strong><small>${person.role}</small></p><button type="button" data-schedule-person="${person.id}">${mc.scheduleWith}</button></article>`).join("")}</div></section>` : "";
  const completion = isDone ? `<section class="mission-complete" tabindex="-1"><p>${mc.done}</p><h2>${isLast ? mc.finalTitle : mc.completeTitle}</h2><p>${isLast ? mc.finalText : mc.completeText}</p><button type="button" class="primary-action" ${isLast ? 'data-route="journey"' : `data-next-mission="${missions[missionIndex + 1].id}"`}>${isLast ? mc.overview : mc.next} →</button></section>` : "";
  $("#focused-mission").innerHTML = `<header><div><span>${mc.number} ${mission.number} ${mc.of}</span><span>${phase.label}</span><span>${durationLabel(mission.duration)}</span></div><h1>${mission.title}</h1><p>${mission.intro}</p></header><section class="focused-steps"><h2>${mc.steps}</h2><ol>${mission.steps.map((step) => `<li>${step}</li>`).join("")}</ol></section>${support}<form id="mission-form"><div class="mission-form-title"><h2>${mc.results}</h2><p>${mc.savedLocal}</p></div>${mission.prompts.map((prompt, index) => `<label><span>${prompt[0]}${prompt[2] === false ? ` <small>${mc.optional}</small>` : ""}</span><textarea rows="4" data-answer="${index}" ${prompt[2] === false ? "" : "required"} placeholder="${prompt[1]}">${escapeHtml(saved[index] || "")}</textarea></label>`).join("")}<p class="form-status" role="status"></p><div class="form-actions"><button type="button" data-save-mission>${mc.save}</button><button type="submit" class="primary-action">${isDone ? mc.update : mc.finish}</button></div></form>${completion}`;
  updateHeader();
}

function renderPeople() {
  $("#people-directory").innerHTML = people.map((person, index) => `<article><span class="person-number">0${index + 1}</span><div class="person-avatar">${person.initials}</div><div><h2>${person.name}</h2><h3>${person.role}</h3><p>${person.text}</p></div><button type="button" data-schedule-person="${person.id}">${copy().people.schedule}</button></article>`).join("");
}

function renderNotes() {
  const list = $("#journal-list");
  const tagLabels = language === "fr" ? { Beobachtung: "Observation", Frage: "Question", Aha: "Déclic", Später: "Pour plus tard" } : language === "en" ? { Beobachtung: "Observation", Frage: "Question", Aha: "Aha moment", Später: "For later" } : { Beobachtung: "Beobachtung", Frage: "Frage", Aha: "Aha-Moment", Später: "Für später" };
  const locale = language === "fr" ? "fr-FR" : language === "en" ? "en-GB" : "de-AT";
  list.innerHTML = notes.length ? notes.map((note) => { const date = /^\d{4}-\d{2}-\d{2}/.test(note.date) ? new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short" }).format(new Date(`${note.date.slice(0, 10)}T12:00:00`)) : note.date; return `<article><p>${tagLabels[note.tag] || note.tag} · ${date}</p><h2>${escapeHtml(note.text)}</h2><button type="button" data-delete-note="${note.id}">${copy().notes.remove}</button></article>`; }).join("") : `<div class="empty-state"><p>${copy().notes.empty}</p></div>`;
}

function showUndoNote() {
  const toast = $("#undo-toast"); clearTimeout(undoTimer); toast.innerHTML = `<span>${copy().notes.deleted}</span><button type="button" data-undo-note>${copy().notes.undo}</button>`; toast.hidden = false; undoTimer = setTimeout(() => { toast.hidden = true; deletedNote = null; }, 10000);
}

function meetingCard(meeting) {
  const person = people.find((x) => x.id === meeting.personId); const locale = language === "fr" ? "fr-FR" : language === "en" ? "en-GB" : "de-AT"; const date = new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short" }).format(new Date(`${meeting.date}T12:00:00`)); const minutes = language === "de" ? "Min." : "min"; const downloadLabel = language === "fr" ? "Télécharger l’événement" : language === "en" ? "Download calendar event" : "Kalendereintrag herunterladen";
  return `<article class="meeting-card"><time>${date}<strong>${meeting.time}</strong></time><div><h3>${meeting.topic}</h3><p>${person.name} · ${meeting.duration} ${minutes}</p></div><button type="button" data-download-meeting="${meeting.id}" aria-label="${downloadLabel}">↓</button></article>`;
}

function collectMissionAnswers() {
  const fields = $$("[data-answer]", $("#focused-mission"));
  if (!fields.length) return;
  answers[activeMissionId] = fields.map((field) => field.value.trim()); save();
}

document.addEventListener("click", (event) => {
  const languageButton = event.target.closest("[data-lang]"); if (languageButton) return applyLanguage(languageButton.dataset.lang);
  const routeButton = event.target.closest("[data-route]"); if (routeButton) return route(routeButton.dataset.route);
  const phaseButton = event.target.closest("[data-open-phase]"); if (phaseButton) { activePhase = phaseButton.dataset.openPhase; save(); return route("journey"); }
  const missionButton = event.target.closest("[data-open-mission]"); if (missionButton) { activeMissionId = missionButton.dataset.openMission; activePhase = missions.find((x) => x.id === activeMissionId).phase; save(); return route("mission"); }
  const nextMissionButton = event.target.closest("[data-next-mission]"); if (nextMissionButton) { activeMissionId = nextMissionButton.dataset.nextMission; activePhase = missions.find((x) => x.id === activeMissionId).phase; save(); return route("mission"); }
  const scheduleButton = event.target.closest("[data-schedule-person]"); if (scheduleButton) return openSchedule(scheduleButton.dataset.schedulePerson);
  const downloadButton = event.target.closest("[data-download-meeting]"); if (downloadButton) return downloadMeeting(downloadButton.dataset.downloadMeeting);
  const deleteButton = event.target.closest("[data-delete-note]"); if (deleteButton) { const id = Number(deleteButton.dataset.deleteNote); const index = notes.findIndex((note) => note.id === id); if (index >= 0) { deletedNote = { note: notes[index], index }; notes.splice(index, 1); save(); renderNotes(); showUndoNote(); } return; }
  if (event.target.closest("[data-undo-note]") && deletedNote) { clearTimeout(undoTimer); notes.splice(deletedNote.index, 0, deletedNote.note); deletedNote = null; $("#undo-toast").hidden = true; save(); renderNotes(); return; }
  if (event.target.closest("#reset-demo")) { if (!window.confirm(copy().demo.confirm)) return; answers = {}; completed = []; meetings = []; notes = []; activePhase = "start"; activeMissionId = missions[0].id; ["first100-active-phase", "first100-active-mission", "first100-mission-answers", "first100-completed", "first100-meetings", "first100-journal"].forEach((key) => localStorage.removeItem(key)); route("dashboard"); return; }
  if (event.target.closest("[data-save-mission]")) { collectMissionAnswers(); $(".form-status").textContent = copy().mission.saved; }
  if (event.target.closest("[data-close-schedule]")) $("#schedule-dialog").close();
  if (event.target.closest("[data-close-confirmation]")) $("#scheduled-dialog").close();
});

document.addEventListener("input", (event) => {
  if (!event.target.matches("[data-answer]")) return;
  clearTimeout(window.saveTimer); window.saveTimer = setTimeout(() => { collectMissionAnswers(); $(".form-status").textContent = copy().mission.autosaved; }, 500);
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "mission-form") {
    event.preventDefault(); const empty = $$("textarea[required]", event.target).find((field) => !field.value.trim());
    if (empty) { $(".form-status", event.target).textContent = copy().mission.required; return empty.focus(); }
    collectMissionAnswers(); if (!completed.includes(activeMissionId)) completed.push(activeMissionId); save(); renderMission(); $(".mission-complete")?.focus();
  }
  if (event.target.id === "journal-form") {
    event.preventDefault(); const field = $("#journal-entry"); if (!field.value.trim()) return field.focus();
    notes.unshift({ id: Date.now(), text: field.value.trim(), tag: $("#journal-tag").value, date: new Date().toISOString().slice(0, 10) }); field.value = ""; save(); renderNotes();
  }
  if (event.target.id === "schedule-form") { event.preventDefault(); saveMeeting(); }
});

function openSchedule(personId) {
  const person = people.find((x) => x.id === personId); const prefix = language === "fr" ? "Rendez-vous avec" : language === "en" ? "Meeting with" : "Termin mit"; $("#schedule-person-id").value = personId; $("#schedule-person-title").textContent = `${prefix} ${person.name}`; $("#schedule-person-context").textContent = person.role;
  $("#schedule-topic").innerHTML = person.topics.map((topic) => `<option>${topic}</option>`).join("");
  const today = new Date(); const date = new Date(today); date.setDate(date.getDate() + 1); $("#schedule-date").min = today.toISOString().slice(0, 10); $("#schedule-date").value = date.toISOString().slice(0, 10); $("#schedule-time").value = "10:00"; $("#schedule-note").value = ""; $(".schedule-status").textContent = ""; $("#schedule-dialog").showModal();
}

function saveMeeting() {
  const meeting = { id: Date.now(), personId: $("#schedule-person-id").value, topic: $("#schedule-topic").value, date: $("#schedule-date").value, time: $("#schedule-time").value, duration: Number($("#schedule-duration").value), note: $("#schedule-note").value.trim() };
  if (!meeting.date || !meeting.time) { $(".schedule-status").textContent = language === "fr" ? "Choisissez une date et une heure." : language === "en" ? "Please choose a date and time." : "Bitte wähle Datum und Uhrzeit."; return; }
  meetings.push(meeting); latestMeetingId = meeting.id; save(); $("#schedule-dialog").close(); $("#scheduled-dialog").showModal(); renderDashboard();
}

function downloadMeeting(id) {
  const meeting = meetings.find((x) => x.id === Number(id)); if (!meeting) return; const person = people.find((x) => x.id === meeting.personId);
  const start = new Date(`${meeting.date}T${meeting.time}:00`); const end = new Date(start.getTime() + meeting.duration * 60000); const stamp = (date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const safeIcs = (value) => String(value).replace(/\\/g, "\\\\").replace(/\r?\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;"); const description = meeting.note || (language === "fr" ? "Onboarding First 100 Days" : language === "en" ? "First 100 Days onboarding" : "First 100 Days Onboarding");
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//SALONFORMAT//First100Days//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT", `UID:${meeting.id}@first100days.local`, `DTSTAMP:${stamp(new Date())}`, `DTSTART:${stamp(start)}`, `DTEND:${stamp(end)}`, `SUMMARY:${safeIcs(`${meeting.topic} – ${person.name}`)}`, `DESCRIPTION:${safeIcs(description)}`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const filePrefix = language === "fr" ? "rendez-vous" : language === "en" ? "meeting" : "termin"; const link = document.createElement("a"); link.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" })); link.download = `${filePrefix}-${person.id}.ics`; link.click(); URL.revokeObjectURL(link.href);
}

$("#download-ics").addEventListener("click", () => downloadMeeting(latestMeetingId));
window.addEventListener("popstate", (event) => {
  const state = event.state || routeFromHash();
  activePhase = state.phase || "start";
  activeMissionId = state.mission || missions[0].id;
  route(state.view || "dashboard", { push: false });
});
applyLanguage(language, false);
function routeFromHash() {
  const [requestedView, requestedMission] = window.location.hash.replace(/^#\/?/, "").split("/");
  const allowedViews = ["dashboard", "journey", "people", "notes", "mission"];
  const view = allowedViews.includes(requestedView) ? requestedView : "dashboard";
  const mission = missions.some((item) => item.id === requestedMission) ? requestedMission : activeMissionId;
  const phase = missions.find((item) => item.id === mission)?.phase || activePhase;
  return { view: view === "mission" && !requestedMission ? "dashboard" : view, phase, mission };
}
const initialRoute = routeFromHash(); activePhase = initialRoute.phase; activeMissionId = initialRoute.mission;
history.replaceState(initialRoute, "", `#/${initialRoute.view}${initialRoute.view === "mission" ? `/${initialRoute.mission}` : ""}`);
route(initialRoute.view, { push: false });
