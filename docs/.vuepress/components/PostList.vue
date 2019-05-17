
<script>
export default {
  name: 'PostList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  computed: {
    postList() {
      let postList = [];
      if (this.list && this.list.length > 0) {
        postList = this.list.filter((item) => {
          return item.path.indexOf("/post/") > -1
        })
      }
      return postList;
    }
  },
  methods: {
  }
}
</script>

<template>
  <div>
    <h2>Most Recent</h2>
    <ul>
      <li v-for="(item, index) in postList">
        <span>
          {{item.title}}
        </span>
      </li>
    </ul>
  </div>
</template>
