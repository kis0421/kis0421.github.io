import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  FaGithub as FaGithubIcon,
  FaEnvelope as FaEnvelopeIcon,
} from "react-icons/fa";

import Layout from "../components/layout"
import {
  ReactIcon,
  JavaScriptIcon,
  NodeJSIcon,
  ExpressIcon,
  GraphQLIcon,
  MySQLIcon,
  PHPIcon,
  SQLiteIcon,
  TypeScriptIcon
} from "../components/resume/SvgIcons"



const ResumeWrap = styled.main`
 * {
   --text-link: #222;
 };
 h3 {
  margin-bottom: 0.5rem;
};`;
const LinkGroups = styled.article`
  display: inline;
  margin-left: 1.1rem;`;
const SectionWithMargin = styled.section`
  margin-bottom:0;
  padding-bottom:3rem;`;

const SkillStackWrap = styled.article`
  min-height:120px;
  display:flex;
  align-items:center;
  padding: 1rem 0;

  div:nth-child(1), div:nth-child(2) {
    display: inline-block;
    margin-right: 1.3rem;
  }
  div:nth-child(3){
    display:inline-block;
  };

  @media (max-width: 768px){
    display:block;
    div:nth-child(3){
      width:100%;
      margin-top:0.5rem;
    }
  }
`;
const FaintLine = styled.hr`background-color:#eaeaea`;
export default () => {
  const linkGroups = [
    { icon: <FaGithubIcon className="headerIcon gitHubIcon" size="24" />, link: "https://github.com/kis0421" },
    { icon: <FaEnvelopeIcon className="headerIcon gitHubIcon" size="24" />, link: "mailto:kig0421@gmail.com" }
  ];

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
  ]
  return (
    <Layout>
      <ResumeWrap>
        <SectionWithMargin>
          <h1>
            <span>김민규 Minkyu Kim</span>
            <LinkGroups>
              {linkGroups.map((linkInfo) => <a
                href={linkInfo.link}
                target="_blank">
                {linkInfo.icon}
              </a>)}
            </LinkGroups>
          </h1>
          <h3>
            <div>how와 why를 좋아하며</div>
            <div>고민과 생각으로 성장하는 개발자 김민규입니다.</div>
          </h3>
        </SectionWithMargin>

        <SectionWithMargin>
          <h2>기술 스택</h2>
          <hr />
          {SkillStacks.map((info, index) => <>
            <SkillStackWrap>
              <div>{info.icon}</div>
              <div>
                <span>{info.title}</span>
              </div>
              <div>
                사용해봤습니다.
              </div>
            </SkillStackWrap>
            {index + 1 < SkillStacks.length && <FaintLine />}
          </>)}
          <hr />
        </SectionWithMargin>

        <SectionWithMargin>
          <h2>프로젝트</h2>
          <hr />
        </SectionWithMargin>

      </ResumeWrap>
    </Layout>
  )
}