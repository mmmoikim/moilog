# vue issue 정리

## data 변경 감지 이슈

- `vm.items[indexOfItem] = newValue` : 인덱스로 값을 수정 할 경우 변경을 감지 하지 못한다.  
=> `Vue.set(vm.items, indexOfItem, newValue)` Vue.set 사용  
=> `vm.items = {...vm.items, [indexOfItem] : newValue}` spread operation 사용  
=> `this.item = _.cloneDeep(this.item)` lodash 문법 이용
- `vm.items.length = newLength` 배열의 길이를 수정할 때 변경을 감지 하지 못한다.  
=> `vm.items.splice(newLength)` splice 함수 사용  
- `this.a = 1` : 루트 데이터 this.$data에 있는 값을 추가, 삭제 할 수 없다. 두번째 뎁스부터는 가능하지만 뎁스가 깊으면 변경을 감지 할 수 없다.  
=> `Vue.set(this.userProfile, 'age', 27)` Vue.set 사용  
=> `this.$set(this.userProfile, 'age', 27)` $를 붙이면 뷰 인스턴스 전역을 본다.  
=> `Object.assign(this.userProfile, {age: 27}` assign 사용  
=> `this.userProfile = {...this.userProfile , age : 27}` spread operation 사용  

## computed, watch에 대해서

- computed는 해당 값이 사용될 때에 종속 된 값들에 변화가 있으면 콜(선언형 프로그래밍)
- watch는 해당 값에 변화가 있을 때 마다 콜백이 실행(명령형 프로그래밍)
- computed에 작성하고 사용되지 않는다면 또는 종속된 값에 변화가 없다면 불리지 않는다.
- watch는 값이 변할 때 계속 호출 되기 때문에 computed와 watch의 차이점을 생각해서 써야한다.

## input 한글 바인딩 이슈

- 한글을 v-model로 데이터를 바인딩 했을 때 자음,모음이 입력 됐을 때 값이 할당되지 않는다.  
     한 음절, 한 글자가 입력된 후 다음 글자로 넘어갈 때 값이 할당된다.
- 해결 방법으로 데이터는 value에 바인딩 하고, input 이벤트에서 event 객체받아 value값을 데이터에 바인딩 한다.

``` vue
<template>
  <div>
    <p>v-model 바인딩</p>
    <input type="text" v-model="modelBind" />
    <div> => {{this.modelBind}}</div>
    <br />
    <p>value 바인딩, input event 할당</p>
    <input type="text" :value="valueBind" @input="onInput" />
    <div> => {{this.valueBind}}</div>
  </div>
</template>

<script>
export default {
  watch: {
    modelBind(modelBind) {
      console.log(modelBind);
    }
  },
  data() {
    return {
      modelBind: "한글",
      valueBind: "한글"
    }
  },
  methods: {
    onInput(e) {
      this.valueBind = e.currentTarget.value;
    }
  }
}
</script>
```

### example
---

<cookbookDemoInput />

---

## 뒤로가기 고려

### axios-extensions

- mounted 에 api 호출을 하면 뒤로가기 했을 때도 api를 다시 호출 하는 이슈 생김.
- 데이터가 바뀌면 스크롤도 reset 됨.

  ```js
    import axios from 'axios';
    import { cacheAdapterEnhancer } from 'axios-extensions';
    const http = axios.create({
        baseURL: '/',
        headers: { 'Cache-Control': 'no-cache' },
        // cache will be enabled by default
        adapter: cacheAdapterEnhancer(axios.defaults.adapter)
    });
    http.get('/users');
    http.get('/users', { cache: false });
  ```

- axios-extensions는 get만 되기 때문에 다른 메소드는 vuex에 파라미터 캐쉬해 놓도록 따로 구현.
- [LINK](https://www.npmjs.com/package/axios-extensions)

### 스크롤 유지하기

- vueRouter에서 뒤/앞으로 가기 시 스크롤 위치를 저장하는 savedPosition 활용

```js
const router = new VueRouter({
  mode: 'history',
  routes: routes,
  //스크롤 이동 시 위치 to, from으로 분기 가능
 scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
})
```