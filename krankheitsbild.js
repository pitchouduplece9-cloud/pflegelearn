// krankheitsbild.js — PflegeLearn Pro
// 35 Krankheiten originaux + Schwangerschaft & Geburtshilfe complet
// Version 2.0

var KB_DATA = {

  // ════════════════════════════════════════════════
  //  INNERE MEDIZIN
  // ════════════════════════════════════════════════
  "Innere Medizin": {
    farbe: "#0ea5e9",
    krankheiten: [
      {
        name: "Herzinsuffizienz",
        definition: "Unfähigkeit des Herzens, ausreichend Blut zu pumpen. Links-, Rechts- oder Globalinsuffizienz.",
        ursachen: ["KHK / Herzinfarkt (häufigste Ursache)", "Arterielle Hypertonie", "Herzklappenfehler", "Kardiomyopathie"],
        symptome: ["Dyspnoe (Belastung → Ruhe → Orthopnoe)", "Beinödeme (Rechtsherz)", "Lungenödem (Linksherz)", "Nykturie, Gewichtszunahme", "NYHA I–IV"],
        diagnostik: ["Echokardiografie (EF < 40% = HFrEF)", "BNP / NT-proBNP erhöht", "Röntgen Thorax", "EKG"],
        therapie: ["ACE-Hemmer / ARNi", "Betablocker (Bisoprolol)", "MRA (Spironolacton)", "SGLT2-Hemmer", "Diuretika symptomatisch"],
        pflege: ["Täglich wiegen! +2 kg in 2 Tagen → sofort Arzt", "Flüssigkeitsbilanz führen", "Oberkörperhochlagerung 30–45°", "O2 bei SpO2 < 92%", "Beinödeme: Hochlagern, Kompressionsstrümpfe"],
        merke: "Tägliches Wiegen rettet Leben bei Herzinsuffizienz!"
      },
      {
        name: "Arterielle Hypertonie",
        definition: "Dauerhaft erhöhter Blutdruck ≥ 140/90 mmHg. Häufigste kardiovaskuläre Erkrankung.",
        ursachen: ["Primär (essenziell, 90%)", "Sekundär: Nierenerkrankung, Phäochromozytom, Schlafapnoe"],
        symptome: ["Meist symptomlos ('stiller Killer')", "Kopfschmerzen (okzipital)", "Schwindel, Nasenbluten", "Sehstörungen bei Krise"],
        diagnostik: ["RR-Messung (5 Min Ruhe, sitzend)", "24h-Blutdruckmessung", "Labor: Niere, Elektrolyte"],
        therapie: ["ACE-Hemmer, ARB, Kalziumantagonisten, Diuretika", "Lebensstil: Salz ↓, Sport, Gewicht ↓", "Ziel: < 130/80 mmHg"],
        pflege: ["RR korrekt messen: 5 Min Ruhe, sitzend, beide Arme", "Betablocker NIE abrupt absetzen!", "Hypertensive Krise > 180/120 + Organschaden: sofort Arzt"],
        merke: "Hypertensiver Notfall = > 180/120 + Organschaden → sofort i.v.-Therapie!"
      },
      {
        name: "Myokardinfarkt",
        definition: "Irreversibles Absterben von Herzmuskelgewebe durch Koronarverschluss.",
        ursachen: ["Plaqueruptur + Thrombose in Koronararterie", "Arteriosklerose", "Risikofaktoren: Rauchen, Diabetes, Hypertonie"],
        symptome: ["Vernichtungsschmerz retrosternal > 20 Min", "Ausstrahlung: linker Arm, Kiefer, Rücken", "Schweißausbruch, Übelkeit, Todesangst", "Atypisch bei Frauen/Diabetikern: nur Rückenschmerz, Erschöpfung"],
        diagnostik: ["EKG (ST-Hebung = STEMI)", "Troponin I/T erhöht", "Koronarangiografie"],
        therapie: ["STEMI: PCI < 90 Min! (Door-to-balloon)", "ASS + Ticagrelor", "O2 nur wenn SpO2 < 90%"],
        pflege: ["112 sofort → Bettruhe → EKG → i.v.-Zugang", "Monitoring: EKG, RR, SpO2 kontinuierlich", "Patienten beruhigen!", "Nitro NICHT bei RR syst. < 90 mmHg"],
        merke: "Zeit ist Myokard! PCI < 90 Min."
      },
      {
        name: "Diabetes mellitus Typ 2",
        definition: "Insulinresistenz + relativer Insulinmangel → chronische Hyperglykämie.",
        ursachen: ["Übergewicht, Bewegungsmangel", "Genetische Disposition", "Metabolisches Syndrom"],
        symptome: ["Oft jahrelang symptomlos!", "Müdigkeit, häufige Infekte", "Wundheilungsstörungen", "Durst, Polyurie (spät)"],
        diagnostik: ["Nüchtern-BZ ≥ 126 mg/dl (2x)", "HbA1c ≥ 6,5%"],
        therapie: ["Metformin (1. Wahl)", "SGLT2-Hemmer, GLP-1-RA", "Lebensstil: Gewicht ↓, Bewegung ↑"],
        pflege: ["BZ-Kontrolle + Dokumentation", "Fußpflege: täglich inspizieren (Neuropathie!)", "Hypoglykämie < 70 mg/dl: sofort 20g Traubenzucker", "Hyperglykämie + Acetongeruch: Arzt sofort"],
        merke: "BZ < 70 mg/dl = Hypoglykämie → 20g schnelle KH sofort!"
      },
      {
        name: "COPD",
        definition: "Chronisch obstruktive Lungenerkrankung: progrediente, irreversible Atemwegsobstruktion.",
        ursachen: ["Rauchen (80–90%!)", "Luftverschmutzung", "α1-Antitrypsinmangel"],
        symptome: ["AHA-Trias: Auswurf + Husten + Atemnot", "Belastungsdyspnoe → Ruhedyspnoe", "Fassthorax, Lippenbremse", "GOLD I–IV"],
        diagnostik: ["Spirometrie: FEV1/FVC < 70%", "BGA: CO2 ↑, O2 ↓"],
        therapie: ["Nikotinabstinenz (wichtigste Maßnahme!)", "LAMA, LABA, ICS", "O2-Langzeittherapie > 15h/Tag"],
        pflege: ["O2-Ziel 88–92%! NICHT 95% → CO2-Narkose!", "Kutschersitz + Lippenbremse anleiten", "Nach Kortison-Inhalation: Mund spülen!"],
        merke: "COPD + O2: Ziel 88–92%. Zu viel O2 = CO2-Narkose!"
      },
      {
        name: "Pneumonie",
        definition: "Entzündung des Lungenparenchyms durch Erreger (CAP, HAP, VAP).",
        ursachen: ["Streptococcus pneumoniae (häufigste)", "Aspiration bei Dysphagie!", "Immobilität, Beatmung"],
        symptome: ["Fieber, Schüttelfrost", "Produktiver Husten", "Dyspnoe, Tachypnoe", "Bei Alten: oft nur Verwirrtheit"],
        diagnostik: ["Röntgen Thorax (Infiltrat)", "CRP, PCT erhöht", "Blutkulturen VOR Antibiotika"],
        therapie: ["Antibiotika sofort", "O2 (SpO2 ≥ 92%)", "Frühmobilisation"],
        pflege: ["Oberkörper hoch 30–45°", "Atemübungen 10x/h", "Mundpflege (Aspirationsprophylaxe!)", "Frühzeitig mobilisieren"],
        merke: "Mobilisation ab Tag 1 – Bettruhe bei Pneumonie verschlechtert die Prognose!"
      },
      {
        name: "Sepsis",
        definition: "Lebensbedrohliche Organdysfunktion durch dysregulierte Immunantwort auf Infektion.",
        ursachen: ["Pneumonie, HWI, Bauchinfekt, Katheter"],
        symptome: ["qSOFA ≥ 2: AF ≥ 22 + GCS < 15 + RR ≤ 100 → Alarm!", "Fieber oder Hypothermie", "Tachykardie, marmorierte Haut", "Verwirrtheit, Oligurie"],
        diagnostik: ["Laktat > 2 = Sepsis", "Blutkulturen × 2 VOR Antibiotika!", "PCT, CRP"],
        therapie: ["Hour-1-Bundle: Laktat + Kulturen + Antibiotika + Volumen + Vasopressoren", "Antibiotika innerhalb 1 Stunde!"],
        pflege: ["SOFORT Arzt!", "Monitoring alle 15–30 Min", "Stündliche Flüssigkeitsbilanz", "Blutkulturen aseptisch abnehmen"],
        merke: "Blutkulturen VOR Antibiotika – dann sofort Antibiotika innerhalb 1h!"
      }
    ]
  },

  // ════════════════════════════════════════════════
  //  NEUROLOGIE
  // ════════════════════════════════════════════════
  "Neurologie": {
    farbe: "#7c3aed",
    krankheiten: [
      {
        name: "Schlaganfall (Apoplex)",
        definition: "Plötzlicher Ausfall von Hirnfunktionen durch Ischämie (85%) oder Blutung (15%).",
        ursachen: ["Ischämisch: Thrombose / Embolie (Vorhofflimmern!)", "Hämorrhagisch: Hirnblutung (KEINE Lyse!)", "Risikofaktoren: Hypertonie, Diabetes, VHF, Rauchen"],
        symptome: ["FAST: Face + Arm + Speech + Time = 112!", "Halbseitenlähmung", "Aphasie, Dysphagie", "Sehstörungen, Schwindel"],
        diagnostik: ["CT ohne KM sofort (Blutung ausschließen!)", "MRT, CTA", "EKG (VHF?)"],
        therapie: ["Ischämisch: Lyse < 4,5h ODER Thrombektomie < 24h", "Sekundärprophylaxe: Antikoagulation, ASS, Statine"],
        pflege: ["Dysphagie: Logopädie sofort! Schlucktest VOR erstem Essen!", "Bobath-Lagerung: betroffene Seite einbeziehen", "Frühmobilisation ab Tag 1", "Einfache kurze Sätze bei Aphasie", "Aspirationsprophylaxe: Oberkörper 30°"],
        merke: "FAST positiv = 112. Zeit ist Gehirn: 1,9 Mio Neuronen pro Minute ohne Therapie!"
      },
      {
        name: "Demenz (Alzheimer)",
        definition: "Progrediente neurodegenerative Erkrankung mit Gedächtnis-, Denk- und Persönlichkeitsveränderungen.",
        ursachen: ["Alzheimer (65%): Amyloid-Plaques, Tau-Fibrillen", "Vaskuläre Demenz (25%)", "Lewy-Body-Demenz, frontotemporale Demenz"],
        symptome: ["Kurzzeitgedächtnisverlust (zuerst!)", "Orientierungsstörung", "Persönlichkeitsveränderung", "Apraxie, Aphasie (spät)", "MMST: < 27 = Hinweis, < 10 = schwer"],
        diagnostik: ["MMST, DemTect, Uhrentest", "CT/MRT (Atrophie)", "Labor (andere Ursachen ausschließen)"],
        therapie: ["Cholinesterasehemmer (Donepezil) bei leicht–mittel", "Memantin bei schwerer Demenz", "Nicht-medikamentös: Biografie, Musik, Validation"],
        pflege: ["Ruhige einfache Sprache, kurze Sätze", "Validation nach Feil: NICHT korrigieren!", "Biografiearbeit nutzen (Lieblingsessen, Musik)", "Rituale beibehalten", "Sicherheit: Weglaufschutz, Stolperfallen"],
        merke: "Aggression bei Demenz = Schmerzausdruck oder unerfülltes Bedürfnis – immer Ursache suchen!"
      },
      {
        name: "Parkinson",
        definition: "Neurodegenerative Erkrankung durch Dopaminmangel in der Substantia nigra.",
        ursachen: ["Idiopathisch (häufigste Form)", "Genetisch (selten)", "Medikamentös (Neuroleptika)"],
        symptome: ["Tremor (Ruhetremor, 'Münzenzählen')", "Rigor (Zahnradphänomen)", "Akinese / Bradykinese", "Posturale Instabilität → Sturzgefahr!", "Kleinschrittiger Gang, Maskengesicht", "Dysphagie, Hypersalivation"],
        diagnostik: ["Klinische Diagnose", "MRT (andere Ursachen ausschließen)", "L-Dopa-Test"],
        therapie: ["L-Dopa (Goldstandard)", "Dopaminagonisten", "MAO-B-Hemmer"],
        pflege: ["Sturzprophylaxe! (Rigor + Akinese = hohes Risiko)", "Dysphagie: Kostanpassung, Logopädie", "Medikamente exakt nach Zeitplan (On-Off-Phänomen!)", "Mobilisation: Physiotherapie täglich", "Genug Zeit lassen für alle Aktivitäten"],
        merke: "Parkinson-Medikamente NIE vergessen oder verschieben – drohendes Off!"
      },
      {
        name: "Multiple Sklerose (MS)",
        definition: "Chronisch-entzündliche Autoimmunerkrankung des ZNS mit Demyelinisierung.",
        ursachen: ["Autoimmunreaktion gegen Myelinscheiden", "Genetisch + Umweltfaktoren (Vitamin D, Epstein-Barr)"],
        symptome: ["Schubweise (RRMS) oder progredient (PPMS)", "Sehstörungen (Optikusneuritis)", "Spastik, Lähmungen", "Fatigue (häufigstes Symptom!)", "Blasenstörung, Sensibilitätsstörungen", "Uhthoff-Phänomen: Wärme verschlechtert Symptome"],
        diagnostik: ["MRT (Herde)", "Liquor (oligoklonale Banden)", "Evozierte Potenziale"],
        therapie: ["Immunmodulatoren (Interferon, Glatirameracetat)", "Hochdosiert Kortison im Schub", "Symptomatisch: Spastik, Blase, Fatigue"],
        pflege: ["Fatigue-Management: Aktivitäten planen, Pausen einplanen", "Keine Hitze! (Uhthoff-Phänomen)", "Blasenmanagement (Trinkprotokoll, Katheter)", "Sturzprophylaxe bei Spastik", "Psychische Unterstützung (chronische Erkrankung)"],
        merke: "Fatigue ist das häufigste MS-Symptom – nicht als Faulheit missverstehen!"
      }
    ]
  },

  // ════════════════════════════════════════════════
  //  PSYCHIATRIE
  // ════════════════════════════════════════════════
  "Psychiatrie": {
    farbe: "#ec4899",
    krankheiten: [
      {
        name: "Depression",
        definition: "Affektive Störung mit gedrückter Stimmung, Antriebslosigkeit und Interessenverlust > 2 Wochen.",
        ursachen: ["Biologisch: Serotonin-/Noradrenalinmangel", "Psychosozial: Verluste, Stress, Trauma", "Genetische Disposition"],
        symptome: ["Gedrückte Stimmung", "Interessenverlust, Freudlosigkeit", "Antriebsminderung", "Schlafstörungen, Appetitverlust", "Konzentrationsstörungen", "Suizidgedanken! → immer direkt ansprechen!"],
        diagnostik: ["Klinisches Interview", "Geriatrische Depressionsskala (GDS)", "Ausschluss: Schilddrüse, Anämie"],
        therapie: ["Antidepressiva (SSRI, SNRI)", "Psychotherapie (KVT)", "Schlafentzugstherapie", "Lichttherapie (saisonal)"],
        pflege: ["Direktes Ansprechen von Suizidgedanken!", "Tagesstruktur anbieten", "Zu Körperpflege motivieren (nicht zwingen)", "Medikamente sammeln prüfen (Suizidgefahr)", "Nicht alleine lassen bei akuter Suizidalität"],
        merke: "Suizidalität direkt ansprechen erhöht das Risiko NICHT – es rettet Leben!"
      },
      {
        name: "Schizophrenie",
        definition: "Schwere psychische Störung mit Positiv- und Negativsymptomen, meist schubweise verlaufend.",
        ursachen: ["Dopaminhypothese", "Genetik + Umweltfaktoren (Cannabis, Stress)"],
        symptome: ["Positivsymptome: Halluzinationen (auditiv!), Wahn, Denkstörungen", "Negativsymptome: Affektverflachung, Antriebsmangel, sozialer Rückzug"],
        diagnostik: ["Klinische Diagnose (ICD-11)", "Ausschluss organischer Ursachen (CT, Labor)"],
        therapie: ["Antipsychotika (Haloperidol, Risperidon, Olanzapin)", "Psychoedukation, Psychotherapie"],
        pflege: ["Wahn NICHT bestätigen, NICHT widersprechen", "Ruhige Stimme, Deeskalation", "Medikamentencompliance sichern (> 50% brechen ab!)", "Suizidrisiko beachten", "Vertrauen aufbauen durch Konstanz"],
        merke: "Wahn nicht diskutieren – auf die Emotion eingehen, nicht auf den Inhalt!"
      },
      {
        name: "Alkoholabhängigkeit & Entzug",
        definition: "Chronische Suchterkrankung. Entzug beginnt 6–24h nach letztem Konsum – kann lebensbedrohlich sein.",
        ursachen: ["Genetische Disposition", "Psychosoziale Faktoren", "Chronischer Konsum"],
        symptome: ["Entzug: Tremor, Schwitzen, Angst, Schlafstörungen (6–24h)", "Delir tremens: Halluzinationen, Krampf, Kreislaufversagen (48–96h)!", "Wernicke-Enzephalopathie: Thiaminmangel"],
        diagnostik: ["CIWA-Ar-Score (Schweregrad)", "Labor: GGT, MCV, CDT"],
        therapie: ["Benzodiazepine als Entzugsschutz", "Thiamin (Vitamin B1!) prophylaktisch", "Clonidin, Antiepileptika"],
        pflege: ["Engmaschiges Monitoring (CIWA-Ar)", "Thiamin VOR Glukosegabe!", "Sicherheit (Krampfgefahr, Sturz)", "Ruhige Umgebung", "Empathie ohne Wertung"],
        merke: "Delir tremens = medizinischer Notfall! Thiamin immer VOR Glukose!"
      }
      ,
      {
        name: "Demenz – Pflegerischer Umgang & Kommunikation",
        definition: "Menschen mit Demenz brauchen eine angepasste, würdevolle Pflege. Der Schlüssel liegt nicht in der Korrektur, sondern im Verstehen und Begleiten.",
        ursachen: [
          "Alzheimer-Demenz (65%): schleichend, Kurzzeitgedächtnis zuerst",
          "Vaskuläre Demenz (25%): stufenweise, nach Schlaganfällen",
          "Lewy-Body- und frontotemporale Demenz: seltenere Formen",
          "Mischformen häufig"
        ],
        symptome: [
          "Frühstadium: Vergesslichkeit, Wortfindungsstörungen, Desorientiertheit in unbekannter Umgebung",
          "Mittleres Stadium: Desorientiertheit zu Zeit und Ort, Verkennung von Personen, Weglauftendenz",
          "Spätstadium: kaum Sprache, Bettlägerigkeit, Schluckstörungen, vollständige Pflegeabhängigkeit",
          "Häufige Verhaltensauffälligkeiten: Aggression, Unruhe (Sundowning), Apathie, Depressionen, Schreien"
        ],
        diagnostik: [
          "MMST (Mini-Mental-Status-Test): max. 30 Punkte – < 27 auffällig, < 10 schwere Demenz",
          "DemTect, Uhrentest",
          "MRT/CT (Atrophie, Infarkte)",
          "Labor (Schilddrüse, Vitamin B12, Folsäure ausschließen)"
        ],
        therapie: [
          "Medikamentös: Cholinesterasehemmer (Donepezil, Rivastigmin) bei leichter bis mittlerer Demenz",
          "Memantin bei schwerer Demenz",
          "Nicht-medikamentös: Validation, Biografie, Musik, Erinnerungsarbeit",
          "Kein Antipsychotikum ohne klare Indikation! (erhöhtes Schlaganfallrisiko)"
        ],
        pflege: [
          "GRUNDPRINZIPIEN:",
          "Würde wahren – immer! Nie über den Patienten hinweg sprechen",
          "Routine und Rituale beibehalten (strukturierter Tagesablauf = Sicherheit)",
          "Selbstständigkeit fördern: so viel wie möglich selbst machen lassen",
          "Biografie nutzen: Lieblingsmusik, Berufsrolle, Gewohnheiten kennen",
          "",
          "KOMMUNIKATION MIT DEMENZKRANKEN:",
          "Augenkontakt herstellen, auf Augenhöhe gehen",
          "Einfache kurze Sätze – ein Gedanke pro Satz",
          "Langsam und deutlich sprechen, genug Zeit lassen",
          "Namen statt Pronomen benutzen: 'Herr Müller' statt 'er'",
          "Nie korrigieren, nie widersprechen, nie streiten",
          "Gefühle ansprechen, nicht Fakten: 'Ich sehe, Sie sind unruhig'",
          "Nonverbale Kommunikation: Berührung, Lächeln, ruhige Körpersprache",
          "",
          "UMGANG MIT HERAUSFORDERNDEM VERHALTEN:",
          "Aggression: Ursache suchen (Schmerz? Angst? Hunger? Inkontinenz?), Pflege pausieren, ruhig zurückgehen",
          "Weglauftendenz: Beschäftigung anbieten, Türalarm, GPS-Armband, Knie-Ellenbogen-Lage NICHT fixieren!",
          "Sundowning (abendliche Unruhe): Licht anlassen, bekannte Musik, ruhige Ansprache",
          "Apathie: Aktivitäten niederschwellig anbieten (Falten, Sortieren, Fotos anschauen)",
          "",
          "SICHERHEIT:",
          "Stolperfallen entfernen, Haltegriffe, Nachtlicht",
          "Medikamente sichern",
          "Herd und gefährliche Gegenstände sichern",
          "Freiheitsentziehende Maßnahmen NUR mit Richtergenehmigung! (§ 1831 BGB)"
        ],
        merke: "Menschen mit Demenz leben in IHRER Realität – wir gehen zu ihnen, sie kommen nicht zu uns!"
      },
      {
        name: "Validation nach Naomi Feil",
        definition: "Kommunikations- und Begleitungsmethode für Menschen mit Demenz, entwickelt von Naomi Feil (USA, 1963). Grundprinzip: Die emotionale Realität des Menschen akzeptieren und wertschätzen – nicht korrigieren.",
        ursachen: [
          "Feil beobachtete: Realitätsorientierung (Korrektur) erzeugt Stress und Rückzug",
          "Menschen mit Demenz verarbeiten ungelöste Lebensthemen in ihrer inneren Welt",
          "Validation schafft Verbindung statt Konfrontation"
        ],
        symptome: [
          "Validation wird eingesetzt bei:",
          "Desorientiertheit zu Zeit, Ort, Person",
          "Repetitivem Verhalten (immer gleiche Fragen, gleiche Handlungen)",
          "Emotionalem Rückzug",
          "Agitation und Unruhe",
          "Kommunikationsschwierigkeiten"
        ],
        diagnostik: [
          "4 Stadien nach Feil:",
          "Stadium 1 – Mangelhafte Orientierung: noch orientiert, aber Gedächtnis lückenhaft, oft misstrauisch",
          "Stadium 2 – Zeitverwirrtheit: lebt in der Vergangenheit, Personen werden verwechselt",
          "Stadium 3 – Sich wiederholende Bewegungen: Sprache kaum noch vorhanden, stereotype Bewegungen",
          "Stadium 4 – Vegetieren: kaum Reaktion auf Außenwelt"
        ],
        therapie: [
          "Kein medikamentöser Ansatz – Validation ist eine Haltung und Technik",
          "Wird kombiniert mit anderen Ansätzen: Biografie, Musiktherapie, Basale Stimulation"
        ],
        pflege: [
          "GRUNDHALTUNG DER VALIDATION:",
          "Jeder Mensch ist wertvoll, unabhängig vom Grad der Demenz",
          "Hinter jedem Verhalten steckt eine Bedeutung – auch wenn sie uns nicht sofort klar ist",
          "Nicht korrigieren, nicht in die Realität zurückholen",
          "Gefühle akzeptieren und widerspiegeln",
          "Empathie statt Mitleid",
          "",
          "KONKRETE TECHNIKEN:",
          "Zentrieren: Kurze Atemübung vor dem Kontakt – eigene Ruhe finden",
          "Echtes Zuhören: Augenkontakt, offene Körpersprache, nicken",
          "Schlüsselwort wiederholen: Patient sagt 'Ich muss nach Hause!' → 'Nach Hause?' (nicht: 'Sie SIND zu Hause')",
          "Auf die bevorzugte Sinneswahrnehmung eingehen: visuell, auditiv, kinästhetisch",
          "Musik aus der Biografie: bekannte Melodien öffnen Emotionen und Kommunikation",
          "Berühren: Hand halten (wenn toleriert), sanfte Berührung am Unterarm",
          "Mehrdeutige Pronomen: 'Er hat das getan?' statt Name zu korrigieren",
          "Extremes betonen: 'Sind Sie SEHR müde?' verdeutlicht das Gefühl",
          "",
          "BEISPIELE AUS DER PRAXIS:",
          "Frau M. sagt: 'Ich muss meine Kinder abholen!' → Validation: 'Ihre Kinder – was für eine Verantwortung Sie hatten!' (Gefühl bestätigen, nicht korrigieren)",
          "Herr K. sucht seine Frau (die verstorben ist) → Validation: 'Ihre Frau – Sie vermissen sie?' (Trauer anerkennen, nicht sagen 'sie ist tot')",
          "Patient schlägt beim Waschen → Validation: 'Ich glaube, das macht Ihnen Angst. Darf ich kurz warten?' (Emotion benennen, Pflege pausieren)",
          "",
          "WAS MAN VERMEIDEN MUSS:",
          "NIE: 'Das stimmt doch nicht!' / 'Sie sind doch zu Hause!'",
          "NIE: Lügen oder Mitlügen (ethisch problematisch)",
          "NIE: Ignorieren oder ablenken ohne Kontakt",
          "NIE: Kindliche Sprache ('Braves Kind!')",
          "NIE: Mehrere Fragen gleichzeitig stellen"
        ],
        merke: "Validation: Nicht die Realität korrigieren – die EMOTION dahinter anerkennen. 'Was fühlen Sie?' statt 'Was denken Sie?'"
      }
    ]
  },

  // ════════════════════════════════════════════════
  //  DERMATOLOGIE & WUNDEN
  // ════════════════════════════════════════════════
  "Dermatologie & Wunden": {
    farbe: "#f59e0b",
    krankheiten: [
      {
        name: "Dekubitus",
        definition: "Druckbedingte Schädigung von Haut und Gewebe durch anhaltende Kompression.",
        ursachen: ["Immobilität", "Scherkräfte", "Feuchtigkeit (Inkontinenz)", "Mangelernährung"],
        symptome: ["Grad I: Rötung, nicht wegdrückbar, Haut intakt", "Grad II: Blase, oberflächlicher Hautverlust", "Grad III: Vollhautverlust bis Subkutis", "Grad IV: Knochen/Sehnen sichtbar"],
        diagnostik: ["Braden-Skala (≤ 18 = Risiko, ≤ 9 = sehr hohes Risiko)", "Tägliche Hautinspektion"],
        therapie: ["Druckentlastung sofort!", "Feuchte Wundauflagen nach Grad", "Ernährung: Protein ↑, Vitamin C, Zink", "Débridement bei Nekrose"],
        pflege: ["Umlagerung alle 2h + Protokoll", "30°-Seitenlage (NICHT 90°!)", "Fersen IMMER freilegen (Heel-Boot!)", "Hautinspektion täglich: Sakrum, Fersen, Trochanter", "NICHT massieren bei Rötung!"],
        merke: "Grad I Rötung nicht wegdrückbar = sofort handeln! Fersen immer freilegen!"
      },
      {
        name: "Ulcus cruris",
        definition: "Chronisches Unterschenkelgeschwür durch venöse (70%), arterielle (15%) oder gemischte Ursache.",
        ursachen: ["Venös: CVI, Varikosis, TVT-Folge", "Arteriell: pAVK", "Diabetisch: Neuropathie + Ischämie"],
        symptome: ["Venös: Innenknöchel, wenig schmerzhaft, nässend", "Arteriell: Akren, stark schmerzhaft, trocken, ABI < 0,9"],
        diagnostik: ["Doppler (ABI)", "Angiografie", "Wundbeurteilung nach TIME"],
        therapie: ["Venös: Kompression KKL 2–4 (wichtigste Maßnahme!)", "Arteriell: KEINE Kompression! → Revaskularisierung", "Feuchte Wundauflage"],
        pflege: ["Venös: Kompressionsverband IMMER anlegen", "Schmerz vor Verbandwechsel behandeln (30 Min vorher!)", "TIME-Prinzip: T=Débridement, I=Infektion, M=Feuchtigkeit, E=Wundrand", "NIEMALS H2O2, Betaisodona, Rivanol (veraltet, zytotoxisch!)"],
        merke: "Venöses Ulkus: Ohne Kompression keine Heilung!"
      },
      {
        name: "MRSA",
        definition: "Methicillin-resistenter Staphylococcus aureus – multiresistenter Erreger, häufig nosokomial.",
        ursachen: ["Übertragung: Kontakt (Hände!)", "Kolonisierung: Nase, Rachen, Wunden, Leiste"],
        symptome: ["Kolonisierung: symptomlos", "Infektion: Wundinfektion, Pneumonie, Sepsis"],
        diagnostik: ["Abstrich: Nase, Rachen, Leiste, Wunden", "Kultur + Antibiogramm"],
        therapie: ["Vancomycin i.v. (Mittel der Wahl)", "Linezolid", "Dekolonisierungsprotokoll"],
        pflege: ["Kontaktisolierung: Einzelzimmer, Kittel + Handschuhe bei JEDEM Kontakt", "Händedesinfektion vor und nach Patientenkontakt", "Patienteneigene Geräte", "Besuchsregeln erklären", "Dekolonisierung: Nasenöl, Waschung mit CHX"],
        merke: "MRSA: Hände sind der wichtigste Übertragungsweg – Händedesinfektion rettet!"
      }
    ]
  },

  // ════════════════════════════════════════════════
  //  CHIRURGIE & GERIATRIE
  // ════════════════════════════════════════════════
  "Chirurgie & Geriatrie": {
    farbe: "#16a34a",
    krankheiten: [
      {
        name: "Schenkelhalsfraktur",
        definition: "Häufige Fraktur bei alten Menschen nach Sturz. Medizinischer Notfall – OP meist innerhalb 24h.",
        ursachen: ["Sturz (90%)", "Osteoporose", "Knochenmetastasen (pathologisch)"],
        symptome: ["Starke Hüftschmerzen", "Bein verkürzt + außenrotiert", "Bewegungsunfähigkeit", "Kein Stehen möglich"],
        diagnostik: ["Röntgen Hüfte a.p. und axial", "MRT bei unklarem Befund"],
        therapie: ["OP innerhalb 24h (Duokopfprothese oder DHS)", "Frühmobilisation ab OP-Tag!", "Thromboseprophylaxe"],
        pflege: ["Luxationsprophylaxe: Beugung < 90°, kein Überkreuzen, keine Innenrotation!", "Transfer zur operierten Seite", "Schmerztherapie vor Mobilisation", "Physiotherapie ab Tag 1", "Sturzsicherung!"],
        merke: "Nach TEP: Nie > 90° beugen, nie Beine überkreuzen, nie nach innen drehen!"
      },
      {
        name: "Postoperatives Delir",
        definition: "Akuter Verwirrtheitszustand nach Operation, besonders bei alten Patienten. Reversibel aber gefährlich.",
        ursachen: ["Infektion (HWI, Pneumonie)", "Schmerzen (häufigste Ursache!)", "Dehydratation", "Medikamente (Anticholinergika, Opioide)", "Schlafentzug, Immobilität"],
        symptome: ["Akut, fluktuierend!", "Bewusstseinstrübung", "Desorientiertheit", "Hyperaktiv (unruhig) ODER hypoaktiv (still – wird oft übersehen!)", "CAM-Test positiv"],
        diagnostik: ["CAM-Tool (Confusion Assessment Method)", "Ursachensuche: Urin-Stix, Labor, Schmerz"],
        therapie: ["Ursache behandeln!", "Reorientierung", "Keine Fixierung!", "Haloperidol nur wenn nötig"],
        pflege: ["Ursache suchen: Schmerz? HWI? Dehydration? Medikamente?", "Reorientierung: Name, Ort, Datum nennen", "Licht anlassen, vertraute Gegenstände", "Klingel erreichbar", "Frühmobilisation", "NICHT fixieren (verschlechtert Delir!)"],
        merke: "Hypoaktives Delir wird oft übersehen – ruhiger Patient ≠ guter Patient!"
      },
      {
        name: "Osteoporose",
        definition: "Systemische Skeletterkrankung mit erniedrigter Knochendichte → erhöhtes Frakturrisiko.",
        ursachen: ["Postmenopausaler Östrogenmangel (häufigste!)", "Kortikosteroid-Langzeittherapie", "Immobilität, Calcium/Vit-D-Mangel"],
        symptome: ["Oft symptomlos bis zur Fraktur!", "Rückenschmerzen (Wirbelkörperfraktur)", "Größenabnahme, Kyphose (Witwenbuckel)", "Typisch: Schenkelhalsfraktur, Wirbelkörper, Radius"],
        diagnostik: ["DXA (Knochendichtemessung)", "FRAX-Score", "Röntgen bei Fraktur"],
        therapie: ["Calcium + Vitamin D", "Bisphosphonate (Alendronat)", "Denosumab, Teriparatid", "Sturzprophylaxe!"],
        pflege: ["Sturzprophylaxe = wichtigste pflegerische Maßnahme!", "Mobilisation und Krafttraining fördern", "Calcium-reiche Ernährung", "Schmerzmittel nach AO", "Hilfsmittel: Rollator, Hüftprotektoren"],
        merke: "Osteoporose: Fraktur verhindern durch Sturzprophylaxe!"
      }
    ]
  },

  // ════════════════════════════════════════════════
  //  SCHWANGERSCHAFT & GEBURTSHILFE
  // ════════════════════════════════════════════════
  "Schwangerschaft & Geburtshilfe": {
    farbe: "#db2777",
    krankheiten: [

      // ── MENSTRUATIONSZYKLUS ──
      {
        name: "Menstruationszyklus – Grundlagen",
        definition: "Hormonell gesteuerter Zyklus der Frau mit durchschnittlich 28 Tagen (21–35 Tage normal). Vorbereitung der Gebärmutter auf eine Schwangerschaft.",
        ursachen: ["Hormonelle Steuerung: Hypothalamus → Hypophyse → Ovar", "GnRH → FSH/LH → Östrogen/Progesteron"],
        symptome: [
          "Phase 1 – Menstruation (Tag 1–5): Abbluten der Gebärmutterschleimhaut, Krämpfe (Dysmenorrhö) möglich",
          "Phase 2 – Follikelphase (Tag 1–14): FSH ↑, Follikelreifung, Östrogen ↑, Schleimhautaufbau",
          "Phase 3 – Ovulation (Tag 14): LH-Peak, Eisprung, fertilste Phase",
          "Phase 4 – Lutealphase (Tag 15–28): Gelbkörper bildet Progesteron, PMS möglich"
        ],
        diagnostik: ["Zykluskalender", "Basaltemperaturkurve", "Hormonspiegel (FSH, LH, Östrogen, Progesteron)", "Ultraschall (Follikelreifung)"],
        therapie: [
          "Dysmenorrhö: Ibuprofen, Wärme, Pille",
          "Zyklusstörungen: Hormontherapie je nach Ursache",
          "PMS: Lebensstilmaßnahmen, ggf. SSRI"
        ],
        pflege: [
          "Schmerzen bei Dysmenorrhö: Wärme (Körnerkissen), NSAR nach AO",
          "PMS-Symptome (Stimmungsschwankungen, Wassereinlagerungen) ernst nehmen",
          "Aufklärung über normalen Zyklus und Schwankungen",
          "Patientinnen ermutigen, Zyklusveränderungen zu dokumentieren",
          "Bei starker Blutung: Blutverlust einschätzen, Anämie beachten"
        ],
        merke: "Normale Zykluslänge: 21–35 Tage. Blutungsdauer: 3–7 Tage. Abweichungen abklären!"
      },

      // ── ZYKLUSSTÖRUNGEN ──
      {
        name: "Zyklusstörungen",
        definition: "Abweichungen von Dauer, Häufigkeit oder Stärke der Menstruation.",
        ursachen: [
          "Amenorrhö (keine Blutung): Schwangerschaft!, Stress, Untergewicht, Hypophysentumor, Menopause",
          "Dysmenorrhö (Schmerzhafte Menstruation): primär (funktionell) oder sekundär (Endometriose, Myom)",
          "Menorrhagie (Starke Blutung > 7 Tage): Myom, Gerinnungsstörung",
          "Metrorrhagie (unregelmäßige Blutung): Hormonstörung, Karzinom"
        ],
        symptome: ["Ausbleibende / unregelmäßige Blutung", "Starke Schmerzen (Dysmenorrhö)", "Übermäßige Blutung (Menorrhagie) → Anämirisiko", "Zwischenblutungen"],
        diagnostik: ["Schwangerschaftstest (immer zuerst!)", "Hormonstatus", "Ultraschall", "Ggf. Hysteroskopie"],
        therapie: ["Ursachenbehandlung", "Hormontherapie", "Ibuprofen / Mefenamsäure bei Dysmenorrhö"],
        pflege: [
          "Schwangerschaft immer zuerst ausschließen!",
          "Anämie-Zeichen beachten: Blässe, Schwindel, Tachykardie",
          "Eisengabe nach AO bei Menorrhagie",
          "Schmerzen nicht bagatellisieren",
          "Hygieneversorgung, Würde wahren"
        ],
        merke: "Bei Amenorrhö: immer zuerst Schwangerschaftstest!"
      },

      // ── SCHWANGERSCHAFT GRUNDLAGEN ──
      {
        name: "Schwangerschaft – Physiologie & Vorsorge",
        definition: "Normale Schwangerschaft: 40 Wochen (280 Tage) ab letzter Menstruation. Einteilung in 3 Trimester.",
        ursachen: ["Befruchtung der Eizelle durch Spermium", "Nidation in der Gebärmutter ca. Tag 7 nach Befruchtung"],
        symptome: [
          "1. Trimester (SSW 1–12): Übelkeit/Erbrechen (morgens!), Brustspannen, Müdigkeit, Pollakisurie",
          "2. Trimester (SSW 13–24): Kindsbewegungen (Quickening ab SSW 18–20), Wachstum Bauch",
          "3. Trimester (SSW 25–40): Rückenschmerzen, Sodbrennen, Ödeme, Braxton-Hicks-Wehen, Schlafstörungen"
        ],
        diagnostik: ["Schwangerschaftstest (β-HCG)", "Ultraschall-Vorsorge (3 Pflichtterminen: SSW 9–12, 19–22, 29–32)", "Blutbild, Blutgruppe, Rh-Faktor, HIV, Röteln, Toxoplasmose", "CTG ab SSW 28", "Mutterpass führen"],
        therapie: [
          "Folsäure 400 µg/Tag VOR und in der Frühschwangerschaft",
          "Jod 100–150 µg/Tag",
          "Vitamin D",
          "Nikotinabstinenz, kein Alkohol, keine Rohprodukte",
          "Regelmäßige Vorsorgeuntersuchungen"
        ],
        pflege: [
          "Übelkeit: kleine häufige Mahlzeiten, Ingwer, frische Luft",
          "Rückenschmerzen: Wärme, rückengerechte Lagerung (Kissen zwischen Knien in Seitenlage)",
          "Ödeme: Hochlagern der Beine, Kompressionsstrümpfe, RR messen!",
          "Sodbrennen: kleine Mahlzeiten, Oberkörper hoch nach dem Essen",
          "Schlafstörungen: Seitenlage (links bevorzugt!), Stillkissen",
          "Auf Gefahrenzeichen hinweisen: Blutungen, Kopfschmerzen, Sehstörungen, Bauchschmerzen"
        ],
        merke: "Linksseitenlage ab SSW 20 – entlastet die Vena cava, verbessert Plazentadurchblutung!"
      },

      // ── ÜBELKEIT / HYPEREMESIS ──
      {
        name: "Schwangerschaftsübelkeit & Hyperemesis gravidarum",
        definition: "Übelkeit/Erbrechen in der Schwangerschaft (70–80% der Frauen). Hyperemesis = schwere Form mit Dehydratation.",
        ursachen: ["β-HCG-Anstieg im 1. Trimester", "Östrogeneinfluss", "Psychische Faktoren"],
        symptome: [
          "Leicht: Übelkeit, gelegentliches Erbrechen, kein Gewichtsverlust",
          "Hyperemesis: Erbrechen > 3–5x/Tag, Gewichtsverlust > 5%, Dehydratation, Elektrolytstörungen, Ketonurie"
        ],
        diagnostik: ["Gewichtskontrolle", "Urin (Ketone, spezifisches Gewicht)", "Labor: Elektrolyte, Harnstoff, Kreatinin", "Ausschluss anderer Ursachen (Blasenmole, Hepatitis)"],
        therapie: ["Leicht: Ingwer, kleine Mahlzeiten, Antiemetika (Dimenhydrinat)", "Hyperemesis: Hospitalisierung, i.v.-Flüssigkeit + Elektrolyte, Thiamin, Antiemetika i.v.", "Schwere Fälle: Kortikosteroide, TPN"],
        pflege: [
          "Kleine, häufige, leichte Mahlzeiten (Zwieback, Reis, Banane)",
          "Kalte/lauwarme Speisen bevorzugen (weniger Geruch)",
          "Starke Gerüche vermeiden",
          "Ingwertee anbieten",
          "Ruhe nach Mahlzeiten",
          "Bei Hyperemesis: i.v.-Zugang, strenge Bilanzierung, Gewicht täglich",
          "Psychische Unterstützung: Schuldgefühle mindern"
        ],
        merke: "Hyperemesis: Thiamin (B1) VOR Glukose geben – Wernicke-Enzephalopathie verhindern!"
      },

      // ── PRÄEKLAMPSIE & HELLP ──
      {
        name: "Präeklampsie, HELLP-Syndrom & Eklampsie",
        definition: "Hypertensive Schwangerschaftserkrankungen ab SSW 20. HELLP und Eklampsie sind lebensbedrohliche Komplikationen.",
        ursachen: ["Plazentainsuffizienz", "Fehlregulation der Trophoblastinvasion", "Immunologische Faktoren"],
        symptome: [
          "Präeklampsie: RR ≥ 140/90 + Proteinurie (> 300 mg/24h) ab SSW 20",
          "Ödeme: Gesicht, Hände (Warnsignal!)",
          "HELLP: Hämolyse + Elevated Liver enzymes + Low Platelets",
          "HELLP-Symptome: Oberbauchschmerzen (rechts!), Übelkeit, Kopfschmerzen, Sehstörungen",
          "Eklampsie: tonisch-klonische Krampfanfälle bei Präeklampsie"
        ],
        diagnostik: ["RR > 140/90 (zweimal im Abstand 4h)", "Urin: Proteinurie (Stix, 24h-Sammelurin)", "Labor: Transaminasen ↑, Thrombozyten ↓, LDH ↑, Haptoglobin ↓", "CTG, Doppler-Sono (Plazenta)"],
        therapie: [
          "Präeklampsie leicht: Überwachung, RR-Kontrolle, Bettruhe",
          "Antihypertensiva: Methyldopa, Labetalol, Nifedipin (Ziel: RR < 160/110)",
          "HELLP / schwere Präeklampsie: Entbindung!",
          "Magnesium i.v. zur Eklampsie-Prophylaxe und -Therapie",
          "Eklampsie: Anfallschutz (Magnesium), Entbindung sofort"
        ],
        pflege: [
          "RR engmaschig messen (alle 4–6h oder nach AO)",
          "Gewicht täglich (Ödemerkennung)",
          "Urin auf Eiweiß prüfen (Stix täglich)",
          "Auf Warnsymptome achten: Kopfschmerzen, Sehstörungen, Oberbauchschmerzen, Reflexe gesteigert",
          "Bettruhe in Linksseitenlage",
          "Bei Krampf: Seitenlage, Arzt sofort, Magnesium bereithalten, Aspirationsschutz",
          "Ruhige reizarme Umgebung (Licht dimmen, leise Geräusche)",
          "Mutter-Kind-Monitoring: CTG, Kindsbewegungen"
        ],
        merke: "Oberbauchschmerzen + Kopfschmerzen + Sehstörungen bei Schwangerer = Notfall! Sofort Arzt!"
      },

      // ── GESTATIONSDIABETES ──
      {
        name: "Gestationsdiabetes (GDM)",
        definition: "In der Schwangerschaft erstmals diagnostizierte Glukosetoleranzstörung. Screening in SSW 24–28 Pflicht.",
        ursachen: ["Plazenta produziert insulinantagonistische Hormone", "Vorbestehende Insulinresistenz", "Übergewicht, familiäre Belastung"],
        symptome: ["Meist symptomlos!", "Polyurie, Polydipsie (selten)", "Makrosomie des Kindes (Geburtsgewicht > 4000 g)"],
        diagnostik: ["50g-Glucose-Screening-Test (SSW 24–28)", "Bei auffälligem Screening: 75g-oGTT", "Grenzwerte: nüchtern > 92, 1h > 180, 2h > 153 mg/dl"],
        therapie: ["Ernährungsumstellung (1. Wahl)", "Blutzucker-Selbstkontrolle (4x täglich)", "Insulin wenn Zielwerte nicht erreicht (Metformin kontraindiziert!)", "Entbindung spätestens SSW 40+0"],
        pflege: [
          "BZ-Kontrolle: nüchtern + 1h nach Mahlzeiten",
          "Zielwerte: nüchtern < 95, 1h pp < 140, 2h pp < 120 mg/dl",
          "Ernährungsberatung: kohlenhydratreduziert, regelmäßige Mahlzeiten",
          "Bewegung fördern (Spaziergänge nach Mahlzeiten senken BZ!)",
          "Insulingabe korrekt schulen",
          "Kind beobachten: Kindsbewegungen, Makrosomie (Größenvergleich)",
          "Nach Entbindung: BZ der Mutter normalisiert sich meist spontan",
          "Kind nach Geburt: Hypoglykämiegefahr! BZ des Neugeborenen messen"
        ],
        merke: "GDM: Baby hat Hypoglykämierisiko nach Geburt – BZ des Neugeborenen sofort messen!"
      },

      // ── FRÜHGEBURT ──
      {
        name: "Frühgeburt",
        definition: "Geburt vor vollendeter 37. SSW. Häufigste Ursache neonataler Morbidität und Mortalität.",
        ursachen: ["Infektion / Entzündung (häufigste Ursache!)", "Mehrlingsschwangerschaft", "Uterusfehlbildungen, Myome", "Zervixinsuffizienz", "Plazentaprävia, vorzeitige Plazentalösung", "Stress, Rauchen, niedriger Sozialstatus"],
        symptome: [
          "Vorzeitige Wehen (regelmäßig, schmerzhaft < SSW 37)",
          "Zervixverkürzung (Ultraschall < 25 mm)",
          "Blasensprung vor SSW 37 (PPROM)",
          "Druckgefühl im Unterbauch",
          "Veränderter Ausfluss (ggf. blutiger Schleim)"
        ],
        diagnostik: ["CTG: Wehenregistrierung", "Ultraschall: Zervixlänge", "Fibronektin-Test (Frühgeburtsrisiko)", "Bakteriologischer Abstrich"],
        therapie: [
          "Tokolyse (Wehenhemmung): Nifedipin, Atosiban bis SSW 34",
          "Kortikosteroide (Betamethason 2×) zur Lungenreifung bis SSW 34!",
          "Magnesium i.v. zur Neuroprotektion bis SSW 32",
          "Antibiotika bei Infektion",
          "Zervixcerclage bei Zervixinsuffizienz",
          "Ab SSW 34: keine Tokolyse mehr, Entbindung zulassen"
        ],
        pflege: [
          "Bettruhe und körperliche Schonung",
          "Emotionale Unterstützung (Schuldgefühle sind häufig!)",
          "CTG-Überwachung regelmäßig",
          "Kortikosteroide nach AO verabreichen (exaktes Timing wichtig!)",
          "Temperatur messen (Infektion?)",
          "Amnioninfektionssyndrom erkennen: Fieber, übelriechender Ausfluss, Tachykardie",
          "Wehen beobachten und dokumentieren",
          "Neonatologie informieren und vorbereiten"
        ],
        merke: "Kortikosteroide zur Lungenreifung: 2 Dosen im Abstand von 24h – Timing ist kritisch!"
      },

      // ── PLAZENTA PRAEVIA & LÖSUNG ──
      {
        name: "Plazenta praevia & vorzeitige Plazentalösung",
        definition: "Zwei verschiedene Notfallsituationen mit lebensbedrohlicher Blutung in der Schwangerschaft.",
        ursachen: [
          "Plazenta praevia: Plazenta sitzt über/an Muttermund (frühere Uterusnarben, Mehrlingsschwangerschaft)",
          "Vorzeitige Lösung: Plazenta löst sich vor Geburt (Hypertonie, Trauma, Kokain, Rauchen)"
        ],
        symptome: [
          "Plazenta praevia: SCHMERZLOSE, hellrote vaginale Blutung im 3. Trimenon!",
          "Vorzeitige Lösung: SCHMERZHAFTE, dunkle Blutung ODER versteckte Blutung, brettharter Uterus, Schocksymptome",
          "Beide: fetal distress im CTG"
        ],
        diagnostik: ["Ultraschall (Plazentalokalisation)", "CTG (fetale Herzfrequenz)", "Labor: Blutbild, Gerinnung", "KEIN vaginales Tastuntersuchung bei Plazenta praevia!"],
        therapie: [
          "Plazenta praevia: Sectio caesarea (vaginale Entbindung unmöglich bei totaler PP)",
          "Vorzeitige Lösung: Notfallsectio bei fetaler Gefährdung",
          "Volumenersatz, Bluttransfusion bei Schock",
          "Kortikosteroide bei Frühgeburtlichkeit"
        ],
        pflege: [
          "SOFORT Arzt bei vaginaler Blutung in der Schwangerschaft!",
          "Bettruhe, KEINE vaginalen Untersuchungen (bei PP)",
          "Kreislaufüberwachung: RR, HF, SpO2",
          "Großlumige i.v.-Zugänge, Blutgruppe + Kreuzblut",
          "Schocklagerung wenn nötig",
          "CTG kontinuierlich",
          "Mutter beruhigen und informieren",
          "OP-Vorbereitung bereitstellen"
        ],
        merke: "Plazenta praevia = KEINE vaginale Tastuntersuchung! Blutung + kein Schmerz = Plazenta praevia!"
      },

      // ── ENTBINDUNG ──
      {
        name: "Normale Entbindung (Geburt)",
        definition: "Physiologischer Vorgang der Austreibung von Kind und Plazenta. Durchschnittliche Dauer Erstgebärende: 8–12h, Mehrgebärende: 6–8h.",
        ursachen: ["Spontaner Wehenbeginn durch Prostaglandine, Oxytocin", "Zervixreifung durch Prostaglandine"],
        symptome: [
          "Zeichnen: blutiger Schleimpfropf → Geburt in Stunden bis Tagen",
          "Eröffnungsphase: regelmäßige Wehen alle 5 Min, Zervixeröffnung 0–10 cm",
          "Austreibungsphase: Presswehen, vollständige Eröffnung, Kopfdurchtritt",
          "Nachgeburtsphase: Plazentaabgang innerhalb 30 Min",
          "Blasensprung: Fruchtwasserabgang"
        ],
        diagnostik: ["CTG (kontinuierlich in Klinik)", "Vaginale Untersuchung (Muttermundöffnung, Kindslage)", "Amnioskopie", "Blutgasanalyse aus Kopfschwartenblut"],
        therapie: [
          "Schmerztherapie: PDA (Periduralanästhesie) auf Wunsch",
          "Unterstützung: Wärme, Massagen, Atemübungen, Mobilisation",
          "Oxytocin bei Wehenschwäche (nach AO)",
          "Episiotomie nur bei Indikation (Frühgeburt, Saugglocke)",
          "Operative Entbindung: Vakuumextraktion, Forzeps, Sectio caesarea"
        ],
        pflege: [
          "Kontinuierliche Begleitung und Unterstützung (1:1-Betreuung ideal)",
          "Wehen beobachten: Frequenz, Dauer, Stärke dokumentieren",
          "CTG überwachen: fetale Herzfrequenz, Dezelerationen erkennen",
          "Schmerzmittel nach AO und Wunsch der Patientin",
          "Positionswechsel anbieten: Stehen, Gehen, Vierfüßlerstand",
          "Blasenentleerung alle 2h (volle Blase hemmt Wehen!)",
          "Nach Geburt: Apgar-Score beobachten, Haut-an-Haut sofort!",
          "Nachblutung überwachen: Uteruskontraktion, Blutverlust",
          "Dammverletzungen versorgen nach AO"
        ],
        merke: "Volle Blase hemmt die Wehentätigkeit – alle 2h zur Toilette!"
      },

      // ── SECTIO CAESAREA ──
      {
        name: "Sectio caesarea (Kaiserschnitt)",
        definition: "Operative Entbindung durch Bauchschnitt. Häufigste Indikation: Missverhältnis, pathologisches CTG, Lageanomalien.",
        ursachen: [
          "Primäre Sectio (geplant): Beckenendlage, Placenta praevia, Mehrling, maternale Erkrankung",
          "Sekundäre Sectio (ungeplant): Geburtsstillstand, pathologisches CTG, Nabelschnurvorfall"
        ],
        symptome: ["Indikationsstellung durch Geburtshelfer", "Patientenwunsch (relative Indikation)"],
        diagnostik: ["CTG (fetale Distress)", "Klinische Untersuchung", "Ultraschall"],
        therapie: ["Spinalanästhesie (Mittel der Wahl)", "Vollnarkose bei Notfallsectio", "Querschnitt (Pfannenstielschnitt) in der Regel"],
        pflege: [
          "Präoperativ: nüchtern seit mind. 6h (fest) / 2h (klar), Rasur, Venenzugang, Blase entleeren (Katheter)",
          "Aufklärung und Einwilligung sicherstellen",
          "Postoperativ: Vitalzeichen alle 15 Min in den ersten 2h",
          "Wundkontrolle: Blutung, Hämatom, Entzündungszeichen",
          "Uterusinvolution kontrollieren (Fundusstand, Wochenfluss)",
          "Frühmobilisation: nach Spinal ab 6h, nach Vollnarkose ab Stabilisierung",
          "Schmerzmittel regelmäßig nach AO (nicht warten bis Schmerzspitze!)",
          "Blasenkatheter: bleibt 24h, dann Spontanmiktion fördern",
          "Thromboseprophylaxe: Kompressionsstrümpfe + NMH ab 6h postoperativ",
          "Stillen fördern: Haut-an-Haut sobald möglich",
          "Narbenpflege ab SSW 6 erklären"
        ],
        merke: "Nach Sectio: Thromboseprophylaxe sofort! NMH + Kompressionsstrümpfe ab 6h postoperativ!"
      },

      // ── WOCHENBETT ──
      {
        name: "Wochenbett (Puerperium)",
        definition: "Zeit nach der Geburt bis zur vollständigen Rückbildung: 6–8 Wochen. Körperliche und psychische Anpassung.",
        ursachen: ["Physiologischer Rückbildungsprozess nach Geburt"],
        symptome: [
          "Wochenfluss (Lochien): Tag 1–3 rot (Lochia rubra), Tag 4–10 bräunlich (Lochia fusca), Tag 11–6. Woche gelblich-weiß (Lochia alba)",
          "Nachgeburtswehen (besonders beim Stillen, Mehrgebärende)",
          "Milcheinschuss: Tag 3–5, Brustspannen, Temperaturerhöhung bis 38°C (physiologisch!)",
          "Müdigkeit, emotionale Labilität (Babyblues Tag 3–5)",
          "Schweißausbrüche, Haarausfall (nach Wochen)"
        ],
        diagnostik: ["Uterusinvolution: Fundusstand täglich messen", "Lochienbeurteilung täglich", "RR, Puls, Temperatur", "Wund-/Narbenkontrolle"],
        therapie: [
          "Stillen fördern (fördert Involution!)",
          "Rückbildungsgymnastik ab Tag 1 (Beckenbodenübungen)",
          "Schmerzmittel nach AO (Ibuprofen bei stillenden Müttern möglich)",
          "Bei Mastitis: weiter stillen! Kühlung, Ibuprofen, ggf. Antibiotika"
        ],
        pflege: [
          "Uterusinvolution täglich: Fundus täglich um 1 Querfinger tiefer (Tag 10: nicht mehr tastbar)",
          "Lochien beurteilen: Farbe, Menge, Geruch – übler Geruch = Infektion!",
          "Dammpflege: Sitzwanne, Intimwaschung nach jedem Toilettengang, Eispack in ersten 24h",
          "Narbenpflege nach Episiotomie: trocken halten, inspizieren",
          "Stillen unterstützen: Anlegetechnik, Stillpositionen, Milchstau behandeln (Wärme, Ausstreichen)",
          "Psychische Unterstützung: Babyblues (Tag 3–5) ist normal und selbstlimitierend",
          "Ernährung: eiweißreich, calciumreich, ausreichend Flüssigkeit (Stillende: +500 ml/Tag)",
          "Rückbildungsgymnastik anleiten: Beckenbodenübungen ab Tag 1!",
          "Thrombosezeichen beachten (erhöhtes Risiko postpartal!)",
          "Auf Wochenbettdepression achten (> 2 Wochen nach Geburt)"
        ],
        merke: "Lochien mit üblem Geruch + Fieber = Endometritis → sofort Arzt!"
      },

      // ── MASTITIS ──
      {
        name: "Mastitis puerperalis (Brustentzündung)",
        definition: "Entzündung der Brustdrüse in der Stillzeit, meist in den ersten 6 Wochen nach Geburt.",
        ursachen: ["Milchstau → bakterielle Besiedlung (Staphylococcus aureus)", "Wunde Brustwarzen als Eintrittspforte", "Ungünstiges Anlegen, schlechte Entleerung"],
        symptome: ["Rötung, Schwellung, Überwärmung der Brust (meist einseitig)", "Starke Schmerzen", "Fieber > 38,5°C", "Grippe-ähnliche Symptome (Abgeschlagenheit, Myalgien)", "Bei Abszess: fluktuierende Verhärtung"],
        diagnostik: ["Klinische Diagnose", "Ultraschall bei Abszessverdacht", "Muttermilchkultur (selten notwendig)"],
        therapie: ["Weiter stillen! (Milch nicht schädlich für Kind)", "Häufiges Anlegen / regelmäßiges Abpumpen", "Kühlung zwischen den Stillmahlzeiten", "Ibuprofen (stilltauglich!)", "Antibiotika: Flucloxacillin / Cephalosporin 10–14 Tage", "Abszess: Inzision und Drainage"],
        pflege: [
          "Weiter stillen trotz Infektion – beruhigen und ermutigen!",
          "Vor dem Stillen: Wärme (fördert Milchfluss)",
          "Nach dem Stillen: Kühlung (Quark, Kohl, Kühlpack in Tuch)",
          "Anlegen optimieren: Kind nimmt Brusthof in den Mund, nicht nur Brustwarze",
          "Brust vollständig entleeren (abpumpen wenn nötig)",
          "Schmerzmittel 30 Min vor dem Stillen (Ibuprofen)",
          "Brustwarzen inspizieren: Rhagaden (Wunden) behandeln (Lanolin)",
          "Antibiotika nach AO: komplette Kur einhalten!",
          "Bei Abszess: postoperative Wundpflege"
        ],
        merke: "Mastitis: WEITER STILLEN! Absetzen verschlimmert den Milchstau!"
      },

      // ── WOCHENBETTDEPRESSION ──
      {
        name: "Wochenbettdepression (Postpartale Depression)",
        definition: "Depressive Episode nach Geburt, die > 2 Wochen anhält. Betrifft 10–15% aller Mütter. Verschieden vom normalen Babyblues (Tag 3–5).",
        ursachen: ["Hormoneller Abfall (Östrogen, Progesteron) nach Geburt", "Schlafentzug, Erschöpfung", "Fehlende soziale Unterstützung", "Vorbestehende psychische Erkrankung", "Schwierige Geburt, Frühgeburt, krankes Kind"],
        symptome: [
          "Anhaltende Traurigkeit, Weinen ohne Grund",
          "Interessenverlust, Freudlosigkeit",
          "Gefühl, keine gute Mutter zu sein",
          "Ängste um das Kind (manchmal Überbesorgtheit)",
          "Schlafstörungen (trotz Müdigkeit)",
          "Konzentrationsstörungen",
          "In seltenen schweren Fällen: Suizidgedanken, Gedanken dem Kind zu schaden (Postpartale Psychose!)"
        ],
        diagnostik: ["Edinburgh Postnatal Depression Scale (EPDS)", "Klinisches Interview", "Ausschluss: Schilddrüsenerkrankung, Anämie"],
        therapie: ["Psychotherapie (KVT)", "Antidepressiva (stilltauglich: Sertralin, Paroxetin)", "Unterstützung durch Familie, Hebamme", "Krisenintervention bei Postpartaler Psychose (stationär!)"],
        pflege: [
          "Aktiv nach Stimmung fragen – nicht nur körperliche Beschwerden!",
          "EPDS-Screening anbieten",
          "Normalisieren: Wochenbettdepression ist eine Erkrankung, keine Schwäche!",
          "Soziales Netz aktivieren: Partner, Familie, Hebamme",
          "Nachtruhe organisieren (Partner übernimmt Nachtfütterung)",
          "Bei Suizidgedanken oder Gedanken dem Kind zu schaden: SOFORT Arzt / Psychiater",
          "Auf Postpartale Psychose achten: Verwirrtheit, Halluzinationen, Wahnideen → psychiatrischer Notfall!",
          "Mutter-Kind-Bindung fördern ohne Druck",
          "Selbsthilfegruppen empfehlen"
        ],
        merke: "Postpartale Psychose (Wahnideen, Verwirrung) = psychiatrischer Notfall → sofortige Einweisung!"
      },

      // ── NABELSCHNURVORFALL ──
      {
        name: "Nabelschnurvorfall",
        definition: "Vorfall der Nabelschnur vor den vorangehenden Teil des Kindes nach Blasensprung. Absoluter Geburtsnotfall!",
        ursachen: ["Blasensprung bei nicht eingetretenem Kopf", "Querlage, Beckenendlage", "Frühgeburt", "Polyhydramnion"],
        symptome: ["Nabelschnur tastbar oder sichtbar im Geburtskanal", "Bradykardie im CTG (Kompression der Nabelschnur!)", "Variable Dezelerationen"],
        diagnostik: ["Vaginale Untersuchung nach Blasensprung", "CTG (Herzfrequenzabfall)"],
        therapie: ["Notfallsectio sofort!", "Manuelles Hochdrücken des Kindsteils (Entlastung der Nabelschnur)", "Knie-Ellenbogen-Lage der Mutter", "Sauerstoffgabe", "KEINE manuelle Reposition der Nabelschnur"],
        pflege: [
          "SOFORT Notfallklingel / Code Blau!",
          "Mutter in Knie-Ellenbogen-Lage oder Trendelenburg",
          "Mit steriler Kompresse und warmer Hand Nabelschnur schützen (NICHT zurückschieben!)",
          "Sauerstoff 10–15 L/min",
          "i.v.-Zugang, Blutentnahme",
          "OP sofort vorbereiten",
          "Tokometrie / CTG weiterlaufen lassen",
          "Mutter beruhigen (extreme Ausnahmesituation)"
        ],
        merke: "Nabelschnurvorfall = absoluter Notfall. Knie-Ellenbogen-Lage + Notfallsectio sofort!"
      },

      // ── POSTPARTALE HÄMORRHAGIE ──
      {
        name: "Postpartale Hämorrhagie (PPH)",
        definition: "Lebensbedrohliche Blutung nach Geburt. Definition: Blutverlust > 500 ml nach vaginaler Geburt oder > 1000 ml nach Sectio.",
        ursachen: [
          "4 T's:",
          "Tonus (Uterusatonie): häufigste Ursache (80%!)",
          "Trauma: Dammriss, Zervixriss, Uterusruptur",
          "Tissue: Plazentareste",
          "Thrombin: Gerinnungsstörung (z.B. HELLP, DIC)"
        ],
        symptome: ["Starke vaginale Blutung nach Geburt", "Weicher schlaffer Uterus (Atonie)", "Hypotonie, Tachykardie, Schock", "Bewusstseinseinschränkung"],
        diagnostik: ["Klinisch: Uteruston, Blutmenge schätzen", "Labor: Blutbild, Gerinnung", "Ultraschall: Plazentareste"],
        therapie: [
          "Uterusmassage (Credé-Handgriff)",
          "Oxytocin i.v. sofort (10 IE)",
          "Carbetocin, Misoprostol, Sulproston",
          "Manuelle Plazentalösung wenn nötig",
          "Uteruskompressionsnaht (B-Lynch)",
          "Embolisation, Hysterektomie als letzte Option",
          "Massivtransfusion: EK + FFP + TK"
        ],
        pflege: [
          "Nach jeder Geburt: Uterus sofort palpieren (Tonus prüfen!)",
          "Fundus beobachten: Uterus soll hart und mittig sein",
          "Blutmenge realistisch einschätzen (Tücher wiegen!)",
          "Bei Atonie: Uterusmassage sofort + Arzt",
          "2 großlumige i.v.-Zugänge legen",
          "Kreislaufüberwachung: RR + HF jede Minute bei aktiver Blutung",
          "Warme Decken (Hypothermie verschlechtert Gerinnung!)",
          "Blasenkatheter (volle Blase verhindert Uteruskontraktion)",
          "Bluttransfusion nach AO vorbereiten",
          "Mutter und Partner informieren und beruhigen"
        ],
        merke: "Nach Geburt: Uterus sofort palpieren! Schlaffer Uterus = Atonie = sofort Oxytocin + Arzt!"
      },

      // ── NEUGEBORENENVERSORGUNG ──
      {
        name: "Neugeborenenversorgung & Apgar-Score",
        definition: "Erstversorgung des Neugeborenen direkt nach der Geburt. Apgar-Score bewertet den Zustand nach 1, 5 und 10 Minuten.",
        ursachen: ["Physiologische Adaptation an das extrauterine Leben"],
        symptome: [
          "Apgar-Score: 5 Kriterien je 0–2 Punkte (max. 10):",
          "A – Appearance (Hautfarbe): blau/weiß=0, Akrozyanose=1, rosig=2",
          "P – Pulse (Herzfrequenz): kein=0, <100=1, >100=2",
          "G – Grimace (Reflexe): keine=0, Grimassieren=1, Husten/Niesen=2",
          "A – Activity (Muskeltonus): schlaff=0, gebeugt=1, aktiv=2",
          "R – Respiration: keine=0, unregelmäßig=1, kräftig=2",
          "Bewertung: 8–10=gut, 4–7=mittel (Maßnahmen nötig), 0–3=schlecht (Reanimation!)"
        ],
        diagnostik: ["Apgar nach 1, 5, 10 Min", "Nabelschnur-pH (< 7,10 = Azidose)", "Körpertemperatur", "Körpergewicht, Länge, Kopfumfang"],
        therapie: [
          "Reanimation bei Apgar < 4: Wärmen, Absaugen, Beatmung, ggf. Herzdruckmassage",
          "Vitamin K 2 mg oral (Blutungsschutz)",
          "Vitamin D ab 1. Lebenstag",
          "Erythromycin-Augentropfen (Gonorrhö-Prophylaxe in manchen Ländern)",
          "Neugeborenenscreening (Blutstropfen Ferse, Tag 36–72h)"
        ],
        pflege: [
          "Wärmeerhalt: Neugeborene können nicht thermoregulieren! Sofort abtrocknen + einwickeln",
          "Haut-an-Haut sofort nach Geburt (Bonding, Wärme, Stillen!)",
          "Atemwege freimachen wenn nötig (Absaugen nur wenn indiziert!)",
          "Nabelschnur: aseptisch versorgen, täglich inspizieren (Infektionszeichen)",
          "Erste Stillmahlzeit so früh wie möglich (< 1h nach Geburt)",
          "Neugeborenenscreening erklären und dokumentieren",
          "Hypoglykämie beachten: BZ bei Risikoneugeborenen (GDM-Mutter, Frühgeburt, SGA)",
          "Ikterus (Gelbsucht): Bilirubinmessung ab Tag 2–3",
          "Mutter-Kind-Interaktion beobachten und fördern"
        ],
        merke: "Wärme zuerst! Neugeborene verlieren schnell Körperwärme → sofort abtrocknen und einwickeln!"
      },

      // ── FRÜHGEBORENENVERSORGUNG ──
      {
        name: "Frühgeborene – Pflege & Besonderheiten",
        definition: "Neugeborene < 37 SSW haben unreife Organsysteme und benötigen intensive Spezialversorgung.",
        ursachen: ["Frühgeburt (siehe oben)", "Unreife aller Organsysteme"],
        symptome: [
          "Atemnotsyndrom (RDS): fehlender Surfactant, Tachypnoe, Stöhnen, Einziehungen",
          "Hypothermie (fehlende Fettpolster, große Körperoberfläche)",
          "Hypoglykämie (fehlende Glykogenreserven)",
          "Bradykardie und Apnoen (unreifes Atemzentrum)",
          "Unreifer Schluck-/Saugreflex (< 34 SSW)",
          "Infektionsanfälligkeit",
          "Hirnblutung (periventrikulär, besonders < 32 SSW)"
        ],
        diagnostik: ["Monitoring: EKG, SpO2, Temperatur kontinuierlich", "BZ alle 1–2h", "Röntgen Thorax (RDS)", "Schädelultraschall (Hirnblutung)", "Labor: Blutbild, CRP, Blutgase"],
        therapie: ["Surfactant bei RDS (intratracheal)", "CPAP / Beatmung", "Wärmeinkubator", "Parenterale Ernährung → langsam enterale Steigerung", "Antibiotika bei Infektion", "Koffein bei Apnoen"],
        pflege: [
          "Wärmemanagement: Inkubator, Wärmestrahler, Folie",
          "Entwicklungsfördernde Pflege: Nestlagerung, Känguru-Methode (Haut-an-Haut!)",
          "Reizarme Umgebung: Lärm ↓, Licht gedimmt, Abdecken des Inkubators",
          "Schmerzmittel bei invasiven Maßnahmen (Saccharose oral)",
          "Mundpflege mit Muttermilch (beste Nahrung für Frühgeborene!)",
          "Ernährungsaufbau: zuerst trophische Mengen, dann langsam steigern",
          "Eltern in Pflege einbeziehen: Känguru-Methode, Wickeln, Füttern",
          "Eltern psychisch unterstützen (extreme Belastungssituation)",
          "Entlassungsplanung früh beginnen: Stillberatung, Säuglingspflege"
        ],
        merke: "Känguru-Methode (Haut-an-Haut): verbessert Wärme, Bonding, Stillen und Entwicklung!"
      }
    ]
  }
};
