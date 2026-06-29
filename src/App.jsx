import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Braces,
  Contact,
  Grid3X3,
  Image,
  Layers3,
  Mail,
  MapPin,
  MousePointer2,
  Phone,
  ScanLine,
  WandSparkles,
  X,
} from "lucide-react";

const contact = {
  phone: "192-9428-5007",
  email: "2908652845@qq.com",
  location: "浙江省杭州市",
};

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const navItems = [
  { label: "关于我", href: "#about" },
  { label: "工作经历", href: "#experience" },
  { label: "作品展示", href: "#portfolio" },
  { label: "技能", href: "#skills" },
  { label: "联系方式", href: "#contact" },
];

const badges = [
  "Visual Communication",
  "AIGC Workflow",
  "Adobe Design Tools",
  "Media Content",
];

const personalInfo = [
  { labelEn: "Name", labelZh: "姓名", value: "李天赐" },
  { labelEn: "Role", labelZh: "身份", value: "AI视觉设计师" },
  { labelEn: "Base", labelZh: "常驻", value: contact.location },
  { labelEn: "Phone", labelZh: "电话", value: contact.phone },
  { labelEn: "Email", labelZh: "邮箱", value: contact.email },
  { labelEn: "Education", labelZh: "教育", value: "辽宁传媒学院 / 视觉传达设计 本科" },
];

const experiences = [
  {
    company: "杭州语邻信息科技有限公司",
    role: "AI美术设计",
    time: "2026.03 - 至今",
    summary:
      "围绕 AI 影视项目进行美术方向与视觉资产设计，把剧本需求转译为可执行的画面风格、场景设定与生成流程。",
    focus: ["AI影视项目", "视觉风格设定", "概念设计", "Prompt Workflow"],
    points: [
      "负责 AI 影视项目的整体美术视觉风格设定，统一场景氛围、角色气质、镜头画面与项目目标。",
      "主导概念设计、场景构建与视觉叙事推演，将剧本及创意需求拆解为参考图、提示词与视觉资产清单。",
      "协同导演、制片与后期团队推进创意落地，参与前期预研、生成测试、视觉筛选与后期调整。",
      "整合 AI 生成内容与传统美术流程，对画面一致性、构图、色彩和质感进行把控，提升产出效率。",
      "沉淀可复用 AIGC 工作流，包括提示词优化、风格参考管理、生成批次筛选与最终资产交付规范。",
    ],
  },
  {
    company: "杭州开势科技有限公司",
    role: "AI视觉设计",
    time: "2026.01 - 2026.03",
    summary:
      "以商业视觉与内容平台投放为核心，完成 AI 图像、产品视觉、AI 模特和短视频素材的快速制作与优化。",
    focus: ["AI短视频", "产品精修", "AI模特", "社媒视觉"],
    points: [
      "围绕电商与内容平台需求，使用 AI 工具完成短视频、产品动态视频和商业创意片段的快速生成。",
      "独立负责产品图片精修、AI 模特、场景图制作与视觉合成，保证商品卖点表达清晰。",
      "根据抖音、小红书及海外平台风格调整画面节奏、构图、色彩和产品呈现方式。",
      "将产品图、提示词、生成结果与后期修图流程串联，提高多版本视觉素材的产出效率。",
    ],
  },
  {
    company: "杭州洲道广告有限公司",
    role: "平面设计师",
    time: "2025.06 - 2025.09",
    summary:
      "在广告与品牌宣传场景中承担平面视觉设计执行，完成多类型宣传物料、品牌海报与网页 Banner 等设计支持。",
    focus: ["平面物料", "品牌海报", "网页 Banner", "宣传设计"],
    points: [
      "协助完成公司全品类平面物料设计，包括画册、折页、产品手册、品牌海报及网页 Banner 等内容。",
      "覆盖日常宣传、市场活动与业务推广场景，确保视觉表达符合品牌调性与传播目标。",
      "及时对接各部门宣传需求，快速理解设计目标，并转化为清晰可执行的视觉方案。",
      "通过高质量设计交付支持公司市场活动、业务推广与品牌传播工作。",
    ],
  },
];

const skills = [
  {
    icon: WandSparkles,
    title: "AI视觉生成",
    copy: "使用 Midjourney、即梦、Runway、可灵等工具进行视觉探索、图像生成和视频创意。",
  },
  {
    icon: Layers3,
    title: "平面视觉设计",
    copy: "覆盖海报、品牌物料、产品展示、书籍装帧、平面广告与版式设计。",
  },
  {
    icon: Image,
    title: "Adobe设计软件",
    copy: "熟悉 Photoshop、Illustrator、InDesign、After Effects、Animate、Dreamweaver。",
  },
  {
    icon: ScanLine,
    title: "动态与视频辅助",
    copy: "能够结合 AI 生成视频工具完成产品动态、创意片段与平台适配内容。",
  },
  {
    icon: Braces,
    title: "AI工作流协作",
    copy: "结合 ChatGPT、Claude、Codex 完成提示词整理、方案扩展和效率提升。",
  },
  {
    icon: Grid3X3,
    title: "媒体行业适配",
    copy: "理解小红书、抖音、海报、产品展示和短视频等内容平台的视觉风格。",
  },
];

const workflow = [
  { en: "Brief Input", zh: "需求输入" },
  { en: "Prompt Design", zh: "提示词设计" },
  { en: "Generation", zh: "AI 生成" },
  { en: "Visual Refinement", zh: "视觉精修" },
  { en: "Layout Design", zh: "版式设计" },
  { en: "Final Output", zh: "最终输出" },
];

const makeGalleryImages = (prefix, count, labelEn, labelZh) =>
  Array.from({ length: count }, (_, index) => ({
    src: asset(`assets/${prefix}-${String(index + 1).padStart(2, "0")}.jpg`),
    labelEn: `${labelEn} ${String(index + 1).padStart(2, "0")}`,
    labelZh: `${labelZh} ${String(index + 1).padStart(2, "0")}`,
  }));

const makeGalleryVideos = (prefix, count, labelEn, labelZh) =>
  Array.from({ length: count }, (_, index) => ({
    type: "video",
    src: asset(`assets/${prefix}-${String(index + 1).padStart(2, "0")}.mp4`),
    labelEn: `${labelEn} ${String(index + 1).padStart(2, "0")}`,
    labelZh: `${labelZh} ${String(index + 1).padStart(2, "0")}`,
    portrait: true,
  }));

const aiVisualExperimentProject = {
  path: "/projects/ai-visual-experiment",
  aliases: ["/projects/molyn"],
  categoryEn: "AI Visual Experiment",
  categoryZh: "AI 视觉实验",
  portfolioTitleEn: "AI Visual Experiment",
  portfolioTitleZh: "AI 视觉实验",
  portfolioMetaEn: "AIGC / Prompt / Render",
  portfolioMetaZh: "AIGC / 提示词 / 渲染",
  titleEn: "AI Visual Experiment",
  titleZh: "AI 视觉实验",
  metaEn: "AIGC / Prompt / Render",
  metaZh: "AIGC / 提示词 / 渲染",
  copy: "围绕东方场景、奇幻生物与赛博城市进行 AI 视觉探索，验证不同题材下的场景氛围、角色设定与镜头叙事表达。",
  cover: asset("assets/project-ai-showcase.jpg"),
  cardImage: asset("assets/project-ai-showcase.jpg"),
  cardImageAlt: "AI视觉实验赛博夜城展示图",
  tags: ["AIGC Scene", "Prompt Render", "Character Mood"],
  collections: [
    {
      titleEn: "Molyn",
      titleZh: "墨林",
      metaEn: "Oriental Scene / Character / Mood",
      metaZh: "东方场景 / 角色 / 氛围",
      copy: "以山林、雨景、古寺与侠客角色为核心，探索东方叙事里的冷调氛围与人物剪影。",
      cover: asset("assets/project-molyn-cover.jpg"),
      images: [
        {
          src: asset("assets/project-molyn-cover.jpg"),
          labelEn: "Forest Shrine",
          labelZh: "森林古寺",
        },
        {
          src: asset("assets/project-molyn-rain.jpg"),
          labelEn: "Rain Shelter",
          labelZh: "檐下雨景",
        },
        {
          src: asset("assets/project-molyn-bamboo.jpg"),
          labelEn: "Bamboo Tracking",
          labelZh: "竹林追踪",
        },
        {
          src: asset("assets/project-molyn-character.jpg"),
          labelEn: "Character Portrait",
          labelZh: "角色肖像",
          portrait: true,
        },
      ],
    },
    {
      titleEn: "Dragon Encounter",
      titleZh: "龙焰对峙",
      metaEn: "Fantasy Creature / Battle / Environment",
      metaZh: "奇幻生物 / 战斗 / 环境",
      copy: "围绕巨龙、骑士、风暴山谷与能量冲突，测试高戏剧张力的奇幻场景生成。",
      cover: asset("assets/project-ai-dragon-cover.jpg"),
      images: makeGalleryImages("project-ai-dragon", 7, "Dragon Visual", "龙焰视觉"),
    },
    {
      titleEn: "Eastern Wonderland",
      titleZh: "东方仙境",
      metaEn: "Landscape / Pavilion / Atmosphere",
      metaZh: "山水 / 楼阁 / 氛围",
      copy: "以雾气、松树、楼阁与浅色山水为主体，探索更轻盈的东方幻想场景。",
      cover: asset("assets/project-ai-wonderland-cover.jpg"),
      images: makeGalleryImages("project-ai-wonderland", 5, "Wonderland Visual", "仙境视觉"),
    },
    {
      titleEn: "Cyber Night City",
      titleZh: "赛博夜城",
      metaEn: "Cyberpunk / City / Character",
      metaZh: "赛博朋克 / 城市 / 角色",
      copy: "以霓虹街区、未来角色与机械设定为核心，探索高对比色彩与城市叙事。",
      cover: asset("assets/project-ai-cyber-cover.jpg"),
      images: makeGalleryImages("project-ai-cyber", 5, "Cyber Visual", "赛博视觉"),
    },
  ],
};

const posterDesignProject = {
  path: "/projects/poster-design",
  categoryEn: "Poster Design",
  categoryZh: "海报设计",
  portfolioTitleEn: "Poster Design",
  portfolioTitleZh: "海报设计",
  portfolioMetaEn: "Graphic / Layout / Type",
  portfolioMetaZh: "平面 / 版式 / 字体",
  titleEn: "Poster Design",
  titleZh: "海报设计",
  metaEn: "Graphic / Layout / Type",
  metaZh: "平面 / 版式 / 字体",
  copy: "以中国神兽与东方纸本文理为核心，进行海报系统、视觉符号、版式层级与实体物料场景的设计探索。",
  cover: asset("assets/project-poster-design-cover.jpg"),
  cardImage: asset("assets/project-poster-design-cover.jpg"),
  cardImageAlt: "中国神兽海报设计展示图",
  tags: ["Poster Design", "Editorial Layout", "Chinese Mythical Creatures"],
  collections: [
    {
      titleEn: "Chinese Mythical Creatures",
      titleZh: "中国神兽海报",
      metaEn: "Poster / Layout / Oriental Graphics",
      metaZh: "海报 / 版式 / 东方图形",
      copy: "围绕神兽插画、纸张肌理、中文竖排与中英混排，探索东方气质的系列海报与物料展示。",
      cover: asset("assets/project-poster-design-cover.jpg"),
      images: makeGalleryImages("project-poster-design", 9, "Poster Visual", "海报视觉").map((image) => ({
        ...image,
        portrait: true,
      })),
    },
  ],
};

const brandProductProject = {
  path: "/projects/brand-product-visual",
  categoryEn: "Brand Product Visual",
  categoryZh: "品牌产品视觉",
  portfolioTitleEn: "Brand Product Visual",
  portfolioTitleZh: "品牌产品视觉",
  portfolioMetaEn: "Brand / Product / Campaign",
  portfolioMetaZh: "品牌 / 产品 / Campaign",
  titleEn: "Brand Product Visual",
  titleZh: "品牌产品视觉",
  metaEn: "Brand / Product / Campaign",
  metaZh: "品牌 / 产品 / Campaign",
  copy: "围绕茶饮品牌包装、产品陈列、视觉物料与场景化摄影感构图，探索品牌产品视觉从包装到传播图的完整呈现。",
  cover: asset("assets/project-brand-design-cover.jpg"),
  cardImage: asset("assets/project-brand-design-cover.jpg"),
  cardImageAlt: "怡心茶包装品牌产品视觉展示图",
  tags: ["Brand Design", "Packaging Visual", "Product Campaign"],
  collections: [
    {
      titleEn: "Yixin Tea Packaging",
      titleZh: "怡心茶包装",
      metaEn: "Packaging / Product / Visual System",
      metaZh: "包装 / 产品 / 视觉系统",
      copy: "以茶盒包装、月饼产品、自然道具与柔和色彩为核心，呈现东方茶饮品牌的产品视觉体系。",
      cover: asset("assets/project-brand-design-cover.jpg"),
      images: makeGalleryImages("project-brand-design", 10, "Brand Visual", "品牌视觉").map((image) => ({
        ...image,
        portrait: true,
      })),
    },
  ],
};

const videoCreativeProject = {
  path: "/projects/video-creative",
  categoryEn: "Video Creative",
  categoryZh: "视频创意",
  portfolioTitleEn: "Video Creative",
  portfolioTitleZh: "视频创意",
  portfolioMetaEn: "Motion / AI Video / Story",
  portfolioMetaZh: "动态 / AI 视频 / 叙事",
  titleEn: "Video Creative",
  titleZh: "视频创意",
  metaEn: "Motion / AI Video / Story",
  metaZh: "动态 / AI 视频 / 叙事",
  copy: "以 AI 视频生成、镜头节奏、场景运动与视觉叙事为核心，探索短片式动态视觉和平台传播素材的生成方法。",
  cover: asset("assets/project-video-creative-01.mp4"),
  coverType: "video",
  cardVideo: asset("assets/project-video-creative-01.mp4"),
  cardVideoAlt: "视频创意 AI 动态视觉展示",
  tags: ["AI Video", "Motion Design", "Visual Story"],
  collections: [
    {
      titleEn: "AI Motion Study",
      titleZh: "AI 动态视觉实验",
      metaEn: "AI Video / Motion / Narrative",
      metaZh: "AI 视频 / 动态 / 叙事",
      copy: "将视频生成片段整理为动态视觉作品组，展示人物、场景、镜头运动与氛围塑造的不同尝试。",
      cover: asset("assets/project-video-creative-01.mp4"),
      images: makeGalleryVideos("project-video-creative", 10, "Motion Visual", "动态视觉"),
    },
  ],
};

const projects = [
  aiVisualExperimentProject,
  posterDesignProject,
  brandProductProject,
  videoCreativeProject,
];

const values = [
  "把抽象创意转化为可执行视觉方案",
  "结合 AI 工具提升设计效率与探索广度",
  "兼具平面设计、品牌视觉、媒体内容和 AI 生成能力",
  "关注审美、信息层级、画面完整度和落地效果",
  "适合 AI视觉设计、平面设计、媒体视觉、品牌内容相关岗位",
];

const getRoutePath = () => {
  const hash = window.location.hash;
  return hash.startsWith("#/") ? hash.slice(1) : window.location.pathname;
};

function App() {
  const [routePath, setRoutePath] = useState(getRoutePath);
  useMotionEffects(routePath);
  const detailProjects = [aiVisualExperimentProject, posterDesignProject, brandProductProject, videoCreativeProject];
  const currentDetailProject = detailProjects.find((project) =>
    [project.path, ...(project.aliases ?? [])].includes(routePath),
  );

  useEffect(() => {
    const updateRoutePath = () => setRoutePath(getRoutePath());
    window.addEventListener("hashchange", updateRoutePath);
    window.addEventListener("popstate", updateRoutePath);
    return () => {
      window.removeEventListener("hashchange", updateRoutePath);
      window.removeEventListener("popstate", updateRoutePath);
    };
  }, []);

  if (currentDetailProject) {
    return (
      <main className="site project-detail-site">
        <Header />
        <ProjectDetail project={currentDetailProject} />
        <BackToTop />
      </main>
    );
  }

  return (
    <main className="site">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Workflow />
      <Values />
      <ContactSection />
      <BackToTop />
    </main>
  );
}

function useMotionEffects(routePath) {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("motion-ready");

    if (prefersReducedMotion) {
      return () => root.classList.remove("motion-ready");
    }

    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
      observer.observe(item);
    });

    let animationFrame = 0;
    const handleMouseMove = (event) => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 18;
        const y = (event.clientY / window.innerHeight - 0.5) * 14;
        root.style.setProperty("--pupil-x", `${x.toFixed(2)}px`);
        root.style.setProperty("--pupil-y", `${y.toFixed(2)}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
      root.classList.remove("motion-ready");
      root.style.removeProperty("--pupil-x");
      root.style.removeProperty("--pupil-y");
    };
  }, [routePath]);
}

function Header() {
  return (
    <header className="topbar">
      <a className="logo" href="#top" aria-label="Back to top">
        <span>AI</span>
        <strong>DESIGN</strong>
      </a>
      <nav>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="connect-btn" href={`mailto:${contact.email}`}>
        Connect
      </a>
    </header>
  );
}

function BilingualTitle({ zh, en }) {
  return (
    <h2 className="bilingual-title">
      <span className="bilingual-title-zh">{zh}</span>
      <span className="bilingual-title-en">
        <i aria-hidden="true">/</i>
        <em>{en}</em>
      </span>
    </h2>
  );
}

function Hero() {
  return (
    <section className="screen hero-screen" id="top">
      <div className="stitch-pill pill-visual">Visual Communication</div>
      <div className="stitch-pill pill-adobe">Adobe Design Tools</div>
      <div className="stitch-pill pill-workflow">AIGC Workflow</div>
      <div className="stitch-pill pill-media">Media Content</div>

      <div className="hero-title-stack" aria-label="Don't Hesitate to Reach Out">
        <div className="hero-identity">
          <span>LI TIANCI / PERSONAL PORTFOLIO</span>
        </div>
        <h1 className="stitch-title">
          Don't
          <br />
          Hesitate
          <br />
          to Reach
          <br />
          Out!
        </h1>
        <div className="stitch-eyes" aria-hidden="true">
          <span className="stitch-eye" />
          <span className="stitch-eye" />
        </div>
        <div className="hero-actions" aria-label="首屏快捷入口">
          <a href="#portfolio">查看作品</a>
          <a href="#about">了解我</a>
        </div>
      </div>

      <div className="yellow-dome" aria-hidden="true" />
    </section>
  );
}

function About() {
  const [aboutTap, setAboutTap] = useState(0);
  const [aboutTapActive, setAboutTapActive] = useState(false);
  const [activeAboutItem, setActiveAboutItem] = useState("");
  const aboutTapTimer = useRef(0);
  const aboutItemTimer = useRef(0);

  const playAboutTap = () => {
    window.clearTimeout(aboutTapTimer.current);
    setAboutTap((value) => value + 1);
    setAboutTapActive(false);
    window.setTimeout(() => setAboutTapActive(true), 0);
    aboutTapTimer.current = window.setTimeout(() => setAboutTapActive(false), 420);
  };

  const playAboutItemTap = (event, key) => {
    event.stopPropagation();
    window.clearTimeout(aboutItemTimer.current);
    setActiveAboutItem("");
    window.setTimeout(() => setActiveAboutItem(key), 0);
    aboutItemTimer.current = window.setTimeout(() => setActiveAboutItem(""), 520);
  };

  useEffect(
    () => () => {
      window.clearTimeout(aboutTapTimer.current);
      window.clearTimeout(aboutItemTimer.current);
    },
    [],
  );

  const handleAboutKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    playAboutTap();
  };

  const handleAboutItemKeyDown = (event, key) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    playAboutItemTap(event, key);
  };

  return (
    <section className="screen about-screen" id="about">
      <div className="about-visual-band shell" aria-hidden="true">
        <div className="about-axis">
          <span>AI VISUAL DESIGN</span>
          <span>AIGC / EDITORIAL / MEDIA</span>
          <span>HANGZHOU CN</span>
        </div>
        <div className="about-ghost-title">LT / AI</div>
        <div className="about-orbit">
          <span />
          <i />
        </div>
        <div className="about-stat stat-one">
          <strong>02</strong>
          <span>WORK EXPERIENCE</span>
        </div>
        <div className="about-stat stat-two">
          <strong>06+</strong>
          <span>DESIGN TOOLKITS</span>
        </div>
        <div className="about-note">Prompt to Visual Output</div>
      </div>
      <article className="metadata-panel shell" data-reveal>
        <div className="metadata-head">
          <span>Metadata / About</span>
          <span>ID: LT-2026</span>
        </div>
        <div
          className={`metadata-body metadata-body-interactive${aboutTapActive ? " is-clicking" : ""}`}
          onClick={playAboutTap}
          onKeyDown={handleAboutKeyDown}
        >
          {aboutTap > 0 && <span className="metadata-click-burst" key={aboutTap} aria-hidden="true" />}
          <div className="metadata-roles">
            <h2>Hello, I'm an</h2>
            <div
              className={`role-token click-tile${activeAboutItem === "role-ai" ? " is-clicking" : ""}`}
              role="button"
              tabIndex={0}
              onClick={(event) => playAboutItemTap(event, "role-ai")}
              onKeyDown={(event) => handleAboutItemKeyDown(event, "role-ai")}
            >
              {activeAboutItem === "role-ai" && <i className="click-tile-burst" aria-hidden="true" />}
              <strong>AI Visual Designer</strong>
              <span>AI视觉设计师</span>
            </div>
            <div
              className={`role-token wide click-tile${activeAboutItem === "role-media" ? " is-clicking" : ""}`}
              role="button"
              tabIndex={0}
              onClick={(event) => playAboutItemTap(event, "role-media")}
              onKeyDown={(event) => handleAboutItemKeyDown(event, "role-media")}
            >
              {activeAboutItem === "role-media" && <i className="click-tile-burst" aria-hidden="true" />}
              <strong>Media Industry Practitioner</strong>
              <span>媒体行业从业者</span>
            </div>
          </div>

          <div className="metadata-copy">
            <p>
              视觉传达设计背景，熟悉 Adobe 设计软件，持续学习 AI 辅助设计工具，
              能够完成海报、品牌物料、产品展示、媒体创意与 AI 视觉生成相关设计。
            </p>
            <div className="personal-info-grid" aria-label="个人信息">
              {personalInfo.map((item) => (
                <div
                  className={`personal-info-item click-tile${
                    activeAboutItem === `info-${item.labelEn}` ? " is-clicking" : ""
                  }`}
                  key={item.labelEn}
                  role="button"
                  tabIndex={0}
                  onClick={(event) => playAboutItemTap(event, `info-${item.labelEn}`)}
                  onKeyDown={(event) => handleAboutItemKeyDown(event, `info-${item.labelEn}`)}
                >
                  {activeAboutItem === `info-${item.labelEn}` && (
                    <i className="click-tile-burst" aria-hidden="true" />
                  )}
                  <span>{item.labelEn}</span>
                  <strong>{item.value}</strong>
                  <small>{item.labelZh}</small>
                </div>
              ))}
            </div>
            <div className="meta-tags">
              {badges.map((badge) => (
                <span key={badge}>#{badge.replaceAll(" ", "_")}</span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

function Experience() {
  return (
    <section className="screen paper-screen experience-screen" id="experience">
      <div className="experience-decoration" aria-hidden="true">
        <span className="experience-ghost">EXPERIENCE</span>
        <span className="experience-ruler" />
        <span className="experience-dot dot-one" />
        <span className="experience-dot dot-two" />
        <span className="experience-corner corner-one" />
        <span className="experience-corner corner-two" />
        <span className="experience-label">AI / VISUAL / WORKFLOW</span>
      </div>
      <div className="shell experience-shell">
        <div className="section-head" data-reveal>
          <span className="section-kicker">Experience / 003</span>
          <BilingualTitle zh="工作经历" en="Work Experience" />
        </div>
        <div className="timeline">
          {experiences.map((item, index) => (
            <article className="timeline-card" key={item.company} data-reveal>
              <span className="card-index">0{index + 1}</span>
              <div>
                <p className="mono">{item.time}</p>
                <h3>{item.company}</h3>
                <strong>{item.role}</strong>
                <p className="experience-summary">{item.summary}</p>
                <div className="experience-tags" aria-label={`${item.company} 工作重点`}>
                  {item.focus.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [activeSkill, setActiveSkill] = useState("");
  const [skillPulse, setSkillPulse] = useState(0);

  const playSkillTap = (event, title) => {
    event.preventDefault();
    setActiveSkill(title);
    setSkillPulse((value) => value + 1);
  };

  const handleSkillKeyDown = (event, title) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    playSkillTap(event, title);
  };

  return (
    <section className="screen skills-screen" id="skills">
      <div className="skills-decoration" aria-hidden="true">
        <span className="skills-ghost">ABILITY</span>
        <span className="skills-measure measure-one" />
        <span className="skills-measure measure-two" />
        <span className="skills-node node-one" />
        <span className="skills-node node-two" />
        <span className="skills-bracket bracket-one" />
        <span className="skills-bracket bracket-two" />
        <span className="skills-chip">TOOLKIT / AIGC / OUTPUT</span>
      </div>
      <div className="shell skills-shell">
        <div className="section-head" data-reveal>
          <span className="section-kicker">Skills / 005</span>
          <BilingualTitle zh="设计能力" en="Design Ability Cards" />
        </div>
        <div className="skill-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <article
                className={`skill-card skill-card-interactive${activeSkill === skill.title ? " is-selected" : ""}`}
                key={skill.title}
                role="button"
                aria-pressed={activeSkill === skill.title}
                tabIndex={0}
                onClick={(event) => playSkillTap(event, skill.title)}
                onKeyDown={(event) => handleSkillKeyDown(event, skill.title)}
              >
                {activeSkill === skill.title && (
                  <span className="skill-click-burst" aria-hidden="true" key={`${skill.title}-${skillPulse}`} />
                )}
                <div className="skill-top">
                  <Icon size={25} />
                  <span>0{index + 1}</span>
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="screen workflow-screen" id="workflow">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="section-kicker">AI Workflow / 006</span>
          <BilingualTitle zh="从需求到输出" en="From Brief to Output" />
        </div>
        <div className="workflow-board">
          {workflow.map((step, index) => (
            <div className="workflow-step" key={step.en} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.en}</strong>
              <em>{step.zh}</em>
              <i />
            </div>
          ))}
        </div>
        <div className="terminal-panel" data-reveal>
          <span className="mono">PROMPT / RENDER / ASSET / OUTPUT</span>
          <p>
            将需求拆解为提示词、视觉方向、生成资产、修图反馈与最终版式，让 AI 成为设计流程里的加速器。
          </p>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="screen portfolio-screen" id="portfolio">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="section-kicker">Portfolio Preview / 004</span>
          <BilingualTitle zh="作品展示" en="Portfolio Preview" />
        </div>
        <div className="project-grid">
          {projects.map((project, index) => {
            const cardBody = (
              <>
                {project.cardVideo ? (
                  <div className="project-list-cover">
                    <video
                      src={project.cardVideo}
                      aria-label={project.cardVideoAlt}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                    <span>OPEN PROJECT / 点击进入项目页</span>
                  </div>
                ) : project.cardImage ? (
                  <div className="project-list-cover">
                    <img src={project.cardImage} alt={project.cardImageAlt} loading="lazy" />
                    <span>OPEN PROJECT / 点击进入项目页</span>
                  </div>
                ) : (
                  <div className="image-placeholder">
                    <Grid3X3 size={24} />
                    <span>IMAGE PLACEHOLDER</span>
                    <em>后续替换作品图</em>
                  </div>
                )}
                <div className="project-meta">
                  <span>0{index + 1}</span>
                  <h3>
                    {project.portfolioTitleEn ?? project.titleEn}
                    <em>{project.portfolioTitleZh ?? project.titleZh}</em>
                  </h3>
                  <p>
                    {project.portfolioMetaEn ?? project.metaEn}
                    <em>{project.portfolioMetaZh ?? project.metaZh}</em>
                  </p>
                </div>
              </>
            );

            return project.path ? (
              <a
                className="project-card project-card-link"
                href={`#${project.path}`}
                key={project.titleEn}
                aria-label={`查看${project.titleZh}项目详情`}
                data-reveal
              >
                {cardBody}
              </a>
            ) : (
              <article className="project-card" key={project.titleEn} data-reveal>
                {cardBody}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectDetail({ project }) {
  const [activeMedia, setActiveMedia] = useState(null);
  const isVideoProject = project.coverType === "video";
  const heroVideos = isVideoProject ? project.collections.flatMap((collection) => collection.images) : [];
  const featuredVideo = heroVideos[0];

  useEffect(() => {
    if (!activeMedia) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMedia(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMedia]);

  return (
    <section className={`project-detail-page${project.coverType === "video" ? " is-video-detail" : ""}`} id="top">
      <div className="shell detail-hero" data-reveal>
        <div className="detail-copy">
          <a className="detail-back" href="#portfolio">
            Back to Portfolio / 返回作品
          </a>
          <span className="section-kicker">{project.categoryEn} / 001</span>
          <h1>
            {project.titleEn}
            <em>{project.titleZh}</em>
          </h1>
          <p>{project.copy}</p>
          <div className="detail-tags">
            {(project.tags ?? [project.categoryZh, "AIGC Scene", "Character Mood"]).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        {isVideoProject && featuredVideo ? (
          <figure className="detail-video-feature">
            <button
              className="detail-video-feature-trigger"
              type="button"
              onClick={() =>
                setActiveMedia({
                  type: "video",
                  src: featuredVideo.src,
                  alt: `${project.titleZh}${featuredVideo.labelZh}`,
                  title: featuredVideo.labelEn,
                  subtitle: featuredVideo.labelZh,
                })
              }
            >
              <video src={featuredVideo.src} autoPlay muted loop playsInline preload="metadata" />
              <span>FEATURED VIDEO / 代表视频</span>
            </button>
          </figure>
        ) : (
          <figure className="detail-cover">
            <button
              className="detail-cover-button"
              type="button"
              onClick={() =>
                setActiveMedia({
                  type: project.coverType ?? "image",
                  src: project.cover,
                  alt: `${project.titleZh}封面视觉`,
                  title: project.titleEn,
                  subtitle: project.titleZh,
                })
              }
            >
              <img src={project.cover} alt={`${project.titleZh}封面视觉`} />
            </button>
          </figure>
        )}
      </div>

      {isVideoProject && (
        <div className="shell detail-video-projects">
          {project.collections.map((collection, collectionIndex) => (
            <section className="detail-project-block" key={collection.titleEn} data-reveal>
              <div className="detail-project-head">
                <span>{String(collectionIndex + 1).padStart(2, "0")}</span>
                <div>
                  <p className="mono">{collection.metaEn}</p>
                  <h2>
                    {collection.titleEn}
                    <em>{collection.titleZh}</em>
                  </h2>
                </div>
                <p>{collection.copy}</p>
              </div>
              <div className="detail-video-gallery" aria-label="视频作品列表">
                {collection.images.map((video, index) => (
                  <figure className="detail-video-card" key={video.src} data-reveal>
                    <button
                      className="detail-video-card-trigger"
                      type="button"
                      onClick={() =>
                        setActiveMedia({
                          type: "video",
                          src: video.src,
                          alt: `${collection.titleZh}${video.labelZh}`,
                          title: video.labelEn,
                          subtitle: video.labelZh,
                        })
                      }
                    >
                      <video src={video.src} autoPlay muted loop playsInline preload="metadata" />
                    </button>
                    <figcaption>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{video.labelEn}</strong>
                      <em>{video.labelZh}</em>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {!isVideoProject && (
        <div className="shell detail-projects">
          {project.collections.map((collection, collectionIndex) => (
            <section className="detail-project-block" key={collection.titleEn} data-reveal>
              <div className="detail-project-head">
                <span>{String(collectionIndex + 1).padStart(2, "0")}</span>
                <div>
                  <p className="mono">{collection.metaEn}</p>
                  <h2>
                    {collection.titleEn}
                    <em>{collection.titleZh}</em>
                  </h2>
                </div>
                <p>{collection.copy}</p>
              </div>
              <div className="detail-gallery detail-project-gallery">
                {collection.images.map((image, imageIndex) => (
                  <figure
                    className={`detail-image-card${image.portrait ? " is-portrait" : ""}`}
                    key={image.src}
                    data-reveal
                  >
                    <button
                      className="detail-image-trigger"
                      type="button"
                      onClick={() =>
                        setActiveMedia({
                          type: image.type ?? "image",
                          src: image.src,
                          alt: `${collection.titleZh}${image.labelZh}`,
                          title: image.labelEn,
                          subtitle: image.labelZh,
                        })
                      }
                    >
                      {image.type === "video" ? (
                        <video src={image.src} autoPlay muted loop playsInline preload="metadata" />
                      ) : (
                        <img
                          src={image.src}
                          alt={`${collection.titleZh}${image.labelZh}`}
                          loading={collectionIndex === 0 && imageIndex === 0 ? "eager" : "lazy"}
                        />
                      )}
                    </button>
                    <figcaption>
                      <span>{String(imageIndex + 1).padStart(2, "0")}</span>
                      <strong>{image.labelEn}</strong>
                      <em>{image.labelZh}</em>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
      {activeMedia && (
        <div className="image-lightbox" role="dialog" aria-modal="true" onClick={() => setActiveMedia(null)}>
          <button className="lightbox-close" type="button" aria-label="关闭全图" onClick={() => setActiveMedia(null)}>
            <X size={22} />
          </button>
          <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
            {activeMedia.type === "video" ? (
              <video src={activeMedia.src} aria-label={activeMedia.alt} controls autoPlay playsInline />
            ) : (
              <img src={activeMedia.src} alt={activeMedia.alt} />
            )}
            <figcaption>
              <strong>{activeMedia.title}</strong>
              <span>{activeMedia.subtitle}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function Values() {
  return (
    <section className="screen values-screen" id="values">
      <div className="values-decoration" aria-hidden="true">
        <span className="values-ghost">VALUE</span>
        <span className="values-ruler value-ruler-one" />
        <span className="values-ruler value-ruler-two" />
        <span className="values-node value-node-one" />
        <span className="values-node value-node-two" />
        <span className="values-corner value-corner-one" />
        <span className="values-corner value-corner-two" />
        <span className="values-chip">DESIGN / AI / DELIVERY</span>
      </div>
      <div className="shell values-layout" data-reveal>
        <div>
          <div className="section-kicker">Personal Value / 007</div>
          <h2>Why Work With Me</h2>
        </div>
        <div className="value-list">
          {values.map((value, index) => (
            <div className="value-item" key={value} data-reveal>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="screen contact-screen" id="contact">
      <div className="floating-pill pill-one">Visual Communication</div>
      <div className="floating-pill pill-two">AIGC Workflow</div>
      <div className="floating-pill pill-three">Adobe Design Tools</div>
      <div className="contact-shape" aria-hidden="true">
        <div className="eye eye-left" />
        <div className="eye eye-right" />
      </div>
      <div className="shell contact-layout" data-reveal>
        <div>
          <span className="section-kicker">Contact / 008</span>
          <h2>
            Let’s Create
            <br />
            Visual Assets
            <br />
            with AI.
          </h2>
        </div>
        <div className="contact-card">
          <div className="contact-line">
            <Contact size={18} />
            <span>李天赐 / AI Visual Designer</span>
          </div>
          <div className="contact-line">
            <Mail size={18} />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className="contact-line">
            <Phone size={18} />
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </div>
          <div className="contact-line">
            <MapPin size={18} />
            <span>{contact.location}</span>
          </div>
          <p>让下一组视觉资产，从清晰的视觉表达开始。</p>
          <a className="btn btn-dark" href={`mailto:${contact.email}`}>
            Start a Project
            <MousePointer2 size={17} />
          </a>
        </div>
      </div>
      <footer>
        <span>© 2026 Li Tianci Portfolio</span>
        <span>AI Visual Designer</span>
      </footer>
    </section>
  );
}

function BackToTop() {
  return (
    <a className="back-to-top" href="#top" aria-label="返回顶部">
      <ArrowUp size={18} />
      <span>Top</span>
    </a>
  );
}

export default App;
