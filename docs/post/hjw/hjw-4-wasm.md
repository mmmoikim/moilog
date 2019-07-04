---
date : 2019-05-15 13:52:00
---

# 4. 웹어셈블리

- [4. 웹어셈블리](#4-%EC%9B%B9%EC%96%B4%EC%85%88%EB%B8%94%EB%A6%AC)
  - [webAssembly](#webassembly)
  - [javascript vs webAssembly](#javascript-vs-webassembly)
  - [wasm 메모리](#wasm-%EB%A9%94%EB%AA%A8%EB%A6%AC)
  - [wasm 가비지 콜렉트](#wasm-%EA%B0%80%EB%B9%84%EC%A7%80-%EC%BD%9C%EB%A0%89%ED%8A%B8)
  - [references](#references)

## webAssembly

- 웹 어셈블리는 바이트 코드로 자바스크립트가 아닌 다른언어로 작성, 컴파일해서 웹 앱을 빠르게 로드하고 실행할 수 있다.
- 이미 컴파일 된 바이너리 코드이기 때문에 인터넷을 통해 전송하기만 하면 돼서 자바스크립트에 비해 로딩속도가 빠르다.
- 자바스크립트가 아닌 네이티브 성능을 필요로 하는 분야에서(D 게임이나, 가상/증강현실, 영상처리, 이미지/비디오 편집) 활용 할 수 있다.
- wasm는 샌드박스 환경에서 컴파일되고 보안취약점을 없애거나 보안에 단단해 지기 위해 많은 제약 안에서 실행 되었음에도 불구하고 네이티브 코드에 비해 20% 정도만 느려진다.
- wasm 은 브라우저에 종속 되지 않고(browser-agnostic) 주요 엔진들에서 모두 지원하며 비슷한 실행 속도를 가진다.

## javascript vs webAssembly

![v8](~@assets/img/javascript/how-javascript-work-12.png)

- 자바스크립트는 모든 문자열를 토큰으로 변환해서 Abstract Syntax Tree (AST)를 생성하고 기계어로 변환한다.
![v8 터보팬](~@assets/img/javascript/how-javascript-work-13.png)
- 그 후 터보팬이라는 최적화 컴파일러가 앱이 실행되고 있을 때 병목현상이나 최적화 할 스팟이 있는지 모니터링 한다.
- CPU를 많이 사용하고 있던 function이 있으면 백앤드로 밀어 넣고 더 빠른 코드로 JIT 컴파일(just in time, 프로그램 실행 시점에 바로 기계어로 컴파일)하여 최적화 한다.
- 하지만 코드를 분석하고 최적화 할 것을 정하는 프로세스 또한 CPU를 잡아먹는다. 이 때문에 모바일에서 배터리 소모가 더 일어 날 수 있다.
![wasm](~@assets/img/javascript/how-javascript-work-14.png)
- wasm는 이미 컴파일 될 때 최적화가 되고 파싱도 필요 없다.

## wasm 메모리

- wasm 바이트데이터는 선형 배열인, 사이즈 조절이 가능한 어레이버퍼(ArrayBuffer)에 저장된다. = 메모리 인스턴스
- wasm는 주소와 포인터를 사용하는 것이 아닌 오프셋과 인덱스로 접근을 한다.
- 함수를 가르키는 레퍼런스는 테이블에 저장된다.
- javascript 메모리 객체를 만들어 메모리에 접근해 import/export할 수 있다.

## wasm 가비지 콜렉트

- 메모리 객체는 javascript 객체이기 때문에 가비지 콜렉터가 수집을 할 수 있고 인스턴스가 범위를 벗어나면 메모리 전체 배열을 해제 할 수 있다.
- C++, rust, c와 같이 수동으로 메모리는 관리 하거나 포인터를 사용하해 메모리 추적이 복잡한 언어에 웹 어셈블리가 적합할 수 있다.

## references

- [How JavaScript works: A comparison with WebAssembly + why in certain cases it’s better to use it over JavaScript](https://blog.sessionstack.com/how-javascript-works-a-comparison-with-webassembly-why-in-certain-cases-its-better-to-use-it-d80945172d79)