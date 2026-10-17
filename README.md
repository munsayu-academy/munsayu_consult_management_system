# 문해와 사유 내부 문서

Next.js App Router / TypeScript로 옮긴 정적 문서입니다.

- `/`: 두 문서 링크
- `/curriculum`: PROJECT COSMO 커리큘럼
- `/consult-script`: 상담 스크립트

모든 페이지에 `robots: noindex, nofollow`를 적용합니다. 복사 버튼만 클라이언트 컴포넌트이며, 본문은 서버 컴포넌트입니다.

## 실행

Node.js 20.9 이상에서 다음 명령을 사용합니다. 이 환경에서는 Node.js 24.19.0과 npm 11.9.0을 사용했습니다.

```sh
npm ci
npm run dev
```

배포 빌드와 실행:

```sh
npm run build
npm start
```

Google Fonts를 `next/font/google`로 받아 자체 호스팅하므로 **빌드 시** `fonts.googleapis.com`, `fonts.gstatic.com`에 HTTPS 접근이 필요합니다. 폰트 다운로드를 생략하거나 검증을 끄는 우회 설정은 사용하지 않습니다.

## 원본 보존

문구, `.ph` 내용, 앵커 ID, 기본 `details` 상태, 문자 예시의 공백과 줄바꿈을 유지합니다. 페이지별 CSS Module에서 색 토큰은 해당 문서가 표시되는 실제 `html`에 적용하므로 `prefers-color-scheme`과 `document.documentElement.dataset.theme` 모두 작동합니다. 테마 전환 UI는 추가하지 않았습니다.

원본에는 doctype이 없습니다. Next.js 표준 모드에서도 원본과 같은 배치를 얻도록 커리큘럼 표의 기본 행간, 상담 문서의 노란 칸만 있는 정의 행 및 기록 목록의 줄 상자을 보정했습니다.

클라우드 프록시가 개발용 WebSocket 스트림을 전달하지 못할 때도 복사 버튼이 초기화되도록 Next.js의 개발 디버그 채널을 끕니다. 프로덕션 기능에는 영향을 주지 않습니다.

## 현재 검증 결과

- `npm ci --cache /workspace/.npm-cache`, `npx tsc --noEmit`: 통과.
- 개발 서버 재시작 후 실제 브라우저 클립보드 복사와 인쇄 CSS: 통과.
- 두 문서의 전체 본문 텍스트, 노란 칸 27개, 앵커 및 기본 펼침 상태: 원본과 일치.
- 1280px / 390px × 라이트 / 다크 × 두 페이지: 원본과 새 페이지를 나란히 촬영하여 비교. **동일 대체 폰트 조건**의 전체 화면 픽셀 차이 0.
- 목차 이동, `details` 23개의 열기/닫기, 복사 버튼 4개, 클립보드 거부/미지원 시 선택 대체 및 1.6초 복구, OS 테마와 반대인 `data-theme` 강제 지정: 통과.
- 세 경로의 `noindex, nofollow`: 확인.
- `npm run build`: Google Fonts 다운로드가 클라우드 네트워크 정책의 HTTP 403으로 차단되어 실패. 실제 Google Fonts 기준 최종 화면 비교도 보류.

환경 설정 초안에 Google Fonts 도메인 두 개와 설치·시작 지침을 저장했습니다. 설정 검토·저장 및 게시 후 빌드와 실제 폰트 기준 비교를 재개해야 합니다. 화면의 문구나 기능을 의도적으로 바꾼 부분은 없습니다.
