// ─── KRANKHEITSBILD KOMPAKT DATA ───
const KB_DATA=[
{cat:"Innere Medizin",icon:"❤️",bg:"#FAECE7",name:"Herzinfarkt",def:"Akuter Verschluss einer Koronararterie durch Thrombus → Myokardnekrose. Lebensbedrohlicher Notfall — jede Minute zählt.",u:"Koronararterie durch Thrombus verschlossen",s:"Vernichtungsschmerz, Atemnot, Übelkeit, Kaltschweiß",r:"Rauchen, Hypertonie, Diabetes, Adipositas",d:"EKG (ST-Hebung), Troponin, Herzkatheter",t:"Lyse, PCI, ASS, Heparin, Beta-Blocker",p:"Oberkörper hoch, O₂, Monitoring, Angst nehmen, absolute Ruhe"},
{cat:"Innere Medizin",icon:"💙",bg:"#E6F1FB",name:"Herzinsuffizienz",def:"Herz kann nicht ausreichend Blut pumpen. Links-, rechts- oder globalinsuffizient. Häufigste Hospitalisierungsursache im Alter.",u:"Pumpschwäche (KHK, Hypertonie, Kardiomyopathie)",s:"Dyspnoe, Knöchelödeme, Gewichtszunahme, Nykturie",r:"KHK, Hypertonie, Diabetes, Herzklappenfehler",d:"Echo, BNP/NT-proBNP, EKG, Röntgen",t:"Diuretika, ACE-Hemmer, Beta-Blocker",p:"Tägliche Gewichtskontrolle, Flüssigkeitsbilanz, Oberkörper hoch"},
{cat:"Innere Medizin",icon:"🩸",bg:"#FAEEDA",name:"Diabetes Typ 2",def:"Insulinresistenz + relatives Insulindefizit → Hyperglykämie. Führt zu Mikro- und Makroangiopathie (Niere, Retina, Nerven, KHK).",u:"Insulinresistenz, genetisch, Lebensstil",s:"Polyurie, Polydipsie, Müdigkeit, Sehstörung",r:"Übergewicht, Bewegungsmangel, Alter, familiär",d:"Nüchtern-BZ ≥126 mg/dl, HbA1c ≥6,5%",t:"Lebensstil, Metformin, SGLT2-Hemmer, Insulin",p:"BZ-Kontrolle, Fußinspektion täglich, Schulung, Ernährungsberatung"},
{cat:"Innere Medizin",icon:"🫁",bg:"#E1F5EE",name:"COPD",def:"Irreversible Atemwegsobstruktion durch chronische Entzündung. GOLD I–IV. Hauptursache: Rauchen (>90%).",u:"Rauchen, Schadstoffe → chronische Bronchitis + Emphysem",s:"Husten (morgens), Auswurf, Belastungsdyspnoe",r:"Rauchen, Umweltverschmutzung, Alpha-1-Antitrypsinmangel",d:"Spirometrie (FEV1/FVC <0,7), BGA, Röntgen",t:"Bronchodilatatoren, ICS, O₂-Langzeittherapie",p:"Lippenbremse, Kutschersitz, Atemübungen, Rauchstopp fördern"},
{cat:"Innere Medizin",icon:"🌡️",bg:"#EAF3DE",name:"Pneumonie",def:"Akute Lungenparenchymentzündung. Bei Älteren oft atypisch (Verwirrtheit statt Fieber). Aspirationspneumonie häufig in Pflege.",u:"Pneumokokken, Viren, Aspiration",s:"Fieber, produktiver Husten, Dyspnoe, Thoraxschmerz",r:"Alter, Bettlägerigkeit, Schluckstörung, Immunsuppression",d:"Röntgen Thorax, CRP, PCT, Blutkultur",t:"Antibiotika, O₂, Antipyretika",p:"Atemübungen, Mobilisation früh, Aspirationsprophylaxe"},
{cat:"Innere Medizin",icon:"🩺",bg:"#EEEDFE",name:"Thrombose (TVT)",def:"Blutgerinnsel in tiefer Vene. Virchow-Trias: Stase, Hyperkoagulabilität, Gefäßwandschaden. Hauptgefahr: Lungenembolie.",u:"Stase, Hyperkoagulabilität, Gefäßwandschaden",s:"Schwellung, Schmerz, Überwärmung, Rötung (Bein)",r:"Immobilität, OP, Pille, Schwangerschaft, Karzinom",d:"Duplex-Sonografie, D-Dimer",t:"Antikoagulation (Heparin → NOAK), Kompression",p:"Kompressionsstrümpfe, Mobilisation früh, KEINE Massage!"},
{cat:"Innere Medizin",icon:"⚡",bg:"#FCEBEB",name:"Lungenembolie",def:"Akuter Verschluss einer Lungenarterie durch Embolus (meist TVT). Massive LE → kardiogener Schock.",u:"Embolus aus tiefer Beinvenenthrombose",s:"Plötzliche Dyspnoe, Tachykardie, Angst, Brustschmerz",r:"TVT, Immobilität, Thrombophilie, Karzinom",d:"CT-Pulmonalisangiografie, D-Dimer, EKG",t:"Antikoagulation, Lyse bei Schock, O₂",p:"Monitoring (SpO₂, RR, HF), O₂, Bettruhe, Angst nehmen"},
{cat:"Innere Medizin",icon:"💧",bg:"#E6F1FB",name:"Niereninsuffizienz",def:"Chronischer Nephronverlust → GFR-Reduktion. CKD Stadien 1–5. Stadium 5 = Nierenersatztherapie.",u:"Diabetes, Hypertonie → Nephronverlust",s:"Ödeme, Müdigkeit, Oligurie, Juckreiz, Übelkeit",r:"Diabetes Typ 2, Hypertonie, Glomerulonephritis",d:"Kreatinin, eGFR, Urinprotein, Sonografie",t:"Ursachentherapie, Dialyse, Transplantation",p:"Flüssigkeitsbilanz, Gewicht täglich, Hautpflege, Diät beachten"},
{cat:"Innere Medizin",icon:"🩸",bg:"#FCEBEB",name:"Sepsis",def:"Lebensbedrohliche Organdysfunktion durch dysregulierte Immunantwort. SOFA-Score ≥2. Mortalität 30–50% bei Schock.",u:"Systemische Infektion → überschießende Immunantwort",s:"Fieber/Hypothermie, Tachykardie, Tachypnoe, Hypotonie",r:"Immunschwäche, Alter, Katheter, OP, Diabetes",d:"Blutkultur (vor Antibiotika!), Laktat, SOFA-Score",t:"Antibiotika (innerhalb 1h!), Volumen, Vasopressoren",p:"Engmaschiges Monitoring, Bilanz, Hygienestandards"},
{cat:"Neurologie",icon:"🧠",bg:"#EEEDFE",name:"Schlaganfall",def:"Akute Hirnischämie (85%) oder Blutung (15%). FAST: Face, Arms, Speech, Time. Time is Brain!",u:"Ischämie (Thrombus/Embolie) oder intrazerebrale Blutung",s:"Hemiparese, Aphasie, Sehstörung, Schwindel",r:"Hypertonie, Vorhofflimmern, Diabetes, Rauchen",d:"CT (Blutung!), MRT, Doppler",t:"Lyse (bis 4,5h), Thrombektomie, Stroke Unit",p:"Aspirationsprophylaxe, Lagerung, Schluckassessment, frühe Mobilisation"},
{cat:"Neurologie",icon:"🧩",bg:"#E1F5EE",name:"Demenz / Alzheimer",def:"Chronisch progrediente neurodegenerative Erkrankung. Alzheimer = 60%. Kurzzeitgedächtnis zuerst betroffen.",u:"Amyloid-Plaques, Tau-Fibrillen → Nervenzelluntergang",s:"Kurzzeitgedächtnisverlust, Desorientierung, Persönlichkeitsänderung",r:"Hohes Alter, APOE4, familiär, Diabetes",d:"Mini-Mental-Status, Uhrentest, MRT",t:"Acetylcholinesterasehemmer (symptomatisch)",p:"Biographiearbeit, Validation, Orientierungshilfen, Sicherheit"},
{cat:"Neurologie",icon:"🤲",bg:"#FAEEDA",name:"Parkinson",def:"Degeneration dopaminerger Neurone in Substantia nigra. TRAP: Tremor, Rigor, Akinese, Posturale Instabilität.",u:"Dopaminmangel in Substantia nigra (idiopathisch)",s:"Ruhetremor (Pillendreher), Rigor, Bradykinese, Maskengesicht",r:"Hohes Alter (>60 J.), genetisch selten",d:"Klinische Diagnose, L-Dopa-Test, MRT",t:"L-Dopa (Goldstandard), Dopaminagonisten",p:"Mobilisation, Sturzprophylaxe, Sprachtherapie, Einnahmezeiten exakt"},
{cat:"Neurologie",icon:"⚡",bg:"#FAECE7",name:"Epilepsie",def:"Wiederkehrende epileptische Anfälle durch neuronale Übererregung. Fokal oder generalisiert. Anfallsdokumentation wichtig.",u:"Neuronale Übererregung (idiopathisch, Hirnschaden, Fieber)",s:"Krampfanfälle, Bewusstlosigkeit, Zungenbiss, postiktale Verwirrtheit",r:"Genetisch, Hirnverletzung, Fieberkrämpfe",d:"EEG, MRT, Labor",t:"Antiepileptika (Valproat, Levetiracetam)",p:"Schutz vor Verletzung, Anfallsprotokoll, KEIN Keil in Mund!"},
{cat:"Psychiatrie",icon:"🌀",bg:"#EEEDFE",name:"Schizophrenie",def:"Schwere psychische Erkrankung mit Positiv- und Negativsymptomen. Prävalenz 1%. Erstmanifestation 18–25 J. (Männer), 25–35 J. (Frauen).",u:"Dopaminhypothese, genetisch, Stress, Cannabis",s:"Positivsymptome: Wahn, Halluzinationen, Ich-Störungen. Negativsymptome: Antriebslosigkeit, Affektverflachung, sozialer Rückzug",r:"Genetische Belastung, Cannabis, perinatale Komplikationen",d:"Klinisches Interview (ICD-10), Ausschluss organischer Ursachen, MRT",t:"Antipsychotika (Risperidon, Olanzapin, Clozapin), Psychotherapie",p:"Milieutherapie, Beziehungsaufbau, Realitätsorientierung, Medikamentencompliance"},
{cat:"Psychiatrie",icon:"🌊",bg:"#E6F1FB",name:"Schizoaffektive Störung",def:"Kombination aus schizophrenen und affektiven Symptomen. Zwischen Schizophrenie und bipolarer Störung. Günstigere Prognose als Schizophrenie.",u:"Genetisch, neurobiologisch (Dopamin + Serotonin), Stress",s:"Gleichzeitig: Wahn/Halluzinationen UND depressive oder manische Episoden",r:"Genetische Belastung, Stress, Substanzkonsum",d:"Klinisches Interview, Ausschluss organischer Ursachen",t:"Antipsychotika + Stimmungsstabilisierer (Lithium, Valproat)",p:"Stimmungsmonitoring, Psychoedukation, Stabilisierung des Alltags, Krisenplan"},
{cat:"Psychiatrie",icon:"🌪️",bg:"#FCEBEB",name:"Psychose",def:"Zustand mit Realitätsverlust: Wahn, Halluzinationen, Ich-Störungen. Kann bei Schizophrenie, bipolarer Störung, Drogen oder organisch auftreten.",u:"Schizophrenie, bipolare Störung, Drogen (Cannabis), organisch",s:"Wahnideen, akustische Halluzinationen, Desorganisation, Agitation",r:"Vulnerabilität + Stress, Schlafentzug, Drogen",d:"Klinische Diagnose, Drogenscreening, Labor, CT/MRT",t:"Antipsychotika (akut: Haloperidol/Olanzapin), stationär",p:"Ruhige Umgebung, deeskalierendes Auftreten, Sicherheit, Realitätsorientierung"},
{cat:"Psychiatrie",icon:"💭",bg:"#E6F1FB",name:"Depression",def:"Kernsymptome: Traurigkeit, Antriebslosigkeit, Anhedonie. Häufigste psychische Erkrankung. Suizidrisiko immer einschätzen!",u:"Serotoninmangel, psychosoziale Faktoren, genetisch",s:"Traurigkeit, Antriebslosigkeit, Anhedonie, Schlafstörung, Suizidalität",r:"Stress, Trauma, familiär, chronische Erkrankungen",d:"PHQ-9, Hamilton-Depressionsskala, klinisches Interview",t:"SSRI (Sertralin, Escitalopram), Psychotherapie (KVT)",p:"Tagesstruktur, Gespräche, Suizidalität ansprechen (direkt!), Beziehung aufbauen"},
{cat:"Psychiatrie",icon:"🎭",bg:"#FAEEDA",name:"Borderline-Persönlichkeitsstörung",def:"Emotional instabile Persönlichkeitsstörung. Instabilität in Affekt, Selbstbild und Beziehungen. Ursache: Trauma + Vulnerabilität. DBT ist Therapie der Wahl.",u:"Kindheitstrauma + genetische Vulnerabilität",s:"Affektlabilität, Selbstverletzung, Suizidversuche, Trennungsangst, Identitätsdiffusion",r:"Kindheitstrauma, Missbrauch, emotionale Vernachlässigung",d:"Klinisches Interview, SKID-II, DSM-5 (5 von 9 Kriterien)",t:"Dialektisch-behaviorale Therapie (DBT), Stimmungsstabilisierer",p:"Klare Grenzen setzen, konsistentes Verhalten, Krisen deeskalieren"},
{cat:"Psychiatrie",icon:"🌸",bg:"#FBEAF0",name:"Anorexia nervosa",def:"Schwere Essstörung mit Untergewicht, Körperschemastörung und Gewichtsphobie. Höchste Mortalität aller psychiatrischen Erkrankungen.",u:"Psychosozial, genetisch, Schlankheitsdruck, Kontrollbedürfnis",s:"Extremes Untergewicht (BMI <17,5), Körperschemastörung, Amenorrhoe, Lanugo",r:"Weiblich, Adoleszenz, Leistungsdruck, Trauma",d:"BMI, Labor (Elektrolyte!), EKG (QT-Verlängerung)",t:"Stationäre Gewichtsstabilisierung, Ernährungstherapie, KVT",p:"Gewichtsdokumentation, Mahlzeitenbegleitung, kein Kommentieren des Körpers, Herzmonitoring"},
{cat:"Psychiatrie",icon:"🌙",bg:"#EEEDFE",name:"Delir / Dämmerzustand",def:"Akute organische Hirnfunktionsstörung mit Bewusstseinsstörung. Häufig bei alten Menschen im Krankenhaus. Medizinischer Notfall — Ursache suchen!",u:"Organisch: Infekt, Medikamente, Alkoholentzug, Elektrolyte, Harnverhalt",s:"Bewusstseinstrübung, Desorientierung, Halluzinationen (optisch!), Unruhe oder Schläfrigkeit",r:"Hohes Alter, Demenz, Polypharmazie, Immobilität",d:"CAM-Score, Labor, Ausschluss Ursache",t:"Ursache behandeln! Haloperidol niedrig dosiert (symptomatisch)",p:"Orientierungshilfen (Uhr, Licht), ruhige Umgebung, Mobilisation, Fixierung vermeiden!"},
{cat:"Dermatologie",icon:"🌿",bg:"#EAF3DE",name:"Ekzem / Neurodermitis",def:"Chronisch-entzündliche atopische Dermatitis. Häufigste Hauterkrankung im Kindesalter. Juckreiz-Kratz-Zyklus durchbrechen!",u:"Filaggrin-Mutation (Barrierestörung), Th2-Immunreaktion, Trigger: Stress, Wolle",s:"Starker Juckreiz (nachts!), trockene gerötete schuppige Haut, Ekzem-Herde",r:"Atopische Trias, familiär, Stress, Allergene",d:"Klinische Diagnose, IgE, Allergietest (Pricktest)",t:"Kortikosteroide (akut), Calcineurin-Inhibitoren, Dupilumab",p:"Hautpflege (Basistherapie!), Juckreizlinderung, kühle Umgebung, Trigger meiden"},
{cat:"Dermatologie",icon:"🔴",bg:"#FAECE7",name:"Psoriasis (Schuppenflechte)",def:"Chronisch-entzündliche Autoimmunerkrankung. Nicht ansteckend! Beschleunigte Keratinozytenproliferation. Oft mit Psoriasis-Arthritis assoziiert.",u:"Autoimmun (T-Zell-vermittelt), genetisch (HLA-Cw6), Trigger: Stress, Infekte",s:"Silbrig-glänzende Schuppen auf rotem Grund, Ellenbogen, Knie, Kopfhaut, Tüpfelnägel",r:"Genetisch, Stress, Streptokokken, Rauchen, Alkohol",d:"Klinische Diagnose, PASI-Score, Biopsie bei Zweifel",t:"Topisch: Kortikosteroide, Vitamin-D-Analoga. Systemisch: Methotrexat, Biologika",p:"Hautpflege, Aufklärung (nicht ansteckend!), psychische Belastung wahrnehmen, Juckreiz lindern"},
{cat:"Dermatologie",icon:"🌡️",bg:"#FAEEDA",name:"Kontaktdermatitis",def:"Entzündliche Hautreaktion durch direkten Kontakt. Allergisch (Typ-IV, verzögert) oder toxisch-irritativ (sofort). Berufsrisiko in der Pflege!",u:"Allergisch: Nickel, Latex, Duftstoffe. Irritativ: Desinfektionsmittel, Seifen",s:"Rötung, Bläschen, Juckreiz, Schwellung — exakt am Kontaktbereich",r:"Pflegeberufe!, Atopie, Feuchtarbeiten, Latexallergie",d:"Epikutantest (Patch-Test), Anamnese",t:"Allergenvermeidung, Kortikosteroide topisch, Antihistaminika",p:"Schutzhandschuhe (Baumwolle unter Latex!), Hautschutzplan, Pflegecreme nach Desinfektion"},
{cat:"Dermatologie",icon:"💜",bg:"#EEEDFE",name:"Urtikaria (Nesselsucht)",def:"Akute (<6 Wochen) oder chronische (≥6 Wochen) Quaddel-Reaktion. Bei Angioödem: Anaphylaxiegefahr — Atemwege überwachen!",u:"IgE-vermittelt (Allergen), physikalisch (Kälte), idiopathisch (50%), Infekte",s:"Juckende Quaddeln (<24h flüchtig), Angioödem, bei Anaphylaxie: Hypotonie, Dyspnoe",r:"Allergie, Autoimmun, NSAR, ACE-Hemmer, Infekte",d:"Klinische Diagnose, IgE, Tryptase, Allergietest",t:"Antihistaminika (H1-Blocker), Kortikosteroide, Anaphylaxie: Adrenalin i.m.!",p:"Auslöser dokumentieren, Notfallset (Adrenalin-Autoinjektor) schulen, Angioödem: Atemwege!"},
{cat:"Dermatologie",icon:"🌊",bg:"#E1F5EE",name:"Akne vulgaris",def:"Chronisch-entzündliche Erkrankung der Talgdrüsenfollikel. Häufigste Hauterkrankung der Adoleszenz (>85%). Psychische Belastung ernst nehmen!",u:"Seborrhoe, Hyperkeratose, Propionibacterium acnes, Androgene",s:"Komedonen, Papeln, Pusteln, Zysten, Narben",r:"Pubertät, Androgene, Stress, Kortison-Therapie",d:"Klinische Diagnose, Schweregrade I–IV",t:"Topisch: Benzoylperoxid, Retinoide. Systemisch: Antibiotika, Isotretinoin",p:"Aufklärung (nicht ausdrücken!), schonende Hautpflege, psychische Unterstützung"},
{cat:"Dermatologie",icon:"🔵",bg:"#E6F1FB",name:"Rosacea",def:"Chronisch-entzündliche Gesichtserkrankung. Nicht heilbar, aber kontrollierbar. Augenbeteiligung (Rosacea ocularis) prüfen!",u:"Genetisch, Demodex-Milben, Gefäßdysregulation, Trigger: Hitze, Alkohol",s:"Dauerhaftes Gesichtserythem, Teleangiektasien, Papeln/Pusteln (ohne Komedonen!), Rhinophym",r:"Hellhäutig, Frauen 30–60 J., Stress, UV, Alkohol",d:"Klinische Diagnose, DLQI, Augenbeteiligung prüfen",t:"Topisch: Metronidazol, Ivermectin. Systemisch: Doxycyclin",p:"Trigger meiden (Alkohol, Hitze, Sonne), Lichtschutz, milde Hautpflege"},
{cat:"Wunden/Gefässe",icon:"🦵",bg:"#FAECE7",name:"Ulcus cruris arteriosum",def:"Arteriell bedingtes Beingeschwür durch pAVK. Sehr schmerzhaft. Kompression ist KONTRAINDIZIERT! Ohne Revaskularisation droht Amputation.",u:"pAVK → Durchblutungsstörung → Gewebeschaden",s:"Starke Schmerzen (Ruheschmerz!), trockene Nekrose, kalte blasse Haut",r:"Rauchen!, Diabetes, Hypertonie, Hypercholesterinämie",d:"ABI (<0,9 pathologisch), Doppler, Angiografie",t:"Revaskularisation (PTA, Bypass), Schmerztherapie, Wundversorgung",p:"Beine TIEF lagern!, Wärme, KEINE Kompression, Rauchstopp, Fußpflege"},
{cat:"Wunden/Gefässe",icon:"🦵",bg:"#E1F5EE",name:"Ulcus cruris venosum",def:"Venöses Beingeschwür durch CVI. Häufigste Ulkusform (70%). Medialer Unterschenkel. Wenig Schmerz. Kompression ist die Haupttherapie!",u:"CVI → venöse Hypertonie → Dermatoliposklerose → Ulkus",s:"Nässende Wunde, Ödeme, braun-livide Haut, Schmerzen gering",r:"Varikosis, Bewegungsmangel, Adipositas, langes Stehen",d:"Inspektion, Doppler, ABI (Ausschluss arteriell!)",t:"Kompressionstherapie (Hauptsäule!), feuchte Wundversorgung",p:"Kompressionsverband, Mobilisation (Wadenpumpe!), Beine hochlagern, Hautpflege"},
{cat:"Chirurgie/Geriatrie",icon:"🦴",bg:"#FAEEDA",name:"Fraktur",def:"Knochenbruch durch Trauma oder Osteoporose. Häufigste geriatrische Fraktur: proximale Femurfraktur. OP-Ziel: innerhalb 24h.",u:"Trauma, Sturz, Osteoporose (Insuffizienzfraktur)",s:"Schmerz, Schwellung, Fehlstellung, Bewegungseinschränkung",r:"Sturz, Osteoporose, hohes Alter, Kortison-Langzeittherapie",d:"Röntgen, CT bei komplexen Frakturen",t:"Konservativ (Gips) oder operativ (Osteosynthese, Endoprothese)",p:"Mobilisation früh!, Schmerzbeobachtung, Thromboseprophylaxe"},
{cat:"Chirurgie/Geriatrie",icon:"⚠️",bg:"#FAEEDA",name:"Sturzsyndrom",def:"Wiederkehrendes Stürzen älterer Menschen. Multifaktoriell. Post-Fall-Syndrom: Sturzangst → Inaktivität → erneuter Sturz.",u:"Muskelschwäche, Gleichgewichtsstörung, Medikamente, Sehminderung",s:"Wiederholte Stürze, Gangunsicherheit, Sturzangst",r:"Hohes Alter, Polypharmazie, Demenz, Parkinson",d:"Morse Fall Scale, Timed Up and Go, Medikamentencheck",t:"Physiotherapie, Medikamentenoptimierung, Hilfsmittel",p:"Rollator/Gehstock, Umgebungssicherheit, Hüftprotektoren, Schuhe prüfen"},
{cat:"Chirurgie/Geriatrie",icon:"🩹",bg:"#FCEBEB",name:"Dekubitus",def:"Druckbedingte Gewebeschädigung durch Ischämie. EPUAP Grad I–IV. Prävention hat höchste Priorität — meist vermeidbar!",u:"Anhaltender Druck → Ischämie → Zellnekrose",s:"Grad I: Rötung. II: Blase. III: Kraterwunde. IV: Nekrose bis Knochen",r:"Immobilität, Inkontinenz, Mangelernährung, Diabetes",d:"Inspektion, Braden-Skala (≤18 = Risiko), Fotodokumentation",t:"Druckentlastung, Wundversorgung nach Grad, Ernährungsoptimierung",p:"2-h-Umlagerung, Druckverteilungsmatratze, Hautpflege, Dokumentation"}
];

// ─── RENDER FUNCTION ───
function renderKB() {
  const container = document.getElementById('view-kb');
  if (!container) return;

  const CATS = ["Alle", ...[...new Set(KB_DATA.map(d => d.cat))]];
  let activeCat = "Alle", openCard = null;

  container.innerHTML = `
    <div style="padding:.5rem 1rem">
      <div style="font-family:Syne,sans-serif;font-weight:800;font-size:1.15rem;margin-bottom:.3rem">🩺 Krankheitsbild kompakt</div>
      <div style="font-size:.72rem;color:var(--muted);margin-bottom:.75rem">${KB_DATA.length} Krankheitsbilder · Ursache · Symptome · Pflege</div>
      <input id="kb-search" placeholder="Suche: Herzinfarkt, Schizophrenie, Psoriasis..."
        style="width:100%;padding:.5rem .85rem;border-radius:999px;border:1px solid var(--border);background:var(--card);color:var(--text);font-size:.82rem;font-family:DM Sans,sans-serif;outline:none;margin-bottom:.5rem"
        oninput="renderKBList()">
      <div id="kb-cats" style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.5rem"></div>
      <div id="kb-count" style="font-size:.7rem;color:var(--muted);margin-bottom:.5rem"></div>
      <div id="kb-list"></div>
    </div>`;

  function renderCats() {
    document.getElementById('kb-cats').innerHTML = CATS.map(c =>
      `<button onclick="setKBCat('${c}')" style="padding:.3rem .75rem;border-radius:999px;border:1px solid ${activeCat===c?'transparent':'var(--border)'};background:${activeCat===c?'var(--d2)':'var(--card)'};color:${activeCat===c?'#fff':'var(--muted)'};font-size:.68rem;font-weight:600;cursor:pointer">${c}</button>`
    ).join('');
  }

  window.setKBCat = function(c) {
    activeCat = c; openCard = null;
    renderCats(); renderKBList();
  };

  window.toggleKB = function(name) {
    openCard = openCard === name ? null : name;
    renderKBList();
    if (openCard) {
      setTimeout(() => {
        const el = document.getElementById('kbc_' + name.replace(/[\s\/().]/g,'_'));
        if (el) el.scrollIntoView({behavior:'smooth',block:'nearest'});
      }, 60);
    }
  };

  window.renderKBList = function() {
    const q = (document.getElementById('kb-search')||{value:''}).value.toLowerCase();
    const filtered = KB_DATA.filter(d => {
      const matchCat = activeCat === "Alle" || d.cat === activeCat;
      const matchQ = !q || [d.name,d.s,d.u,d.def,d.r].some(x => x.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
    document.getElementById('kb-count').textContent = filtered.length + ' Krankheitsbilder';
    if (!filtered.length) {
      document.getElementById('kb-list').innerHTML = '<div style="text-align:center;padding:2rem;color:var(--muted)">Keine Ergebnisse</div>';
      return;
    }
    document.getElementById('kb-list').innerHTML = filtered.map(d => {
      const id = 'kbc_' + d.name.replace(/[\s\/().]/g,'_');
      const isOpen = openCard === d.name;
      return `<div id="${id}" style="background:var(--card);border:1px solid var(--border);border-radius:14px;margin-bottom:7px;overflow:hidden">
        <div onclick="toggleKB('${d.name.replace(/'/g,"\\'")}',event)" style="padding:10px 12px;display:flex;align-items:center;gap:9px;cursor:pointer">
          <div style="width:32px;height:32px;border-radius:50%;background:${d.bg};display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0">${d.icon}</div>
          <div style="flex:1">
            <div style="font-size:.85rem;font-weight:600;color:var(--text)">${d.name}</div>
            <div style="font-size:.68rem;color:var(--muted)">${d.cat}</div>
          </div>
          <span style="font-size:.75rem;color:var(--muted);transition:transform .2s;transform:rotate(${isOpen?'180deg':'0deg'})"">▼</span>
        </div>
        ${isOpen ? `<div style="padding:9px 12px 12px;border-top:1px solid var(--border)">
          <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:7px 10px;margin-bottom:8px;font-size:.72rem;color:var(--muted);line-height:1.5;border-left:3px solid var(--d1)">${d.def}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px">
            <div style="background:#0d3b54;border:1px solid #1a5276;border-radius:10px;padding:7px 9px"><div style="font-size:.6rem;font-weight:700;text-transform:uppercase;color:#5dade2;margin-bottom:2px">Ursache</div><div style="font-size:.72rem;color:#aed6f1;line-height:1.4">${d.u}</div></div>
            <div style="background:#4a1515;border:1px solid #7b2020;border-radius:10px;padding:7px 9px"><div style="font-size:.6rem;font-weight:700;text-transform:uppercase;color:#f1948a;margin-bottom:2px">Symptome</div><div style="font-size:.72rem;color:#fadbd8;line-height:1.4">${d.s}</div></div>
            <div style="background:#4a3000;border:1px solid #7d5a00;border-radius:10px;padding:7px 9px"><div style="font-size:.6rem;font-weight:700;text-transform:uppercase;color:#f0b27a;margin-bottom:2px">Risikofaktoren</div><div style="font-size:.72rem;color:#fdebd0;line-height:1.4">${d.r}</div></div>
            <div style="background:#2d1b5e;border:1px solid #4a3090;border-radius:10px;padding:7px 9px"><div style="font-size:.6rem;font-weight:700;text-transform:uppercase;color:#c39bd3;margin-bottom:2px">Diagnostik</div><div style="font-size:.72rem;color:#e8daef;line-height:1.4">${d.d}</div></div>
            <div style="background:#0b3d1a;border:1px solid #1a6b2a;border-radius:10px;padding:7px 9px"><div style="font-size:.6rem;font-weight:700;text-transform:uppercase;color:#82e0aa;margin-bottom:2px">Therapie</div><div style="font-size:.72rem;color:#d5f5e3;line-height:1.4">${d.t}</div></div>
            <div style="background:#0a3d30;border:1px solid #0f6b50;border-radius:10px;padding:7px 9px;grid-column:1/-1"><div style="font-size:.6rem;font-weight:700;text-transform:uppercase;color:#76d7c4;margin-bottom:2px">Pflegerische Massnahmen</div><div style="font-size:.72rem;color:#d1f2eb;line-height:1.4">${d.p}</div></div>
          </div>
        </div>` : ''}
      </div>`;
    }).join('');
  };

  renderCats();
  renderKBList();
}
