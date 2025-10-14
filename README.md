# React Enterprise Template 2025

Next.js, TypeScript, Zustand, TanStack Query, shadcn/ui, i18n 등 대규모 애플리케이션을 위한 최신 기술 스택을 집약한 엔터프라이즈급 React 템플릿입니다.

## ✨ 주요 기술 스택 (Features)

* **Framework**: `Next.js 14+` (App Router)
* **Language**: `TypeScript`
* **Package Manager**: `Yarn`
* **UI**: `shadcn/ui` & `Tailwind CSS`
* **State Management**:
    * Client (Global): `Zustand`
    * Server: `TanStack Query v5`
* **Form Management**: `React Hook Form`
* **Internationalization (i18n)**: `next-intl`
* **Testing**: `Jest` & `React Testing Library`
* **Code Quality**: `ESLint`, `Prettier`

## 🚀 시작하기

### 1. 템플릿으로 레포지토리 생성

이 페이지 우측 상단의 **[Use this template]** 버튼을 클릭하여 새로운 레포지토리를 생성합니다.

### 2. 로컬에 클론 및 의존성 설치

```bash
# 1. 생성한 레포지토리를 클론합니다.
git clone [https://github.com/your-username/your-new-repo.git](https://github.com/your-username/your-new-repo.git)
cd your-new-repo

# 2. Yarn을 사용하여 의존성을 설치합니다.
yarn install
```

### 3. 개발 서버 실행

```bash
yarn dev
```

이제 브라우저에서 `http://localhost:3000`으로 접속하여 개발을 시작할 수 있습니다.

## 🛠️ 주요 명령어

-   `yarn dev`: 개발 서버를 실행합니다.
-   `yarn build`: 프로덕션용으로 앱을 빌드합니다.
-   `yarn start`: 빌드된 프로덕션 서버를 실행합니다.
-   `yarn lint`: ESLint로 코드 스타일을 검사합니다.
-   `yarn test`: Jest로 테스트를 실행합니다.

## 📂 폴더 구조

```
/src
├── app/[locale]/     # 다국어별 페이지 라우팅
├── components/       # UI 컴포넌트 (shadcn/ui 등)
├── hooks/            # 커스텀 훅
├── lib/              # 유틸리티 함수, 라이브러리 설정
├── services/         # API 요청 로직
└── stores/           # Zustand 스토어
/messages
├── en.json           # 영어 번역 파일
└── ko.json           # 한국어 번역 파일
```