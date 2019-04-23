# cookbook

## input 한글 바인딩 이슈

- 한글을 v-model로 데이터를 바인딩 했을 때 자음,모음이 입력 됐을 때 값이 할당되지 않는다. 한 음절, 한 글자가 입력된 후 다음 글자로 넘어갈 때 값이 할당된다.
- 해결 방법으로 데이터는 value에 바인딩 하고, input 이벤트에서 event 객체받아 value값을 데이터에 바인딩 한다.

### EXAMPLE

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
      modelBind: "test",
      valueBind: "test"
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

<inputDemo />