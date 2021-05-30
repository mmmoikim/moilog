---
date: 2021-02-27
---

# 객체지향 자바스크립트

- 함수형, 객체지향, 프로시져는 중요하지 않다. 값을 기본으로 하냐 아니냐가 중요함

- value context : 메모리 주소, 변수가 어디에 저장되는지 상관 없이 값이 같으면 같다라고 취급
- identifier context : 같은 메모리 주소에 있으면 같다라고 취급, 메모리 주소가 다르면 값이 같아도 다르다라고 취급

- 객체지향을 사용한다는건 value context를 쓰면 안됨
- 함수형에서는 indentifier로 하면 안됨

- 하나의 컨텍스트만 써야 한다!! 두개의 컨텍스트가 섞여있으면 혼란해짐

```jsx
const a = {a: 3, b: 5};
const b = {a: 3, b: 5};
console.log(a === b); // false, identifier context
console.log(JSON.stringfity(a) === JSON.stringfity(b)) // true,  값 컨텍스트 (객체지향 깨먹음)
```

- 메소드 인자로 생 숫자로 받는게 아니라 new Count(3); 으로 객체로 만들어서 받아야 됨

### **value 대 identifier**

value

1. 끝없는 복사본 : 값을 사용하면 넘어 다니면서 끝없는 복사본이 만들어 짐
2. 상태 변화에 안전 : 안전하긴 안전하지만 불변성으로 새로운 값이 만들어 져서 안전해 보일뿐 관리하려면 어려움
3. 연산을 기반으로 로직을 전개 : 함수형 프로그래밍 , 연산을 통해 새로운 값을 토해내게 하는것, 수학적 프로그래밍은 복잡한 로직을 구현해 내기 어렵다. 어울리는 분야가 있음

identifier

1. 하나의 원본 : 값이 상태가 계속 변함, 상태가 일관성이 없다.
2. 상태 변화를 내부에서 책임짐
3. 메세지를 기반으로 로직을 전개 : 그 객체에서 다룰껀 다루고 나머진 메세지로 책임을 위임함.

!! 객체지향은 값을 사용하지 않는다

### polymorphism 다형성

```jsx
const Worker = class {
	run(){
		console.log("work")
	}
	print(){
		this.run();
	}
}

const Hardworker = class extends Worker{
	run(){
		console.log("hardwork")
	}
}

const worker = new HardWorker();
console.log(worker instanceof Worker); // true
worker.print(); // hardwork
// 부모 worker에 print를 부르고 worker에 this.run을 부름
// this는 생성된 객체이기 때문에 this는 하드워커임!
```

- 대체가능성 : 자식은 부모를 대체 할 수 있다. 확장된 클래스는 대상클래스를 대체 할 수 있다.
- 내적이관성 : 어떠한 경우에도 태어났을 때의 원본 클래스를 유지하려는 속성

### substitution & internal identity

- 확장된 객체는 원본으로 대체 가능
- 생성 시점의 타입이 내부에 일관성 있게 참조됨

- 어떤 객체지향언어든 이 규칙을 따름! 하지만 언어마다 구현 방법이 다름

### polymorphism of prototype

![objective-javascript](~@assets/img/javascript/objective-javascript.png)


- hardwork 라는 함수나, 클래스를 만들면 prototype이 만들어 짐
- worker라는 객체를 만들면 __proto __  가 만들어짐, 이건 hardwork에 prototype이랑 똑같은 애
- hardwork도 객체이기 때문에 __proto __ 도 있고 constructor라는 속성이 있다. constructor는 자기 자신 클래스를 가르킴.
- hardwork __proto __ 는 worker의 prototype을 가르킴
- 프로토타입 체인은 가장 가까이에 있는 자기 자신꺼 부터 먼저 찾고 없으면 체이닝 된 프로토 타고가서 부모에서찾는다. 이게 내적이관성을 가능케함
- A(대상객체) instanceof B : 대상객체는 __proto __ 가 널이 될때까지 타고가서 비교함