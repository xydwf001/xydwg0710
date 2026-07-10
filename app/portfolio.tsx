"use client";

import { useEffect, useRef, useState } from "react";

type Lang = "zh" | "en";
type Theme = "rose" | "sage" | "sky";

const images = [
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=88", type: "portrait", zh: "逆光之后", en: "After the Light", meta: "Portrait · 2025" },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=88", type: "portrait", zh: "松弛时刻", en: "An Unhurried Moment", meta: "Portrait · 2025" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=88", type: "commercial", zh: "春日肖像", en: "Spring Portrait", meta: "Campaign · 2024" },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=88", type: "portrait", zh: "无声对白", en: "Quiet Dialogue", meta: "Portrait · 2024" },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=88", type: "event", zh: "午后侧影", en: "Afternoon Profile", meta: "Follow · 2025" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=88", type: "commercial", zh: "城市温度", en: "City Warmth", meta: "Commercial · 2025" },
];

const copy = {
  zh: {
    nav: ["精选", "作品", "关于", "履历", "笔记", "联系"],
    ids: ["featured", "work", "about", "experience", "journal", "contact"],
    status: "现正寻找人像摄影相关机会",
    title1: "在光抵达之前，",
    title2: "先看见一个人。",
    intro: "人像摄影师，以自然光、真实情绪和细腻的现场观察，记录人与环境之间短暂而准确的联系。",
    view: "浏览精选作品",
    resume: "下载个人简历",
    selected: "Selected works / 精选作品",
    film: "ULTRAMAX 400 · 36 EXPOSURES",
    archive: "作品档案",
    archiveSub: "按委托类型浏览，也可以直接横向扫过近期影像。",
    filters: ["全部", "人像", "跟拍", "商业"],
    about: "我关心的不是标准答案，而是镜头前的人如何慢慢成为自己。",
    bio: "我是一名以人像为主的摄影师，同时承接活动跟拍与品牌商业拍摄。工作时会先建立轻松、明确的沟通，再根据人物状态调整光线、距离和节奏。对我来说，一张好照片需要准确，也要保留呼吸。",
    facts: ["常驻 / 可远程沟通", "人像 · 跟拍 · 商业", "接受全职与项目合作"],
    experience: "履历与合作",
    journal: "摄影笔记",
    journalSub: "分享拍摄准备、现场沟通与个人图像研究。",
    contact: "下一次拍摄，从一封邮件开始。",
    contactSub: "如果你正在招聘摄影师，或有一个值得认真完成的拍摄计划，欢迎联系我。",
    mail: "发送合作邮件",
  },
  en: {
    nav: ["Featured", "Work", "About", "Experience", "Journal", "Contact"],
    ids: ["featured", "work", "about", "experience", "journal", "contact"],
    status: "Open to portrait photography opportunities",
    title1: "Before light arrives,",
    title2: "see the person first.",
    intro: "A portrait photographer working with natural light, honest emotion and close observation to frame the brief connections between people and place.",
    view: "View selected work",
    resume: "Download résumé",
    selected: "Selected works / 精选作品",
    film: "ULTRAMAX 400 · 36 EXPOSURES",
    archive: "Work archive",
    archiveSub: "Browse by commission type, or move sideways through recent frames.",
    filters: ["All", "Portrait", "Follow", "Commercial"],
    about: "I am less interested in a perfect pose than in the moment someone settles into themselves.",
    bio: "I focus on portraiture, alongside event coverage and brand commissions. My process begins with calm, precise communication, then adapts light, distance and pace to the person in front of me. A good photograph should feel exact, with room to breathe.",
    facts: ["Based locally / remote ready", "Portrait · Follow · Commercial", "Open to full-time and freelance"],
    experience: "Experience & collaborations",
    journal: "Photography journal",
    journalSub: "Notes on preparation, direction and the images that shape my practice.",
    contact: "The next shoot can begin with an email.",
    contactSub: "If you are hiring a photographer or planning a project worth doing carefully, I would love to hear from you.",
    mail: "Start a conversation",
  },
};

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("zh");
  const [theme, setTheme] = useState<Theme>("rose");
  const [filter, setFilter] = useState("all");
  const [menu, setMenu] = useState(false);
  const filmRef = useRef<HTMLDivElement>(null);
  const c = copy[lang];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [theme, lang]);

  const visible = filter === "all" ? images : images.filter((item) => item.type === filter);
  const scrollFilm = (direction: number) => filmRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });

  return (
    <main>
      <header className="topbar">
        <a className="mark" href="#top" aria-label="回到首页"><span>LY</span><b>林野摄影</b></a>
        <button className="menuButton" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="打开导航">{menu ? "×" : "菜单"}</button>
        <nav className={menu ? "nav open" : "nav"} aria-label="主导航">
          {c.nav.map((item, i) => <a key={item} href={`#${c.ids[i]}`} onClick={() => setMenu(false)}>{item}</a>)}
        </nav>
        <div className="controls">
          <div className="themeSwitch" aria-label="主题颜色">
            {(["rose", "sage", "sky"] as Theme[]).map((name) => <button key={name} className={theme === name ? "active" : ""} onClick={() => setTheme(name)} aria-label={`${name} theme`}><span className={name} /></button>)}
          </div>
          <button className="lang" onClick={() => setLang(lang === "zh" ? "en" : "zh")}>{lang === "zh" ? "EN" : "中"}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="status"><i />{c.status}</p>
          <h1>{c.title1}<br /><em>{c.title2}</em></h1>
          <p className="intro">{c.intro}</p>
          <div className="actions"><a className="primary" href="#featured">{c.view}<span>↘</span></a><a className="textLink" href="/resume-template.txt" download>{c.resume} ↓</a></div>
          <div className="shotNote"><span>PORTRAIT / 01</span><span>Natural light study</span></div>
        </div>
        <figure className="heroPhoto"><img src={images[1].src} alt="自然光中的女性人像示例" /><figcaption>Selected portrait<br />2025</figcaption></figure>
        <div className="floatingFrame"><img src={images[0].src} alt="近距离男性人像示例" /></div>
      </section>

      <section className="filmSection" id="featured">
        <div className="sectionHead"><h2>{c.selected}</h2><div><button onClick={() => scrollFilm(-1)} aria-label="向前浏览">←</button><button onClick={() => scrollFilm(1)} aria-label="向后浏览">→</button></div></div>
        <div className="film" ref={filmRef}>
          <div className="filmLabel"><b>KODAK</b><span>{c.film}</span></div>
          {images.slice(0, 5).map((item, i) => <figure key={item.src}><span className="sprockets" /><img src={item.src} alt={`${lang === "zh" ? item.zh : item.en}摄影作品`} /><figcaption><b>{String(i + 1).padStart(2, "0")}</b><span>{lang === "zh" ? item.zh : item.en}</span></figcaption></figure>)}
        </div>
      </section>

      <section className="archive" id="work">
        <div className="archiveIntro"><h2>{c.archive}</h2><p>{c.archiveSub}</p></div>
        <div className="filters" role="group" aria-label="作品分类">{["all", "portrait", "event", "commercial"].map((f, i) => <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>{c.filters[i]}<sup>{f === "all" ? images.length : images.filter(x => x.type === f).length}</sup></button>)}</div>
        <div className="gallery">{visible.map((item, i) => <figure key={item.src} className={`galleryItem item${i % 4}`}><img src={item.src} alt={`${lang === "zh" ? item.zh : item.en}作品`} loading="lazy" /><figcaption><span>{lang === "zh" ? item.zh : item.en}</span><small>{item.meta}</small></figcaption></figure>)}</div>
      </section>

      <section className="about" id="about">
        <div className="aboutImage"><img src={images[3].src} alt="摄影师工作肖像示例" loading="lazy" /><span>ABOUT / 关于我</span></div>
        <div className="aboutCopy"><h2>{c.about}</h2><p>{c.bio}</p><ul>{c.facts.map(x => <li key={x}>{x}</li>)}</ul><a href="#contact">{lang === "zh" ? "进一步认识我" : "More about my practice"} ↗</a></div>
      </section>

      <section className="experience" id="experience">
        <h2>{c.experience}</h2>
        <div className="timeline">
          <article><time>2025 — NOW</time><h3>{lang === "zh" ? "独立人像摄影师" : "Independent Portrait Photographer"}</h3><p>{lang === "zh" ? "个人肖像、艺人宣传照与生活方式品牌视觉。" : "Portraits, artist press imagery and lifestyle campaigns."}</p></article>
          <article><time>2023 — 2025</time><h3>{lang === "zh" ? "商业摄影助理" : "Commercial Photo Assistant"}</h3><p>{lang === "zh" ? "参与棚拍、外景执行、灯光与数字资产管理。" : "Studio production, location work, lighting and asset management."}</p></article>
          <article><time>SELECTED</time><h3>{lang === "zh" ? "品牌与活动合作" : "Selected Collaborations"}</h3><p>Studio North · Nami Living · Common Ground · Field Notes</p></article>
        </div>
      </section>

      <section className="journal" id="journal">
        <div><h2>{c.journal}</h2><p>{c.journalSub}</p></div>
        <div className="articles">
          {[lang === "zh" ? "如何让第一次面对镜头的人放松下来" : "Helping first-time subjects feel at ease", lang === "zh" ? "阴天人像：把灰色天空变成柔光箱" : "Overcast portraits: turning grey sky into soft light", lang === "zh" ? "商业拍摄前，我会确认的九件事" : "Nine things I confirm before a commercial shoot"].map((title, i) => <a href="#contact" key={title}><time>0{i + 1}. 2025</time><h3>{title}</h3><span>↗</span></a>)}
        </div>
      </section>

      <footer id="contact">
        <div className="footerLead"><p>LET&apos;S MAKE SOMETHING HONEST.</p><h2>{c.contact}</h2><span>{c.contactSub}</span></div>
        <a className="mailButton" href="mailto:hello@example.com">{c.mail}<b>↗</b></a>
        <div className="footerBottom"><span>© 2026 林野摄影</span><div><a href="#">Instagram</a><a href="#">小红书</a><a href="#top">回到顶部 ↑</a></div></div>
      </footer>
    </main>
  );
}
