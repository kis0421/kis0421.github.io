import * as React from "react"

const ProjectsStatic: Array<{
  company: string
  title: string | JSX.Element
  date: string
  projectMember: string
  content: string | JSX.Element
  keyword: string[]
}> = [
    {
      company: "(주)차이몰",
      title: (
        <a href="http://allthemall.co.kr/#/shop" target="_blank">
          B2B 서비스 웹 개발
        </a>
      ),
      date: "2021.05 ~ 2022.01",
      projectMember: "본인 외 1인",
      content: (
        <>
          <h3>설명</h3>
          <div className="contribute">
            <div>해외 상품 국내 오픈마켓에 상품 관리 대행 솔루션 개발</div>
            <div>자사에서 보유하고 있는 여러 카테고리의 해외 상품을 사용자의 오픈마켓 계정에 상품을 오픈마켓 API를 이용하여 상품 등록부터 등록 후 품절 관리를 포함한 발주 처리까지 모든 프로세스를 자동화한 솔루션 입니다.</div>
          </div><br />

          <h3>본인이 기여한 점</h3>
          <div className="contribute">
            <div>프로토 타입 및 시스템 아키텍처 설계</div>
            <div>프로젝트의 기획 단계부터 미팅에 참여해 커뮤니케이션을 진행하며 시스템의 내부적 구현을 주도하에 설계를 진행했습니다.</div>
          </div>

          <div className="contribute">
            <div>react.js 기반 웹 프론트엔드 개발</div>
            <div>여러 회원 구조와 동일하게 사용되는 페이지를 그리고 좋은 UX를 제공하기 위해 react 라이브러리를 사용했습니다.</div>
          </div>

          <div className="contribute">
            <div>express.js를 사용한 API  개발</div>
            렌더링 시 표시 될 리소스를 통신하기 위해 REST 설계 원칙을 준수하여 API를 개발했었습니다.
          </div>

          <div className="contribute">
            <div>image prefetch 구현</div>
            최초에 렌더링 시 보일 이미지가 아닌 렌더링 이후 화면에 보일 이미지를 미리 불러오고
            사용자에게 이미지를 캐시에서 불러와 제공하여 UX를 개선했었습니다.
          </div>

          <div className="contribute">
            <div>상품 리스트 무한 스크롤(Infinite scroll) 구현</div>
            상품 리스트 화면을 Intersection Observer API를 사용하여 무한 스크롤을 구현했었습니다.
          </div>

          <div className="contribute">
            <div>오픈 마켓 API 개발 및 모듈화</div>
            상품 등록/품절/주문 처리 등 솔루션의 핵심 기능을 구현하기 위해 오픈마켓에서 제공하는 API를 내부 인터페이스에 맞게 개발한 뒤 모듈화하여 사용을 했었습니다.
          </div>

          <div className="contribute">
            <div>웹 오토메이션을 통한 데이터 크롤링 수집 및 데이터 시각화</div>
            오픈 마켓 API에서 제공하지 않는 데이터를 유저와 관리자 페이지에 제공하기 위해
            통계 데이터를 puppeteer.js를 사용하여 수집을 한 뒤 chart.js를 사용하여 데이터를 시각화한 경험이 있습니다.
          </div>

          <div className="contribute">
            <div>팀원의 역량 증대를 위한 react.js 등 스터디 학습 주도 및 코드 리뷰 진행</div>
            react.js 라이브러리가 익숙하지 않은 팀원을 위해 주 2회 이상 스터디를 주도했고, 안정적인 프로덕트 개발과 팀원의 역량 증대를 위한 코드 리뷰를 진행했었습니다.
          </div><br />

          <div>
            <h3>사용한 기술</h3>
            <div>Node.js / Express.js / Yypescript / MariaDB</div>
            <div>React.js / Chart.js / Puppeteer.js / Styled-Component / Material-UI 외</div>
          </div><br />

          <div>
            <h3>결과 및 성과</h3>
            <div>알파 테스트 후 퇴사</div>
          </div><br />

          <div>
            <h3>URL</h3>
            <div>
              <a href="http://allthemall.co.kr/#/shop">http://allthemall.co.kr/#/shop</a>
            </div>
          </div>
        </>
      ),
      keyword: ["React", "TypeScript", "Puppeteer", "Express.js"],
    },
    {
      company: "(주)오너클랜",
      title: (
        <a href="https://ownerclan.com/V2/info_page/dafalza2.php" target="_blank">
          오픈마켓 상품 관리 데스크탑 애플리케이션
        </a>
      ),
      date: "2018.9 ~ 2021.04",
      projectMember: "본인 외 1인",
      content: (
        <>
          <h3>설명</h3>
          <div className="contribute">
            <div>오픈 마켓 상품관리 데스크톱 앱 개발 및 유지 보수</div>
            <div>기존의 B2B 서비스는 자사에서 보유하고 있는 상품 DB를 엑셀 파일로 유저에게  제공을 하고유저는 내려받은 상품 엑셀 파일을 각 오픈마켓 양식에  맞게 편집을 한 뒤, 브라우저를 통해 직접 등록하는 프로세스였습니다.</div>
            <div>이 과정에서 엑셀을 편집하거나, 상품 등록 과정을 거치며 소요되는 시간을 개선하기 위해 오픈마켓 별 양식에 맞게  데이터를 가공 후 오픈마켓 API를 통해 상품 등록 및 관리하는 기능을 제공해 주는 데스크톱 앱입니다.</div>
          </div><br />

          <h3>본인이 기여한 점</h3>
          <div className="contribute">
            <div>class component {'->'} function component로 리팩토링</div>
          </div>

          <div className="contribute">
            <div>렌더링에 필요한 리소스 로딩 방식 변경으로 UX 개선</div>
            <div>최초 렌더링에 필요하지 않는 리소스를 불러오던 것을 lazy load 방식으로 변경하여 UX를 개선 한 경험이 있습니다.</div>
          </div>

          <div className="contribute">
            <div>express.js 기반 REST API 추가 기능 개발 및 유지보수 </div>
            <div>렌더링 시 표시 될 리소스를 통신하기 위해 REST 설계 원칙을 준수하여 API를 개발했었습니다.</div>
          </div>

          <div className="contribute">
            <div>오픈 마켓 API 개발 및 모듈화 후 앱 내에 탑재</div>
            <div>오픈마켓 상품관리 기능을 구현하기 위해 오픈마켓 API를 이용하여 기능을 앱의 인터페이스에 맞게 개발한 뒤 모듈화하여 탑재 후 릴리즈 한 경험이 있습니다.</div>
          </div>

          <div className="contribute">
            <div>오픈마켓 상품과 앱 DB 간의 양방향 동기화 기능 개발</div>
            <div>앱을 통해 등록한 상품은 DB에 데이터가 있지만, 앱이 아닌 다른 경로를 통해 등록한 상품들은 DB에 데이터가 존재하지 않아  앱에서 관리를 할 수 없었습니다. 이를 보완하기 위해 '마켓에서 상품 불러오기' 기능을 개발해 상품을 앱으로 불러와 자사 앱이 아닌 타 경로를 통해 등록한 상품도 관리를 할 수 있었습니다.</div>
          </div>

          <div className="contribute">
            <div>오픈 마켓 API 개발 및 모듈화</div>
            상품 등록/품절/주문 처리 등 솔루션의 핵심 기능을 구현하기 위해 오픈마켓에서 제공하는 API를 내부 인터페이스에 맞게 개발한 뒤 모듈화하여 사용을 했었습니다.
          </div>

          <div className="contribute">
            <div>렌더링 최적화 및 레거시 코드 개선</div>
          </div>

          <div className="contribute">
            <div>sqlite DB 주기적 최적화 기능 </div>
          </div>

          <div className="contribute">
            <div>앱 내에 비효율적인 메모리 사용(메모리 누수) 개선 </div>
            <div>앱에서 사용하는 메모리 양이 비정상적으로 증가하고 줄어들지 않는 현상이 발생하여 이를 개선하고자 모니터링과 테스트를 진행 한 결과 여러 가지 원인이 있었습니다.</div>
            <div>의도하지 않았던 클로저 사용과 재귀 호출 등을 리팩토링하여 문제를 개선 했었습니다.</div>
          </div>

          <div className="contribute">
            <div>팀원의 역량 강화를 위한 코드 리뷰 진행</div>
            <div>역량 증가와 서로의 코드에 피드백을 위해 개발 내용은 항상 코드 리뷰를 진행했습니다.</div>
          </div>

          <div className="contribute">
            <div>사용자 고객 문의 응대 및 원격 지원</div>
          </div>

          <div className="contribute">
            <div>프로젝트 내에 개발 일정 관리 등을 포함한 PM 담당</div>
          </div><br />

          <div>
            <h3>사용한 기술</h3>
            <div>Node.js / Express.js / Typescript / MySQL / SQLite</div>
            <div>React.js / Puppeteer.js /  Electron.js / Socket.io / Material-UI 외</div>
          </div><br />

          <div>
            <h3>결과 및 성과</h3>
            <div>레거시 코드 개선에 따른 성능 향상</div>
            <div>월간 활성 사용자(MAU) 증대 (약 3,000명 달성)</div>
            <div>부분 유료화로 인한 매출 발생 (월 평균 VAT 포함 약 1,500,000원)</div>
          </div><br />

          <div>
            <h3>URL</h3>
            <div>
              <a href="https://ownerclan.com/V2/info_page/dafalza2.php">https://ownerclan.com/V2/info_page/dafalza2.php</a>
            </div>
          </div>

        </>
      ),
      keyword: [
        "React",
        "Typescript",
        "SQLite3",
        "Electron.js",
        "Express.js",
        "Socket.io",
      ],
    },
    {
      company: "(주)오너클랜",
      title: (
        <a href="https://ownerclan.com/" target="_blank">
          온라인 유통 판매 B2B 웹 사이트
        </a>
      ),
      date: "2015.09 - 2017.06",
      projectMember: "본인 외 2인",
      content: (
        <>

          <h3>설명</h3>
          <div className="contribute">
            <div>B2B 유통 관리 자사 사이트 추가 개발 및 유지보수</div>
            <div>기존의 B2B 서비스는 자사에서 보유하고 있는 상품 DB를 엑셀 파일로 유저에게  제공을 하고유저는 내려받은 상품 엑셀 파일을 각 오픈마켓 양식에  맞게 편집을 한 뒤, 브라우저를 통해 직접 등록하는 프로세스였습니다.</div>
            <div>이 과정에서 엑셀을 편집하거나, 상품 등록 과정을 거치며 소요되는 시간을 개선하기 위해 오픈마켓 별 양식에 맞게  데이터를 가공 후 오픈마켓 API를 통해 상품 등록 및 관리하는 기능을 제공해 주는 데스크톱 앱입니다.</div>
          </div><br />

          <h3>본인이 기여한 점</h3>
          <div className="contribute">
            <div>신규 랜딩 페이지 UI 개발</div>
            <div>기획팀과 디자인팀을 거쳐 전달받은 신규 페이지의 디자인과 가이드라인을 받은 뒤 페이지를 작성했었습니다.</div>
            <div> 주로 html css js를 사용하거나 오픈 API를 사용하여 퍼블리싱 업무를 주로 담당하며 때에 따라서 웹사이트에서 사용하는 DB의 테이블을 추가하거나 변경, 그리고 렌더링에 필요한 리소스를 통신하기 위해 php 개발을 했었습니다.</div>
          </div>

          <div className="contribute">
            <div>javascript {'->'} jquery로 리팩토링</div>
            <div>사용자에게 좋은 UX를 제공함과 동시에 가독성이 좋은 코드를 위해 일부 페이지에서  자바스크립트를 jquery로 리팩토링 했었습니다.</div>
          </div>

          <div className="contribute">
            <div>비효율적인 레거시 코드 개선</div>
          </div>

          <div className="contribute">
            <div>admin 내에 신규 페이지 개발</div>
          </div><br />

          <div>
            <h3>사용한 기술</h3>
            <div>HTML / CSS / javascript / jquery / PHP</div>
          </div><br />

          <div>
            <h3>결과 및 성과</h3>
            <div>신규 서비스 UI 제공</div>
            <div>비효율적인 코드 개선으로 인한 성능 향상</div>
          </div><br />

          <div>
            <h3>URL</h3>
            <div>
              <a href="https://ownerclan.com/">https://ownerclan.com/</a>
            </div>
          </div>
          <br />
        </>
      ),
      keyword: ["HTML", "CSS", "JavaScript", "Jquery", "PHP"],
    },
  ]
export default ProjectsStatic
