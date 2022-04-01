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
        <div>B2B 플랫폼의 자사 홈페이지 입니다.</div>
        <div>프로젝트에서 담당했던 업무는 서비스 랜딩 페이지 개발과 성능 개선 및 트러블 슈팅 그 외 유지 보수를 했었습니다.</div>
        <div>온라인 상품 유통 플랫폼 특성상 적게는 수십만개 부터 수백만개의 상품 데이터와 주문 데이터를 다루기 때문에 비효율적인 로직은 성능 저하의 큰 요인이 될 수 있습니다.</div>
        <div>일반 유저는 접근이 불가능하던 어드민 페이지 내에 잘못된 레거시 코드를 개선함으로써 퍼포먼스를 높일 수 있었습니다.
          이커머스 프로세스를 이해하고, 프로젝트를 담당하는 동안 고객의 마인드와 동료와의 협업하는 방법을 배웠습니다. </div>
        <br />
        <div>사용 기술: HTML CSS JavaScript Jquery PHP</div>
      </>,
      keyword: ["HTML", "CSS", "JavaScript", "Jquery", "PHP"]
    },
    {
      company: "(주)오너클랜",
      title: "오픈마켓 상품 관리 데스크탑 애플리케이션",
      date: "2018.9 ~ 2021.04",
      projectMember: "본인 외 1인",
      content: <>
        <div>자사 사이트의 상품을 여러 오픈마켓에서 쉽게 관리 할 수 있는 데스크탑 애플리케이션 입니다.</div>
        <div>자사 서버에 존재하는 상품 DB를 사용자에게 엑셀로 제공을 하면 오픈마켓별 양식에 맞게 가공을 하거나, 각 마켓의 상품 등록과정을 거쳐야하는 번거로움이 있어 손쉽게 상품 관리를 하고자 만들어졌습니다.</div>
        <div>Electron을 사용하여 애플리케이션을 개발하였고 UI는 React를 사용했습니다. 기존에 Class component를 functional components로 리팩토링함으로써 reacdt hooks를 사용 할 수 있었고, 이로인해 재사용이 간편하고, 직관적인 로직을 구성 할 수 있었습니다. </div>
        <div>오픈마켓(쿠팡, 11번가, 위메프, 스마트스토어 등)의 상품 관련 API를 이용하여 주요 기능들을 개발 후 모듈화 하여 종속성이 낮은 구조로 프로그램 내부 인터페이스에 탑재를 했었습니다.</div>
        <div>이로인해 판로가 넓어짐에 따라 사용자 수의 증가와 매출 향상의 결과를 얻을 수 있었습니다.</div>
        <div>빈번히 발생하는 리렌더링 코드와 비효율적인 메모리 사용을 하는 레거시 코드를 리팩토링하고, sqlite DB를 lazy loading 으로 개선하여 UX를 개선한 경험이 있습니다.</div>
        <div>처음에는 프로젝트의 서포트로 시작을하여 점차 메인 개발자가 되고 차후 공로를 인정 받아 PM 역할을 했었습니다.</div>
        <br />
        <div>사용 기술: React Typescript SQLite3 Electron.js Express.js Socket.io Puppeteer 등</div>
      </>,
      keyword: ["React", "Typescript", "SQLite3", "Electron.js", "Express.js", "Socket.io"]
    },
    {
      company: "(주)차이몰",
      title: "B2B 서비스 웹 개발",
      date: "2021.05 ~ 2022.01",
      projectMember: "본인 외 1인",
      content: <>
        <div>B2B 플랫폼의 자사 홈페이지 입니다.</div>
        <div>해외 상품을 국내 오픈마켓에 등록부터 발주까지 관리 대행 해주는 솔루션을 개발했습니다.</div>
        <div>DB/API/UI 개발과 기획을 주도하여 진행했습니다. UI는 React를 사용하여 개발했으며, Express.js를 이용한 RESTful API 서버를 만들어 데이터를 통신했습니다.</div>
        <div>필요에 따라 Puppeteer를 사용한 웹오토메이션으로 통계 데이터를 크롤링하여 수집해 저장했고, 어드민 페이지에 Chart.js를 이용한 시각화된 데이터를 제공 했습니다.</div>
        <div>처음부터 직접 설계와 개발을 모두 진행했고, 같이 프로젝트 담당을 한 동료와도 코드리뷰와 스터지를 주도하여 진행함으로써 협업을 통해 성장하고 원활한 커뮤니케이션을 다시 한 번 배우는 기회였습니다. </div>
        <br />
        <div>사용 기술: React TypeScript Puppeteer Express.js  등</div>        
      </>,
      keyword: ["React", "TypeScript", "Puppeteer","Express.js"]
    },
  ];
export default ProjectsStatic;