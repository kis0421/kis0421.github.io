import * as React from "react"
import styled from "styled-components"
import {
  FaGithub as FaGithubIcon,
  FaEnvelope as FaEnvelopeIcon,
} from "react-icons/fa";

import Layout from "../components/layout"
import SkillStacks from "../components/resume/SkillStackStatic";
import ProjectsStatic from "../components/resume/ProjectsStatic";
import CareerStatic from "../components/resume/CareerStatic";

const ResumeWrap = styled.main`
 * {
   font-family: 'Rubik', 'Nanum Gothic Coding';   
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

const SkillStacksWrap = styled.article`
  min-height:120px;
  display:flex;
  align-items:center;
  padding: 1rem 0;
  div:nth-of-type(1){
    width:75px;
  }
  div:nth-of-type(2){
    min-width:100px;
  }
  div:nth-of-type(1), div:nth-of-type(2) {
    display: inline-block;
    margin-right: 1.3rem;
  }
  div:nth-of-type(3){
    display:inline-block;
  };

  @media (max-width: 768px){
    display:block;
    div:nth-of-type(3){
      width:100%;
      margin-top:0.5rem;
    }
  }
`;
const ProjectsWrap = styled.article`
  min-height:250px;
  padding: 1rem 0;
  h3 {
    font-size:1.5rem;
  }
  div:nth-of-type(1), div:nth-of-type(2){
    color: #ababab;
    margin:4px 0;
  }
  div:nth-of-type(2){
    margin-bottom: 1rem;
    > span:nth-of-type(2){
      font-size:0.8rem;
      margin-left: 8px;
    }
  }`;
const CareerWrap = styled.article`
  min-height:150px;
  padding: 1rem 0;
  h3 {
    font-size:1.5rem;
    > span:nth-of-type(2){
      font-size:1rem;
      color:#bababa;
      margin: 0 12px;
    };
    > span:nth-of-type(3){
      font-weight:normal;
    }
    
  }
  div:nth-of-type(1){
    color: #ababab;
    margin:4px 0;
  }`;

const FaintLine = styled.hr`background-color:#eaeaea`;
export default () => {
  const linkGroups = [
    { icon: <FaGithubIcon className="headerIcon gitHubIcon" size="24" />, link: "https://github.com/kis0421" },
    { icon: <FaEnvelopeIcon className="headerIcon gitHubIcon" size="24" />, link: "mailto:kig0421@gmail.com" }
  ];


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
            <SkillStacksWrap>
              <div>{info.icon}</div>
              <div>{info.title}</div>
              <div>{info.content}</div>
            </SkillStacksWrap>
            {index + 1 < SkillStacks.length && <FaintLine />}
          </>)}
        </SectionWithMargin>

        <SectionWithMargin>
          <h2>프로젝트</h2>
          <hr />
          {ProjectsStatic.map((info, index) => <>
            <ProjectsWrap>
              <div>{info.company}</div>
              <h3>{info.title} </h3>
              <div>
                <span>{info.date}</span>
                <span>{info.projectMember}</span>
              </div>
              <article>{info.content}</article>
            </ProjectsWrap>
            {index + 1 < ProjectsStatic.length && <FaintLine />}
          </>)}
        </SectionWithMargin>

        <SectionWithMargin>
          <h2>경력</h2>
          <hr />
          {CareerStatic.map((info, index) => <>
            <CareerWrap>
              <h3>
                <span>{info.company}</span>
                <span>|</span>
                <span>{info.position}</span>
              </h3>
              <div>{info.date}</div>
              <article>{info.content}</article>
            </CareerWrap>
            {index + 1 < CareerStatic.length && <FaintLine />}
          </>)}
        </SectionWithMargin>

      </ResumeWrap>
    </Layout>
  )
}