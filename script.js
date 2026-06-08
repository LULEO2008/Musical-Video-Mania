const mvItems = [
  {
    title: "Thriller",
    director: "Director: Vincent",
    team: "Team 01",
    members: "Vincent, Yumi, Wei, Mihok, Miles, Kian",
    duration: "Add duration",
    genre: "Thriller pop",
    summary: "A dark, high-energy MV built around suspense, movement, and a cinematic campus atmosphere.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  },
  {
    title: "Lemon Tree",
    director: "Director: Angela",
    team: "Team 02",
    members: "Angela, Musumi, Linda, Shirley",
    duration: "Add duration",
    genre: "Bright pop",
    summary: "A fresh and colorful MV that turns everyday student life into a light, playful story.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  },
  {
    title: "Call You Tonight",
    director: "Director: Kyle",
    team: "Team 03",
    members: "Kyle, River, Ben, Henry",
    duration: "Add duration",
    genre: "Pop romance",
    summary: "A late-night message becomes the emotional thread connecting friends across different places.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  },
  {
    title: "7 Years",
    director: "Director: Russell",
    team: "Team 04",
    members: "Russell, Sharon, Peter, Yumi",
    duration: "Add duration",
    genre: "Coming-of-age",
    summary: "A reflective MV follows time, growth, and the memories that shape a student journey.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  },
  {
    title: "Gone",
    director: "Director: Molly",
    team: "Team 05",
    members: "Molly, Eric, Jenny",
    duration: "Add duration",
    genre: "Indie drama",
    summary: "A quiet story of absence and memory unfolds through small details and empty spaces.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  },
  {
    title: "Wake",
    director: "Director: Jack",
    team: "Team 06",
    members: "Jack, Dora, Peter, Parker",
    duration: "Add duration",
    genre: "Alternative pop",
    summary: "An early morning rhythm pushes the characters from dreamlike stillness into action.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  },
  {
    title: "From the Start",
    director: "Director: Lilin",
    team: "Team 07",
    members: "Lilin, Diamat, Dorothy",
    duration: "Add duration",
    genre: "Soft pop",
    summary: "A gentle story looks back at a friendship that felt meaningful from the first moment.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  },
  {
    title: "Never Gonna Give You Up",
    director: "Director: Steven",
    team: "Team 08",
    members: "Steven, Sky, Alex, Allen",
    duration: "Add duration",
    genre: "Retro pop",
    summary: "A bright retro-inspired MV celebrates loyalty, humor, and classic performance energy.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  },
  {
    title: "等你下课 (Waiting for You to End Class)",
    director: "Director: Helen",
    team: "Team 09",
    members: "Helen, Stella, Tina, Dora",
    duration: "Add duration",
    genre: "Mandopop romance",
    summary: "A campus romance waits in hallways, classrooms, and the small pauses after class.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  },
  {
    title: "The Other Side of Paradise",
    director: "Director: Tom",
    team: "Team 10",
    members: "Tom, Andy, Tony",
    duration: "Add duration",
    genre: "Cinematic pop",
    summary: "A stylish MV contrasts dreamlike escape with the reality waiting on the other side.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  },
  {
    title: "Try",
    director: "Director: Emily",
    team: "Team 11",
    members: "Emily, Carina",
    duration: "Add duration",
    genre: "Inspirational pop",
    summary: "A simple but emotional MV follows the courage to keep trying after a difficult moment.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  },
  {
    title: "We Don't Talk Anymore",
    director: "Director: Leo",
    team: "Team 12",
    members: "Leo, Edith, Carly, Alan Li",
    duration: "Add duration",
    genre: "Pop drama",
    summary: "Two people move through the same memories while realizing how much has been left unsaid.",
    thumbnail: "",
    poster: "",
    videoUrl: ""
  }
];

const deckConfig = {
  coverImage: "assets/musical-video-mania-selected.png",
  qrImage: "assets/showcase-qr.jpg",
  festivalTitle: "MUSICAL VIDEO MANIA",
  festivalSubtitle: "Student MV Showcase",
  coverDate: "June 11",
  coverTime: "2:30 PM",
  coverVenue: "West Lecture Hall",
  overviewSubtitle: "Twelve student-made music videos presented as a cinematic showcase.",
  momentsSubtitle: "A collage wall for replacing with screenshots, stills, or behind-the-scenes frames."
};

const state = {
  activeIndex: 0,
  previousIndex: 0,
  slides: []
};

function padNumber(number) {
  return String(number).padStart(2, "0");
}

function imageStyle(url) {
  if (!url) return "";
  return ` style="background-image: url('${url.replaceAll("'", "%27")}')"`;
}

function mediaFrame(label, image, extraClass = "") {
  const imageClass = image ? " has-image" : "";
  return `<div class="media-frame ${extraClass}${imageClass}" data-label="${label}"${imageStyle(image)}></div>`;
}

function titleClass(title) {
  return title.length > 28 ? " is-long-title" : "";
}

function playHref(url) {
  return url || "#";
}

function linkLabel(url) {
  return url || "Scan QR code";
}

function qrBlock(item) {
  const qrImage = item.qrImage || deckConfig.qrImage;
  if (qrImage) {
    return `<img class="qr-image" src="${qrImage}" alt="Video QR code">`;
  }
  return `<div class="qr-placeholder" aria-label="QR code placeholder"></div>`;
}

function createCoverSlide() {
  return `
    <section class="slide cover-slide active" data-slide-title="Cover">
      <div class="cover-ambient"${imageStyle(deckConfig.coverImage)}></div>
      <div class="cover-beams" aria-hidden="true"></div>
      <div class="cover-copy">
        <div class="festival-mark">Student Premiere Night</div>
        <h1 class="headline cover-title">
          <span>Musical</span>
          <span>Video</span>
          <span>Mania</span>
        </h1>
        <p class="subhead">${deckConfig.festivalSubtitle}</p>
        <div class="cover-meta">
          <span>${deckConfig.coverDate}</span>
          <span>${deckConfig.coverTime}</span>
          <span>${deckConfig.coverVenue}</span>
        </div>
        <div class="cover-lineup">12 student-made music videos / live showcase deck</div>
      </div>
      <div class="cover-poster-wrap" aria-label="Musical Video Mania poster">
        <div class="cover-poster"${imageStyle(deckConfig.coverImage)}></div>
        <div class="cover-poster-shadow"></div>
      </div>
      <div class="cover-ticker" aria-hidden="true">
        <span>THRILLER</span>
        <span>LEMON TREE</span>
        <span>TRY</span>
        <span>WAKE</span>
      </div>
    </section>
  `;
}

function createOverviewSlide() {
  const cards = mvItems.map((item, index) => `
    <article class="mv-card" style="--item-index: ${index}">
      ${mediaFrame(`MV ${padNumber(index + 1)} thumbnail`, item.thumbnail)}
      <div class="mv-card-body">
        <div class="mv-card-number">MV ${padNumber(index + 1)}</div>
        <h3 class="mv-card-title">${item.title}</h3>
        <p class="mv-card-director">${item.director} / ${item.team}</p>
      </div>
    </article>
  `).join("");

  return `
    <section class="slide overview-slide" data-slide-title="MV Collection">
      <div class="slide-inner">
        <header class="overview-head">
          <div>
            <p class="kicker">Festival lineup</p>
            <h2 class="section-title">MV Collection</h2>
            <p class="section-subtitle">${deckConfig.overviewSubtitle}</p>
          </div>
          <div class="collection-count">${mvItems.length} Videos</div>
        </header>
        <div class="mv-grid">${cards}</div>
      </div>
    </section>
  `;
}

function createDetailSlide(item, index) {
  return `
    <section class="slide mv-detail" data-slide-title="${item.title}">
      <div class="slide-inner">
        <div class="poster-area">
          ${mediaFrame(`${item.title} poster / thumbnail`, item.poster || item.thumbnail, "poster-frame")}
          <div class="poster-footer">
            <span>Musical Video Mania</span>
            <span>${padNumber(index + 1)} / ${mvItems.length}</span>
          </div>
        </div>
        <aside class="detail-panel">
          <div class="detail-index">MV ${padNumber(index + 1)} <span>${item.team}</span></div>
          <h2 class="mv-title${titleClass(item.title)}">${item.title}</h2>
          <dl class="meta-table">
            <dt class="meta-label">Director</dt>
            <dd>${item.director.replace("Director: ", "")}</dd>
            <dt class="meta-label">Team</dt>
            <dd>${item.team}</dd>
            <dt class="meta-label">Members</dt>
            <dd>${item.members}</dd>
            <dt class="meta-label">Duration</dt>
            <dd>${item.duration}</dd>
            <dt class="meta-label">Genre</dt>
            <dd>${item.genre}</dd>
          </dl>
          <p class="story-summary">${item.summary}</p>
          <div class="play-row">
            <a class="play-button" href="${playHref(item.videoUrl)}" target="_blank" rel="noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Play Video
            </a>
            ${qrBlock(item)}
            <p class="video-link-note">${linkLabel(item.videoUrl)}</p>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function createMomentsSlide() {
  const tiles = mvItems.map((item, index) => `
    ${mediaFrame(`Shot ${padNumber(index + 1)}`, item.thumbnail || item.poster, "moment-tile")}
  `).join("");

  return `
    <section class="slide moments-slide" data-slide-title="Best Moments">
      <div class="slide-inner">
        <header class="moments-head">
          <div>
            <p class="kicker">Highlights</p>
            <h2 class="section-title">Best Moments</h2>
            <p class="section-subtitle">${deckConfig.momentsSubtitle}</p>
          </div>
          <div class="collection-count">Screenshots</div>
        </header>
        <div class="moments-collage">${tiles}</div>
      </div>
    </section>
  `;
}

function createEndingSlide() {
  return `
    <section class="slide ending-slide" data-slide-title="Thank You">
      <div class="ending-copy">
        <div class="ending-rule"></div>
        <p class="kicker">Musical Video Mania</p>
        <h2 class="headline">THANK YOU FOR WATCHING</h2>
        <p class="subhead">Student MV Showcase</p>
      </div>
    </section>
  `;
}

function buildDeck() {
  const stage = document.getElementById("slide-stage");
  stage.innerHTML = [
    createCoverSlide(),
    createOverviewSlide(),
    ...mvItems.map(createDetailSlide),
    createMomentsSlide(),
    createEndingSlide()
  ].join("");

  state.slides = [...document.querySelectorAll(".slide")];
}

function updateSlide() {
  const stage = document.getElementById("slide-stage");
  stage.classList.toggle("moving-forward", state.activeIndex >= state.previousIndex);
  stage.classList.toggle("moving-backward", state.activeIndex < state.previousIndex);
  stage.style.setProperty("--progress", `${((state.activeIndex + 1) / state.slides.length) * 100}%`);

  state.slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === state.activeIndex);
    slide.classList.toggle("visited", index < state.activeIndex);
  });

  document.getElementById("slide-counter").textContent =
    `${padNumber(state.activeIndex + 1)} / ${padNumber(state.slides.length)}`;
  state.previousIndex = state.activeIndex;
}

function goToSlide(index) {
  state.previousIndex = state.activeIndex;
  state.activeIndex = Math.max(0, Math.min(index, state.slides.length - 1));
  updateSlide();
}

function bindControls() {
  document.getElementById("prev-slide").addEventListener("click", () => goToSlide(state.activeIndex - 1));
  document.getElementById("next-slide").addEventListener("click", () => goToSlide(state.activeIndex + 1));
  document.getElementById("print-deck").addEventListener("click", () => window.print());

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      goToSlide(state.activeIndex + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "PageUp") {
      event.preventDefault();
      goToSlide(state.activeIndex - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      goToSlide(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      goToSlide(state.slides.length - 1);
    }
  });
}

function initialSlideIndex() {
  if (!window.location) return 0;
  const params = new URLSearchParams(window.location.search);
  const requested = Number.parseInt(params.get("slide") || "", 10);
  if (Number.isInteger(requested) && requested > 0) return requested - 1;
  const hashMatch = window.location.hash.match(/^#slide-(\d+)$/);
  if (hashMatch) return Number.parseInt(hashMatch[1], 10) - 1;
  return 0;
}

buildDeck();
bindControls();
state.activeIndex = initialSlideIndex();
updateSlide();
