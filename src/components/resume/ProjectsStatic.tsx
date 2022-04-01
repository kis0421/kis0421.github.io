import * as React from "react"

const ProjectsStatic: Array<{
  company: string;
  title: string | JSX.Element;
  date: string;
  projectMember: string;
  content: string | JSX.Element;
  keyword: string[];
}> = [
    {
      company: "(주)오너클랜",
      title: "온라인 유통 판매 B2B 웹 사이트",
      date: "2015.09 - 2017.06",
      projectMember: "본인 외 2인",
      content: <>
        <div></div>
        <div></div>
      </>,
      keyword: ["php"]
    },
    {
      company: "(주)오너클랜",
      title: "오픈마켓 상품 관리 데스크탑 애플리케이션",
      date: "2018.9 ~ 2021.04",
      projectMember: "본인 외 1인",
      content: <>
        <div></div>
        <div></div>
      </>,
      keyword: ["php"]
    },
    {
      company: "(주)차이몰",
      title: "B2B 서비스 웹 개발",
      date: "2021.05 ~ 2022.01",
      projectMember: "본인 외 1인",
      content: <>
        <div></div>
        <div></div>
      </>,
      keyword: ["php"]
    },
  ];
export default ProjectsStatic;