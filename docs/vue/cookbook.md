# 뷰 인스턴스에 전역 변수 선언하기

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