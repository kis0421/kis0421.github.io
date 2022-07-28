import * as React from "react"

const ProjectsStatic: Array<{
  company: string
  position: string
  date: string
  content: string | JSX.Element
}> = [
  {
    company: "(주)차이몰",
    position: "대리",
    date: "2021.05 ~ 2022.01",
    content: (
      <>
        <div>
          데이터베이스 스키마를 설계 및 생성을 하며, 클라이언트와 데이터를
          통신하는 REST API도 직접 설계와 개발을 했었습니다.
        </div>
        <div>
          서비스 페이지에서 사용한 React에서는 필요한 컴포넌트를 재사용이
          용이하게 아키텍처 설계와 개발을 했었습니다.{" "}
        </div>
      </>
    ),
  },
  {
    company: "(주)오너클랜",
    position: "파트장",
    date: "2015.09 ~ 2021.05",
    content: (
      <>
        <div>
          입사 초기 개발과 함께 온라인 쇼핑몰 운영도 병행해 담당하며 B2B와 B2C의
          프로세스를 직접 경험하며 이해를 했습니다.
        </div>
        <div>
          Node.js를 업무에 사용하며 웹오토메이션을 이용한 데이터 수집을 다수
          경험이 있고, Electron.js를 이용한 데스크탑 앱 프로젝트에서 여러 기능을
          개발하며 차후 성과에 대한 공로를 인정받아 PM 역할을 담당한 경험이
          있습니다.
        </div>
      </>
    ),
  },
]
export default ProjectsStatic
