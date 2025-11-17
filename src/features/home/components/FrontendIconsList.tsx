import { SiAstro, SiCss3, SiEslint, SiFigma, SiHtml5, SiJavascript, SiJest, SiMui, SiNetlify, SiNextdotjs, SiNpm, SiPrettier, SiRadixui, SiReact, SiReactquery, SiRedux, SiRender, SiSass, SiTailwindcss, SiTypescript, SiVercel, SiVite, SiYarn } from "react-icons/si";
import HorizontalScrollingList from "@/components/HorizontalScrollingList";
import { ICON_CLASSES } from "../constants";

const icons = (
  <>
    <li>
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <SiReact title="React" className={ICON_CLASSES.featured} />
      </a>
    </li>
    <li>
      <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
        <SiFigma title="Figma" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML" target="_blank" rel="noopener noreferrer">
        <SiHtml5 title="HTML5" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://mui.com/" target="_blank" rel="noopener noreferrer">
        <SiMui title="Material UI" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Glossary/JavaScript" target="_blank" rel="noopener noreferrer">
        <SiJavascript title="JavaScript" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
        <SiTailwindcss title="Tailwind CSS" className={ICON_CLASSES.featured} />
      </a>
    </li>
    <li>
      <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
        <SiVercel title="Vercel" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
        <SiRedux title="Redux" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
        <SiCss3 title="CSS3" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">
        <SiPrettier title="Prettier" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        <SiNextdotjs title="Next.js" className={ICON_CLASSES.featured} />
      </a>
    </li>
    <li>
      <a href="https://www.radix-ui.com/" target="_blank" rel="noopener noreferrer">
        <SiRadixui title="Radix UI" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
        <SiSass title="Sass" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
        <SiNpm title="npm" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://tanstack.com/query/latest" target="_blank" rel="noopener noreferrer">
        <SiReactquery title="React Query" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">
        <SiEslint title="ESLint" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
        <SiNetlify title="Netlify" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
        <SiTypescript title="TypeScript" className={ICON_CLASSES.featured} />
      </a>
    </li>
    <li>
      <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">
        <SiYarn title="Yarn" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://render.com/" target="_blank" rel="noopener noreferrer">
        <SiRender title="Render" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://astro.build/" target="_blank" rel="noopener noreferrer">
        <SiAstro title="Astro" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
        <SiJest title="Jest" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
        <SiVite title="Vite" className={ICON_CLASSES.featured} />
      </a>
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