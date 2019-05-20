---
date : 2019-05-10 13:52:00
---

# (HJW) 2. 메모리

- [(HJW) 2. 메모리](#hjw-2-%EB%A9%94%EB%AA%A8%EB%A6%AC)
  - [정적 할당](#%EC%A0%95%EC%A0%81-%ED%95%A0%EB%8B%B9)
  - [동적 할당](#%EB%8F%99%EC%A0%81-%ED%95%A0%EB%8B%B9)
  - [가비지 콜렉터](#%EA%B0%80%EB%B9%84%EC%A7%80-%EC%BD%9C%EB%A0%89%ED%84%B0)
  - [메모리 누수](#%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98)
  - [reference](#reference)

## 정적 할당

- 코드를 컴파일하며 컴파일러는 필요한 메모리를 계산해 `stack space` 라는 곳에서 프로그램을 할당 한다.
- 함수에서 함수를 부를 때 함수 각 각 불려지는 시점에 자신의 로컬 변수를 포함하는 스택청크를 가지게 되고  
 실행중인 부분을 프로그램 카운터가 기억한다. 그리고 함수가 끝나면 이 메모리 블럭은 해제된다.

## 동적 할당

- 컴파일러가 정확한 메모리 공간을 계산하지 못한다면 힙영역에 적당한 공간을 요청한다.

![정적, 동적할당 차이](~@assets/img/javascript/how-javascript-work-8.png)

- javscript는 숫자, 문자, 객체, 배열, 함수에 대해서 스스로 할당 한다.

## 가비지 콜렉터

- 메모리 할당을 추적하고 할당된 메모리가 더이상 필요 없어졌을때 해제하는 작업을 한다.
- Reference-counting 알고리즘 : 아무도 참조하지 않는 오브젝트가 있다면 가비지 콜렉션을 수행한다. 인터넷 익스플로러 6, 7 에서 쓰임
- Reference-counting 알고리즘은 순환참조가 되면 (서로 값을 참조하고 있다면) 메모리 해제가 안되는 한계점이 있다.
- Mark-and-sweep 알고리즘 : 주기적으로 가비지 콜렉터는 오브젝트 집합의 roots(window객체)에서 시작해 닿을 수 없는 오브젝트에 대해 수행한다. 순환참조의 한계점을 극복할 수 있다.
- [mozilla](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)

## 메모리 누수

- 어떤 메모리가 사용 중 인지 아닌지는 non-determinism, 결정할 수 없다.
- 가비지 콜렉터는 닿을 수 없는 상태여도 메모리에 할당이 일어나지 않으면 수집하지 않는다.
- 메모리 누수는 프로그램에서 사용했다가 더 이상 필요하지 않은 상태가 되었을 때 반환되지 않은 메모리를 말한다.

1. 전역변수
   - 선언하지 않은 변수를 사용했을때 혹은 this를 사용했을때 전역변수(window)에 값이 할당된다.
   - 가비지컬렉터가 정리 할 수 없는 전역변수를 쓰지 않게 주의 해야하고 전역변수를 다 쓰고 난 후에 null로 비워야한다.
2. 타이머, 콜백함수
    - 옵져버가 계속 사용되고 있으면 가비지 컬렉터가 가져가지 않기 때문에 사용 후에는 제거해야한다.
    - `setInterval`, `addEventListener`
    - 최신 브라우져 가비지컬렉터는 순환참조가 되고 있거나 살아있는 리스너가 있을때에도 가져간다.
3. 클로져

```js
    var theThing = null;
    var replaceThing = function () {

        var originalThing = theThing;
        var unused = function () {
            if (originalThing)
            console.log("hi");
        };

        theThing = {
            longStr: new Array(1000000).join('*'),
            someMethod: function () {
            console.log("message");
            }
        };
  
    };
    setInterval(replaceThing, 1000);

```

- 클로져는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 외부함수가 소멸되지 않는 특성을 의미한다.
- **동일한 외부 스코프에 있는 내부함수들은 스코프가 공유된다**.
- `someMethod` 최상위 스코프에 `theThing` 참조하고 있기 때문에 `replaceThing`이 끝나도 활성 상태
- `unused` 와 `someMethod`는 클로져 스코프 공유
- `unused`는 `originalThing`을 참조
- `unused`는 쓰이지 않지만 `someMethod`와 스코프를 공유하면서 계속 활성상태로 남는다.
4. Out of DOM references
   - 돔 노드에 대한 참조가 있는 변수는 돔이 삭제될때 같이 제거해 줘야한다.
   - 돔 트리에 리프노드나 자식노드를 참조할 때 만약 부모 돔을 제거 하고 참조가 남아있다면 부모돔트리 전체가 메모리에 남아있게 된다.

## reference

- [How JavaScript works: memory management + how to handle 4 common memory leaks](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)