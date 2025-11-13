import { SiAuth0, SiDjango, SiDocker, SiExpress, SiFirebase, SiGo, SiJavascript, SiJsonwebtokens, SiLaravel, SiMysql, SiNodedotjs, SiPhp, SiPostgresql, SiPrisma, SiPython, SiSqlite, SiSupabase, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import HorizontalScrollingList from "@/components/HorizontalScrollingList";
import { ICON_CLASSES } from "./constants";

const icons = (
  <>
    <li>
      <SiPhp title="PHP" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiGo title="Go" className={ICON_CLASSES.featured} />
    </li>
    <li>
      <SiLaravel title="Laravel" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiExpress title="Express.js" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiPython title="Python" className={ICON_CLASSES.featured} />
    </li>
    <li>
      <SiMysql title="MySQL" className={ICON_CLASSES.default} />
    </li>
    <li>
      <DiMongodb title="MongoDB" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiPostgresql title="PostgreSQL" className={ICON_CLASSES.featured} />
    </li>
    <li>
      <SiSqlite title="SQLite" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiJavascript title="JavaScript" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiNodedotjs title="Node.js" className={ICON_CLASSES.featured} />
    </li>
    <li>
      <SiDocker title="Docker" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiPrisma title="Prisma" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiTypescript title="TypeScript" className={ICON_CLASSES.featured} />
    </li>
    <li>
      <SiJsonwebtokens title="JSON Web Tokens" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiAuth0 title="Auth0" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiSupabase title="Supabase" className={ICON_CLASSES.featured} />
    </li>
    <li>
      <SiFirebase title="Firebase" className={ICON_CLASSES.default} />
    </li>
    <li>
      <SiDjango title="Django" className={ICON_CLASSES.default} />
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