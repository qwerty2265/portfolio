import { SiAstro, SiCss3, SiEslint, SiFigma, SiHtml5, SiJavascript, SiJest, SiMui, SiNetlify, SiNextdotjs, SiNpm, SiPrettier, SiRadixui, SiReact, SiReactquery, SiRedux, SiRender, SiSass, SiTailwindcss, SiTypescript, SiVercel, SiYarn } from "react-icons/si";
import HorizontalScrollingList from "@/components/HorizontalScrollingList";
import { ICON_CLASSES } from "../constants";

const icons = (
  <>
    <li>
      <SiReact title="React" className={ICON_CLASSES.featured} />
    </li>
    <li>
      <SiFigma title="Figma" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiHtml5 title="HTML5" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiMui title="Material UI" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiJavascript title="JavaScript" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiTailwindcss title="Tailwind CSS" className={ICON_CLASSES.featured} />
    </li>
    <li>
      <SiVercel title="Vercel" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiRedux title="Redux" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiCss3 title="CSS3" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiPrettier title="Prettier" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiNextdotjs title="Next.js" className={ICON_CLASSES.featured} />
    </li>
    <li>
      <SiRadixui title="Radix UI" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiSass title="Sass" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiNpm title="npm" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiReactquery title="React Query" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiEslint title="ESLint" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiNetlify title="Netlify" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiTypescript title="TypeScript" className={ICON_CLASSES.featured} />
    </li>
    <li>
      <SiYarn title="Yarn" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiRender title="Render" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiAstro title="Astro" className={ICON_CLASSES.default} />
    </li>
  </>
);

export default function FrontendIconsList() {
  return (
    <HorizontalScrollingList direction="left-to-right" speed={35}>
      {icons}
    </HorizontalScrollingList>
  );
}