/* ── DATA ── */

/* Conference Team — alphabetical by last name */
const TEAM_MEMBERS = [
  { name: "Madeline Dirube",  title: "TBD",                      org: "Westminster Christian School", color: "#5b72b0", init: "MD", linkedin: "https://www.linkedin.com/in/madeline-d-ab13a794/",       photo: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/701/user/large_user_3425064_620.jpg?resize=200,200" },
  { name: "Manya Glavach",    title: "TBD",                      org: "Westminster Christian School", color: "#B9975B", init: "MG", linkedin: "https://www.linkedin.com/in/manyaglavach/",                 photo: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/701/user/large_user_3553023_661.jpg?resize=200,200" },
  { name: "Scott Jones",      title: "Head of School",           org: "Westminster Christian School", color: "#2c5234", init: "SJ", linkedin: "https://www.linkedin.com/in/scott-jones-1a771812/",         photo: "https://media.licdn.com/dms/image/v2/C4D03AQGxZ-IRBBHHGA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516430043034?e=1781136000&v=beta&t=67JLf051Uqx-6d5TQl-3WIkGV7T0hXnBHIDBLwiMdAg" },
  { name: "David Medder",     title: "Associate Head of School", org: "Westminster Christian School", color: "#3d9970", init: "DM", linkedin: "https://www.linkedin.com/in/david-medder-021b9521b/",       photo: "" },
  { name: "Claudia Pastrana", title: "TBD",                      org: "Westminster Christian School", color: "#b34740", init: "CP", linkedin: "https://www.linkedin.com/in/claudia-pastrana-3252a480/",     photo: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/701/user/large_user_3454399_52.jpg?resize=200,200" },
  { name: "Omar Valerio",     title: "CIO",                      org: "Westminster Christian School", color: "#4c7d5c", init: "OV", linkedin: "https://www.linkedin.com/in/omar-valerio-mvp-43bb2617/",     photo: "https://media.licdn.com/dms/image/v2/C4D03AQEbQj_IM3kL0g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516771707250?e=1781136000&v=beta&t=c8oC014FIYrcOAFJqyRCnFODEOUHah9EQcvsMdJO454" },
  { name: "Linda Walker",     title: "Curriculum Director",      org: "Westminster Christian School", color: "#7c5c3c", init: "LW", linkedin: "https://www.linkedin.com/in/linda-walker-96535455/",         photo: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/701/user/large_user_3425173_911.jpg?resize=200,200" },
];

const SPEAKERS = [
  { name: "Jordanna Court",         role: "AI Education Specialist",    org: "Pine Crest School",           color: "#B9975B", init: "JC", linkedin: "https://www.linkedin.com/in/jordannacourt/", photo: "https://media.licdn.com/dms/image/v2/D4E03AQGiplutwyeW5A/profile-displayphoto-crop_800_800/B4EZnABeAoIUAI-/0/1759863234951?e=1781136000&v=beta&t=TAerFchqiUdX4mlncKpVRANwmOMyyzQjDKGIGBzYmfU" },
  { name: "Lisa Garrido",           role: "Biology Teacher",             org: "Westminster Christian School", color: "#2c5234", init: "LG", linkedin: "https://www.linkedin.com/in/lisa-garrido-bb5b1036/", photo: "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/701/user/large_user_3425075_646.jpg?resize=200,200" },
  { name: "Geri Gillespy",          role: "Senior Executive",            org: "Microsoft Elevate",            color: "#4c7d5c", init: "GG", linkedin: "https://www.linkedin.com/in/gerigillespy/", photo: "https://media.licdn.com/dms/image/v2/D5603AQFZcr7x8WIA1A/profile-displayphoto-crop_800_800/B56ZiVUsZXHkAI-/0/1754851888579?e=1781136000&v=beta&t=kYxqJJFUt2Kg8pJo-2lVbyZthSuwzFbY8MmFFCJHVMc" },
  { name: "Jessie Metzger",         role: "AI Education Specialist",    org: "Pine Crest School",            color: "#5b72b0", init: "JM", linkedin: "https://www.linkedin.com/in/jessiemetzger/", photo: "https://media.licdn.com/dms/image/v2/C5603AQGB8BKl_6Cu-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1555465007486?e=1781136000&v=beta&t=kDLYrC8CLn7qN4HTpFgevntM5Jx-ko_8FAwk99eiUSM" },
  { name: "Kelly Schuster-Paredes", role: "AI Education Specialist",    org: "Pine Crest School",            color: "#b34740", init: "KS", linkedin: "https://www.linkedin.com/in/kelly-schuster-paredes-4b887264/", photo: "https://media.licdn.com/dms/image/v2/C4D03AQHhCl_nmpRT2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1633690650159?e=1781136000&v=beta&t=Ja2wiprbSEg3qzcB4_547PZN1f-gus_KuFCGn0qms5g" },
  { name: "Victoria Rose Thompson", role: "Education Strategist",       org: "CDW",                          color: "#3d9970", init: "VT", linkedin: "https://www.linkedin.com/in/victoriarosethompson/", photo: "https://media.licdn.com/dms/image/v2/D4E03AQEgD9muALquUg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692372577418?e=1781136000&v=beta&t=QLwdomMgjyISRN1HhS1qtzNoUXasHhyIWFLc9Rb_qNg" },
];

const BREAKOUT_SESSIONS = [
  {
    id: 101,
    category: "Learn",
    grade: "All Grade Levels",
    title: "Cultivating Critical AI Literacy in the Classroom",
    desc: "This hands-on session will equip educators with practical strategies for teaching students how to become analytical users of generative AI across various subject areas. Attendees will explore essential AI Literacy skills, including prompt engineering and critical analysis, to help students move from passive consumption to active collaboration. Key concepts covered include algorithmic bias analysis, data synthesis, and the ethical use of AI. Participants will leave with lesson ideas designed to empower students to leverage AI as a sophisticated research and thinking partner, developing crucial critical thinking and discernment skills for the new era of education.",
    speaker: { name: "Jordanna Court", role: "AI Education Specialist", org: "Pine Crest School", init: "JC", color: "#B9975B", linkedin: "https://www.linkedin.com/in/jordannacourt/" },
  },
  {
    id: 102,
    category: "Learn",
    grade: "PreK – 2",
    title: "Conceptual Introduction to AI for our Youngest Learners",
    desc: "A gentle, age-appropriate exploration of AI concepts designed for PreK–2 classrooms. Educators will leave with ways to introduce foundational AI ideas through stories, play, and early literacy experiences.",
    speaker: { name: "Jordanna Court", role: "AI Education Specialist", org: "Pine Crest School", init: "JC", color: "#B9975B", linkedin: "https://www.linkedin.com/in/jordannacourt/" },
  },
  {
    id: 103,
    category: "Apply",
    grade: "All Grade Levels",
    title: "Using AI in Math Classrooms (Snorkl and FlintK12)",
    desc: "Practical strategies for using Snorkl across all grade levels and FlintK12 for grades 4 and up. Learn how to leverage AI tools to support math fluency, student agency, and meaningful computation practice.",
    speaker: { name: "Jordanna Court", role: "AI Education Specialist", org: "Pine Crest School", init: "JC", color: "#B9975B", linkedin: "https://www.linkedin.com/in/jordannacourt/" },
  },
  {
    id: 104,
    category: "Apply",
    grade: "All Grade Levels",
    title: "Build Your Own AI Classroom Assistant",
    desc: "Design your own classroom assistant using AI tools, templates, and workflows that make planning, differentiation, and student support more manageable across subjects.",
    speaker: { name: "Kelly Schuster-Paredes", role: "AI Education Specialist", org: "Pine Crest School", init: "KS", color: "#b34740", linkedin: "https://www.linkedin.com/in/kelly-schuster-paredes-4b887264/" },
  },
  {
    id: 105,
    category: "Learn",
    grade: "Middle and Upper School",
    title: "Building Proficiency in Coding through Experimentation with Art and Music",
    desc: "Explore how coding proficiency grows when students design with art and music. This session highlights creative, project-based learning pathways for middle and upper school learners.",
    speaker: { name: "Kelly Schuster-Paredes", role: "AI Education Specialist", org: "", init: "KS", color: "#b34740", linkedin: "https://www.linkedin.com/in/kelly-schuster-paredes-4b887264/" },
  },
  {
    id: 106,
    category: "Apply",
    grade: "Middle and Upper School",
    title: "Flint K12",
    desc: "An applied walkthrough of Flint K12 that demonstrates how AI can support student inquiry, feedback cycles, and personalized learning in middle and upper school classrooms.",
    speaker: { name: "Kelly Schuster-Paredes", role: "AI Education Specialist", org: "", init: "KS", color: "#b34740", linkedin: "https://www.linkedin.com/in/kelly-schuster-paredes-4b887264/" },
  },
  {
    id: 107,
    category: "Apply",
    grade: "All Grade Levels",
    title: "Differentiating Instruction with AI",
    desc: "Discover approaches to use AI for personalized learning pathways, flexible scaffolding, and meaningful differentiation that honors each learner's strengths and needs.",
    speaker: { name: "Jessie Metzger", role: "AI Education Specialist", org: "Pine Crest School", init: "JM", color: "#5b72b0", linkedin: "https://www.linkedin.com/in/jessiemetzger/" },
  },
  {
    id: 108,
    category: "Discern",
    grade: "Administrator Session",
    title: "A Continuous Framework for Sustainable AI Growth",
    desc: "A leadership-focused session for administrators and instructional leaders exploring long-term frameworks for embedding AI thoughtfully and sustainably across school culture and curriculum.",
    speaker: { name: "Jessie Metzger", role: "AI Education Specialist", org: "Pine Crest School", init: "JM", color: "#5b72b0", linkedin: "https://www.linkedin.com/in/jessiemetzger/" },
  },
];

/* ── STATE ── */
const STORAGE_KEY = "aiwithpurpose2026_registrations";
const GAS_ENDPOINT = ""; // Paste your Google Apps Script Web App URL here

let pendingSessionId = null;
let activeBreakoutCat = "All";

/* ── STORAGE ── */
function loadRegistrations() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
  catch { return {}; }
}

function saveRegistrations(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function isRegistered(sessionId, email) {
  const regs = loadRegistrations();
  return !!(regs[sessionId] && regs[sessionId].some(r => r.email.toLowerCase() === email.toLowerCase()));
}

function getUserRegistration(sessionId) {
  const regs = loadRegistrations();
  return regs[sessionId] ? regs[sessionId][0] : null;
}

function registerForSession(sessionId, name, email) {
  const regs = loadRegistrations();
  if (!regs[sessionId]) regs[sessionId] = [];
  regs[sessionId].push({ name, email: email.toLowerCase(), ts: Date.now() });
  saveRegistrations(regs);

  if (GAS_ENDPOINT) {
    const s = BREAKOUT_SESSIONS.find(x => x.id === sessionId);
    fetch(GAS_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        sessionId: s.id, sessionTitle: s.title, category: s.category,
        speaker: s.speaker.name, org: s.speaker.org,
        name, email: email.toLowerCase()
      })
    }).catch(() => {});
  }
}

/* ── RENDER BREAKOUTS ── */
function renderBreakouts() {
  const grid = document.getElementById("breakoutGrid");
  const filtered = activeBreakoutCat === "All"
    ? BREAKOUT_SESSIONS
    : BREAKOUT_SESSIONS.filter(b => b.category === activeBreakoutCat);

  grid.innerHTML = filtered.map(b => {
    const regObj = getUserRegistration(b.id);
    const userRegistered = regObj !== null && sessionStorage.getItem("lastEmail") &&
      regObj.email.toLowerCase() === (sessionStorage.getItem("lastEmail") || "").toLowerCase();
    const sp = b.speaker;
    return `
      <div class="breakout-card ${userRegistered ? 'registered' : ''}" id="card-${b.id}">
        <div class="breakout-card-top">
          <div class="breakout-tags">
            <span class="cat-pill cat-${b.category}">${b.category}</span>
            ${b.grade ? `<span class="grade-pill">${b.grade}</span>` : ''}
          </div>
          <h3>${b.title}</h3>
          <div class="speaker-top">
            <div class="bs-avatar" style="background:${sp.color}">${sp.init}</div>
            <div>
              <div class="bs-name">${sp.name}</div>
              ${sp.org ? `<div class="bs-role">${sp.org}</div>` : ''}
            </div>
          </div>
        </div>
        <div class="desc">${b.desc}</div>
        <a class="breakout-speaker" href="${sp.linkedin}" target="_blank" rel="noopener noreferrer">
          <div>
            <div class="bs-name">${sp.name}</div>
            <div class="bs-role">${sp.role}</div>
            ${sp.org ? `<div class="bs-role">${sp.org}</div>` : ''}
            <div class="bs-linkedin">View LinkedIn →</div>
          </div>
        </a>
        ${userRegistered
          ? `<button class="register-btn registered" disabled>You are Registered</button>`
          : `<button class="register-btn" onclick="openModal(${b.id})">Register for Session</button>`}
      </div>`;
  }).join("") || `<p style="color:var(--muted);">No sessions in this category yet.</p>`;
}

document.getElementById("breakoutFilter").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll("#breakoutFilter .filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeBreakoutCat = btn.dataset.cat;
  renderBreakouts();
});

/* ── RENDER SPEAKERS ── */
function renderSpeakers() {
  document.getElementById("speakersGrid").innerHTML = SPEAKERS.map(sp => {
    const avatar = sp.photo
      ? `<img class="speaker-avatar speaker-photo" src="${sp.photo}" alt="${sp.name}" />`
      : `<div class="speaker-avatar speaker-initials" style="background:${sp.color}">${sp.init}</div>`;

    return `
      <div class="speaker-card">
        ${avatar}
        <div class="speaker-meta">
          <h3>${sp.name}</h3>
          ${sp.org ? `<p class="speaker-school">${sp.org}</p>` : ''}
          ${sp.role ? `<p class="speaker-title">${sp.role}</p>` : ''}
        </div>
        ${sp.linkedin ? `<a class="speaker-link" href="${sp.linkedin}" target="_blank" rel="noopener noreferrer">View LinkedIn →</a>` : ''}
      </div>
    `;
  }).join("");
}

/* ── MODAL ── */
function openModal(sessionId) {
  pendingSessionId = sessionId;
  const s = BREAKOUT_SESSIONS.find(x => x.id === sessionId);
  document.getElementById("modalSessionName").textContent = `"${s.title}"`;
  document.getElementById("inputName").value = "";
  document.getElementById("inputEmail").value = sessionStorage.getItem("lastEmail") || "";
  document.getElementById("nameError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
  document.getElementById("duplicateError").style.display = "none";
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("inputName").focus();
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  pendingSessionId = null;
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* ── FORM SUBMIT ── */
document.getElementById("registrationForm").addEventListener("submit", e => {
  e.preventDefault();
  const name  = document.getElementById("inputName").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  let valid = true;

  document.getElementById("nameError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
  document.getElementById("duplicateError").style.display = "none";

  if (!name) {
    document.getElementById("nameError").style.display = "block";
    valid = false;
  }
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRx.test(email)) {
    document.getElementById("emailError").style.display = "block";
    valid = false;
  }
  if (!valid) return;

  if (isRegistered(pendingSessionId, email)) {
    const err = document.getElementById("duplicateError");
    err.textContent = `${email} is already registered for this session.`;
    err.style.display = "block";
    return;
  }

  registerForSession(pendingSessionId, name, email);
  sessionStorage.setItem("lastEmail", email.toLowerCase());

  const s = BREAKOUT_SESSIONS.find(x => x.id === pendingSessionId);
  closeModal();
  renderBreakouts();
  showToast(`Registered! Confirmation for "${s.title}" will be sent to ${email}.`);
});

/* ── TOAST ── */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 5000);
}

/* ── RENDER CONFERENCE TEAM ── */
function renderTeam() {
  document.getElementById("teamGrid").innerHTML = TEAM_MEMBERS.map(m => {
    const avatar = m.photo
      ? `<img class="speaker-avatar speaker-photo" src="${m.photo}" alt="${m.name}" />`
      : `<div class="speaker-avatar speaker-initials" style="background:${m.color}">${m.init}</div>`;
    return `
      <div class="speaker-card">
        ${avatar}
        <div class="speaker-meta">
          <h3>${m.name}</h3>
          ${m.org  ? `<p class="speaker-school">${m.org}</p>`  : ''}
          ${m.title ? `<p class="speaker-title">${m.title}</p>` : ''}
        </div>
        ${m.linkedin ? `<a class="speaker-link" href="${m.linkedin}" target="_blank" rel="noopener noreferrer">View LinkedIn →</a>` : ''}
      </div>
    `;
  }).join("");
}

/* ── INIT ── */
renderBreakouts();
renderSpeakers();
renderTeam();
