# First 100 Days

Ein interaktiver SALONFORMAT-Prototyp für eine rollenbasierte Onboarding Experience im Customer Success.

Die Experience enthält außerdem „Mein Notizbuch“: ein privates, ausschließlich lokal gespeichertes Begleitbuch für Fragen, Beobachtungen, Aha-Momente und lose Gedanken.

Der Prototyp enthält 15 vollständig ausformulierte Missionen. Jede Mission hat konkrete Arbeitsschritte, eigene Eingabefelder, automatische lokale Speicherung und einen Abschlussstatus. Ein klarer Startscreen erklärt vorab das fiktive Unternehmen DemoCo, die Rolle und die Bedienung.

Die Oberfläche ist auf Deutsch, Französisch und Englisch verfügbar. Eine fokussierte Navigation trennt Start, Journey, Personen und Notizen. Der Browser-Zurück-Button funktioniert wie erwartet; Gespräche mit Buddy, Lead und Fachpersonen können direkt geplant und als Kalenderdatei gespeichert werden.

## Idee

Die Journey begleitet neue Mitarbeitende 100 Tage lang, beschäftigt sie aber nicht 100 Tage lang mit Training. Sie verbindet kurze Lernimpulse mit echter Arbeit:

- Tag 1–10: ca. 2–3 Stunden pro Woche
- Tag 11–30: ca. 2 Stunden pro Woche
- Tag 31–60: ca. 1 Stunde pro Woche
- Tag 61–90: ca. 45 Minuten pro Woche
- Tag 91–100: ein reflektierender Abschluss

## Lokal ansehen

```bash
python3 -m http.server 4173
```

Anschließend `http://localhost:4173` öffnen.

## Typografie

- Della Respira
- Josefin Sans

## Bildwelt

Die Projektillustrationen wurden mit OpenAI ImageGen erzeugt und für diese Experience kuratiert. Die finalen Prompts sind im Projekt unter `assets/PROMPTS.md` dokumentiert.
