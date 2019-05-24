---
date : 2019-05-17 13:52:00
---

# (HJW) 5. webworker

- [(HJW) 5. webworker](#hjw-5-webworker)
  - [비동기 함수의 한계](#%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%95%A8%EC%88%98%EC%9D%98-%ED%95%9C%EA%B3%84)
  - [web worker](#web-worker)
  - [web worker type](#web-worker-type)
  - [Dedicated web worker 구현](#dedicated-web-worker-%EA%B5%AC%ED%98%84)
    - [`postMessage()`를 이용한 방법](#postmessage%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B0%A9%EB%B2%95)
    - [`BroadcastChannel()`를 이용한 방법](#broadcastchannel%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%B0%A9%EB%B2%95)
  - [메세지 전송 방법](#%EB%A9%94%EC%84%B8%EC%A7%80-%EC%A0%84%EC%86%A1-%EB%B0%A9%EB%B2%95)
  - [웹 워커 기능](#%EC%9B%B9-%EC%9B%8C%EC%BB%A4-%EA%B8%B0%EB%8A%A5)
  - [웹 워커의 한계](#%EC%9B%B9-%EC%9B%8C%EC%BB%A4%EC%9D%98-%ED%95%9C%EA%B3%84)
  - [에러 핸들링](#%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81)
  - [웹 워커의 활용 사례](#%EC%9B%B9-%EC%9B%8C%EC%BB%A4%EC%9D%98-%ED%99%9C%EC%9A%A9-%EC%82%AC%EB%A1%80)
  - [reference](#reference)

## 비동기 함수의 한계

- 만약 비동기 콜백 안에 오래 걸리는 작업이 있다면(엄청 큰 for loop 같이) 이벤트 루프를 해제하고 UI 랜더링을 하게 만드는 방법이 없을까?
- 몇몇 경우에서는 작업을 setTimeout으로 분리해 이벤트 루프 넣어 중간 중간 렌더링 할 시간을 벌어 주도록 트릭을 쓸 수 있었다.

## web worker

- 웹 워커 또한 HTML5의 기능이다.
  - SSE
  - Geolocation
  - Application cache
  - Local Storage
  - Drag and Drop
  - Web Workers
- 웹 워커는 이벤트 루프 막힘 없이 코드를 실행 할 수 있도록 브라우저 안에 있는 스레드이다.
- 시간이 오래 걸리고 계산이 많이 요구되는 작업을 할 수 있게 해준다.
- 웹 워커는 자바스크립트의 기능이 아닌 브라우저의 기능이다.
- 노드js에서는 웹워커가 구현되지 않았고 `cluster, child_process`라는 개념이 있다.
- 웹 워커의 타입은 Dedicated Workers, Shared Workers, Service workers가 있다.

## web worker type

- Dedicated Workers : 메인 프로세스에 의해서 인스턴스화 되고 커뮤니케이션 할 수 있다.
- Shared Workers : 서로 다른 윈도우, 아이프레임, 다른 워커간에 접근 할 수 있고 포트 객체를 통해 커뮤니케이션 할 수 있다.
- Service Workers : 원하는 페이지에 이벤트를 등록해서 프록시 처럼 웹페이지나 사이트를 컨트롤 할 수 있다. (Push Notifications, Cache, dominate Network Traffic)

## Dedicated web worker 구현

- 웹 워커는 .js 파일로 http request에 포함 되어 있는데 web worker api로 리퀘스트를 숨길 수 있다.
- 브라우저의 독립적인 스레드로 분리된 파일에서 실행되야 한다.

``` js
var worker = new Worker('task.js');
```

- task.js에 접근하면 브라우저는 새 스레드를 생성하고 파일을 비동기로 다운로드 한다.
- 다운로드가 완료 되면 실행되면서 워커가 시작된다.

``` js
worker.postMessage();
```

- 웹워커와 페이지가 통신하기 위해서 `postMessage()`메소드나 `BroadcastChannel()`이 필요하다.
- 최신 브라우저는 `JSON`을 파라미터로 써도 되지만 오래된 브라우저는 `string`만 지원한다.

### `postMessage()`를 이용한 방법

```html
<button onclick="startComputation()">Start computation</button>

<script>
  function startComputation() {
    worker.postMessage({'cmd': 'average', 'data': [1, 2, 3, 4]});
  }
  var worker = new Worker('doWork.js');
  worker.addEventListener('message', function(e) {
    console.log(e.data);
  }, false);
  
</script>
```

- doWork.js

```js
self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'average':
      var result = calculateAverage(data); // Some function that calculates the average from the numeric array.
      self.postMessage(result);
      break;
    default:
      self.postMessage('Unknown command');
  }
}, false);
```

- `self`, `this`는 글로벌 스코프를 참조한다.
- 워커를 멈추기 위해서는 `worker.terminate()`, `self.close()`

### `BroadcastChannel()`를 이용한 방법

- Broadcast Channel는 더 일반적인 API이다.
- 모든 탭, 아이프레임, 같은 브라우저에서 커뮤니케이션이 가능하다.

``` js
var bc = new BroadcastChannel('test_channel');

// Example of sending of a simple message
bc.postMessage('This is a test message.');

// Example of a simple event handler that only
// logs the message to the console
bc.onmessage = function (e) { 
  console.log(e.data); 
}

// Disconnect the channel
bc.close()
```

![BroadcastChannel](~@assets/img/javascript/how-javascript-work-15.png)

## 메세지 전송 방법

- Copying the message : 메세지는 serialize, 복사, 전송, de-serialize 된다. 페이지와 worker는 같은 인스턴스를 공유 하지 않고, 각자 생성해서 중복된 결과를 가진다. 대부분의 브라우저는 자동으로 json을 인코딩/디코딩하는 기능이 있어서 이 처리는 오버헤드가 발생하고 메세지가 클수록 증가한다.
- Transferring the message : 오리지날 센더는 한번 보내면 더이상 사용 할 수 없다. 데이터는 거의 동시에 베껴진다. ArrayBuffer만 전송 가능하다.

## 웹 워커 기능

 웹 워커는 자바스크립트 바운터리 안에서만 사용 가능하다.

- `navigator` 객체
- `location` 객체
- `XMLHttpRequest`
- `setTimeout()/clearTimeout()` 과 `setInterval()/clearInterval()`
- The Application Cache
- Importing external scripts using importScripts()
- 다른 웹 워커 생성

## 웹 워커의 한계

몇몇 javascript 기능에 접근하지 못하는 한계가 있다.

- DOM
- window 객체
- document 객체
- parent 객체

- 웹 워커는 돔을 조작할 수 없다. 별도의 컴퓨팅 머신으로 사용하는고 UI 변경 결과를 페이지 코드에 전달해 사용해야 한다.

## 에러 핸들링

- 웹워커로 자바스크립트 에러를 처리 할 수 있다.
- 필요 프로퍼티
    - filename : 웹 워커 js 파일
    - lineno : 에러 난 라인 번호
    - message : 에러 설명

``` js
function onError(e) {
  console.log('Line: ' + e.lineno);
  console.log('In: ' + e.filename);
  console.log('Message: ' + e.message);
}

var worker = new Worker('workerWithError.js');
worker.addEventListener('error', onError, false);
worker.postMessage(); // Start worker without a message.
```

## 웹 워커의 활용 사례

- Ray tracing : ray tracing이란 빛의 경로를 추적함으로서 이미지를 생성하는 렌더링 기술이다. Ray tracing은 빛의 경로 계산하기 위해서 CPU를 많이 사용한다. 이 로직을 웹 워커에 넣어놓으면 UI block이 되지 않기 때문에 더 좋은 결과를 얻을 수 있다.
- Encryption : 암호화 할 데이터가 많고 빈번하다면 꽤나 시간 소비가 많이 일어난다. 웹 워커는 DOM 에 접근을 못하기 때문에 순수 알고리즘 작업을 하기 좋다.
- Prefetching data : 웹사이트를 최적화하거나 데이터 로딩 시간을 개선하기 위해서 웹 워커에서 데이터 로드를 맡기고 필요할 때 꺼내 쓸 수 있다.
- Progressive Web Apps : PWA는 네크워크 커넥션이 불안 할때도 빠르게 로드해서 브라우저에 저장한다. 이 일을 웹 워커에서 한다면 UI blocking이 일어나지 않을 것이다.
- Spell checking : 기본적으로 스펠 체크는 프로그램이 dictionary 파일을 읽고 dictionary를 검색 트리로 파싱된다. 프로그램은 서치트리에서 존재를 확인하고 만약 없다면 대체 스펠링을 제공한다.

## reference

- [How JavaScript works: The building blocks of Web Workers + 5 cases when you should use them](https://blog.sessionstack.com/how-javascript-works-the-building-blocks-of-web-workers-5-cases-when-you-should-use-them-a547c0757f6a)