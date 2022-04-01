import * as React from "react"

const ProjectsStatic: Array<{
  company: string;
  position: string;
  date: string;
  content: string | JSX.Element;
}> = [
    {
      company: "(주)오너클랜",
      position: "파트장",
      date: "2015.09 ~ 2021.05",
      content: <>
        <div>초창기에 개발 인프라가 확립이 되지 않았던 시기가 있어, 개발 외에 다양한 일을 경험했습니다.</div>
        <div>여러 경험을 통해 개발 외에 얻은것도 있지만, 한편으로는 개발 시간이 부족하여 아쉬웠습니다.</div>
        <div>차후 사내 시스템이 체계적으로 바뀌고, 개발하기 좋은 인프라로 바뀌어가고, nodejs typescript react 등 여러 트렌드 기술을 많이 접하고</div>
        <div>수천명의 사용자가 있는 프로젝트의 PM 역할까지 경험을 할 수 있었습니다.</div>
      </>
    },
    {
      company: "(주)차이몰",
      position: "대리",
      date: "2021.05 ~ 2022.01",
      content: <>
        <div>mariaDB를 사용하였고 데이터베이스 스키마를 직접 설계 및 생성을 했었으며, 클라이언트와 데이터를 통신하는 RESTful API도 직접 개발을 했었습니다.</div>
        <div>Front의 React에서는 필요한 Component를 재사용이 용이하게 개발을 하였으며, 컴포넌트의 구조 또한 직접 설계하며 개발을 했었습니다. </div>
        <div>소규모 회사여서 여러 경험을 할 수 있을것 같았으나, 인력이 부족하여 생각보다 많은 경험을 하지는 못했습니다.</div>
      </>,
    },
  ];
export default ProjectsStatic;