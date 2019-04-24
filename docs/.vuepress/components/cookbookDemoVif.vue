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
      this.loginType = (this.loginType == "username" ? "email" : "username");
    }
  }
}
</script>