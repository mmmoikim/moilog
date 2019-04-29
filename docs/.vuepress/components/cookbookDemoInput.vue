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