/**
 * PflegeLearn – Progress Tracking System
 * Sauvegarde automatiquement la progression dans localStorage
 * À injecter dans PflegeLearn_V5.html
 */

const PL_Progress = (() => {
  const KEY = 'pl_progress';
  const SESSION_KEY = 'pl_session';

  // ─── Charger les données
  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {
        domains: {},       // progression par domaine
        modules: {},       // modules complétés
        cards: {},         // cartes vues
        qcm: {},           // QCM répondus
        points: 0,
        streak: 0,
        lastSeen: null,
        lastModule: null,  // reprendre là où on s'est arrêté
        lastDomain: null,
      };
    } catch { return {}; }
  }

  // ─── Sauvegarder
  function save(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch {}
  }

  // ─── Marquer une carte comme vue
  function markCardSeen(cardId, domainId) {
    const d = load();
    if (!d.cards) d.cards = {};
    d.cards[cardId] = true;
    if (!d.domains) d.domains = {};
    if (!d.domains[domainId]) d.domains[domainId] = { cardsSeen: 0, qcmDone: 0 };
    d.domains[domainId].cardsSeen = (d.domains[domainId].cardsSeen || 0) + 1;
    d.lastSeen = Date.now();
    save(d);
  }

  // ─── Marquer un QCM comme répondu
  function markQCMDone(qcmId, domainId, correct) {
    const d = load();
    if (!d.qcm) d.qcm = {};
    d.qcm[qcmId] = { correct, ts: Date.now() };
    if (!d.domains) d.domains = {};
    if (!d.domains[domainId]) d.domains[domainId] = { cardsSeen: 0, qcmDone: 0 };
    d.domains[domainId].qcmDone = (d.domains[domainId].qcmDone || 0) + 1;
    if (correct) d.points = (d.points || 0) + 10;
    d.lastSeen = Date.now();
    save(d);
    updateUI();
  }

  // ─── Sauvegarder position actuelle
  function savePosition(domainId, moduleId) {
    const d = load();
    d.lastDomain = domainId;
    d.lastModule = moduleId;
    d.lastSeen = Date.now();
    save(d);
  }

  // ─── Obtenir la dernière position
  function getLastPosition() {
    const d = load();
    return { domain: d.lastDomain, module: d.lastModule };
  }

  // ─── Calculer progression par domaine (%)
  function getDomainProgress(domainId, totalCards, totalQCM) {
    const d = load();
    const dom = d.domains?.[domainId] || {};
    const cardPct = totalCards > 0 ? Math.min(100, Math.round((dom.cardsSeen || 0) / totalCards * 100)) : 0;
    const qcmPct = totalQCM > 0 ? Math.min(100, Math.round((dom.qcmDone || 0) / totalQCM * 100)) : 0;
    return Math.round((cardPct + qcmPct) / 2);
  }

  // ─── Obtenir progression globale
  function getGlobalProgress(domains) {
    if (!domains || domains.length === 0) return 0;
    const total = domains.reduce((sum, d) => sum + getDomainProgress(d.id, d.totalCards, d.totalQCM), 0);
    return Math.round(total / domains.length);
  }

  // ─── Mettre à jour le streak
  function updateStreak() {
    const d = load();
    const today = new Date().toDateString();
    const lastDate = d.lastSeen ? new Date(d.lastSeen).toDateString() : null;
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (lastDate === today) return d.streak || 0;
    if (lastDate === yesterday) {
      d.streak = (d.streak || 0) + 1;
    } else if (lastDate !== today) {
      d.streak = 1;
    }
    d.lastSeen = Date.now();
    save(d);
    return d.streak;
  }

  // ─── Mettre à jour l'UI
  function updateUI() {
    const d = load();
    const streakEl = document.getElementById('streak-val');
    const ptsEl = document.getElementById('pts-val');
    if (streakEl) streakEl.textContent = d.streak || 0;
    if (ptsEl) ptsEl.textContent = d.points || 0;
  }

  // ─── Réinitialiser (pour tests)
  function reset() {
    localStorage.removeItem(KEY);
    updateUI();
  }

  // ─── Obtenir toutes les données (pour dashboard admin)
  function getAll() {
    return load();
  }

  // ─── Afficher le toast "Reprendre là où tu t'es arrêté"
  function showResumeToast(onResume) {
    const pos = getLastPosition();
    if (!pos.domain || !pos.module) return;

    const toast = document.createElement('div');
    toast.style.cssText = `
      position:fixed;bottom:90px;left:50%;transform:translateX(-50%);
      background:#141c2e;border:1px solid rgba(13,148,136,.3);
      border-radius:14px;padding:.75rem 1rem;
      display:flex;align-items:center;gap:.75rem;
      font-size:.82rem;z-index:999;box-shadow:0 8px 32px rgba(0,0,0,.4);
      animation:fadeUp .3s ease;max-width:320px;width:90%;
    `;
    toast.innerHTML = `
      <span style="font-size:1.2rem">▶️</span>
      <div style="flex:1">
        <div style="font-weight:700;color:rgba(255,255,255,.9);font-size:.8rem">Weitermachen?</div>
        <div style="color:rgba(255,255,255,.4);font-size:.7rem;margin-top:.1rem">Dort weitermachen, wo du aufgehört hast</div>
      </div>
      <button id="pl-resume-btn" style="background:#0d9488;border:none;color:#fff;border-radius:8px;padding:.35rem .65rem;font-size:.75rem;cursor:pointer;font-weight:700">Ja!</button>
      <button id="pl-dismiss-btn" style="background:none;border:none;color:rgba(255,255,255,.3);font-size:1rem;cursor:pointer;padding:.2rem">✕</button>
    `;
    document.body.appendChild(toast);

    document.getElementById('pl-resume-btn').onclick = () => {
      toast.remove();
      if (onResume) onResume(pos.domain, pos.module);
    };
    document.getElementById('pl-dismiss-btn').onclick = () => toast.remove();

    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 8000);
  }

  // ─── Init au chargement
  function init(onResume) {
    updateStreak();
    updateUI();
    setTimeout(() => showResumeToast(onResume), 1500);
  }

  return { init, markCardSeen, markQCMDone, savePosition, getLastPosition, getDomainProgress, getGlobalProgress, updateUI, reset, getAll };
})();

// Export global
window.PL_Progress = PL_Progress;
