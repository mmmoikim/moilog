(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{306:function(t,s,n){t.exports=n.p+"assets/img/how-javascript-work-8.7b053698.png"},345:function(t,s,n){"use strict";n.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_2-메모리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-메모리","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 메모리")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("a",{attrs:{href:"#2-%EB%A9%94%EB%AA%A8%EB%A6%AC"}},[t._v("2. 메모리")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#%EC%A0%95%EC%A0%81-%ED%95%A0%EB%8B%B9"}},[t._v("정적 할당")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%EB%8F%99%EC%A0%81-%ED%95%A0%EB%8B%B9"}},[t._v("동적 할당")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%EA%B0%80%EB%B9%84%EC%A7%80-%EC%BD%9C%EB%A0%89%ED%84%B0"}},[t._v("가비지 콜렉터")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98"}},[t._v("메모리 누수")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#reference"}},[t._v("reference")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"정적-할당"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#정적-할당","aria-hidden":"true"}},[this._v("#")]),this._v(" 정적 할당")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("코드를 컴파일하며 컴파일러는 필요한 메모리를 계산해 "),s("code",[this._v("stack space")]),this._v(" 라는 곳에서 프로그램을 할당 한다.")]),this._v(" "),s("li",[this._v("함수에서 함수를 부를 때 함수 각 각 불려지는 시점에 자신의 로컬 변수를 포함하는 스택청크를 가지게 되고"),s("br"),this._v("\n실행중인 부분을 프로그램 카운터가 기억한다. 그리고 함수가 끝나면 이 메모리 블럭은 해제된다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"동적-할당"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#동적-할당","aria-hidden":"true"}},[this._v("#")]),this._v(" 동적 할당")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("컴파일러가 정확한 메모리 공간을 계산하지 못한다면 힙영역에 적당한 공간을 요청한다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:n(306),alt:"정적, 동적할당 차이"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("javscript는 숫자, 문자, 객체, 배열, 함수에 대해서 스스로 할당 한다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"가비지-콜렉터"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#가비지-콜렉터","aria-hidden":"true"}},[this._v("#")]),this._v(" 가비지 콜렉터")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"메모리-누수"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#메모리-누수","aria-hidden":"true"}},[this._v("#")]),this._v(" 메모리 누수")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("어떤 메모리가 사용 중 인지 아닌지는 non-determinism, 결정할 수 없다.")]),this._v(" "),s("li",[this._v("가비지 콜렉터는 닿을 수 없는 상태여도 메모리에 할당이 일어나지 않으면 수집하지 않는다.")]),this._v(" "),s("li",[this._v("메모리 누수는 프로그램에서 사용했다가 더 이상 필요하지 않은 상태가 되었을 때 반환되지 않은 메모리를 말한다.")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("전역변수\n"),n("ul",[n("li",[t._v("선언하지 않은 변수를 사용했을때 혹은 this를 사용했을때 전역변수(window)에 값이 할당된다.")]),t._v(" "),n("li",[t._v("가비지컬렉터가 정리 할 수 없는 전역변수를 쓰지 않게 주의 해야하고 전역변수를 다 쓰고 난 후에 null로 비워야한다.")])])]),t._v(" "),n("li",[t._v("타이머, 콜백함수\n"),n("ul",[n("li",[t._v("옵져버가 계속 사용되고 있으면 가비지 컬렉터가 가져가지 않기 때문에 사용 후에는 제거해야한다.")]),t._v(" "),n("li",[n("code",[t._v("setInterval")]),t._v(", "),n("code",[t._v("addEventListener")])]),t._v(" "),n("li",[t._v("최신 브라우져 가비지컬렉터는 순환참조가 되고 있거나 살아있는 리스너가 있을때에도 가져간다.")])])]),t._v(" "),n("li",[t._v("클로져")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" theThing "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("replaceThing")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" originalThing "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" theThing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("unused")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("originalThing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        theThing "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            longStr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("someMethod")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("replaceThing"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("클로져는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 외부함수가 소멸되지 않는 특성을 의미한다.")]),t._v(" "),n("li",[n("strong",[t._v("동일한 외부 스코프에 있는 내부함수들은 스코프가 공유된다")]),t._v(".")]),t._v(" "),n("li",[n("code",[t._v("someMethod")]),t._v(" 최상위 스코프에 "),n("code",[t._v("theThing")]),t._v(" 참조하고 있기 때문에 "),n("code",[t._v("replaceThing")]),t._v("이 끝나도 활성 상태")]),t._v(" "),n("li",[n("code",[t._v("unused")]),t._v(" 와 "),n("code",[t._v("someMethod")]),t._v("는 클로져 스코프 공유")]),t._v(" "),n("li",[n("code",[t._v("unused")]),t._v("는 "),n("code",[t._v("originalThing")]),t._v("을 참조")]),t._v(" "),n("li",[n("code",[t._v("unused")]),t._v("는 쓰이지 않지만 "),n("code",[t._v("someMethod")]),t._v("와 스코프를 공유하면서 계속 활성상태로 남는다.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("Out of DOM references\n"),s("ul",[s("li",[this._v("돔 노드에 대한 참조가 있는 변수는 돔이 삭제될때 같이 제거해 줘야한다.")]),this._v(" "),s("li",[this._v("돔 트리에 리프노드나 자식노드를 참조할 때 만약 부모 돔을 제거 하고 참조가 남아있다면 부모돔트리 전체가 메모리에 남아있게 된다.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[this._v("#")]),this._v(" reference")])}],e=n(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("ul",[n("li",[t._v("메모리 할당을 추적하고 할당된 메모리가 더이상 필요 없어졌을때 해제하는 작업을 한다.")]),t._v(" "),n("li",[t._v("Reference-counting 알고리즘 : 아무도 참조하지 않는 오브젝트가 있다면 가비지 콜렉션을 수행한다. 인터넷 익스플로러 6, 7 에서 쓰임")]),t._v(" "),n("li",[t._v("Reference-counting 알고리즘은 순환참조가 되면 (서로 값을 참조하고 있다면) 메모리 해제가 안되는 한계점이 있다.")]),t._v(" "),n("li",[t._v("Mark-and-sweep 알고리즘 : 주기적으로 가비지 콜렉터는 오브젝트 집합의 roots(window객체)에서 시작해 닿을 수 없는 오브젝트에 대해 수행한다. 순환참조의 한계점을 극복할 수 있다.")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management",target:"_blank",rel:"noopener noreferrer"}},[t._v("mozilla"),n("OutboundLink")],1)])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec",target:"_blank",rel:"noopener noreferrer"}},[t._v("How JavaScript works: memory management + how to handle 4 common memory leaks"),n("OutboundLink")],1)])])])},a,!1,null,null,null);s.default=r.exports}}]);