"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { categoryLabels, photos, type Category, type Lang, type Photo } from "./portfolio-data";

type Palette = "rose" | "lilac" | "blue";
type Glass = "clear" | "soft" | "dream";

const copy = {
  zh: {
    nav: [
      ["精选作品", "stories"],
      ["胶片", "film"],
      ["分类图库", "gallery"],
      ["关于我", "about"],
      ["履历", "experience"],
      ["摄影笔记", "journal"],
      ["联系", "contact"],
    ],
    settings: "视觉设置",
    closeSettings: "关闭视觉设置",
    palette: "雾光色彩",
    glass: "磨砂强度",
    palettes: ["雾粉", "淡紫", "晨雾蓝"],
    glasses: ["清透", "柔雾", "梦境"],
    menu: "打开导航",
    heroMeta: "广州 · 人像摄影",
    heroTitleA: "在光落下来之前，",
    heroTitleB: "先听见故事。",
    heroText: "我是星约，一名以人像为主的摄影师。我关注人物进入画面后的呼吸、停顿，以及环境里稍纵即逝的情绪。",
    enter: "进入精选作品",
    meet: "认识星约",
    unavailableResume: "简历 · 暂未开放",
    heroCard: "Selected portrait · 2025",
    portrait: "人物不是画面的装饰，人物就是故事发生的地方。",
    selectedTitle: "两段正在发生的故事",
    selectedIntro: "从距离、天气与手势开始，让一组照片拥有前后关系，而不是只留下孤立的漂亮画面。",
    storyOneLabel: "雨天街头人像",
    storyOneTitle: "雨幕里的红",
    storyOneText: "雨水降低了城市的饱和度，红裙因此更加清晰。透明伞把天空的冷色带到人物身边，抬头的瞬间成为整组照片的情绪中心。",
    storyTwoLabel: "自然光人物研究",
    storyTwoTitle: "窗后的呼吸",
    storyTwoText: "旧木窗、反光与室外绿色叠在一起。画面没有急着消除玻璃，而是把这层距离保留下来，让观看更像一次安静的靠近。",
    viewImage: "查看大图",
    filmTitle: "一卷继续向前的胶片",
    filmHint: "向下滚动，画面会沿胶片向前移动",
    galleryTitle: "分类图库",
    galleryIntro: "人像为主，跟拍与商业为辅。点击任意照片可进入灯箱浏览。",
    aboutTitle: "关于星约",
    aboutLead: "我希望镜头前的人不需要扮演某一种标准答案。",
    aboutBody: "拍摄会从观察和沟通开始。我会根据人物当下的状态调整距离、方向与节奏，让画面既准确，又保留一点没有被安排过的真实。现阶段常驻广州，专注人像创作，也持续积累跟拍与商业影像经验。",
    facts: ["星约", "广州", "人像 · 跟拍 · 商业"],
    experienceTitle: "履历与合作经历",
    experienceText: "完整履历、合作品牌与可下载简历将在内容确认后开放。当前页面不会使用示例公司或虚构经历。",
    pending: "暂未开放",
    resume: "简历下载",
    brands: "合作品牌",
    history: "工作履历",
    journalTitle: "摄影笔记",
    journalIntro: "之后会在这里分享拍摄准备、现场沟通、选片与个人图像研究。",
    notes: ["第一次面对镜头，如何慢慢放松", "阴天人像里的方向与层次", "商业拍摄前需要确认的内容"],
    preparing: "整理中",
    contactTitle: "下一段故事，等内容准备好后再从这里开始。",
    contactText: "联系方式、社交账号与合作入口目前暂未开放。完成资料后，只需替换这里的状态即可。",
    backTop: "回到顶部",
    copyright: "© 2026 XYDWF · 星约摄影",
    close: "关闭大图",
    previous: "上一张",
    next: "下一张",
    imageCount: "张作品",
  },
  en: {
    nav: [
      ["Stories", "stories"],
      ["Film", "film"],
      ["Gallery", "gallery"],
      ["About", "about"],
      ["Experience", "experience"],
      ["Journal", "journal"],
      ["Contact", "contact"],
    ],
    settings: "Visual settings",
    closeSettings: "Close visual settings",
    palette: "Mist palette",
    glass: "Glass depth",
    palettes: ["Rose", "Lilac", "Morning blue"],
    glasses: ["Clear", "Soft", "Dream"],
    menu: "Open navigation",
    heroMeta: "Guangzhou · Portrait photography",
    heroTitleA: "Before the light arrives,",
    heroTitleB: "listen for the story.",
    heroText: "I am Xingyue, a portrait-led photographer drawn to breath, pause and the brief emotion that appears when a person enters a place.",
    enter: "Enter selected work",
    meet: "Meet Xingyue",
    unavailableResume: "Résumé · Not available yet",
    heroCard: "Selected portrait · 2025",
    portrait: "A person is not decoration for the frame. A person is where the story happens.",
    selectedTitle: "Two stories in progress",
    selectedIntro: "Starting with distance, weather and gesture, each sequence is shaped to hold a relationship between frames.",
    storyOneLabel: "Rainy street portrait",
    storyOneTitle: "Red in the Rain",
    storyOneText: "Rain lowers the colour of the city, allowing the red dress to become precise. The translucent umbrella brings the cool sky closer, while one upward glance holds the sequence together.",
    storyTwoLabel: "Natural-light portrait study",
    storyTwoTitle: "Breath Behind Glass",
    storyTwoText: "Old timber, reflections and outdoor green occupy the same surface. The glass is kept as a quiet distance, so looking feels like a gradual approach.",
    viewImage: "View image",
    filmTitle: "A roll of film moving forward",
    filmHint: "Scroll down to move through the roll",
    galleryTitle: "Gallery by practice",
    galleryIntro: "Portraits first, supported by documentary and commercial work. Select any photograph for the lightbox.",
    aboutTitle: "About Xingyue",
    aboutLead: "I do not want the person in front of the lens to perform a standard answer.",
    aboutBody: "A shoot begins with observation and conversation. I adjust distance, direction and pace around the person as they are, looking for images that feel exact while keeping something unarranged. I am currently based in Guangzhou, focused on portraiture and continuing to build documentary and commercial experience.",
    facts: ["Xingyue", "Guangzhou", "Portrait · Documentary · Commercial"],
    experienceTitle: "Experience & collaborations",
    experienceText: "A detailed work history, selected clients and downloadable résumé will open after the information is confirmed. No sample companies or invented experience are shown here.",
    pending: "Not available yet",
    resume: "Résumé download",
    brands: "Selected clients",
    history: "Work history",
    journalTitle: "Photography journal",
    journalIntro: "Future notes will cover preparation, direction, editing and ongoing image research.",
    notes: ["Helping a first-time subject settle into the frame", "Direction and depth in overcast portraits", "What to confirm before a commercial shoot"],
    preparing: "In preparation",
    contactTitle: "The next story can begin here when the details are ready.",
    contactText: "Contact channels, social accounts and collaboration enquiries are not open yet. They can replace these honest placeholders when confirmed.",
    backTop: "Back to top",
    copyright: "© 2026 XYDWF · Photography by Xingyue",
    close: "Close image",
    previous: "Previous image",
    next: "Next image",
    imageCount: "images",
  },
} as const;

const paletteOptions: Palette[] = ["rose", "lilac", "blue"];
const glassOptions: Glass[] = ["clear", "soft", "dream"];

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("zh");
  const [palette, setPalette] = useState<Palette>("rose");
  const [glass, setGlass] = useState<Glass>("dream");
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [filter, setFilter] = useState<Category | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("stories");

  const filmSectionRef = useRef<HTMLElement>(null);
  const filmTrackRef = useRef<HTMLDivElement>(null);
  const filmProgressRef = useRef<HTMLSpanElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const c = copy[lang];

  const visiblePhotos = useMemo(
    () => (filter === "all" ? photos : photos.filter((photo) => photo.category === filter)),
    [filter],
  );

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedPalette = window.localStorage.getItem("xydwf-palette") as Palette | null;
      const savedGlass = window.localStorage.getItem("xydwf-glass") as Glass | null;
      const savedLang = window.localStorage.getItem("xydwf-lang") as Lang | null;
      if (savedPalette && paletteOptions.includes(savedPalette)) setPalette(savedPalette);
      if (savedGlass && glassOptions.includes(savedGlass)) setGlass(savedGlass);
      if (savedLang === "zh" || savedLang === "en") setLang(savedLang);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.palette = palette;
    document.documentElement.dataset.glass = glass;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem("xydwf-palette", palette);
    window.localStorage.setItem("xydwf-glass", glass);
    window.localStorage.setItem("xydwf-lang", lang);
  }, [palette, glass, lang]);

  useEffect(() => {
    let scheduled = false;
    const updateScroll = () => {
      scheduled = false;
      document.documentElement.style.setProperty("--hero-shift", `${Math.min(window.scrollY, 680)}px`);

      const section = filmSectionRef.current;
      const track = filmTrackRef.current;
      if (!section || !track) return;

      if (window.innerWidth <= 760 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        track.style.transform = "none";
        if (filmProgressRef.current) filmProgressRef.current.style.transform = "scaleX(0)";
        return;
      }

      const rect = section.getBoundingClientRect();
      const range = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / range, 0), 1);
      const distance = Math.max(track.scrollWidth - window.innerWidth + 72, 0);
      track.style.transform = `translate3d(${-distance * progress}px, 0, 0)`;
      if (filmProgressRef.current) filmProgressRef.current.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(updateScroll);
    };
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const sections = c.nav
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [c.nav]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (lightboxIndex === null) {
      if (dialog.open) dialog.close();
      document.body.classList.remove("modal-open");
      return;
    }
    if (!dialog.open) dialog.showModal();
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, [lightboxIndex]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (event.key === "ArrowLeft") setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
      if (event.key === "ArrowRight") setLightboxIndex((lightboxIndex + 1) % photos.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex]);

  const openPhoto = (photo: Photo) => setLightboxIndex(photos.findIndex((item) => item.id === photo.id));
  const moveLightbox = (direction: -1 | 1) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + direction + photos.length) % photos.length);
  };
  const selectedPhoto = lightboxIndex === null ? null : photos[lightboxIndex];
  const closeMenus = () => {
    setMenuOpen(false);
    setSettingsOpen(false);
  };

  return (
    <main id="top" className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="site-header glass-panel">
        <a className="brand" href="#top" aria-label="XYDWF 首页" onClick={closeMenus}>
          <span className="brand-lens" aria-hidden="true" />
          <span><strong>XYDWF</strong><small>Photography by Xingyue</small></span>
        </a>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label={lang === "zh" ? "主导航" : "Primary navigation"}>
          {c.nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? "is-active" : ""} onClick={closeMenus}>{label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="lang-toggle" type="button" onClick={() => setLang(lang === "zh" ? "en" : "zh")} aria-label={lang === "zh" ? "Switch to English" : "切换为中文"}>
            {lang === "zh" ? "EN" : "中"}
          </button>
          <button className="settings-toggle" type="button" aria-label={c.settings} aria-expanded={settingsOpen} onClick={() => setSettingsOpen(!settingsOpen)}>
            <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
          </button>
          <button className="menu-toggle" type="button" aria-label={c.menu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
        </div>
      </header>

      {settingsOpen && (
        <aside className="settings-panel glass-panel" aria-label={c.settings}>
          <div className="settings-heading"><strong>{c.settings}</strong><button type="button" onClick={() => setSettingsOpen(false)} aria-label={c.closeSettings}>×</button></div>
          <fieldset>
            <legend>{c.palette}</legend>
            <div className="palette-options">
              {paletteOptions.map((option, index) => (
                <button key={option} type="button" className={palette === option ? "is-selected" : ""} onClick={() => setPalette(option)} aria-label={c.palettes[index]} title={c.palettes[index]}><i className={`swatch ${option}`} /></button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>{c.glass}</legend>
            <div className="glass-options">
              {glassOptions.map((option, index) => (
                <button key={option} type="button" className={glass === option ? "is-selected" : ""} onClick={() => setGlass(option)}>{c.glasses[index]}</button>
              ))}
            </div>
          </fieldset>
        </aside>
      )}

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-meta"><span />{c.heroMeta}</p>
          <h1 id="hero-title"><span>{c.heroTitleA}</span><em>{c.heroTitleB}</em></h1>
          <p className="hero-description">{c.heroText}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#stories">{c.enter}<span>↘</span></a>
            <a className="button-text" href="#about">{c.meet}<span>↓</span></a>
          </div>
          <p className="resume-status"><span aria-hidden="true">○</span>{c.unavailableResume}</p>
        </div>

        <div className="hero-stage" aria-label={lang === "zh" ? "精选人像组合" : "Selected portrait composition"}>
          <figure className="hero-main-frame">
            <img src={photos[1].src} alt={photos[1].alt[lang]} fetchPriority="high" />
            <figcaption>{c.heroCard}</figcaption>
          </figure>
          <figure className="hero-float-frame hero-float-one"><img src={photos[0].src} alt={photos[0].alt[lang]} /></figure>
          <figure className="hero-float-frame hero-float-two"><img src={photos[2].src} alt={photos[2].alt[lang]} /></figure>
          <div className="hero-glass-note glass-panel"><span>XYDWF / 001</span><p>{c.portrait}</p></div>
          <div className="focus-ring" aria-hidden="true"><span /></div>
        </div>

        <a className="scroll-cue" href="#stories" aria-label={c.enter}><span />SCROLL</a>
      </section>

      <section className="stories" id="stories" aria-labelledby="stories-title">
        <div className="section-intro stories-intro">
          <h2 id="stories-title">{c.selectedTitle}</h2>
          <p>{c.selectedIntro}</p>
        </div>

        <article className="story story-rain">
          <button className="story-image image-button" type="button" onClick={() => openPhoto(photos[1])} aria-label={`${c.viewImage}：${photos[1].title[lang]}`}>
            <img src={photos[1].src} alt={photos[1].alt[lang]} loading="lazy" />
          </button>
          <div className="story-copy glass-panel">
            <p>{c.storyOneLabel}</p>
            <h3>{c.storyOneTitle}</h3>
            <span>{c.storyOneText}</span>
            <button type="button" onClick={() => openPhoto(photos[1])}>{c.viewImage}<b>↗</b></button>
          </div>
          <div className="story-detail"><img src={photos[2].src} alt={photos[2].alt[lang]} loading="lazy" /></div>
        </article>

        <article className="story story-window">
          <div className="story-number" aria-hidden="true">02</div>
          <button className="story-image image-button" type="button" onClick={() => openPhoto(photos[0])} aria-label={`${c.viewImage}：${photos[0].title[lang]}`}>
            <img src={photos[0].src} alt={photos[0].alt[lang]} loading="lazy" />
          </button>
          <div className="story-copy glass-panel">
            <p>{c.storyTwoLabel}</p>
            <h3>{c.storyTwoTitle}</h3>
            <span>{c.storyTwoText}</span>
            <button type="button" onClick={() => openPhoto(photos[0])}>{c.viewImage}<b>↗</b></button>
          </div>
        </article>
      </section>

      <section className="film-section" id="film" ref={filmSectionRef} aria-labelledby="film-title">
        <div className="film-sticky">
          <div className="film-heading">
            <div><h2 id="film-title">{c.filmTitle}</h2><p>{c.filmHint}</p></div>
            <span className="film-count">09 / 36 EXP.</span>
          </div>
          <div className="film-progress"><span ref={filmProgressRef} /></div>
          <div className="film-viewport">
            <div className="film-track" ref={filmTrackRef}>
              <div className="film-leader"><strong>KODAK</strong><span>ULTRAMAX 400</span><small>COLOR PRINT FILM</small></div>
              {photos.map((photo, index) => (
                <button className="film-frame" type="button" key={photo.id} onClick={() => openPhoto(photo)} aria-label={`${c.viewImage}：${photo.title[lang]}`}>
                  <span className="film-sprockets film-sprockets-top" aria-hidden="true" />
                  <img src={photo.src} alt={photo.alt[lang]} loading="lazy" />
                  <span className="film-caption"><b>{String(index + 1).padStart(2, "0")}</b><i>{photo.title[lang]}</i><small>{photo.year}</small></span>
                  <span className="film-sprockets film-sprockets-bottom" aria-hidden="true" />
                </button>
              ))}
              <div className="film-tail"><span>36</span><strong>XYDWF</strong><small>GUANGZHOU</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
        <div className="section-intro gallery-intro">
          <div><h2 id="gallery-title">{c.galleryTitle}</h2><p>{c.galleryIntro}</p></div>
          <span className="image-total">{String(visiblePhotos.length).padStart(2, "0")} {c.imageCount}</span>
        </div>
        <div className="filters" role="group" aria-label={lang === "zh" ? "作品分类" : "Work categories"}>
          {(["all", "portrait", "follow", "commercial"] as const).map((category) => (
            <button key={category} type="button" className={filter === category ? "is-active" : ""} onClick={() => setFilter(category)}>
              {categoryLabels[category][lang]}<sup>{category === "all" ? photos.length : photos.filter((photo) => photo.category === category).length}</sup>
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {visiblePhotos.map((photo, index) => (
            <figure className={`gallery-item gallery-${photo.orientation} gallery-order-${index % 5}`} key={photo.id}>
              <button className="image-button" type="button" onClick={() => openPhoto(photo)} aria-label={`${c.viewImage}：${photo.title[lang]}`}>
                <img src={photo.src} alt={photo.alt[lang]} loading="lazy" />
              </button>
              <figcaption><span>{photo.title[lang]}</span><small>{categoryLabels[photo.category][lang]} · {photo.year}</small></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-image"><img src={photos[6].src} alt={photos[6].alt[lang]} loading="lazy" /><span>XYDWF / SELF FRAME</span></div>
        <div className="about-content">
          <h2 id="about-title">{c.aboutTitle}</h2>
          <blockquote>{c.aboutLead}</blockquote>
          <p>{c.aboutBody}</p>
          <dl>{c.facts.map((fact, index) => <div key={fact}><dt>{["Name", "Based", "Focus"][index]}</dt><dd>{fact}</dd></div>)}</dl>
        </div>
        <div className="about-orb" aria-hidden="true" />
      </section>

      <section className="experience-section" id="experience" aria-labelledby="experience-title">
        <div className="experience-lead"><h2 id="experience-title">{c.experienceTitle}</h2><p>{c.experienceText}</p></div>
        <div className="experience-list">
          {[c.history, c.brands, c.resume].map((label) => (
            <div key={label}><span>{label}</span><strong>{c.pending}</strong><i aria-hidden="true">○</i></div>
          ))}
        </div>
      </section>

      <section className="journal-section" id="journal" aria-labelledby="journal-title">
        <div className="journal-heading"><h2 id="journal-title">{c.journalTitle}</h2><p>{c.journalIntro}</p></div>
        <div className="journal-list">
          {c.notes.map((note, index) => (
            <article key={note}><time>0{index + 1}</time><h3>{note}</h3><span>{c.preparing}</span></article>
          ))}
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="footer-glow" aria-hidden="true" />
        <div className="footer-main">
          <p>XYDWF · PHOTOGRAPHY BY XINGYUE</p>
          <h2>{c.contactTitle}</h2>
          <span>{c.contactText}</span>
        </div>
        <div className="contact-status glass-panel">
          {[
            ["Email", c.pending],
            ["Instagram", c.pending],
            [lang === "zh" ? "微信" : "WeChat", c.pending],
          ].map(([label, status]) => <div key={label}><span>{label}</span><b>{status}</b></div>)}
        </div>
        <div className="footer-bottom"><span>{c.copyright}</span><a href="#top">{c.backTop}<b>↑</b></a></div>
      </footer>

      <dialog className="lightbox" ref={dialogRef} onClose={() => setLightboxIndex(null)} onClick={(event) => { if (event.target === event.currentTarget) setLightboxIndex(null); }}>
        {selectedPhoto && (
          <div className="lightbox-inner">
            <button className="lightbox-close glass-panel" type="button" onClick={() => setLightboxIndex(null)} aria-label={c.close}>×</button>
            <button className="lightbox-nav lightbox-prev glass-panel" type="button" onClick={() => moveLightbox(-1)} aria-label={c.previous}>←</button>
            <figure>
              <img src={selectedPhoto.src} alt={selectedPhoto.alt[lang]} />
              <figcaption className="glass-panel"><span>{String((lightboxIndex ?? 0) + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span><div><h3>{selectedPhoto.title[lang]}</h3><p>{selectedPhoto.note[lang]}</p></div></figcaption>
            </figure>
            <button className="lightbox-nav lightbox-next glass-panel" type="button" onClick={() => moveLightbox(1)} aria-label={c.next}>→</button>
          </div>
        )}
      </dialog>
    </main>
  );
}
