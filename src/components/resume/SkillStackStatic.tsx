import * as React from "react"
import {
  ReactIcon,
  NodeJSIcon,
  ExpressIcon,
  GraphQLIcon,
  MySQLIcon,
  PHPIcon,
  ElectronIcon,
  SQLiteIcon,
  TypeScriptIcon,
  PuppeteerIcon
} from "../resume/SvgIcons"

const SkillStacks: Array<{ icon: JSX.Element, title: string, content: JSX.Element | string }> = [
  {
    icon: <ReactIcon />,
    title: "React",
    content: <>
      <div>SPA에 대한 이해를 바탕으로 화면을 구성하는데 필요한 UI를 알맞게 구현할 수 있고, Component를 분리를 하여 재사용이 용이한 구조로 생성을 하고 관리를 할 수 있습니다.</div>
      <div>Context와 Mobx를 통한 전역 상태 관리 경험이 있습니다.</div>
      <div>효율적인 자료 구조로 state를 관리하며, Chart.js 라이브러리를 사용한 데이터 시각화를 구현해 봤습니다.</div>
    </>,
  },
  {
    icon: <TypeScriptIcon />,
    title: "TypeScript",
    content: <>
      <div>ES6+ 문법 또한 익숙하며 가독성이 좋고 간결한 클린 코드를 추구합니다.</div>
      <div>여러 자료구조의 데이터를 원활하게 가공 및 사용을 할 수 있습니다.</div>    
      <div>사용하는 라이브러리와 프레임워크에 타입을 이해하고 알맞게 사용을 할 수 있습니다. 인터페이스를 설계 및 작성을 하여 안전하고 실용적인 코드를 구현할 수 있습니다.</div>
    </>,
  },
  {
    icon: <NodeJSIcon />,
    title: "Node.js",
    content: <>
      <div>npm에 등록된 여러 모듈 및 라이브러리를 사용을 해봤으며, Express.js를 통해 웹 서버를 구축해 본 경험이 있습니다.</div>
      <div>기본적인 node.js의 런타임 개념을 비롯한 node.js의 특징을 이해하고 있습니다.</div>
    </>,
  },
  {
    icon: <PuppeteerIcon />,
    title: "Puppeteer",
    content: <>
      <div>실무를 비롯한 여러 사용 경험이 있습니다 </div>
      <div>퍼페티어를 이용한 웹 오토메이션 기능을 구현할 수 있으며, 웹사이트 크롤링 개발 경험이 다수 있습니다</div>
    </>,
  },
  {
    icon: <ElectronIcon />,
    title: "Electron.js",
    content: <>
      <div>Electron.js와 React를 사용한 프로젝트의 데스크탑 애플리케이션 개발 및 유지 보수 실무 경험이 있습니다.</div>
      <div>main과 renderer 프로세스에 대한 이해도가 있고, 기본적인 사용법과 개념을 이해하고 있으며 사용이 능숙합니다.</div>
    </>,
  },
  {
    icon: <ExpressIcon />,
    title: "Express.js",
    content: <>
      <div>미들웨어에 대한 기본적인 이해도가 있으며, Express.js를 사용한 REST API를 개발하여 실무에서 사용해 본 경험이 있습니다.</div>
    </>,
  },
  {
    icon: <PHPIcon />,
    title: "PHP",
    content: <>
      <div>DB connection부터 client에서 사용할 데이터를 제공하는 과정까지 경험과 이해도가 있습니다. 실무를 통해 경험하며 학습을 했습니다.</div>
    </>,
  },
  {
    icon: <GraphQLIcon />,
    title: "GraphQL",
    content: <>
      <div>Query, Mutation과 기본 개념을 비롯한 등장 배경, 그리고 REST API와의 차이 등을 이해하고 있으며, Hasura를 통해 GraphQL을 사용하여 사이드 프로젝트 경험이 있습니다. </div>
    </>,
  },
  {
    icon: <MySQLIcon />,
    title: "MySQL",
    content: <>
      <div>신규 프로젝트에서 데이터가 저장될 테이블 간의 관계를 생각하고, 의존성을 고려한 인덱스 생성과 스키마 설계를 직접 해본 경험이 있습니다.</div>
      <div>쿼리를 작성해 원하는 데이터를 출력할 수 있습니다.</div>
    </>,
  },
  {
    icon: <SQLiteIcon />,
    title: "SQLite",
    content: <>
      <div>Electron.js를 통해 개발한 데스크탑 애플리케이션에서 사용하는 DB로 사용한 적이 있습니다. 클라이언트에 저장되는 데이터베이스 파일의 특징과 장단점을 이해하고 있습니다. 패칭(fetching) 자주 일어나는 프로젝트 특성을 고려하여, 조금 더 주의 깊게 트랜잭션 처리에 대한 경험이 있습니다.</div>
    </>,
  },
];
export default SkillStacks;