# directive

## v-once

- data에 처음 초기화 한 값 유지, 데이터 변화가 있어도 해당 돔은 업데이트 되지 않는다.

``` vue
<span v-once>This will never change: {{ msg }}</span>
```

## v-html

- raw html 값을 랜더링한다.

``` vue
<span v-html="rawHtml"></span></p>
```

## v-bind

- 앨리먼트에 애트리뷰트값에 바인딩한다.

``` vue
<button v-bind:disabled="isButtonDisabled">Button</button>
<!--v-bind 약어 대체 가능 -->
<button :disabled="isButtonDisabled">Button</button>
<!-- 동적 바인딩 가능 -->
<button :[keyname]="keyvalue">Button</button>
<!-- 계산된 값으로 바인딩 해야 한다. 이렇게 쓰면 warning -->
<a v-bind:['foo' + bar]="value"> ... </a>
```

- 동적 표현식에는 문자열과 null만 가능하다.  
    null이라면 바인딩을 하지 않고,  문자열이 아니라면 warning이 난다.  
    또한 대문자는 올 수 없으며 따음표나 공백도 허용되지 않는다.

## v-if

- 랜더 여부를 지정할 수 있다.
- 처음 값이 false라면 아무것도 하지 않는다.

``` vue
<p v-if="seen">Now you see me</p>
```

- v-else 랑 같이 쓸 수 있다

``` vue
<div v-if="true">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

- v-else-if 도 가능

``` vue
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

- template에도 가능

``` vue
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

- 주의해야 할 점! v-if / v-else로 조건 랜더를 한 앨리먼드 위치가 같다면 키를 지정해 줘야 한다.  
- 같은 앨리먼트를 재사용하기 때문에 value 값이 바뀌지 않을 수 있음!

``` vue
<template>
  <div>
    <p>키 설정 안함</p>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address">
    </template>
    <p>키 설정</p>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <p>버튼을 눌러 타입을 변경하세요</p>
    <buttom @click="onClickToggle">CHANGE LOGIN TYPE</buttom>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginType: "username"
    }
  },
  methods: {
    onClickToggle() {
      this.loginType = (this.loginType == "username" ? "email" : "username")
    }
  }
}
</script>
```

### example

---

<cookbookDemoVif />

---

## v-show

- 해당 엘리먼트를 노출 여부를 지정한다
- v-if와 다르게 돔 엘리먼트는 그대로 남아있고 렌더링도 되지만 css 스타일 속성 `display : none` 으로 미노출 한다.
- v-if는 토글 비용이 높고, v-show는 초기 랜더 비용이 높다. 자주 토글된다면 v-show, 런타임 중 바뀌지 않는다면 v-if

```vue
<h1 v-show="ok">Hello!</h1>
```

## v-for

- 배열의 값을 리스트형식으로 반복적으로 렌더링 한다.
- 키를 항상 쓰는 것 이 좋다
- 두번째 값으로 index 사용 가능

``` vue
<ul>
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

- of 사용 가능

``` vue
<div v-for="item of items"></div>
```

- 오브젝트
- 반복 순서는 `Object.keys()` 순서를 따라간다

``` vue
<li v-for="value in object">
    {{ value }}
</li>

<!-- 오브젝트는 두번째 인자값으로 키 사용 가능-->
<div v-for="(value, key) in object">
    {{ key }}: {{ value }}
</div>
```

- 범위

``` vue
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```

- v-for 와 v-if 를 같이 썼을 때 v-for가 먼저 실행된다.

```vue
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```

- push(), pop(), shift(), unshift(), splice(), sort(), reverse() 르오 배열이 변경되었을 때 감지한다.
- 배열의 변경으로 Dom의 위치를 변경하는게 아니라 각 엘리먼트 값을 변경하고 다시 랜더할지 말지 결정하기 때문에 key를 꼭 써야 한다.
- filter(), concat(), slice()로 배열값을 바꿔쳐도 전체 돔을 랜더하지 않고 돔을 재사용한다.

## v-on

- 이벤트 바인딩

``` vue
<template>
  <button v-on:click="onclick">Button</button>
  <!-- 1) v-on 약어 대체 가능  -->
  <button @click="onclick">Button</button>
  <!-- 2) 인라인 메소드   -->
  <button v-on:click="say('hi')">Say hi</button>
  <!-- 3) 인라인에서 event 객체 받을 때  -->
  <button v-on:click="warn('warnning!!', $event)">Submit</button>
  <!-- 동적 바인딩 가능 -->
  <button @:[keyname]="keyvalue">Button</button>
</template>
<script>
  var example = new Vue({
    el: '#example-2',
    data: {
      name: 'Vue.js'
    },
    methods: {
      // 1)
      onclick: function (event) {
        if (event) {
          alert(event.target.tagName); // button
        }
      },
      // 2)
      say: function (message) {
        alert(message); // hi
      },
      // 3)
      warn: function (message, event) {
      if (event) event.preventDefault()
        alert(message)
      }
    }
  })

  //javascript 함수 콜
  example2.onclick();
</script>
```

## event modifiers

 - .stop : event.stopPropagation(), 현재 이벤트만 실행
 - .prevent : event.preventDefault(), 기본 이벤트 차단.
 - .capture : 캡쳐링 ture
 - .self : event.target가 현재 엘리먼트 일 때만 실행, 이벤트 전파는 된다.
 - .once : 한번만 실행
 - .passive : 기본 이벤트 취소 할 수 없음을 알림, 핸들러에서 event.preventDefault() 불러도 취소 안 됨, .prevent 랑 같이 쓰지 마세요

``` vue
<template>
    <div @click="oneClick">
      one
      <!-- two 누르면 two, one 실행 -->
      <div @click.self="twoClick">
        two
        <!-- three 누르면 three, one 실행 -->
        <div @click="threeClick">
          three
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    onClickToggle() {
      this.loginType = (this.loginType == "username" ? "email" : "username");
    },
    oneClick() {
      console.log("oneClick")
    },
    twoClick() {
      console.log("twoClick")
    },
    threeClick() {
      console.log("threeClick")
    }
  }
}
</script>
```

## key modifiers

``` html
<input v-on:keyup.enter="submit">
<!-- 약어 사용 -->
<input @keyup.enter="submit">
```

 - .enter
 - .tab
 - .delete : Delete, Backspace
 - .esc
 - .space
 - .up
 - .down
 - .left
 - .right
 - .ctrl
 - .alt
 - .shift
 - .meta : mac에서 command키
 - .exact : 해당 키카 눌려 있을때만 실행, 키 지정 안돼있다면 눌리지 않은 상태  
  `<button @click.ctrl.exact="onCtrlClick">A</button>`
 - .left : 클릭 함수 마우스
 - .right : 클릭 함수 마우스
 - .middle : 클릭 함수 마우스

## v-model

### input

```html
<input v-model="message" placeholder="edit me">
```

### textarea

```html
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

### checkbox

- data 타입 한개라면 boolean, 여러개라면 배열

```html
  <!-- checked : Boolean-->
  <input type="checkbox" id="checkbox" v-model="checked">
  <!-- checkedNames : Array-->
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <!-- value 지정 가능 -->
  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
```

### Radio

```html
<input type="radio" id="one" value="One" v-model="picked">
<input type="radio" id="two" value="Two" v-model="picked">
<!-- value 지정 가능 -->
<input type="radio" v-model="pick" v-bind:value="a">
```

### select

```html
<!-- 옵션에 value 지정하면 selected 에 선택된 value 로 들어감 -->
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option value="a">A</option>
  <option value="b">B</option>
  <option value="c">C</option>
</select>
<!-- value 객체로 지정 가능 this.selected.number-->
<select v-model="selected">
  <option v-bind:value="{ number: 123 }">123</option>
</select>
<!-- 멀티플일때 selected : Array-->
<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

## v-model 수식어
- .lazy : `<input v-model.lazy="msg" >`, input이벤트 대신 change 이벤트로 데이터 변함
- .number : `<input v-model.number="age" type="number">`, type="number로 지정해도 data에는 문자열로 들어오기 때문에 .number 쓰면 데이터에 숫자로 들어옴.
- .trim : `<input v-model.trim="msg">`, 자동 trim, 공백 제거