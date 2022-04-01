import * as React from "react"
import {
  ReactIcon,
  JavaScriptIcon,
  NodeJSIcon,
  ExpressIcon,
  GraphQLIcon,
  MySQLIcon,
  PHPIcon,
  ElectronIcon,
  SQLiteIcon,
  TypeScriptIcon
} from "../resume/SvgIcons"

const SkillStacks: Array<{ icon: JSX.Element, title: string, content: Element | string }> = [
    {
      icon: <ReactIcon />,
      title: "React",
      content: "dd",
    },
    {
      icon: <JavaScriptIcon />,
      title: "JavaScript",
      content: "dd",
    },
    {
      icon: <TypeScriptIcon />,
      title: "TypeScript",
      content: "dd",
    },
    {
      icon: <ElectronIcon />,
      title: "Electron.js",
      content: "dd",
    },
    {
      icon: <NodeJSIcon />,
      title: "Node.js",
      content: "dd",
    },
    {
      icon: <ExpressIcon />,
      title: "Express.js",
      content: "dd",
    },
    {
      icon: <PHPIcon />,
      title: "PHP",
      content: "dd",
    },
    {
      icon: <GraphQLIcon />,
      title: "GraphQL",
      content: "dd",
    },
    {
      icon: <MySQLIcon />,
      title: "MySQL",
      content: "dd",
    },
    {
      icon: <SQLiteIcon />,
      title: "SQLite",
      content: "dd",
    },
  ];
  export default SkillStacks;