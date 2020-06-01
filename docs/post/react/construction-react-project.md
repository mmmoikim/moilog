---
date : 2020-06-01
---
# 리액트 프로젝트 구성기

## LINT & FORMATTER
- ESLint란 : 자바스크립트 구문을 분석 해 패턴을 식별하고 보고하는 툴, 이렇게 맞지 않는 구문 보고해줌
![react](~@assets/img/react/construction-react-1.png)
- Prettier란 : javascript 코드 포멧터, 인덴트 직접 한땀한땀 맞추지 않아도 포멧터가 자동 포멧팅 해줌

### VS code 확장 ESlint, prettier 설치하기
- ![react](~@assets/img/react/construction-react-2.png)

### eslint-config-airbnb 적용
  - eslint-config-airbnb 는 에어비앤비가 만든 스타일로 ECMAScript 6+, React를 포함한 javascript 룰이다.
  - 리액트가 아니면 eslint-config-airbnb-base로 적용해도 된다.
  - npm info "eslint-config-airbnb@latest" peerDependencies 입력 하면 필요한 의존 모듈 리스트가 나온다. 모두 설치!
  - root에 .eslintrc 파일 추가
  - extends에 airbnb, airbnb/hooks 추가
  - rules 안에 설정 끄고 킬 수 있음
  - ![react](~@assets/img/react/construction-react-3.png)
  - [컨피그 도큐먼트](https://eslint.org/docs/user-guide/configuring)

### prettier 적용
  - root에 .prettierrc 파일 만들기
  - 코드 포멧 컨피그로 설정 가능
  - ![react](~@assets/img/react/construction-react-4.png)
  - [컨피그 도큐먼트](https://prettier.io/docs/en/configuration.html)

### 작업영역(워크 스페이스) 에만 설정하기 
  - 확장 프로그램은 vscode 전역으로 설정 되서 다른 프로젝트도 같이 적용되지 않도록 설정해 놓자
  - root에 .vscode(폴더) - setting.json 파일 만들기
  - 저장, 복붙, 타이핑 할 때 자동 포멧팅 기능 키는 설정
  ![react](~@assets/img/react/construction-react-5.png)
  - 다른 프로젝트에서 쓰던 포멧터 비활성화 하기 ex) vuter, beautify
  - ![react](~@assets/img/react/construction-react-6.png)
  - 사용 안 함 (작업영역) 으로 비활성화 해놓자
  - [참고글](https://velog.io/@velopert/eslint-and-prettier-in-react) 


## DIRECTORY & NAMING 
### NAMING
- 윈도우에서는 대소문자를 안타지만 리눅스에서는 대소문자 오타 때문에 빌드가 안되는 이슈가 있어서 구분하기 쉽게 네이밍 규칙을 정했다.
- 폴더 :  스네이크
- jsx 파일 : 파스칼
- js 파일 : 캬멜
- [에어비엔비 네이밍 착안](https://airbnb.io/javascript/react/#naming)

### DIRECTORY
- ![react](~@assets/img/react/construction-react-7.png)
 - action, reducer, saga는 페이지 별로 관리 한다. (폴더 이것저것 열고싶지 않아서 + 공통으로 스토어 쓰는일이 드물어서)
 - 공통 스토어는 store - common 폴더를 쓴다.
 - view 폴더는 jsx파일과 스토어 관련 파일만 넣는다, 다른 js 모듈들은 utill 폴더를 쓴다
 - api - url 에 모든 API URL들을 모아 놓자 그리고 주석으로 원본 api 써놓기 (어떤 API 쓰는지 찾아줄 때 java 프로젝트 열어서 찾아가지 않도록)
 - component에는 컨테이너명을 붙인다 ex) PlanPageButton.jsx (반영 폴더명만으로 어느 페이지 수정됐는지 알수 있도록)
 - [도메인 분리로 차용](https://www.robinwieruch.de/react-folder-structure)

## REDUX & REDUX SAGA
- 여러 상태관리, 미들웨어들이 있지만 보편적이고 레퍼런트가 많은 리덕스와 리덕스 사가를 사용하기로 결정!

### REDUX
- SPA 페이지에서 전역으로 사용 가능한 저장소이다. 시점 별로 현재 상태를 유지하고 관리 할 수 있어서 컴포넌트간 데이터 관리가 용이하고 데이터 처리 로직을 분리 할 수 있다.
 - store : 상태 트리
 - action : 뷰에서 상태를 변화하고자 할 때 action을 호출 한다.
 - reducer : 어떤 액션이 어떤 상태 변화를 일으키는지 액션 타입을 키로 정의해 놓고 리듀서가 변화를 처리하고 변화된 상태를 리턴한다.
- [리덕스 공식 도큐먼트](https://redux.js.org/introduction/getting-started)
- [만화로 된 설명](https://bestalign.github.io/2015/10/26/cartoon-intro-to-redux/)

### REDUX-SAGA
- 리덕스의 미들웨어로 비동기로 데이터를 가져와 상태를 변화시키거나, 에러 처리를 할 때와 같은 사이트 이펙트를 관리 할 수 있다.
redux-saga에서 제공하는 헬퍼 함수로 복잡한 로직을 가독성 좋게 구현 할 수 있다
- [리덕스 사가 공식 도큐먼트 번역](https://mskims.github.io/redux-saga-in-korean/)
- [사이드 이펙트 관리에 대한 글](https://meetup.toast.com/posts/136)
- [구현 방법](https://blog.rhostem.com/posts/2017-09-07-redux-saga-toast-control)

## TESTING
- 리펙토링과 구현부가 바뀌어도 테스팅코드를 바꾸지 않아도 되도록
- 사용사가 직접 동작하는 액션을 인풋으로, 렌더된 돔을 아웃풋으로 보고 테스트 코드를 짠다. ( Behavior Driven Test )

- [구현부를 넣으면 좋지 않은 이유](https://edykim.com/ko/post/react-hooks-whats-going-to-happen-to-my-tests/)
- [페이스 북에서 권장하는 테스팅 툴 react-testing library](https://testing-library.com/docs/react-testing-library/intro)
- [jest-dom matcher](https://github.com/testing-library/jest-dom)

## css
- UI에서 전달해준 아웃풋을 보존하기 위해서 "mini-css-extract-plaugin" 을 사용해서 청크 단위로 css를 떨구도록 설정 했다.
- 보통 페이지 단위로 css가 나오기 때문에 페이지 최상위 컨테이너(라우트로 임포트 되는 단위)에 css를 임포트 한다.
- 헤더와 풋터는 css가 따로 있기 때문에 청크를 일부러 나눠서 단일 css로 나오도록 했음
- App.jsx
- ![react](~@assets/img/react/construction-react-8.png)

## LAYOUT
## component lazy




