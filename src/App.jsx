import { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
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

function DeferredVideo({ src, ...props }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return <video ref={videoRef} src={shouldLoad ? src : undefined} preload="none" {...props} />;
}

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
    company: "杭州枫叶互动科技有限公司",
    role: "AI美术设计",
    time: "2026.07 - 至今",
    summary:
      "主导 AI 影视项目的整体视觉美术风格制定，联动导演与制片团队落地创意方案，融合 AI 生成与传统美术流程提升画面质量与制作效率。",
    focus: ["AI影视美术", "视觉风格把控", "创意方案落地", "AI+传统流程"],
    points: [
      "制定 AI 影视项目整体视觉美术风格，把控全片美术走向，统一场景氛围、角色气质与镜头画面。",
      "联动导演与制片团队，推进各项视觉创意方案的落地执行，确保视觉呈现与项目目标一致。",
      "融合 AI 生成素材和传统美术制作流程，优化产出流程，升级画面质量与制作效率。",
    ],
  },
  {
    company: "杭州语邻信息科技有限公司",
    role: "AI美术设计",
    time: "2026.03 - 2026.06",
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

const makeGalleryImages = (prefix, count, labelEn, labelZh, extension = "jpg", portrait = false, fileStart = 1) =>
  Array.from({ length: count }, (_, index) => ({
    src: asset(`assets/${prefix}-${String(index + fileStart).padStart(2, "0")}.${extension}`),
    labelEn: `${labelEn} ${String(index + 1).padStart(2, "0")}`,
    labelZh: `${labelZh} ${String(index + 1).padStart(2, "0")}`,
    portrait,
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
  copy: "围绕东方叙事、幻想角色、机甲人物与未来建筑进行 AI 视觉探索，验证不同题材下的场景氛围与镜头叙事表达。",
  cover: asset("assets/project-molyn-cover.jpg"),
  cardImage: asset("assets/project-molyn-cover.jpg"),
  cardImageAlt: "AI视觉实验东方场景展示图",
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
      titleEn: "Crystal Vanguard",
      titleZh: "晶铠幻象",
      metaEn: "Fantasy Character / Crystal Armor / Detail",
      metaZh: "幻想角色 / 晶体铠甲 / 细节",
      copy: "以晶体、银色机械结构与幻想人物为核心，探索高光材质、冷色氛围和角色特写的视觉表现。",
      cover: asset("assets/project-ai-crystal-01.png"),
      images: makeGalleryImages("project-ai-crystal", 5, "Crystal Character", "晶铠角色", "png"),
    },
    {
      titleEn: "Zero Pilot",
      titleZh: "零号机师",
      metaEn: "Mecha / Cockpit / Character",
      metaZh: "机甲 / 驾驶舱 / 角色",
      copy: "围绕未来驾驶员、机甲座舱与高饱和霓虹光线，构建具有动画感的科幻角色系列。",
      cover: asset("assets/project-ai-pilot-01.png"),
      images: makeGalleryImages("project-ai-pilot", 4, "Pilot Visual", "机师视觉", "png"),
    },
    {
      titleEn: "Abyss Megastructure",
      titleZh: "环城深渊",
      metaEn: "Megastructure / Sci-Fi City / Scale",
      metaZh: "巨构建筑 / 科幻城市 / 尺度",
      copy: "以环形城市、垂直深井与巨型建筑空间为主体，测试宏大尺度、空间纵深与末世工业氛围。",
      cover: asset("assets/project-ai-abyss-01.png"),
      images: makeGalleryImages("project-ai-abyss", 4, "Abyss City", "深渊城市", "png"),
    },
    {
      titleEn: "Tidal Metropolis",
      titleZh: "潮汐幻城",
      metaEn: "Oriental City / Coast / Illustration",
      metaZh: "东方城市 / 海岸 / 插画",
      copy: "将东方建筑、现代城市与海岸浪潮结合，探索青绿色调、云海光影与竖幅场景插画。",
      cover: asset("assets/project-ai-tide-01.png"),
      images: makeGalleryImages("project-ai-tide", 3, "Tidal City", "潮汐城市", "png", true),
    },
  ],
};

const posterDesignProject = {
  path: "/projects/poster-design",
  categoryEn: "Graphic Design",
  categoryZh: "平面设计",
  portfolioTitleEn: "Graphic Design",
  portfolioTitleZh: "平面设计",
  portfolioMetaEn: "Graphic / Layout / Type",
  portfolioMetaZh: "平面 / 版式 / 字体",
  titleEn: "Graphic Design",
  titleZh: "平面设计",
  metaEn: "Graphic / Layout / Type",
  metaZh: "平面 / 版式 / 字体",
  copy: "收录 Logo 识别、品牌视觉、运营海报与主题平面设计，呈现从视觉符号到传播场景的多类型设计实践。",
  cover: asset("assets/project-graphic-collection-01.jpg"),
  cardImage: asset("assets/project-graphic-collection-01.jpg"),
  cardImageAlt: "平面视觉设计合集展示图",
  tags: ["Logo Design", "Poster Design", "Campaign Visual"],
  collections: [
    {
      titleEn: "Graphic Design Collection",
      titleZh: "平面视觉设计合集",
      metaEn: "Logo / Poster / Campaign",
      metaZh: "标志 / 海报 / 传播视觉",
      copy: "涵盖 Logo 方案、品牌图形、运营海报与主题视觉延展，以不同风格的版式、字体和图像语言完成多场景平面表达。",
      cover: asset("assets/project-graphic-collection-01.jpg"),
      images: makeGalleryImages("project-graphic-collection", 10, "Graphic Visual", "平面视觉"),
    },
    {
      titleEn: "Poster Design Studies",
      titleZh: "海报设计练习",
      metaEn: "Poster / Typography / Layout",
      metaZh: "海报 / 字体 / 版式",
      copy: "围绕字体层级、几何图形、插画元素与色彩对比进行海报实验，探索不同主题下的版式节奏与视觉语言。",
      cover: asset("assets/project-graphic-posters-01.jpg"),
      images: makeGalleryImages("project-graphic-posters", 5, "Poster Study", "海报练习"),
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
  copy: "收录茉林 Molyn 香氛品牌与“不期而遇的夏天”插画视觉项目，涵盖品牌概念、包装系统、主题插画与场景化展示。",
  cover: asset("assets/project-brand-molyn-01.jpg"),
  cardImage: asset("assets/project-brand-molyn-01.jpg"),
  cardImageAlt: "茉林 Molyn 香氛品牌设计展示图",
  tags: ["Brand Identity", "Packaging Design", "Illustration", "Campaign Visual"],
  collections: [
    {
      titleEn: "Molyn Fragrance Branding",
      titleZh: "茉林香氛品牌",
      metaEn: "Brand Identity / Packaging / Product Visual",
      metaZh: "品牌识别 / 包装 / 产品视觉",
      copy: "以自然绿色、香氛产品与生活方式场景为核心，建立从品牌概念、包装延展到产品陈列的完整视觉表达。",
      cover: asset("assets/project-brand-molyn-01.jpg"),
      images: makeGalleryImages("project-brand-molyn", 10, "Molyn Brand Visual", "茉林品牌视觉"),
    },
    {
      titleEn: "A Summer Encounter",
      titleZh: "不期而遇的夏天",
      metaEn: "Illustration / Campaign / Visual Extension",
      metaZh: "插画 / 主题企划 / 视觉延展",
      copy: "以夏日奇幻生活为主题，将自然、松弛生活与童话元素融合，完成从概念探索、插画绘制到户外视觉延展的完整项目。",
      cover: asset("assets/project-brand-summer-02.jpg"),
      images: makeGalleryImages("project-brand-summer", 8, "Summer Campaign", "夏日企划视觉", "jpg", false, 2),
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
  copy: "收录 SP 动态影像作品，涵盖竖屏短片与横屏视觉实验，展示镜头节奏、场景运动和氛围塑造。",
  cover: asset("assets/project-video-sp-01.mp4"),
  coverType: "video",
  cardVideo: asset("assets/project-video-sp-01.mp4"),
  cardVideoAlt: "SP 动态影像作品展示",
  tags: ["Motion Visual", "Short Video", "Visual Story"],
  collections: [
    {
      titleEn: "SP Motion Collection",
      titleZh: "SP 动态影像合集",
      metaEn: "Motion / Short Video / Visual Experiment",
      metaZh: "动态 / 短片 / 视觉实验",
      copy: "将不同画幅的动态影像整理为完整作品组，保留竖屏与横屏原始比例，呈现场景、人物和镜头运动的多样尝试。",
      cover: asset("assets/project-video-sp-01.mp4"),
      images: [
        { type: "video", src: asset("assets/project-video-sp-01.mp4"), labelEn: "SP Motion 01", labelZh: "SP 动态影像 01", portrait: true },
        { type: "video", src: asset("assets/project-video-sp-02.mp4"), labelEn: "SP Motion 02", labelZh: "SP 动态影像 02", portrait: true },
        { type: "video", src: asset("assets/project-video-sp-03.mp4"), labelEn: "SP Motion 03", labelZh: "SP 动态影像 03", portrait: true },
        { type: "video", src: asset("assets/project-video-sp-04.mp4"), labelEn: "SP Motion 04", labelZh: "SP 动态影像 04", portrait: false },
        { type: "video", src: asset("assets/project-video-sp-05.mp4"), labelEn: "SP Motion 05", labelZh: "SP 动态影像 05", portrait: false },
        { type: "video", src: asset("assets/project-video-sp-06.mp4"), labelEn: "SP Motion 06", labelZh: "SP 动态影像 06", portrait: true },
        { type: "video", src: asset("assets/project-video-sp-07.mp4"), labelEn: "SP Motion 07", labelZh: "SP 动态影像 07", portrait: true },
        { type: "video", src: asset("assets/project-video-sp-08.mp4"), labelEn: "SP Motion 08", labelZh: "SP 动态影像 08", portrait: false },
      ],
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [routePath]);

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
  const layoutClasses = ["is-primary", "is-secondary", "is-secondary", "is-primary"];

  return (
    <section className="screen portfolio-screen" id="portfolio">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="section-kicker">Portfolio Preview / 004</span>
          <BilingualTitle zh="作品展示" en="Portfolio Preview" />
        </div>
        <div className="portfolio-intro" data-reveal>
          <p>
            从 AI 生成实验到品牌与动态内容，以视觉叙事、信息层级和完整交付为核心，
            呈现不同媒介中的设计探索。
          </p>
          <div className="portfolio-disciplines" aria-label="作品类型">
            <span>AIGC</span>
            <span>Graphic</span>
            <span>Brand</span>
            <span>Motion</span>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => {
            const cardBody = (
              <>
                {project.cardVideo ? (
                  <div className="project-list-cover">
                    <DeferredVideo
                      src={project.cardVideo}
                      aria-label={project.cardVideoAlt}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                    <span className="project-cover-index">0{index + 1}</span>
                    <span className="project-open">
                      Open project <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  </div>
                ) : project.cardImage ? (
                  <div className="project-list-cover">
                    <img
                      src={project.cardImage}
                      alt={project.cardImageAlt}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                    <span className="project-cover-index">0{index + 1}</span>
                    <span className="project-open">
                      Open project <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  </div>
                ) : (
                  <div className="image-placeholder">
                    <Grid3X3 size={24} />
                    <span>IMAGE PLACEHOLDER</span>
                    <em>后续替换作品图</em>
                  </div>
                )}
                <div className="project-meta">
                  <div className="project-meta-heading">
                    <span>Selected work / 0{index + 1}</span>
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </div>
                  <h3>
                    {project.portfolioTitleEn ?? project.titleEn}
                    <em>{project.portfolioTitleZh ?? project.titleZh}</em>
                  </h3>
                  <p>
                    {project.portfolioMetaEn ?? project.metaEn}
                    <em>{project.portfolioMetaZh ?? project.metaZh}</em>
                  </p>
                  {project.copy && <p className="project-description">{project.copy}</p>}
                </div>
              </>
            );

            return project.path ? (
              <a
                className={`project-card project-card-link ${layoutClasses[index]}`}
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
  const detailTags = project.tags ?? [project.categoryZh, "AIGC Scene", "Character Mood"];

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
    <section
      className={`project-detail-page${project.coverType === "video" ? " is-video-detail" : ""}${
        project.path === "/projects/brand-product-visual" ? " is-brand-detail" : ""
      }${project.path === "/projects/poster-design" ? " is-graphic-detail" : ""}`}
      id="top"
    >
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
          {project.copy && <p>{project.copy}</p>}
          {detailTags.length > 0 && (
            <div className="detail-tags">
              {detailTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
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
              <DeferredVideo src={featuredVideo.src} autoPlay muted loop playsInline />
              <span>FEATURED VIDEO / 代表视频</span>
            </button>
          </figure>
        ) : project.cover ? (
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
              <img src={project.cover} alt={`${project.titleZh}封面视觉`} decoding="async" />
            </button>
          </figure>
        ) : null}
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
                  <figure
                    className={`detail-video-card${video.portrait ? "" : " is-landscape"}`}
                    key={video.src}
                    data-reveal
                  >
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
                      <DeferredVideo src={video.src} autoPlay muted loop playsInline />
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
                        <DeferredVideo src={image.src} autoPlay muted loop playsInline />
                      ) : (
                        <img
                          src={image.src}
                          alt={`${collection.titleZh}${image.labelZh}`}
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
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
              <img src={activeMedia.src} alt={activeMedia.alt} decoding="async" />
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
