import type { Metadata } from "next";
import styles from "./page.module.css";
import DocumentLink from "../../components/DocumentLink";

export const metadata: Metadata = { title: "PROJECT COSMO 커리큘럼" };

export default function Page() {
  return (
    <div className={styles.page}>
      {"\n\n"}
      <div className={styles["wrap"]}>
        {"\n  "}
        <header className={styles["top"]}>
          {"\n    "}
          <div className={styles["badges"]}>
            {"\n      "}
            <span className={styles["badge"] + " " + styles["internal"]}>
              {"실장 내부용 · 외부 공유 금지"}
            </span>
            {"\n      "}
            <span className={styles["badge"] + " " + styles["asof"]}>
              {"2026년 10월 17일 기준"}
            </span>
            {"\n    "}
          </div>
          {"\n    "}
          <h1>
            <span className={styles["en"]}>{"PROJECT COSMO"}</span>
            {" 커리큘럼"}
          </h1>
          <DocumentLink href="/">상담 스크립트로 돌아가기</DocumentLink>
          {"\n    "}
          <p className={styles["lead"]}>
            {
              "문해와 사유 초등관의 초등 5, 6학년 문해력 과정입니다. 어휘 교재 CORE가 중심을 잡고, 독서 교재 FLARE가 그 위로 읽기와 토의, 토론, 쓰기를 넓혀 갑니다. 확정된 내용만 적었고, 정해지지 않은 항목은 맨 아래에 따로 모았습니다."
            }
          </p>
          {"\n  "}
        </header>
        {"\n"}
      </div>
      {"\n\n"}
      <nav className={styles["toc"]} aria-label={"목차"}>
        {"\n  "}
        <div className={styles["scroller"]}>
          {"\n    "}
          <ul>
            {"\n      "}
            <li>
              <a href={"#overview"}>{"한눈에"}</a>
            </li>
            {"\n      "}
            <li>
              <a href={"#class"}>{"수업 흐름"}</a>
            </li>
            {"\n      "}
            <li>
              <a href={"#core"}>{"CORE"}</a>
            </li>
            {"\n      "}
            <li>
              <a href={"#flare"}>{"FLARE"}</a>
            </li>
            {"\n      "}
            <li>
              <a href={"#tracks"}>{"반 구성"}</a>
            </li>
            {"\n      "}
            <li>
              <a href={"#spectrum"}>{"COSMO 스펙트럼"}</a>
            </li>
            {"\n      "}
            <li>
              <a href={"#roadmap"}>{"단계"}</a>
            </li>
            {"\n      "}
            <li>
              <a href={"#rules"}>{"말하지 않는 것"}</a>
            </li>
            {"\n      "}
            <li>
              <a href={"#open"}>{"확정 전"}</a>
            </li>
            {"\n    "}
          </ul>
          {"\n  "}
        </div>
        {"\n"}
      </nav>
      {"\n\n"}
      <div className={styles["wrap"]}>
        {"\n"}
        <main>
          {"\n\n  "}
          <section id={"overview"}>
            {"\n    "}
            <div className={styles["sec-head"]}>
              {"\n      "}
              <p className={styles["eyebrow"]}>{"한눈에"}</p>
              {"\n      "}
              <h2>{"어휘가 먼저, 독서가 그 위에 쌓이는 순서"}</h2>
              {"\n      "}
              <p className={styles["muted"]}>
                {
                  "태양의 핵(Core)이 있어야 플레어(Flare)가 뻗어 나가듯, 낱말 뜻을 정확히 알아야 깊이 읽고 생각할 수 있다는 순서를 이름에 담았습니다."
                }
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={styles["facts"]}>
              {"\n      "}
              <div className={styles["fact"]}>
                <span className={styles["k"]}>{"대상"}</span>
                <span className={styles["v"]}>
                  {"초등 "}
                  <span className={styles["n"]}>{"5, 6"}</span>
                  {"학년"}
                </span>
              </div>
              {"\n      "}
              <div className={styles["fact"]}>
                <span className={styles["k"]}>{"수업"}</span>
                <span className={styles["v"]}>
                  {"1회 "}
                  <span className={styles["n"]}>{"3"}</span>
                  {"시간"}
                </span>
                <span className={styles["s"]}>
                  {"50분씩 3교시, 사이 10분 휴식"}
                </span>
              </div>
              {"\n      "}
              <div className={styles["fact"]}>
                <span className={styles["k"]}>{"정원"}</span>
                <span className={styles["v"]}>
                  {"한 반 "}
                  <span className={styles["n"]}>{"10~15"}</span>
                  {"명 내외"}
                </span>
                <span className={styles["s"]}>
                  {"개인 발표, 모둠, 전체 활동"}
                </span>
              </div>
              {"\n      "}
              <div className={styles["fact"]}>
                <span className={styles["k"]}>{"반"}</span>
                <span className={styles["v"]}>{"독해반, 논리반"}</span>
                <span className={styles["s"]}>
                  {"학년별로 나눈 뒤 반을 나눔"}
                </span>
              </div>
              {"\n      "}
              <div className={styles["fact"]}>
                <span className={styles["k"]}>{"진단"}</span>
                <span className={styles["v"]}>{"COSMO 스펙트럼"}</span>
                <span className={styles["s"]}>
                  <span className={styles["n"]}>{"50"}</span>
                  {"분 배치 진단"}
                </span>
              </div>
              {"\n      "}
              <div className={styles["fact"]}>
                <span className={styles["k"]}>{"첨삭"}</span>
                <span className={styles["v"]}>{"학생별 개별 첨삭"}</span>
                <span className={styles["s"]}>{"맞춤법보다 글의 방향"}</span>
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={styles["say"]}>
              {"\n      "}
              <span className={styles["k"]}>{"상담 첫 문장"}</span>
              {"\n      "}
              <p>
                {
                  '"책만 읽히는 논술이 아니라, 교과서 핵심 어휘를 먼저 다지고 그 위에서 읽고 생각하고 쓰는 순서로 설계된 프로그램입니다."'
                }
              </p>
              {"\n    "}
            </div>
            {"\n  "}
          </section>
          {"\n\n  "}
          <section id={"class"}>
            {"\n    "}
            <div className={styles["sec-head"]}>
              {"\n      "}
              <p className={styles["eyebrow"]}>{"수업 흐름"}</p>
              {"\n      "}
              <h2>{"3교시: 어휘에서 시작해 토의와 토론으로 끝납니다"}</h2>
              {"\n    "}
            </div>
            {"\n    "}
            <div
              className={styles["periods"]}
              role={"img"}
              aria-label={
                "1교시 어휘 CORE 50분, 휴식 10분, 2교시 책 소개와 쓰기 FLARE 50분, 휴식 10분, 3교시 토의와 토론 FLARE 50분"
              }
            >
              {"\n      "}
              <div className={styles["period"] + " " + styles["c"]}>
                <span className={styles["no"]}>{"1교시 50분"}</span>
                <span className={styles["what"]}>{"어휘 학습"}</span>
                <span className={styles["book"]}>{"COSMO CORE"}</span>
              </div>
              {"\n      "}
              <div className={styles["brk"]}>
                <span>{"휴식 10분"}</span>
              </div>
              {"\n      "}
              <div className={styles["period"] + " " + styles["f"]}>
                <span className={styles["no"]}>{"2교시 50분"}</span>
                <span className={styles["what"]}>{"책 소개와 쓰기"}</span>
                <span className={styles["book"]}>{"COSMO FLARE"}</span>
              </div>
              {"\n      "}
              <div className={styles["brk"]}>
                <span>{"휴식 10분"}</span>
              </div>
              {"\n      "}
              <div className={styles["period"] + " " + styles["f"]}>
                <span className={styles["no"]}>{"3교시 50분"}</span>
                <span className={styles["what"]}>{"토의와 토론 활동"}</span>
                <span className={styles["book"]}>{"COSMO FLARE"}</span>
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <p className={styles["caption"]}>
              {
                '쓰기는 2교시에 둡니다. 2교시 안에서 쓰기 시간을 몇 분 둘지는 확정 전이라, 상담에서는 "쓰기 시간을 충분히 확보하고 개별 첨삭합니다"까지만 말합니다.'
              }
            </p>
            {"\n  "}
          </section>
          {"\n\n  "}
          <section id={"core"}>
            {"\n    "}
            <div className={styles["sec-head"]}>
              {"\n      "}
              <p className={styles["eyebrow"] + " " + styles["core"]}>
                {"COSMO CORE"}
              </p>
              {"\n      "}
              <h2>{"초등부터 수능까지 이어지는 필수 어휘집"}</h2>
              {"\n      "}
              <p className={styles["muted"]}>
                {
                  "상담에서 가장 먼저 강조할 교재입니다. 시판 어휘집이 아니라 집필진이 직접 뽑고 정리했습니다."
                }
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <ol className={styles["flow"] + " " + styles["core"]}>
              {"\n      "}
              <li>
                <b>{"어휘를 뽑은 곳"}</b>
                <span className={styles["small"]}>
                  {
                    "2015 개정 초등 교과서 6개 학년, 중학교 교과서(국어, 수학, 과학, 사회, 실과), 고등학교 모의고사(3월, 6월, 9월), 수능"
                  }
                </span>
              </li>
              {"\n      "}
              <li>
                <span className={styles["big"]}>{"5,000개"}</span>
                <b>{"어휘 추출"}</b>
                <span className={styles["small"] + " " + styles["muted"]}>
                  {"출처 전체에서 뽑은 데이터베이스"}
                </span>
              </li>
              {"\n      "}
              <li>
                <span className={styles["big"]}>{"500개"}</span>
                <b>{"1단계 필수 어휘 채택"}</b>
                <span className={styles["small"] + " " + styles["muted"]}>
                  {"이번 1단계 과정에서 다루는 범위"}
                </span>
              </li>
              {"\n      "}
              <li>
                <b>{"초등 교육과정 안에서 재검토"}</b>
                <span className={styles["small"]}>
                  {"초등학생이 배울 수 있는 범위로 다시 정리"}
                </span>
              </li>
              {"\n    "}
            </ol>
            {"\n    "}
            <div className={styles["tbl"]}>
              {"\n      "}
              <table>
                {"\n        "}
                <thead>
                  <tr>
                    <th scope={"col"}>{"교재 구성"}</th>
                    <th scope={"col"}>{"내용"}</th>
                    <th scope={"col"}>{"상담에서 쓰는 말"}</th>
                  </tr>
                </thead>
                {"\n        "}
                <tbody>
                  {"\n          "}
                  <tr>
                    <th scope={"row"}>{"어휘 세트"}</th>
                    <td>{"함께 알아 두면 좋은 낱말을 한 단원에 묶음"}</td>
                    <td>
                      {'"낱말을 하나씩 외우지 않고 관계 속에서 익힙니다."'}
                    </td>
                  </tr>
                  {"\n          "}
                  <tr>
                    <th scope={"row"}>{"오늘의 혼동 어휘"}</th>
                    <td>
                      {
                        "뜻이 비슷해 헷갈리는 낱말을 나란히 놓고 비교 (예: 특권과 특혜)"
                      }
                    </td>
                    <td>{'"비슷한 말을 정확히 구별하는 힘을 기릅니다."'}</td>
                  </tr>
                  {"\n          "}
                  <tr>
                    <th scope={"row"}>{"교과 연계 표시"}</th>
                    <td>
                      {
                        "국어, 사회, 과학, 도덕 중 어느 과목, 학년, 영역에서 쓰이는지 표시 (2022 개정 교육과정 기준). 실제 교과서 맥락과 맞닿는 낱말에만 붙임"
                      }
                    </td>
                    <td>
                      {
                        '"배운 낱말이 교과서 어디에 나오는지 확인할 수 있습니다."'
                      }
                    </td>
                  </tr>
                  {"\n          "}
                  <tr>
                    <th scope={"row"}>{"근거가 있는 해설"}</th>
                    <td>{"정답뿐 아니라 왜 그 답인지 근거를 제시"}</td>
                    <td>{'"틀린 문제도 이해로 이어지게 합니다."'}</td>
                  </tr>
                  {"\n        "}
                </tbody>
                {"\n      "}
              </table>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={styles["say"]}>
              {"\n      "}
              <span className={styles["k"]}>{"상담 멘트"}</span>
              {"\n      "}
              <p>
                {
                  '"초등 교과서부터 수능까지 반드시 만나는 필수 어휘를 뽑아, 초등학생이 소화할 수 있게 정리한 어휘집입니다."'
                }
              </p>
              {"\n    "}
            </div>
            {"\n  "}
          </section>
          {"\n\n  "}
          <section id={"flare"}>
            {"\n    "}
            <div className={styles["sec-head"]}>
              {"\n      "}
              <p className={styles["eyebrow"] + " " + styles["flare"]}>
                {"COSMO FLARE"}
              </p>
              {"\n      "}
              <h2>{"자체 개발 독서 교재: 한 권을 2주 동안 깊게"}</h2>
              {"\n      "}
              <p className={styles["muted"]}>
                {
                  "책마다 같은 틀을 밟아, 책이 바뀌어도 생각하는 방법이 몸에 익도록 만들었습니다."
                }
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={styles["two"]}>
              {"\n      "}
              <div className={styles["card"] + " " + styles["flare-tint"]}>
                {"\n        "}
                <h3>{"학기 중: 2주에 1권"}</h3>
                {"\n        "}
                <ul>
                  {"\n          "}
                  <li>{"1주차: 깊이 읽기 (책 내용과 장면, 개념)"}</li>
                  {"\n          "}
                  <li>{"2주차: 쓰기와 토의, 토론"}</li>
                  {"\n        "}
                </ul>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={styles["card"]}>
                {"\n        "}
                <h3>{"방학: 1주에 1권 (예정)"}</h3>
                {"\n        "}
                <p className={styles["small"] + " " + styles["muted"]}>
                  {
                    "학기 중에는 다른 수업 부담을 고려해 2주에 걸쳐 깊게 다루고, 방학에는 주 1권으로 운영할 예정입니다."
                  }
                </p>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <h3>{"교재 한 권의 흐름"}</h3>
            {"\n    "}
            <ol className={styles["flow"] + " " + styles["flare"]}>
              {"\n      "}
              <li>
                <b>{"책과 작가 소개"}</b>
                <span className={styles["small"]}>
                  {"책의 배경과 작가를 알고 들어갑니다."}
                </span>
              </li>
              {"\n      "}
              <li>
                <b>{"줄거리와 읽기 질문"}</b>
                <span className={styles["small"]}>
                  {"이야기 흐름과 인물, 사건을 정리합니다."}
                </span>
              </li>
              {"\n      "}
              <li>
                <b>{"생각 연습하기"}</b>
                <span className={styles["small"]}>
                  {
                    "예측 게임, 핵심 개념, 책 속 장면 읽기, 한계 질문(정답이 하나로 정해지지 않는 질문)"
                  }
                </span>
              </li>
              {"\n      "}
              <li>
                <b>{"본 활동"}</b>
                <span className={styles["small"]}>
                  {"책 성격에 맞춰 토의형 또는 토론형"}
                </span>
              </li>
              {"\n      "}
              <li>
                <b>{"주제 관련 읽기 자료"}</b>
                <span className={styles["small"]}>
                  {
                    "문학에는 비문학 자료를, 비문학 책에는 문학 작품을 함께 제공 (예: 문학 작품과 감정, 기억에 관한 뇌과학 이론)"
                  }
                </span>
              </li>
              {"\n    "}
            </ol>
            {"\n    "}
            <h3>{"본 활동 두 가지"}</h3>
            {"\n    "}
            <div className={styles["tbl"]}>
              {"\n      "}
              <table>
                {"\n        "}
                <thead>
                  <tr>
                    <th scope={"col"}>{"순서"}</th>
                    <th scope={"col"}>{"황금 밸런스 찾기 (토의형)"}</th>
                    <th scope={"col"}>{"토론 (토론형)"}</th>
                  </tr>
                </thead>
                {"\n        "}
                <tbody>
                  {"\n          "}
                  <tr>
                    <th scope={"row"}>{"생각 펼치기"}</th>
                    <td>
                      {
                        "키워드 브레인스토밍. 좋은 점, 걱정되는 점, 내 경험을 고루 적고, 많이 낸 학생에게 아이디어 왕 보상"
                      }
                    </td>
                    <td>{"같음 (키워드는 논제 속 단어)"}</td>
                  </tr>
                  {"\n          "}
                  <tr>
                    <th scope={"row"}>{"내 생각 뽑기"}</th>
                    <td>
                      {"가장 중요한 생각 2가지를 골라 이후 활동에서 다시 사용"}
                    </td>
                    <td>{"같음"}</td>
                  </tr>
                  {"\n          "}
                  <tr>
                    <th scope={"row"}>{"본 활동"}</th>
                    <td>
                      {
                        "가상 상황을 읽고 A, B 중 선택 → 모둠 투표 → 적은 쪽에 메리트 카드를 얹고 다시 투표 → 모둠이 합의하는 균형점 찾기"
                      }
                    </td>
                    <td>
                      {
                        "입장 뽑기 카드로 찬반 무작위 배정 → 입론 → 교차 질문 → 상대 주장 점검 → 최후 발언 3문장"
                      }
                    </td>
                  </tr>
                  {"\n          "}
                  <tr>
                    <th scope={"row"}>{"나의 기준 세우기"}</th>
                    <td>
                      {"내 판단 기준 한 줄과 글쓰기. 책 속 장면을 근거로 씀"}
                    </td>
                    <td>{"같음"}</td>
                  </tr>
                  {"\n        "}
                </tbody>
                {"\n      "}
              </table>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={styles["two"]}>
              {"\n      "}
              <div className={styles["card"]}>
                <h3>{"기존 활동과 다른 점"}</h3>
                <p className={styles["small"]}>
                  {
                    "황금 밸런스 찾기는 찬반을 고르고 끝나지 않고 선택의 대가와 조건을 따집니다. 토론은 입장을 무작위로 뽑아 내 생각과 다른 쪽의 논리도 세우고, 순서가 정해져 있어 말 잘하는 학생만 주도하지 않습니다."
                  }
                </p>
              </div>
              {"\n      "}
              <div className={styles["card"]}>
                <h3>{"진행과 참여"}</h3>
                <p className={styles["small"]}>
                  {
                    "토의와 토론은 학생이 아니라 강사가 진행합니다. 책을 다 못 읽어 와도 교재 안의 책 속 장면과 읽기 자료로 수업에 참여할 수 있고, 책 전체가 어려운 경우 중요한 장면을 발췌해 함께 읽습니다."
                  }
                </p>
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={styles["internal-band"]}>
              {"\n      "}
              <span className={styles["k"]}>{"실장 참고"}</span>
              {"\n      "}
              <ul>
                {"\n        "}
                <li>
                  {
                    '도서 목록은 공개 범위가 정해지기 전까지 이 페이지와 상담에서 밝히지 않습니다. 안내는 "분야별로 엄선한 도서를 2주에 한 권씩 다룹니다"까지입니다.'
                  }
                </li>
                {"\n        "}
                <li>
                  {
                    "현재 개발된 책은 문학 작품이 중심입니다. 과학기술, 정보IT, 생물, 지질 분야 도서는 앞으로 넓힐 계획이고, 도서 선정은 사전 회의와 확인을 거칩니다."
                  }
                </li>
                {"\n      "}
              </ul>
              {"\n    "}
            </div>
            {"\n  "}
          </section>
          {"\n\n  "}
          <section id={"tracks"}>
            {"\n    "}
            <div className={styles["sec-head"]}>
              {"\n      "}
              <p className={styles["eyebrow"]}>{"반 구성"}</p>
              {"\n      "}
              <h2>{"독해반과 논리반: 같은 교재, 다른 집중점"}</h2>
              {"\n      "}
              <p className={styles["muted"]}>
                {
                  "학년별(5학년, 6학년)로 먼저 나누고, 그 안에서 독해반과 논리반으로 나눕니다. 학부모에게는 두 이름과 수업의 집중점으로만 안내합니다."
                }
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={styles["tbl"]}>
              {"\n      "}
              <table>
                {"\n        "}
                <thead>
                  <tr>
                    <th scope={"col"}>{"구분"}</th>
                    <th scope={"col"}>{"독해반"}</th>
                    <th scope={"col"}>{"논리반"}</th>
                  </tr>
                </thead>
                {"\n        "}
                <tbody>
                  {"\n          "}
                  <tr>
                    <th scope={"row"}>{"집중점"}</th>
                    <td>{"책 자체의 내용과 글의 구조"}</td>
                    <td>
                      {
                        "책 내용을 풀어내고 다른 사람과 나누며 다양한 의견 세우기"
                      }
                    </td>
                  </tr>
                  {"\n          "}
                  <tr>
                    <th scope={"row"}>{"이런 학생에게"}</th>
                    <td>
                      {"글을 정확히 읽고 구조를 잡는 힘을 먼저 다질 학생"}
                    </td>
                    <td>
                      {
                        "읽은 내용을 바탕으로 자기 생각을 말하고 쓰는 단계로 갈 학생"
                      }
                    </td>
                  </tr>
                  {"\n          "}
                  <tr>
                    <th scope={"row"}>{"교재"}</th>
                    <td>{"CORE, FLARE"}</td>
                    <td>{"CORE, FLARE"}</td>
                  </tr>
                  {"\n        "}
                </tbody>
                {"\n      "}
              </table>
              {"\n    "}
            </div>
            {"\n    "}
            <div className={styles["internal-band"]}>
              {"\n      "}
              <span className={styles["k"]}>
                {"실장 전용 · 외부 안내 금지"}
              </span>
              {"\n      "}
              <ul>
                {"\n        "}
                <li>
                  {
                    "내부적으로 독해반은 기본, 논리반은 심화에 해당합니다. 이 구분은 실장만 압니다."
                  }
                </li>
                {"\n        "}
                <li>
                  {
                    '"기본반", "심화반", "윗반", "아랫반", "레벨이 낮은 반"은 쓰지 않습니다.'
                  }
                </li>
                {"\n        "}
                <li>
                  {
                    '"어느 반이 더 높냐"는 질문에는 "두 반은 같은 교재로 배우고, 수업에서 집중하는 지점이 다릅니다"로 답합니다.'
                  }
                </li>
                {"\n        "}
                <li>
                  {
                    '독해반 배정은 "부족해서"가 아니라 "지금 아이에게 맞는 집중점"으로 설명합니다.'
                  }
                </li>
                {"\n      "}
              </ul>
              {"\n    "}
            </div>
            {"\n  "}
          </section>
          {"\n\n  "}
          <section id={"spectrum"}>
            {"\n    "}
            <div className={styles["sec-head"]}>
              {"\n      "}
              <p className={styles["eyebrow"]}>{"진단"}</p>
              {"\n      "}
              <h2>{"COSMO 스펙트럼: 50분 배치 진단"}</h2>
              {"\n      "}
              <p className={styles["muted"]}>
                {
                  "24문항으로 여섯 영역을 보고, 결과를 근거로 독해반 또는 논리반을 안내합니다. 영역별 배점은 학년마다 다르며 교사용 채점 가이드를 따릅니다."
                }
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <ul className={styles["domains"]}>
              {"\n      "}
              <li>{"독해력"}</li>
              {"\n      "}
              <li>{"어휘력"}</li>
              {"\n      "}
              <li>{"추론사고력"}</li>
              {"\n      "}
              <li>{"비판적사고력"}</li>
              {"\n      "}
              <li>{"논리적표현력"}</li>
              {"\n      "}
              <li>{"논술구성능력"}</li>
              {"\n    "}
            </ul>
            {"\n    "}
            <div className={styles["two"]}>
              {"\n      "}
              <div className={styles["card"]}>
                {"\n        "}
                <h3>{"진행"}</h3>
                {"\n        "}
                <ul className={styles["small"]}>
                  {"\n          "}
                  <li>{"학생용 시험지로 50분 응시"}</li>
                  {"\n          "}
                  <li>{"교사용 채점 가이드로 채점"}</li>
                  {"\n          "}
                  <li>
                    {
                      "결과지는 CORE(어휘)를 중심으로, FLARE(독서)를 보완으로 읽음"
                    }
                  </li>
                  {"\n          "}
                  <li>{"결과를 근거로 반 안내"}</li>
                  {"\n        "}
                </ul>
                {"\n      "}
              </div>
              {"\n      "}
              <div className={styles["card"]}>
                {"\n        "}
                <h3>{"결과 설명 순서"}</h3>
                {"\n        "}
                <ul className={styles["small"]}>
                  {"\n          "}
                  <li>{"아이가 잘하는 부분부터"}</li>
                  {"\n          "}
                  <li>{"어휘 영역에서 보완할 점"}</li>
                  {"\n          "}
                  <li>{"독서 영역 결과와 반 안내를 연결"}</li>
                  {"\n        "}
                </ul>
                {"\n        "}
                <p className={styles["small"] + " " + styles["muted"]}>
                  {
                    '"합격", "불합격", "등수", 다른 학생과의 비교는 쓰지 않습니다.'
                  }
                </p>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </section>
          {"\n\n  "}
          <section id={"roadmap"}>
            {"\n    "}
            <div className={styles["sec-head"]}>
              {"\n      "}
              <p className={styles["eyebrow"]}>{"단계"}</p>
              {"\n      "}
              <h2>{"지금 운영하는 것은 1단계입니다"}</h2>
              {"\n    "}
            </div>
            {"\n    "}
            <ol className={styles["road"]}>
              {"\n      "}
              <li className={styles["now"]}>
                <span className={styles["step"]}>{"1단계"}</span>
                <h3>{"정확히 읽기"}</h3>
                <span className={styles["pill"] + " " + styles["on"]}>
                  {"운영"}
                </span>
              </li>
              {"\n      "}
              <li>
                <span className={styles["step"]}>{"2단계"}</span>
                <h3>{"깊이 생각하기"}</h3>
                <span className={styles["pill"] + " " + styles["dev"]}>
                  {"개발 중"}
                </span>
              </li>
              {"\n      "}
              <li>
                <span className={styles["step"]}>{"3단계"}</span>
                <h3>{"논리로 쓰기"}</h3>
                <span className={styles["pill"] + " " + styles["dev"]}>
                  {"개발 중"}
                </span>
              </li>
              {"\n    "}
            </ol>
            {"\n    "}
            <p className={styles["caption"]}>
              {
                '중학교 공부와의 연결을 물으면 "다음 단계 과정은 개발 중입니다"로 안내합니다.'
              }
            </p>
            {"\n  "}
          </section>
          {"\n\n  "}
          <section id={"rules"}>
            {"\n    "}
            <div className={styles["sec-head"]}>
              {"\n      "}
              <p className={styles["eyebrow"]}>{"상담 유의"}</p>
              {"\n      "}
              <h2>{"말하지 않는 것"}</h2>
              {"\n    "}
            </div>
            {"\n    "}
            <ul className={styles["checks"] + " " + styles["no"]}>
              {"\n      "}
              <li>
                <span>
                  {
                    '다른 학원 이름을 꺼내거나 비방하는 말. "일반적인 방식과 이렇게 다릅니다"로만 설명합니다.'
                  }
                </span>
              </li>
              {"\n      "}
              <li>
                <span>
                  {
                    '효과 보장. "점수가 오른다", "몇 달이면 좋아진다"는 쓰지 않습니다.'
                  }
                </span>
              </li>
              {"\n      "}
              <li>
                <span>
                  {
                    '"수능 대비 교재". CORE는 수능까지 이어지는 필수 어휘를 초등 수준에서 익히는 교재입니다.'
                  }
                </span>
              </li>
              {"\n      "}
              <li>
                <span>{'교과 연계를 "학교 시험 대비"로 부풀리는 말.'}</span>
              </li>
              {"\n      "}
              <li>
                <span>{"개발 중인 2, 3단계를 운영 중처럼 말하는 것."}</span>
              </li>
              {"\n      "}
              <li>
                <span>
                  {"반을 수준으로 부르는 말, 진단을 시험 통과처럼 말하는 것."}
                </span>
              </li>
              {"\n      "}
              <li>
                <span>
                  {
                    '통계를 설명회 자료와 다른 숫자로 말하는 것. 출처와 함께, 어림값에는 "약"을 붙입니다.'
                  }
                </span>
              </li>
              {"\n      "}
              <li>
                <span>{"집필진 학력 소개. 상담 내용에서 뺍니다."}</span>
              </li>
              {"\n      "}
              <li>
                <span>
                  {
                    '미확정 사항을 단정하는 말. "확정되는 대로 안내드리겠습니다"로 답합니다.'
                  }
                </span>
              </li>
              {"\n    "}
            </ul>
            {"\n  "}
          </section>
          {"\n\n  "}
          <section id={"open"}>
            {"\n    "}
            <div className={styles["sec-head"]}>
              {"\n      "}
              <p className={styles["eyebrow"]}>{"확정 전"}</p>
              {"\n      "}
              <h2>{"아직 정해지지 않은 항목"}</h2>
              {"\n      "}
              <p className={styles["muted"]}>
                {
                  "정해지면 이 페이지를 고칩니다. 그 전에는 상담에서 단정하지 않습니다."
                }
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <ul className={styles["checks"]}>
              {"\n      "}
              <li>
                <span>
                  <b>{"CORE 어휘 출처 표기:"}</b>
                  {
                    ' 상담 매뉴얼은 "2015 개정 초등 교과서 6개 학년, 중학교 5개 과목, 모의고사, 수능"이고, 설명회 자료는 2015, 2022 개정 교과서와 검정고시 자료까지 넣어 적었습니다. 이 페이지는 매뉴얼 표기를 따랐습니다.'
                  }
                </span>
              </li>
              {"\n      "}
              <li>
                <span>
                  <b>{"교육과정 표기:"}</b>
                  {
                    ' 어휘 선정은 "2015 개정", 교과 연계 표시는 "2022 개정 기준"이라 두 표기를 함께 설명하는 방법'
                  }
                </span>
              </li>
              {"\n      "}
              <li>
                <span>
                  <b>{"중학교 과목명:"}</b>
                  {
                    ' 중학교 교과는 "실과"가 아니라 "기술 가정"이라 어느 표기가 맞는지'
                  }
                </span>
              </li>
              {"\n      "}
              <li>
                <span>{"2교시 안에서 쓰기 시간 배치"}</span>
              </li>
              {"\n      "}
              <li>
                <span>{"COSMO 스펙트럼 결과 구간과 반을 잇는 기준"}</span>
              </li>
              {"\n      "}
              <li>
                <span>{"반 이동 가능 여부와 기준"}</span>
              </li>
              {"\n      "}
              <li>
                <span>
                  {"학부모에게 첨삭 결과와 학습 리포트를 보내는 주기"}
                </span>
              </li>
              {"\n      "}
              <li>
                <span>{"FLARE 도서 목록 공개 범위"}</span>
              </li>
              {"\n      "}
              <li>
                <span>{"교습비, 시간표, 개강일 (운영팀)"}</span>
              </li>
              {"\n    "}
            </ul>
            {"\n  "}
          </section>
          {"\n\n"}
        </main>
        {"\n"}
        <footer className={styles["foot"]}>
          {"\n  "}
          <p>{"출처: 이 계정에서 작성한 PROJECT COSMO 자료"}</p>
          {"\n  "}
          <ul>
            {"\n    "}
            <li>
              {
                "PROJECT COSMO 상담실장 매뉴얼 (반 구성, CORE와 FLARE 구성, 상담 유의 사항, 확정 전 항목)"
              }
            </li>
            {"\n    "}
            <li>
              {
                "학부모 설명회 자료, 10월 16일 수정본 (CORE 5,000개 추출, 1단계 500개 채택)"
              }
            </li>
            {"\n    "}
            <li>{"COSMO 스펙트럼 진단 작업 (6개 영역, 24문항, 50분)"}</li>
            {"\n  "}
          </ul>
          {"\n"}
        </footer>
        {"\n"}
      </div>
      {"\n"}
    </div>
  );
}
