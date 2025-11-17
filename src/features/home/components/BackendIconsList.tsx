import { SiAuth0, SiDjango, SiDocker, SiExpress, SiFirebase, SiGo, SiJavascript, SiJsonwebtokens, SiLaravel, SiMysql, SiNodedotjs, SiPhp, SiPostgresql, SiPrisma, SiPython, SiSqlite, SiSupabase, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import HorizontalScrollingList from "@/components/HorizontalScrollingList";
import { ICON_CLASSES } from "../constants";

const icons = (
  <>
    <li>
      <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
        <SiPhp title="PHP" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://go.dev/" target="_blank" rel="noopener noreferrer">
        <SiGo title="Go" className={ICON_CLASSES.featured} />
      </a>
    </li>
    <li>
      <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
        <SiLaravel title="Laravel" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
        <SiExpress title="Express.js" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
        <SiPython title="Python" className={ICON_CLASSES.featured} />
      </a>
    </li>
    <li>
      <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
        <SiMysql title="MySQL" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
        <DiMongodb title="MongoDB" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
        <SiPostgresql title="PostgreSQL" className={ICON_CLASSES.featured} />
      </a>
    </li>
    <li>
      <a href="https://www.sqlite.org/" target="_blank" rel="noopener noreferrer">
        <SiSqlite title="SQLite" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Glossary/JavaScript" target="_blank" rel="noopener noreferrer">
        <SiJavascript title="JavaScript" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
        <SiNodedotjs title="Node.js" className={ICON_CLASSES.featured} />
      </a>
    </li>
    <li>
      <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
        <SiDocker title="Docker" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer">
        <SiPrisma title="Prisma" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
        <SiTypescript title="TypeScript" className={ICON_CLASSES.featured} />
      </a>
    </li>
    <li>
      <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">
        <SiJsonwebtokens title="JSON Web Tokens" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://auth0.com/" target="_blank" rel="noopener noreferrer">
        <SiAuth0 title="Auth0" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer">
        <SiSupabase title="Supabase" className={ICON_CLASSES.featured} />
      </a>
    </li>
    <li>
      <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
        <SiFirebase title="Firebase" className={ICON_CLASSES.default} />
      </a>
    </li>
    <li>
      <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
        <SiDjango title="Django" className={ICON_CLASSES.default} />
      </a>
    </li>
  </>
)

export default function BackendIconsList() {
  return (
    <HorizontalScrollingList direction="right-to-left" speed={35}>
      {icons}
    </HorizontalScrollingList>
  );
}