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
  TypeScriptIcon,
  PuppeteerIcon
} from "../resume/SvgIcons"

const SkillStacks: Array<{ icon: JSX.Element, title: string, content: JSX.Element | string }> = [
  {
    icon: <ReactIcon />,
    title: "React",
    content: <>
      <div>SPA에 대한 이해를 바탕으로 화면을 구성하는데 필요한 UI를 알맞게 구현 할 수 있고, Component를 분리를 하여 재사용이 용이한 구조로 생성을 하고 관리를 할 수 있습니다.</div>
      <div>CSS-in-CSS를 주로 사용하지만, Styled-Component와 같은 라이브러리를 통해 CSS-in-JS 방식의 Component 스타일링을 구현 할 수 있습니다.</div>
      <div>Class Component 보다는 Functional Component를 좋아하며, Context와 Mobx를 통한 상태관리 경험이 있습니다.</div>
      <div>효율적인 자료 구조로 state를 관리하며, Chart.js 라이브러리를 사용한 데이터 시각화를 구현해봤습니다.</div>
    </>,
  },
  {
    icon: <JavaScriptIcon />,
    title: "JavaScript",
    content: <>
      <div>ES6+ 문법 또한 익숙하며 가독성이 좋고 간결한 클린코드를 추구합니다.</div>
      <div>여러 자료구조의 데이터를 원활하게 가공 및 사용을 할 수 있으며, 필요에 따른 기능 구현을 할 수 있습니다.</div>
    </>,
  },
  {
    icon: <TypeScriptIcon />,
    title: "TypeScript",
    content: <>
      <div>사용하는 라이브러리와 프레임워크에 인터페이스를 이해하고 알맞게 사용을 할 수 있습니다. 필요에 따라 알맞는 인터페이스를 설계 및 작성을하여 안전하고 실용적인 코드를 구현 할 수 있습니다.</div>
      <div>실무로 처음 접하게 되었으며, 부족한 점을 보완 하고자 꾸준히 학습을 하고 있습니다.</div>
    </>,
  },
  {
    icon: <NodeJSIcon />,
    title: "Node.js",
    content: <>
      <div>npm에 등록된 여러 모듈 및 라이브러리를 사용을 해봤으며, Express를 통해 웹 서버를 구축해본 경험이 있습니다.</div>
      <div>기본적인 node.js의 런타임 개념을 비롯한 node.js의 특징을 이해하고 있습니다.</div>
    </>,
  },
  {
    icon: <PuppeteerIcon />,
    title: "Puppeteer",
    content: <>
      <div>의도와 맞게 알맞은 기능을 구현 할 수 있으며, 실무를 비롯한 여러 사용 경험이 있습니다 </div>
      <div>웹오토메이션 기능을 구현 할 수 있으며, 웹사이트 크롤링 개발 경험이 다수 있습니다</div>
    </>,
  },
  {
    icon: <ElectronIcon />,
    title: "Electron.js",
    content: <>
      <div>electronjs와 react를 사용한 프로젝트 개발 유지보수 실무 경험이 있습니다.</div>
      <div>main과 renderer 프로세스에 대한 이해도가 있고, 기본적인 사용법과 개념을 이해하고 있으며 사용이 능숙합니다.</div>
    </>,
  },
  {
    icon: <ExpressIcon />,
    title: "Express.js",
    content: <>
      <div>미들웨어에 대한 기본적인 이해도가 있으며, express를 사용한 REST API를 개발하여 실무에서 사용해본 경험이 있습니다.</div>
    </>,
  },
  {
    icon: <PHPIcon />,
    title: "PHP",
    content: <>
      <div>DB connection부터 client에서 사용할 데이터를 제공하는 과정까지 경험과 이해도가 있습니다. 실무를 통해 경험하며 학습을 했으며, 현재는 소스코드를 보면 이해는 할 수 있으나, 지식이 심화 수준은 아닙니다.</div>
    </>,
  },
  {
    icon: <GraphQLIcon />,
    title: "GraphQL",
    content: <>
      <div>Query, Mutation과 기본 개념을 비롯한 등장 배경, 그리고 REST API와의 차이 등을 이해하고 있으며, </div>
      <div>Hasura를 통해 GraphQL을 사용하여 사이드 프로젝트 경험이 있고, 현재도 학습을 하고 있습니다. </div>
    </>,
  },
  {
    icon: <MySQLIcon />,
    title: "MySQL",
    content: <>
      <div>작은 규모의 프로젝트에서 데이터가 저장 될 테이블 간의 관계를 생각하고, 의존성을 고려한 인덱스 생성과 스키마 설계를 함께 해본 경험이 있습니다.</div>
      <div>쿼리를 작성해 원하는 데이터를 출력 할 수 있습니다.</div>
      <div>스스로 생각하기에 심도깊은 지식을 가진 것 같지는 않아, 현재도 학습을 하고 있습니다.</div>
    </>,
  },
  {
    icon: <SQLiteIcon />,
    title: "SQLite",
    content: <>
      <div>electronjs를 통해 개발한 데스크탑 애플리케이션에서 사용하는 DB로 사용한 적이 있습니다. 클라이언트에 저장되는 데이터베이스 파일의 특성을 이해하고 장단점을 이해하고있습니다.</div>
      <div>패칭(fetching) 자주 일어나는 프로젝트 특성을 고려하여, 조금 더 주의 깊게 트랜잭션처리에 대한 경험이 있습니다.</div>
    </>,
  },
];
export default SkillStacks;