---
date: 2021-03-08
---


# 함수형 자바스크립트

- 좋은 프로그래밍의 척도 : 사용성, 성능, 확장성, 기획변경에 대한 대응력
- 부수효과를 멀리, 조합성 강조
- 오류를 줄이기 위해, 조합성, 모듈화 수준을 높이기 위해, 생산성, 안전성 높이기

함수로 함수를 리턴하는 기법
함수는 값을 리턴 할 수 있고 함수는 값이 될 수 있다.

```jsx
function addMaker(a){
	return function(b) {
		return a + b;
	}
}

var add5 = addMarker(5);
add5(3)
```

- a는 불변한 상수로 쓰임
- 값으로서의 함수, 클로저를 이용한 함수형 자바스크립트 스타일

필터 함수

```jsx
newList = filer(list, 익명함수)
```

- 필터 함수는 익명함수가 어떤 일을 하지 모름, 실행 여부는 익명함수에게 위임
- 이전값의 상태를 변경 하지 않고 새로운 값을 만드는식으로 값을 다루는 것이 함수형 프로그래밍의 콘셉
- 필터 함수는 항상 동일하게 동작, 외/내부의 상태 변화에 의존성이 없음
- 결과 리스트는 필터 함수를 통해 최초로 만들어 졌고 외부의 상태와 무관하며 외부에서 접근을 할 수 없음
- 결과를 전달 하고 나면 필터와의 연관성도 없어짐

- 절차지향 프로그래밍에서는 탑다운으로 변수 값을 변경하며 진행
- 객체지향 프로그래밍에서는 객체를 만들고 객체간의 협업을 통해 로직을 만듬, 이벤트 등으로 서로 연결 한 후 상태의 변화를 감지해 자신의 값을 바꾸거나 상대의 메소드를 실행해서 상태를 변경한다.
- 함수형 프로그래밍에서는 항상 동일하게 동작 하는 함수를 만들고 보조 함수를 조합하는 식으로 로직을 완성
- 객체지향 프로그래밍에서도 객체를 복사해서 부수효과를 줄일 수 있다.
- 함수형과 객체지향은 대척관계가 아닌 결국 함께 동작 해야함, 함수형에서도 객체를 다뤄야 하며 다만 기능을 확장 할 때 객체를 확장하느냐, 함수로 확장하느냐의 차이, 추상화의 단위가 다를 뿐

함수 중첩

```jsx
map(filter(users, (user)=> user.age >= 30),(user)=>user.name);
```

- 함수의 리턴값을 바로 다른 함수의 인자로 사용하면 변수 할당을 줄일 수 있다.

함수를 값으로 다루기

```jsx
function bvalue(key) {
	return function(obj) {
		return obj[key]
	}
}

bvalues('a')([{a: 'hi', b: 'hello'}])

function bvalues(key) {
	var value = bvalue(key);
	return function(list){
		return map((list), value)
	}
}
```

find

```jsx
funcion findBy(key, list, val){
	for(var i = 0, len = list.length; i< len; i++) {
		if(list[i][key] === val) return list[i]
	}
}

function find(list, predicate) {
	for(var i = 0, len = list.length; i< len; i++) {
		if(predicate(list[i])) return list[i]
	}
}

```

- 인자를 값이 아닌 함수로 변경하며 객체타입의 리스트도 받을 수 있게됨, 다형성
- 보조 함수에 위임하며 find 함수는 데이터의 특성에서 분리

고차함수

- 함수를 인자로 받거나 리턴하는 함수
- 익명함수에 인자를 확장해 활용도 높이기

```jsx
_.findIndex = function(list, predicate) {
for(var i = 0, len = list.length; i< len; i++) {
		if(predicate(list[i]), i, list) return i;
	}
return -1;
}
```

_.identity

```jsx
_.identity = function(v) {
	return v;
}

_.filter([true, 0, 10, null, undefined], _.identity)
```

- 아무런 기능이 없어보이지만, filter랑 같이 쓰면 유용해짐

```jsx
_.some = function(list){
return !!_.find(list, _.identity);
}

_.every = function(list){
// index 끝까지 돌음
return _.filter(list, _.identity).length === list.length;
}

// 리팩토링
function not(v) {
	return !v;
}

function beq(a) {
	return function(b) {
		return a === b;
	}
}

_.every = function(list) {
	return beq(-1)(findIndex(list, not))
} 

// 기능 분리
function positive(list){
	return _.find(list, _.identity)
}

function negativeIndex(list) {
	return _.findIndex(list, not);
}

_.some = function(list) {
	return not(not(positive(list)));
}

_.every = function(list){
	return beq(-1)(negativeIndex(list));
}
```

함수합성

- 함수를 쪼갤수록 함수 합성이 쉬워 진다

```jsx
_.compose = function() { 
var args = arguments;
var start = args.length - 1;
	return function() {
		var i = start;
		var result = args[start].apply(this, arguments);
		while (i--) result = args[i].call(this, result);
	}
}

_.some = _.compose(not, not, positive);
_.every = _.compose(deq(-1), negativeIndex)
```

- 코드 간결, 변수 선언이 적어진다.  새로운 인자와 변수가 등장하지 않고 함수의 내부가 보이지 않아서 새로운 상황이 생기지 않는다.

일급함수

- 함수는 일급객체이자 일급 함수이다. 자바스크립트에서 객체는 일급 객체이다.

    일급은 값을 다룰 수 있다는 의미로 아래 조건을 만족 해야 됨.

    - 변수에 담을 수 있다.
    - 함수나 메서드의 인자로 넘길 수 있다.
    - 함수나 메서드에서 리턴할 수 있다.
- 자바스크립트에서 모든 값은 일급이다.

- 일급 함수란
    - 아무때나(런타임에서도) 선언이 가능하다.
    - 익명으로 선언할 수 있다.
    - 익명으로 선언한 함수도 함수나 메서드의 인자로 넘길 수 있다.
- 함수는 언제든지 선언할 수 있고 인자로 사용 할 수 있다.
- 인자로 받은 함수를 실행할 수 있고, 함수를 리턴할 수 있다.

클로저

- 클로저는 자신이 생성될 때의 환경을 기억하는 함수이다.> 클로저는 자신이 생성 될 때의 스코프에서 알 수 있었던 변수를 기억하는 함수이다.
- 모든 함수는 상위 스코프를 가지며 자신이 정의되는 실행 컨텍스트 안에 있다. 모든 함수는 클로저인가??
- 클로저가 되기 위한 조건 : 클로저로 만들 함수 내부에서 사용하는 변수 중에 내부에 선언 되지 않은 변수가 있어야 한다. 그 변수는 클로저를 생성하는 스코프에 선언되었거나 알 수 있어야 한다.
- 상위 스코프에서 알 수 있는 변수를 자신이 사용하고 있지 않다면 기억 할 필요가 없다.
- 글로벌 스코프를 제외 한 외부 스코프에 있던 변수 중 클로저 혹은 다른 누군가가 참조 하고 있지 않다면 실행 컨텍스트가 끝나면 카비지 컬렉션 대상이 된다.
- 클로저 생성에 대해서는 v8 > 파이어폭스 > 사파리 순으로 최적화 가 잘 되어 있다. 2016년 기준
- v8과 파이어폭스는 외부 스코프의 변수가 하나도 없는 경우 클로저가 되지 않는다. 자신이 사용한 변수만 기억하며 외부 스코프의 나머지 변수는 전혀 기억하지 않는다. 클로저를 외부로 리턴하여 지속적으로 참조해야만 메모리에 남는다
- 글로벌 스코프에 선언된 변수는 그 변수가 참조 됨에 관계 없이 유지가 되기 때문에 글로벌 스코프 변수를 참조하는 함수는 클로저가 아님
- node.js 사용되는 js파일의 스코프는 글로벌 스코프가 아니다.

```jsx
function f4() {
	var a = 10;
	var b = 20;
	function f5() {
		return a + b;
	}
	return f5();
}

f4();
```

- f4를 실행하면 f5는 클로저가  되지만 f5를 참조하는 곳이 없기 때문에 f4를 실행할 때만 생겼다가 사라진다.

```jsx
function f6() {
	var a = 10;
		function f7(b) {
			return a + b;
		}
	return f7();
}
var f8 = f6();
f8(20);
```

- f7이 f8에 담겼기 때문에 클로저가 되었다. f6의 실행이 끝나도 a는 사라지지않음.
- 메모리 누수를 메모리가 해제 되지 않았을 떄 발생하지만 위 상황은 개발자의 의도이기 때문에 메모리 누수라고 정의할 수는 없음, a는 한번 생기고 계속해서 생겨나지 않는다
- 메모리 누수랑 개발자가 의도 하지 않았는데 메모리가 해제되지 않는 상황임
- 반복적으로 메모리가 할당되어 늘어나고 해제가 되지 않는다면 문제이지만 위 경우는 그렇지 않다.
- 필요한 상황에는 잘 선택해서 사용 해도 된다.
- 스코프가 실행 되고 있는 컨텍스트 전체, 그 스코프의 모든 라인 어느 곳에 선언 된 변수든지 참조가능
- 함수가 실행 될 때 마다 스코프 환경은 새로 만들어진다.
- 클로저는 자신ㄴ이 생성되는 스코프의 실행 컨텍스트에서 만들어 졌거나 알수 있었던 변수중 언젠가 자신이 실행될 떄 사용할 변수들만 기억하는 함수이다. 클로저가 기억하는 변수값은 언제든지 남이나 자신에 의해 변경 될 수 있다.

클로저의 실용 사례

- 이전상황을 나중에 일어날 상황과 이어 나갈 때,
- 함수로 함수를 만들거나 부분 적용 할 때

- 이벤트 리스너로 함수를 넘기기 전에 이전에 알 수 있던 상황을 변수에 담아 클로저로 기억해두면 이벤트가 발생 했을때 이전 상황을 이어 갈 수 있다.

```jsx
_map(users, function(user){
	var button = $('<button>').text(user.name);
	button.click(function(){
		if(confirm(user.name + '님을 팔로잉 하시겠습니까')) follow(user)
	});
	return button;
})

function follow(user){
	$.post('/follow', {userId : user.id}, function(){
		alert(user.name)
	})
}
```

- 새로운 실행 컨텍스트를 만들거 주기 때문
- 서로 다른 실행 컨텍스트에 영향을 줄 수 있을 만한 상태 공유나 상태 변화를 만들지 않는것이 목표.

고차함수

- 함수를 다루는 함수
1. 함수를 인자로 받아 대신 실행 하는 함수
2. 함수를 리턴하는 함수
3. 함수를 인자로 받아서 또 다른 함수를 이턴하는 함수

응용형 프로그래밍 : 함수를 인자로 받아 내부에서 실행하면서 받아 둔 함수에 자신이 알고 있는 값을 적용

함수형 프로그래밍은 응용형 함수와 고차함수들을 만들고 클로저, 인자합성 등의 함수적 기능을 활용해 부분적용, 함수 합성을 다루는 함수들로 만들어간다.

콜백함수라 잘못 불리는 보조 함수

- 콜백함수를 받아 자신이 해야 할 일을 모두 끝낸 후 결과를 돌려주는 함수도 고차함수다.
- 콜백함수는 컨텍스트를 다시 돌려주는 단순한 협업로직, 종료가 되었을때 한번만 실행이 됨
- iteratee, predicate, listener는 여러번 실행이 되며 각자 다른 역할을 함
- 모든 익명함수를 콜백이라 하지 말자

- 약속 된 개수의 인자를 미리 받아둔 다음 클로저로 만들어 진 함수가 추가적인 인자를 받아 로직을 완성하는 패턴, 기억하는 인자 혹은 변수가 있는 클로저를 리텅, 부분적용

```jsx
function callWith(val1){
	return function(val2, func){
		return func(val1, val2)
	}
}

val callWith10 = callWith(10);
callWith10(20, add)
```

- 

```jsx
function add(a,b){
return a + b;
}

var add10 = add.bind(null, 10);
add10(20);
```

- bind 함수는 인자를 왼쪽에서 부터 순서대로만 적용 할 수 있음, 바인드를 한번 실핼하면 this는 바꿀 수 가 없다, 인자가 3개인데 두번째것만 적용해 두고 싶으면??
- _.curry 는 함수가 필요로 하는 인자의 개수가 모두 채워질 때 까지는 실행이 되지 않다가 인자이 수가 모두 채워지는 시점에 실행된다. 인자의 수나 형이 미리 정해져 있어야됨.

존레식의 partial

```jsx
Function.prototype.partial = function(){
	var fn = this, args = Array.prototype.slice.call(arguments);
	return function(){
		var arg = 0; //arguments 인덱스
		for(var i = 0; i < args.length && arg < argments.length; i++){
			if(arg[i] === undefined) args[i] = arguments[arg++];
		return fn.apply(this, args);
	}
}

function abc(a,b,c){
console.log(a,b,c);
}

var ac = abc.partial(undefined, 'b', undefined);
ac('a','c');
```

- undefined로 인자를 사용하고 싶으면?
- 나중에 실행할 함수의 인자만큼 미리 채워 놓아야됨
- 한번 실행 한 후 재사용 한다면

```jsx
function add(){
	var result = 0;
	for(var i = 0; i<arguments.length; i++)
		result += arguments[i]
	return result
}

var add2 = add.partial(undefined, 2);
add2(1,2,3,4); // 3

var add3 = add.partial(undefined, undefined, 3, undefined, undefined);

add3(1,2,4,5);// 15
add3(50,50,50,50 // 15)
```

원본 덮이지 않게 살려 두게 리펙토링

```jsx
Function.prototype.partial = function(){
	var fn = this, _args = arguments;// 원본
	return function(){
	var args = Array.prototype.slice.call(arguments); // 함수 실행 될때 마다 원본 담아놓음
		var arg = 0; //arguments 인덱스
		for(var i = 0; i < args.length && arg < argments.length; i++){
			if(arg[i] === undefined) args[i] = arguments[arg++];
		return fn.apply(this, args);
	}
}
```

언더스코어 partial

```jsx
var ac= _.partial(abc, _, 'b');
ac('a','c');

var bj = {
    name : 'BJ',
    greet: _.partial(function(a,b){
        return a + this.name + b
    }), '저는' ,'입니다'
}

bj.greet(); // 저는 BJ입니다.
bj.greet.call({name : 'HA'}) // 저는 HA입니다.
var greetPj = bj.greet.bind({name : 'PJ'});
greetPj(); // 저는 PJ입니다.
bj.greet(); // 저는 BJ입니다.

```

- 자리 확보 안함, 뒤에 들어오는 인자들 다 넘김
- this를 적용해 두지 않아서 메소드 처럼 사용 가능