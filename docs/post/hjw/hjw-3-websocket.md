---
date : 2019-05-16 13:52:00
---

# 3. websockek과 HTTP/2 + SSE

- [3. websockek과 HTTP/2 + SSE](#3-websockek%EA%B3%BC-http2--sse)
  - [long polling](#long-polling)
  - [webSocket](#websocket)
  - [웹소켓의 프레임](#%EC%9B%B9%EC%86%8C%EC%BC%93%EC%9D%98-%ED%94%84%EB%A0%88%EC%9E%84)
  - [HTTP/2 + SSE](#http2--sse)
  - [reference](#reference)

## long polling

- 롤 폴링은 클라이언트가 HTTP Connection을 열어 놓고 서버 데이터를 받는 것을 말한다.
- 이 방법은 오버헤드가 존재하기 때문에 응답시간이 짧아야 하는 서비스에는 적절하지 못하다.

```js
(function poll(){
   setTimeout(function(){
      $.ajax({ 
        url: 'https://api.example.com/endpoint', 
        success: function(data) {
          // Do something with `data`
          // ...

          //Setup the next poll recursively
          poll();
        }, 
        dataType: 'json'
      });
  }, 10000);
})();
```

## webSocket

- 웹소켓은 **handshake** 프로세스로 작동한다.

1. 클라이언트는 웹소켓 연결을 원한다는 의미로 헤더에 `Upgrade`을 설정 해 HTTP request를 서버에 보낸다.

```
GET ws://websocket.example.com/ HTTP/1.1
Origin: http://example.com
Connection: Upgrade
Host: websocket.example.com
Upgrade: websocket
```

- websocket URL은 `ws`, `wss` 스키마를 사용한다. ws은 암호화 되지 않은 80포트, wss는 TLS 암호화 된 443포트를 사용

```js
var socket = new WebSocket('ws://websocket.example.com');
```

1. 연결이 되었다면 서버는 업그레이드로 응답

```
HTTP/1.1 101 Switching Protocols
Date: Wed, 25 Oct 2017 10:07:34 GMT
Connection: Upgrade
Upgrade: WebSocket
```

3. 클라이언트는 `open` 이벤트 발생

```js
socket.onopen = function(event) {
  console.log('WebSocket is connected.');
};
```

- 핸드 쉐이크가 끝나면 HTTP connection 이 websocket connection으로 대체되고 TCP/IP를 사용한다.
- 전송되는 메세지는 하나이상의 프레임으로 구성되어있고 프레임에는 보내고자하는 데이터 페이로드와 프리픽스가 들어있다. 프레임 시스템은 non-payload data의 양을 크게 줄일 수 있다.

## 웹소켓의 프레임

- 프레이밍 프로토콜은 복잡한 헤더를 가지고 있다.
- 헤더에는 전송 데이터 종류는 나타내는 코드 `opcode`가 있다.
    (`0x00` : 이전 프레임 연장, `0x01` : 텍스트, `0x02` : 바이너리, `0x08` : 연장종료, `0x09` : 핑, `0x0a` 퐁)
- 페이로드 데이터는 여러 프레임으로 나눌 수 있고 헤더에 `fin`(최종프레임여부) 비트가 설정되지 않고 `opcode`가 `0x00`이면(이전 프레임 연장) 계속 받을 수 있기 때문에 크기를 미리 알 수 없어도 되고 멀티플렉싱(여러 채널이 출력)이 가능하다.
- 허트비트 : 특정 시점에서 한쪽에서 핑을 보내면 다른쪽에서 퐁을 보내야 한다. 허트비트를 통해서 연결일 확인 할 수 있다.

## HTTP/2 + SSE

- HTTP/2 서버 푸시는 서버가 클라이언트 캐시에 리소스를 사전에 전송하는 것으로 웹소켓처럼 어플리케이션 코드에서 이벤트로 가져올 수 없다.  

![HTTP nomal communication](~@assets/img/javascript/how-javascript-work-9.png)
![HTTP/2 server push](~@assets/img/javascript/how-javascript-work-10.png)

- 실시간 서비스를 위해서는 Server-Sent Events (SSE)를 사용해야한다.
- SSE는 커넥트가 되어 있으면 서버가 데이터를 푸시 할 수 있다. (one-way publish-subscribe model)
- 클라이언트는 객체를 서버로 부터 스트림을 받아 `EventSource`로 데이터를 받아온다.

```js
var es = new EventSource(stream_url);

es.onmessage = function (event) {
    // 이벤트 설정이안된 기본 데이터 처리
};
es.addEventListener('myevent', function(e) {
    // 'myevent' 이벤트의 데이터 처리
}, false);
```

- http2는 멀티플랙스로 한 연결에 SSE 스트림을 동시에 여러개 포함할 수 있다.
![HTTP/2 멀티플랙스](~@assets/img/javascript/how-javascript-work-11.png)

- 양쪽으로 많은 양의 메세지가 교환되고 멀티 플레이어인 경우, 지연시간이 낮아서 실시간을 기대하는 상황에서는 websocket이 어울리지만 뉴스라던가 데이터를 열람하는 서비스이라면 HTTP2 + SSE를 사용해도 좋다.
- 웹소켓은 HTTP연결을 변경시켜 사용하기 때문은 기존 웹 인프라와 호환성 문제를 걱정해야하고 HTTP2 + SSE는 브라우저 호환성이 웹소켓보다 좋지 않다.

## reference

- [How JavaScript works: Deep dive into WebSockets and HTTP/2 with SSE + how to pick the right path](https://blog.sessionstack.com/how-javascript-works-deep-dive-into-websockets-and-http-2-with-sse-how-to-pick-the-right-path-584e6b8e3bf7)