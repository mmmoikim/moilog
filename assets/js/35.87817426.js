(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{361:function(_,v,t){"use strict";t.r(v);var i=t(0),a=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"타입스크립트-프로그래밍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#타입스크립트-프로그래밍","aria-hidden":"true"}},[_._v("#")]),_._v(" 타입스크립트 프로그래밍")]),_._v(" "),t("h3",{attrs:{id:"컴파일러"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#컴파일러","aria-hidden":"true"}},[_._v("#")]),_._v(" 컴파일러")]),_._v(" "),t("ol",[t("li",[_._v("자바스크립트 소스 추상문법트리AST로 파싱")]),_._v(" "),t("li",[_._v("바이트코드로 변환")]),_._v(" "),t("li",[_._v("런타임이 바이트 코드를 평가")])]),_._v(" "),t("p",[_._v("런타임 : 다른 프로그램에 바이트코드를 입력해 평가하고 결과를 얻을 수 있음")]),_._v(" "),t("h3",{attrs:{id:"타입-스크립트"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#타입-스크립트","aria-hidden":"true"}},[_._v("#")]),_._v(" 타입 스크립트")]),_._v(" "),t("ol",[t("li",[_._v("타입스크립트 소스 - 타입스크립트 AST")]),_._v(" "),t("li",[_._v("타입 검사기가 AST를 확인")]),_._v(" "),t("li",[_._v("타입스크립트 AST - 자바스크립트 소스")])]),_._v(" "),t("p",[_._v("타입검사기 : 코드의 타입 안정성을 검증하는 프로그램")]),_._v(" "),t("p",[_._v("개발자가 코드에 기입한 타입정보는 최종적으로 만들어지는 프로그램에 아무 영향을 주지 않는다!")]),_._v(" "),t("h3",{attrs:{id:"타입-시스템"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#타입-시스템","aria-hidden":"true"}},[_._v("#")]),_._v(" 타입 시스템")]),_._v(" "),t("ol",[t("li",[_._v("명시적으로 알려주는 타입 시스템")]),_._v(" "),t("li",[_._v("자동으로 추론하는 시스템")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("타입 스크립트는 두가지 모두 영향을 받아 명시할 수도, 추론하도록 할 수 도 있음")])]),_._v(" "),t("li",[t("p",[_._v("추론은 코드를 줄일 수 있는 방법")])]),_._v(" "),t("li",[t("p",[_._v("동적 타입 바인딩 : 프로그램을 실행해야만 타입을 알 수 있음")])]),_._v(" "),t("li",[t("p",[_._v("타입스크립트는 점진적으로 타입을 확인하는 언어, 모든 타입을 알아야 하는 것은 아니다.")])]),_._v(" "),t("li",[t("p",[_._v("올바르지 않아 보이는 연산은 의도적으로 명시를 해야 한다")])]),_._v(" "),t("li",[t("p",[_._v("자바스크립트는 런타임에 예외를 던지거나 암묵적인 형변환을 수행")])]),_._v(" "),t("li",[t("p",[_._v("타입스크립트는 컴파일 타임에 검출 할 수 있다는 것이 핵심!")])]),_._v(" "),t("li",[t("p",[_._v("any : 꼭 필요한 상황이 아니라면 사용하지 않는 것이 좋다.")])]),_._v(" "),t("li",[t("p",[_._v("unkown : 타입을 정제 하기 전까지 값을 쓸 수 없음")])]),_._v(" "),t("li",[t("p",[_._v("타입리터럴 : 오직 하나의 값을 나타내는 타입")])])]),_._v(" "),t("p",[t("code",[_._v("let e : true = true;")])]),_._v(" "),t("ul",[t("li",[_._v("숫자 분리자")])]),_._v(" "),t("p",[t("code",[_._v("1_000_000 // 1000000과 같음")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("bigint: number 253보다 더 큰 정수를 처리 할 수 있다. 플랫폼 지원 하는지 확인 필요")])]),_._v(" "),t("li",[t("p",[_._v("symbol : Symbol('a') 주어진 이름으로 새로운 심볼을 만듬, typeof a, const 에 할당하면 unique 심볼로 추론")])])]),_._v(" "),t("p",[t("code",[_._v("let g : unique symbol")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("{}와 new로 만든 객체를 구분 할 수 없다, 자바스크립트는 구조기반타입을 쓰기 때문, 객체가 어떤 프로퍼티를 갖고 있는지를 따짐, 이름기반 타입에서는 이름을 따진다")])]),_._v(" "),t("li",[t("p",[_._v("object 타입은 애니보다 조금 더 좁은 타입, 자바스크립트의 객체일 뿐이라고 알려준다")])]),_._v(" "),t("li",[t("p",[_._v("객체리터럴 문법, 객체는 const로 선언해도 조금 좁은 타입으로 추론 하지 않는다.")])]),_._v(" "),t("li",[t("p",[_._v("빈객체타입은 null과 undefined를 제외한 모든 타입이 할당 될 수 있기때문에 피하는 것이 좋다  let danger : {}")])]),_._v(" "),t("li",[t("p",[_._v("Object타입, 빈객체와 비슷하다, 사용하지 않는 것이 좋다,빈객체 타입과 다른점은 object의 프로토타입 내장메서드를 정의 할 수 없음, tostring")])]),_._v(" "),t("li",[t("p",[_._v("타입 별칭은 블록스코프에서 덮어 쓸 수 있다.")])])]),_._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("type Color = 'red'\nif(){\n    type Color = 'blue'\n}\n")])])]),t("h3",{attrs:{id:"튜플"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#튜플","aria-hidden":"true"}},[_._v("#")]),_._v(" 튜플")]),_._v(" "),t("ul",[t("li",[_._v("최소 한개의 string을 갖는 배열")])]),_._v(" "),t("p",[t("code",[_._v("let array : [string, ...string[]]")])]),_._v(" "),t("ul",[t("li",[_._v("배열을 안전하게 관리하고 배열 타입의 길이도 조절, 순수 배열보다 안전성을 높일 수 있다.")])]),_._v(" "),t("h3",{attrs:{id:"enum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enum","aria-hidden":"true"}},[_._v("#")]),_._v(" enum")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("enum은 역방향찾기, 키값으로 접근하지 못하도록 const enum로 막을 수 있다. Language[0]")])]),_._v(" "),t("li",[t("p",[_._v("argument는 애니로 추론하기 때문에 가변인자를 사용할때는 (...numbers : number[])")])])]),_._v(" "),t("h3",{attrs:{id:"제너레이터함수"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#제너레이터함수","aria-hidden":"true"}},[_._v("#")]),_._v(" 제너레이터함수")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("여러개의 값을 생성할 수 있다, 값을 생성하는 속도 조절")])]),_._v(" "),t("li",[t("p",[_._v("제너레이터 함수는 이터러블 반복자를 반환")])]),_._v(" "),t("li",[t("p",[_._v("영구적으로 값을 생성 할 수 있음.")])]),_._v(" "),t("li",[t("p",[_._v("yield라는 키워드로 값을 방출")])]),_._v(" "),t("li",[t("p",[_._v("next로 소비")])]),_._v(" "),t("li",[t("p",[_._v("반복자 iteator")])]),_._v(" "),t("li",[t("p",[_._v("제너레이터로 스트림을 생성하고 반복자로 소비 next")])])]),_._v(" "),t("h3",{attrs:{id:"호출-시그니쳐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#호출-시그니쳐","aria-hidden":"true"}},[_._v("#")]),_._v(" 호출 시그니쳐")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("호출 시그니쳐 : 타입 수준 코드, 타입 정보만 포함")])]),_._v(" "),t("li",[t("p",[_._v("type Greate = (name : string) ⇒ string;")])]),_._v(" "),t("li",[t("p",[_._v("구체타입 : 기대하는 타입을 정확하게 알 고 있을때")])]),_._v(" "),t("li",[t("p",[_._v("제네릭 : 플레이스홀더타입, 다형성 타입 매개변수")])]),_._v(" "),t("li",[t("p",[_._v("호출 시그니쳐에 제네릭으로 선언하고, 호출할 때 타입을 명시적으로 한정")])])]),_._v(" "),t("p",[t("code",[_._v("type Filter<T> = {(array : T[], f : (item:T)→ boolean): T[])")])]),_._v(" "),t("ul",[t("li",[t("p",[_._v("타입 주도 개발 : 타입 시그니쳐를 먼저 정하고 값을 나중에 채우는 방식")])]),_._v(" "),t("li",[t("p",[_._v("타입스크립트는 완벽한 안정성을 추구하도록 서럐되지는 않았다. 실수를 잡는것과 쉬운사용이라는 두가지 목표를 균형 있게 달성하는 것이 타입 스크립트 타입 시스템의 목표")])]),_._v(" "),t("li",[t("p",[_._v("서브타입, 수퍼타입 : B가 A의 서브타입이면 A가 필요한 곳에는 어디든 B를 안전하게 사용 할 수 있, 슈퍼타입은 반대")])]),_._v(" "),t("li",[t("p",[_._v("가변성의 네종류")]),_._v(" "),t("ul",[t("li",[_._v("불변, 정확히 T를 원함")]),_._v(" "),t("li",[_._v("공변, <:T를 원함")]),_._v(" "),t("li",[_._v("반변, >:T 를 원함")]),_._v(" "),t("li",[_._v("양변, >:T 또는 <:T를 원함")])])]),_._v(" "),t("li",[t("p",[_._v("복합 타입의 멤버는 공변, b에 할당 할 수 있는 A가 있다면 A의 각 프로퍼티 <: B의 대응 프로퍼티")])]),_._v(" "),t("li",[t("p",[_._v("함수의 매개변수는 반변")])]),_._v(" "),t("li",[t("p",[_._v("함수의 반환타입은 공변")])]),_._v(" "),t("li",[t("p",[_._v("할당성 : A타입을 다른B타입에 사용할 수 있는지 결정하는 규칙")])])]),_._v(" "),t("h3",{attrs:{id:"타입-넓히기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#타입-넓히기","aria-hidden":"true"}},[_._v("#")]),_._v(" 타입 넓히기")]),_._v(" "),t("ul",[t("li",[_._v("let, var와 같은 바꿀 수 있는 변수를 선언하면 리터럴값이 속한 기본타입으로 넓혀진다.")]),_._v(" "),t("li",[_._v("null, undefined 로 초기화 된 변수는 any타입으로 넓혀진다.")]),_._v(" "),t("li",[_._v("const를 사용하면 멤버들 까지 자동으로 readonly가 된다.")]),_._v(" "),t("li",[_._v("객체 타입은 그 멤버와의 공변이지만, 초과 프로퍼티 확인 기능때문에 존재하지 않는 프로퍼티를 가지고 있다면 에러로 처리")]),_._v(" "),t("li",[_._v("신선한 객체 리터럴 타입 : 타입스크립트가 객체 리터럴로부터 추론한 타입")]),_._v(" "),t("li",[_._v("객체 리터럴이 타입 어서션을 사용하거나 변수로 할당되면 일반 객체 타입으로 넓혀지면서 신선함이 사라짐")])]),_._v(" "),t("h3",{attrs:{id:"정제"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#정제","aria-hidden":"true"}},[_._v("#")]),_._v(" 정제")]),_._v(" "),t("ul",[t("li",[_._v("타입 스크립트는 심벌 수행의 일종인 흐름 기반 타입 추론을 수행한다.")]),_._v(" "),t("li",[_._v("흐름 기반 타입 추론은 심벌 실행 엔진을 타입 검사기에 찹재해서 타입 검사기에 피드백을 제공하고 프로그래머가 추론하는 방식에 가까운 추론 매커니즘을 구현한다.")])]),_._v(" "),t("h3",{attrs:{id:"종합성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#종합성","aria-hidden":"true"}},[_._v("#")]),_._v(" 종합성")]),_._v(" "),t("ul",[t("li",[_._v("철저 검사 라고도 불리는 종합성은 필요한 모든 상황을 제대로 처리 했는지 검사하는 기능, 케이스 분에서 모든 케이스를 반환하지 않을 때, 이프안에서만 리턴할때 에러가 남")])])])}],!1,null,null,null);v.default=a.exports}}]);