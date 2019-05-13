# event 버블링, 캡쳐링

## Contens

- [event 버블링, 캡쳐링](#event-%EB%B2%84%EB%B8%94%EB%A7%81-%EC%BA%A1%EC%B3%90%EB%A7%81)
  - [Contens](#contens)
  - [버블링](#%EB%B2%84%EB%B8%94%EB%A7%81)
  - [캡쳐링](#%EC%BA%A1%EC%B3%90%EB%A7%81)
  - [event.preventDefault()](#eventpreventdefault)
  - [event.stopPropagation()](#eventstoppropagation)
  - [event.stopImmediatePropagation()](#eventstopimmediatepropagation)

## 버블링

- 자식 엘리먼트 -> 부모 엘리먼트 이벤트 전파
- 디폴트

## 캡쳐링

- 부모 엘리먼트 -> 자식엘리먼트 이벤트 전파

``` js
    div.addEventListener('click', logEvent, {
        capture: true // default 값은 false입니다.
    });
```

## event.preventDefault()

- 현재 엘리먼트에 있는 기본 이벤트를 중단한다.
- 체크박스에서 체크, A태그 href 링크 이동, form submit 후 refresh 등 기본동작 막을 수 있음.

## event.stopPropagation()

- 캡쳐링, 버블링으로 인한 이벤트 전파를 막는다.
- 현재 엘리먼트에서 이벤트만 실행.

## event.stopImmediatePropagation()

- 현재 엘리먼트에 여러개 이벤트가 걸려 있을 때 한 이벤트에만 걸어주면 그 이벤트만 실행 됨.