# cookbook

## directive

### v-once

- data에 처음 초기화 한 값 유지, 데이터 변화가 있어도 해당 돔은 업데이트 되지 않는다.

``` vue
<span v-once>This will never change: {{ msg }}</span>
```

### v-html

- raw html 값을 랜더링한다.

``` vue
<span v-html="rawHtml"></span></p>
```

### v-bind

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

### v-if

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

#### example

---

<cookbookDemoVif />

---

### v-show

- 해당 엘리먼트를 노출 여부를 지정한다
- v-if와 다르게 돔 엘리먼트는 그대로 남아있고 렌더링도 되지만 css 스타일 속성 `display : none` 으로 미노출 한다.
- v-if는 토글 비용이 높고, v-show는 초기 랜더 비용이 높다. 자주 토글된다면 v-show, 런타임 중 바뀌지 않는다면 v-if

```vue
<h1 v-show="ok">Hello!</h1>
```

### v-on

- 이벤트 바인딩

``` vue
<button v-on:click="onclick">Button</button>
<!-- v-on 약어 대체 가능 -->
<button @click="onclick">Button</button>
<!-- 동적 바인딩 가능 -->
<button @:[keyname]="keyvalue">Button</button>
<!-- event.preventDefault() 를 트리거 할 수 있다 -->
<button v-on:submit.prevent="onSubmit">Button</button>
```

### v-for

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

## 뷰 인스턴스 변수, 메소드 사용

- 뷰 객체 스코프 안에서 전역으로 쓰고 싶을 때
- `$` : 모든 인스턴스에서 사용가능하게 해준다.
- 컴포넌트 data랑 이름 겹치면 컴포넌트 data가 overwitten 됨.

``` js
//main.js
Vue.prototype.$appName = 'My App'

//component
new Vue({
  data: {
    appName: 'The name of some other app'
  },
  beforeCreate: function() {
    console.log(this.appName) //'My App'
  },
  created: function() {
    console.log(this.appName)//'The name of some other app'
  }
})
```

- 메소드도 가능

``` js
  Vue.prototype.$reverseText = function(propertyName) {
  this[propertyName] = this[propertyName]
    .split('')
    .reverse()
    .join('')
}

new Vue({
  data: {
    message: 'Hello'
  },
  created: function() {
    console.log(this.message) // => "Hello"
    this.$reverseText('message')
    console.log(this.message) // => "olleH"
  }
})
```

- 프로토타입 함수를 화살표 함수로 쓰면 vue 객체 스코프로 들어가서 위처럼 못 씀.

``` js
//이렇게 쓰면 this 는 Vue가 됨
Vue.prototype.$reverseText = propertyName => {
  this[propertyName] = this[propertyName]
    .split('')
    .reverse()
    .join('')
}
```

- 전역에서 선언됐기 때문에 컴포넌트 안에서 어디서 선언 한건지 혼란 스러울 수 있음.

- 원문 : [vuejs.org](https://vuejs.org/v2/cookbook/adding-instance-properties.html)