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
  { name: "Loralyn Pybas",          role: "Middle School Language Arts Teacher", org: "Westminster Christian School", color: "#7c5c3c", init: "LP", linkedin: "", photo: "" },
  { name: "Sarah Cline",            role: "Elementary Teacher",          org: "Westminster Christian School", color: "#5b72b0", init: "SC", linkedin: "", photo: "" },
  { name: "Michelle Brito",         role: "Elementary Teacher",          org: "Westminster Christian School", color: "#b34740", init: "MB", linkedin: "", photo: "" },
  { name: "Maggie Izquierdo",       role: "Educator",                    org: "Westminster Christian School", color: "#3d9970", init: "MI", linkedin: "", photo: "" },
  { name: "Angie Spivak Lopez",    role: "Keynote Speaker",             org: "",                             color: "#B9975B", init: "AL", linkedin: "", photo: "" },
  { name: "Katie Moon",            role: "Worship Leader",              org: "Westminster Christian School", color: "#5b72b0", init: "KM", linkedin: "", photo: "" },
];

/* Attending schools — alphabetical (sort by first significant word, ignoring "The") */
const ATTENDING_SCHOOLS = [
  { name: "Avant School of Excellence",  url: "https://avantschoolsfloridacity.org/", logo: "", color: "#2c5234", init: "AS" },
  { name: "The Divine Savior School",    url: "https://www.thedivinesaviorschool.com/",                                      logo: "", color: "#B9975B", init: "DS" },
  { name: "Holy Cross Lutheran School",  url: "https://www.holycrosslions.org/",                                      logo: "", color: "#5b72b0", init: "HC" },
  { name: "King's Christian School",     url: "https://www.kcsmiami.com/",                                      logo: "", color: "#4c7d5c", init: "KC" },
  { name: "KUMC Preschool",             url: "https://www.kendallchurch.org/preschool.php",                                      logo: "", color: "#b34740", init: "KP" },
];

const SESSION_TIMES = { 1: "8:45–9:30 AM", 2: "9:40–10:25 AM", 3: "10:35–11:20 AM" };

const FULL_SCHEDULE = [
  { time: "7:30–8:00 AM",     event: "Breakfast & Check-In",      desc: "Participants arrive, enjoy breakfast, connect with colleagues, and pick up conference materials.",                     location: "Breezeway / SAC",         type: "logistics" },
  { time: "8:00–8:05 AM",     event: "Welcome & Opening Remarks", desc: "Opening greeting, conference overview, and setting the tone and purpose for the day.",                               location: "Lighthouse",              type: "plenary",  speaker: "TBD" },
  { time: "8:05–8:15 AM",     event: "Worship",                   desc: "A time of worship to center hearts and minds, reflecting our Christ-centered mission.",                               location: "Lighthouse",              type: "plenary",  speaker: "Katie Moon" },
  { time: "8:15–8:30 AM",     event: "Keynote Address",           desc: "Vision-setting keynote focused on AI with purpose, wisdom, and excellence in Christian education.",                   location: "Lighthouse",              type: "keynote",  speaker: "Angie Spivak Lopez" },
  { time: "8:45–9:30 AM",     event: "Breakout Session 1",        desc: "Choice-based sessions offering practical strategies, foundational knowledge, or classroom applications of AI.",       location: "Assigned Breakout Rooms", type: "breakout", slot: 1 },
  { time: "9:40–10:25 AM",    event: "Breakout Session 2",        desc: "Continued learning through focused sessions aligned to different roles, grade levels, or strands.",                  location: "Assigned Breakout Rooms", type: "breakout", slot: 2 },
  { time: "10:35–11:20 AM",   event: "Breakout Session 3",        desc: "Final round of breakout sessions emphasizing creative, ethical, and Christ-centered use of AI.",                     location: "Assigned Breakout Rooms", type: "breakout", slot: 3 },
  { time: "11:25 AM–1:00 PM", event: "Lunch & AI Expo",           desc: "Lunch, networking, and time to explore resources, information tables, and conference handouts.",                     location: "Breezeway / SAC",         type: "logistics" },
];

const REGISTRATION_URL = "https://forms.office.com/r/c7MKTGSTdS";

const EXPO_TABLES = [
  {
    org: "Pine Crest School",
    color: "#B9975B",
    init: "PC",
    logo: "",
    headline: "Pine Crest Innovation Institute",
    desc: "Learn more about Pine Crest's Innovation Institute and how to take educators — and students — from beginner to advanced in AI. Explore their programs, resources, and pathways for deepening AI fluency at every level.",
  },
  {
    org: "Microsoft",
    color: "#4c7d5c",
    init: "MS",
    logo: "",
    headline: "Microsoft in Education",
    desc: "Discover what it means to be a Microsoft school. Learn about the tools, training, and partnership opportunities available to schools and educators through Microsoft's education programs.",
  },
  {
    org: "Westminster Christian School",
    color: "#2c5234",
    init: "WCS",
    logo: "https://csfla.org/assets/images/schools/logos/westminster-christian-logo.png",
    headline: "Westminster Christian School — TBD",
    desc: "Meet the WCS team and learn how to innovate with Christ at the center. Discover how Westminster integrates faith, excellence, and emerging technology to form the next generation of ambassadors.",
  },
];

const BREAKOUT_SESSIONS = [
  {
    id: 101, category: "Learn", grade: "All Grade Levels",
    slot: 1, room: 2, capacity: 50,
    title: "Cultivating Critical AI Literacy in the Classroom",
    desc: "This hands-on session will equip educators with practical strategies for teaching students how to become analytical users of generative AI across various subject areas. Attendees will explore essential AI Literacy skills, including prompt engineering and critical analysis, to help students move from passive consumption to active collaboration. Key concepts covered include algorithmic bias analysis, data synthesis, and the ethical use of AI. Participants will leave with lesson ideas designed to empower students to leverage AI as a sophisticated research and thinking partner, developing crucial critical thinking and discernment skills for the new era of education.",
    speaker: { name: "Jordanna Court", role: "AI Education Specialist", org: "Pine Crest School", init: "JC", color: "#B9975B", linkedin: "https://www.linkedin.com/in/jordannacourt/" },
  },
  {
    id: 102, category: "Learn", grade: "PreK – 2",
    slot: 2, room: 3, capacity: 50,
    title: "Conceptual Introduction to AI for our Youngest Learners",
    desc: "A gentle, age-appropriate exploration of AI concepts designed for PreK–2 classrooms. Educators will leave with ways to introduce foundational AI ideas through stories, play, and early literacy experiences.",
    speaker: { name: "Jordanna Court", role: "AI Education Specialist", org: "Pine Crest School", init: "JC", color: "#B9975B", linkedin: "https://www.linkedin.com/in/jordannacourt/" },
  },
  {
    id: 103, category: "Equip", grade: "All Grade Levels",
    slot: 3, room: 3, capacity: 50,
    title: "Using AI in Math Classrooms (Snorkl and FlintK12)",
    desc: "Practical strategies for using Snorkl across all grade levels and FlintK12 for grades 4 and up. Learn how to leverage AI tools to support math fluency, student agency, and meaningful computation practice.",
    speaker: { name: "Jordanna Court", role: "AI Education Specialist", org: "Pine Crest School", init: "JC", color: "#B9975B", linkedin: "https://www.linkedin.com/in/jordannacourt/" },
  },
  {
    id: 104, category: "Equip", grade: "All Grade Levels",
    slot: 1, room: 3, capacity: 50,
    title: "Build Your Own AI Classroom Assistant",
    desc: "Design your own classroom assistant using AI tools, templates, and workflows that make planning, differentiation, and student support more manageable across subjects.",
    speaker: { name: "Kelly Schuster-Paredes", role: "AI Education Specialist", org: "Pine Crest School", init: "KS", color: "#b34740", linkedin: "https://www.linkedin.com/in/kelly-schuster-paredes-4b887264/" },
  },
  {
    id: 105, category: "Learn", grade: "Middle and Upper School",
    slot: 2, room: 4, capacity: 50,
    title: "Building Proficiency in Coding through Experimentation with Art and Music",
    desc: "Explore how coding proficiency grows when students design with art and music. This session highlights creative, project-based learning pathways for middle and upper school learners.",
    speaker: { name: "Kelly Schuster-Paredes", role: "AI Education Specialist", org: "", init: "KS", color: "#b34740", linkedin: "https://www.linkedin.com/in/kelly-schuster-paredes-4b887264/" },
  },
  {
    id: 106, category: "Equip", grade: "Middle and Upper School",
    slot: 3, room: 4, capacity: 50,
    title: "Flint K12",
    desc: "An applied walkthrough of Flint K12 that demonstrates how AI can support student inquiry, feedback cycles, and personalized learning in middle and upper school classrooms.",
    speaker: { name: "Kelly Schuster-Paredes", role: "AI Education Specialist", org: "", init: "KS", color: "#b34740", linkedin: "https://www.linkedin.com/in/kelly-schuster-paredes-4b887264/" },
  },
  {
    id: 107, category: "Equip", grade: "All Grade Levels",
    slot: 2, room: 5, capacity: 50,
    title: "Differentiating Instruction with AI",
    desc: "Discover approaches to use AI for personalized learning pathways, flexible scaffolding, and meaningful differentiation that honors each learner's strengths and needs.",
    speaker: { name: "Jessie Metzger", role: "AI Education Specialist", org: "Pine Crest School", init: "JM", color: "#5b72b0", linkedin: "https://www.linkedin.com/in/jessiemetzger/" },
  },
  {
    id: 108, category: "Aspire", grade: "Administrator Session",
    slot: 3, room: 5, capacity: 50,
    title: "A Continuous Framework for Sustainable AI Growth",
    desc: "A leadership-focused session for administrators and instructional leaders exploring long-term frameworks for embedding AI thoughtfully and sustainably across school culture and curriculum.",
    speaker: { name: "Jessie Metzger", role: "AI Education Specialist", org: "Pine Crest School", init: "JM", color: "#5b72b0", linkedin: "https://www.linkedin.com/in/jessiemetzger/" },
  },
  {
    id: 109, category: "Equip", grade: "High School",
    slot: 2, room: 6, capacity: 25,
    title: "AI in the High School Science Classroom",
    desc: "Explore practical strategies for integrating AI into high school science — from data analysis and lab reporting to student inquiry and research assistance. Leave with concrete ideas ready for this fall.",
    speaker: { name: "Lisa Garrido", role: "Biology Teacher", org: "Westminster Christian School", init: "LG", color: "#2c5234", linkedin: "https://www.linkedin.com/in/lisa-garrido-bb5b1036/" },
  },
  {
    id: 110, category: "Equip", grade: "Middle School",
    slot: 2, room: 7, capacity: 25,
    title: "AI in the Middle School Language Arts Classroom",
    desc: "Discover how AI can support writing instruction, reading comprehension, and student voice in the middle school LA classroom. This session offers concrete examples and classroom-tested strategies.",
    speaker: { name: "Loralyn Pybas", role: "Middle School Language Arts Teacher", org: "Westminster Christian School", init: "LP", color: "#7c5c3c", linkedin: "" },
  },
  {
    id: 111, category: "Equip", grade: "Elementary",
    slot: 3, room: 6, capacity: 25,
    title: "AI in the Elementary Language Arts Classroom",
    desc: "A collaborative session exploring how AI tools can enrich early literacy, storytelling, and language development in elementary classrooms — with practical take-aways for the year ahead.",
    speaker:  { name: "Sarah Cline",    role: "Elementary Teacher", org: "Westminster Christian School", init: "SC", color: "#5b72b0", linkedin: "" },
    speaker2: { name: "Michelle Brito", role: "Elementary Teacher", org: "Westminster Christian School", init: "MB", color: "#b34740", linkedin: "" },
  },
  {
    id: 112, category: "Aspire", grade: "All Grade Levels",
    slot: 3, room: 7, capacity: 25,
    title: "Ethics in AI: A Christian Educator's Framework",
    desc: "How do we equip students to navigate the moral complexities of artificial intelligence through a biblical lens? This session provides a framework for teaching AI ethics grounded in Christian truth and character formation.",
    speaker: { name: "Maggie Izquierdo", role: "Educator", org: "Westminster Christian School", init: "MI", color: "#3d9970", linkedin: "" },
  },
  {
    id: 113, category: "Learn", grade: "Westminster Faculty & Staff",
    slot: 1, room: 1, capacity: 300,
    note: "Required for Westminster faculty and staff. Open to any educator interested in learning more about what it means to be a Microsoft Showcase School.",
    title: "Microsoft Showcase School Kickoff: Ready for 2026–2027",
    desc: "An essential session for Westminster faculty and staff as we launch another year as a Microsoft Showcase School. Learn what the designation means, what's new for 2026–2027, and how to make the most of our continued Microsoft partnership.",
    speaker:  { name: "Geri Gillespy",          role: "Senior Executive",     org: "Microsoft Elevate", init: "GG", color: "#4c7d5c", linkedin: "https://www.linkedin.com/in/gerigillespy/" },
    speaker2: { name: "Victoria Rose Thompson", role: "Education Strategist", org: "CDW",               init: "VT", color: "#3d9970", linkedin: "https://www.linkedin.com/in/victoriarosethompson/" },
  },
  {
    id: 114, category: "Equip", grade: "All Grade Levels",
    slot: 2, room: 2, capacity: 50,
    title: "AI in Education: Strategies & Solutions with CDW",
    desc: "Victoria Rose Thompson from CDW shares practical strategies for implementing AI tools in your school — from procurement to pedagogy. Learn how CDW supports schools in building sustainable, effective AI ecosystems.",
    speaker: { name: "Victoria Rose Thompson", role: "Education Strategist", org: "CDW", init: "VT", color: "#3d9970", linkedin: "https://www.linkedin.com/in/victoriarosethompson/" },
  },
  {
    id: 115, category: "Equip", grade: "All Grade Levels",
    slot: 3, room: 2, capacity: 50,
    title: "AI in Education: Strategies & Solutions with CDW",
    desc: "Victoria Rose Thompson from CDW shares practical strategies for implementing AI tools in your school — from procurement to pedagogy. Learn how CDW supports schools in building sustainable, effective AI ecosystems.",
    speaker: { name: "Victoria Rose Thompson", role: "Education Strategist", org: "CDW", init: "VT", color: "#3d9970", linkedin: "https://www.linkedin.com/in/victoriarosethompson/" },
  },
  {
    id: 116, category: "Equip", grade: "All Grade Levels",
    slot: 2, room: 1, capacity: 50,
    title: "Microsoft Elevate: AI Tools for Educators",
    desc: "Geri Gillespy from Microsoft Elevate walks educators through the latest AI tools in the Microsoft ecosystem — including Copilot, Teams, and more — with hands-on applications for classroom and administration.",
    speaker: { name: "Geri Gillespy", role: "Senior Executive", org: "Microsoft Elevate", init: "GG", color: "#4c7d5c", linkedin: "https://www.linkedin.com/in/gerigillespy/" },
  },
  {
    id: 117, category: "Equip", grade: "All Grade Levels",
    slot: 3, room: 1, capacity: 50,
    title: "Microsoft Elevate: AI Tools for Educators",
    desc: "Geri Gillespy from Microsoft Elevate walks educators through the latest AI tools in the Microsoft ecosystem — including Copilot, Teams, and more — with hands-on applications for classroom and administration.",
    speaker: { name: "Geri Gillespy", role: "Senior Executive", org: "Microsoft Elevate", init: "GG", color: "#4c7d5c", linkedin: "https://www.linkedin.com/in/gerigillespy/" },
  },
];

/* ── STATE ── */
let activeBreakoutCat = "All";
let activeBreakoutSlot = "All";

function renderSpeakerBlock(sp) {
  const inner = `<div class="bs-name">${sp.name}</div><div class="bs-role">${sp.role}</div>${sp.org ? `<div class="bs-role">${sp.org}</div>` : ''}${sp.linkedin ? `<div class="bs-linkedin">View LinkedIn →</div>` : ''}`;
  return sp.linkedin
    ? `<a class="breakout-speaker" href="${sp.linkedin}" target="_blank" rel="noopener noreferrer"><div>${inner}</div></a>`
    : `<div class="breakout-speaker" style="cursor:default"><div>${inner}</div></div>`;
}

/* ── RENDER BREAKOUTS ── */
function renderBreakouts() {
  const grid = document.getElementById("breakoutGrid");
  const slotNum = activeBreakoutSlot === "All" ? null : parseInt(activeBreakoutSlot);
  const filtered = activeBreakoutCat === "All" && slotNum === null
    ? BREAKOUT_SESSIONS
    : BREAKOUT_SESSIONS.filter(b =>
        (activeBreakoutCat === "All" || b.category === activeBreakoutCat) &&
        (slotNum === null || b.slot === slotNum)
      );

  grid.innerHTML = filtered.map(b => {
    const sp = b.speaker;
    const sp2 = b.speaker2 || null;
    return `
      <div class="breakout-card" id="card-${b.id}">
        <div class="breakout-card-top">
          <div class="breakout-tags">
            <span class="cat-pill cat-${b.category}">${b.category}</span>
            ${b.grade ? `<span class="grade-pill">${b.grade}</span>` : ''}
            ${b.slot != null ? `<span class="slot-pill">Session ${b.slot} · Breakout ${b.room}</span>` : ''}
            ${b.capacity ? `<span class="cap-pill">Cap: ${b.capacity}</span>` : ''}
          </div>
          <h3>${b.title}</h3>
          ${b.note ? `<div class="session-note">${b.note}</div>` : ''}
          <div class="speaker-top">
            <div class="bs-avatar" style="background:${sp.color}">${sp.init}</div>
            ${sp2 ? `<div class="bs-avatar" style="background:${sp2.color}">${sp2.init}</div>` : ''}
            <div>
              <div class="bs-name">${sp.name}${sp2 ? ` &amp; ${sp2.name}` : ''}</div>
              ${sp.org ? `<div class="bs-role">${sp.org}</div>` : ''}
            </div>
          </div>
        </div>
        <div class="desc">${b.desc}</div>
        ${renderSpeakerBlock(sp)}
        ${sp2 ? renderSpeakerBlock(sp2) : ''}
      </div>`;
  }).join("") || `<p style="color:var(--muted);">No sessions in this category yet.</p>`;
}

document.getElementById("breakoutFilter").addEventListener("click", e => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  if (btn.dataset.cat !== undefined) {
    document.querySelectorAll("#breakoutFilter .filter-btn[data-cat]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeBreakoutCat = btn.dataset.cat;
  } else if (btn.dataset.slot !== undefined) {
    document.querySelectorAll("#breakoutFilter .filter-btn[data-slot]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeBreakoutSlot = btn.dataset.slot;
  }
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

/* ── RENDER ATTENDING SCHOOLS ── */
function renderAttendees() {
  document.getElementById("attendeesSchoolsGrid").innerHTML = ATTENDING_SCHOOLS.map(s => {
    const avatar = s.logo
      ? `<img class="speaker-avatar speaker-photo" src="${s.logo}" alt="${s.name}" />`
      : `<div class="speaker-avatar speaker-initials" style="background:${s.color}">${s.init}</div>`;
    return `
      <div class="speaker-card">
        ${avatar}
        <div class="speaker-meta">
          <h3>${s.name}</h3>
        </div>
        ${s.url ? `<a class="speaker-link" href="${s.url}" target="_blank" rel="noopener noreferrer">Visit Website →</a>` : ''}
      </div>
    `;
  }).join("");
}

/* ── SCHEDULE ── */
function scrollToSession(id) {
  activeBreakoutCat = "All";
  activeBreakoutSlot = "All";
  document.querySelectorAll("#breakoutFilter .filter-btn[data-cat]").forEach(b => b.classList.toggle("active", b.dataset.cat === "All"));
  document.querySelectorAll("#breakoutFilter .filter-btn[data-slot]").forEach(b => b.classList.toggle("active", b.dataset.slot === "All"));
  openTab("tab-breakouts");
  renderBreakouts();
  setTimeout(() => {
    const card = document.getElementById(`card-${id}`);
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.style.outline = "3px solid var(--gold)";
    card.style.outlineOffset = "3px";
    setTimeout(() => { card.style.outline = ""; card.style.outlineOffset = ""; }, 2200);
  }, 80);
}

function filterBySlot(slot) {
  activeBreakoutCat = "All";
  activeBreakoutSlot = String(slot);
  document.querySelectorAll("#breakoutFilter .filter-btn[data-cat]").forEach(b => b.classList.toggle("active", b.dataset.cat === "All"));
  document.querySelectorAll("#breakoutFilter .filter-btn[data-slot]").forEach(b => b.classList.toggle("active", b.dataset.slot === String(slot)));
  openTab("tab-breakouts");
  renderBreakouts();
  document.getElementById("main-tabs").scrollIntoView({ behavior: "smooth" });
}

function renderSchedule() {
  const container = document.getElementById("scheduleGrid");
  if (!container) return;
  container.innerHTML = FULL_SCHEDULE.map(item => {
    const isBreakout = item.type === "breakout";
    const isKeynote  = item.type === "keynote";
    return `
      <div class="sched-item sched-type-${item.type}">
        <div class="sched-item-time">${item.time}</div>
        <div class="sched-item-body">
          <div class="sched-item-title">${item.event}</div>
          ${item.speaker ? `<div class="sched-item-speaker">${item.speaker}</div>` : ''}
          <div class="sched-item-desc">${item.desc}</div>
        </div>
        <div class="sched-item-right">
          <div class="sched-item-location">${item.location}</div>
          ${isBreakout ? `<button class="sched-view-btn" onclick="filterBySlot(${item.slot})">View Sessions →</button>` : ''}
        </div>
      </div>`;
  }).join('');
}

/* ── EXPO ── */
function renderExpo() {
  const container = document.getElementById("expoGrid");
  if (!container) return;
  container.innerHTML = EXPO_TABLES.map(t => {
    const avatar = t.logo
      ? `<img class="expo-logo" src="${t.logo}" alt="${t.org}" />`
      : `<div class="expo-initials" style="background:${t.color}">${t.init}</div>`;
    return `
      <div class="expo-card">
        <div class="expo-card-top">
          ${avatar}
          <div class="expo-org">${t.org}</div>
        </div>
        <h3 class="expo-headline">${t.headline}</h3>
        <p class="expo-desc">${t.desc}</p>
      </div>`;
  }).join('');
}

/* ── TABS ── */
function openTab(tabId) {
  const section = document.getElementById('main-tabs');
  if (!section) return;
  section.querySelectorAll('.tab-btn').forEach(b => {
    const active = b.dataset.tab === tabId;
    b.classList.toggle('active', active);
    b.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  section.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.id === tabId);
  });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => openTab(btn.dataset.tab));
});

document.querySelectorAll('[data-open-tab]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    openTab(el.dataset.openTab);
    document.getElementById('main-tabs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ── INIT ── */
renderBreakouts();
renderSpeakers();
renderTeam();
renderAttendees();
renderSchedule();
renderExpo();
