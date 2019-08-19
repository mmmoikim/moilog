---
date : 2019-08-05
---
# atomic

## 요소
- 원자 (Atoms)
- 분자 (Molecules)
- 유기체 (Organisms)
- 탬플릿 (Templates)
- 페이지 (Pages)

### 원자 (Atoms)
- These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional.
- 분해 불가능한 HTML 요소들

### 분자 (Molecules)
- molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.
- 유닛으로 함께 기능하는 상대적으로 간단한 UI엘리먼트의 그룹
- 각 엘리먼트들에 목적이 생긴다, 예를들어 서치박스에서 버튼은 클릭하면 검색을 실행하는 목적이 생김
- 재사용성과 일관성을 유지할 수 있다

### 유기체 (Organisms)
- Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms.
- These organisms form distinct sections of an interface.
- 분자, 또는 원자, 다른 유기체 그룹으로 구성된다.
- 한 섹션의 형태로 나타난다. 예) 헤더, 상품 리스트
- 상품리스트는 분자(사진원자 + 제목원자)의 반복으로 구성 된 유기체이다.


### 탬플릿 (Templates)
- Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.
- 컴포넌드를 레이아웃에 배치하고 디자인 컨텐츠 구조를 명시하는 페이지 레벨의 객체
- 페이지에 기본 컨텐츠 구조에 집중, 구성 요소의 속성을 명확히 한다
- 페이지의 골격을 정의함으로써 다양한 동적 컨텐츠를 설명 할 수있는 시스템을 만들 수 있으며 특정 디자인 패턴을 채우는 가드 레일을 제공 할 수 있습니다.

### 페이지 (Pages)
- Pages are specific instances of templates that show what a UI looks like with real representative content in place.
- 페이지는 특정 템플릿 구현체와 실제 콘텐츠를 함께 보여준다.

![atomic](~@assets/img/web/instagram-atomic.png)

## 출처
http://atomicdesign.bradfrost.com
