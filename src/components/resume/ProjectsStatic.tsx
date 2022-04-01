import * as React from "react"

const ProjectsStatic: Array<{
  company: string;
  title: string | Element;
  date: string;
  projectMember: string;
  content: string | Element;
  keyword: string[];
}> = [
    {
      company: "(주)오너클랜",
      title: "온라인 유통 판매 B2B 웹 사이트",
      date: "2015.09 - 2017.06",
      projectMember: "본인 외 2인",
      content: "만드는중",
      keyword: ["php"]
    },
    {
      company: "(주)오너클랜",
      title: "오픈마켓 상품관리 데스크탑 애플리케이션",
      date: "2018.9 ~ 2021.04",
      projectMember: "본인 외 1인",
      content: "만드는중",
      keyword: ["php"]
    },
  ];
export default ProjectsStatic;