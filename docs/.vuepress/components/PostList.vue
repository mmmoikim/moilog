
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
      if (this.list && this.list.length > 0) {
        return this.list.filter((item) => {
          return item.path.indexOf("/post/") > -1
        }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  },
  methods: {
    onClickItem(item) {
      this.$router.push({
        path: item.path
      })
    }
  }
}
</script>

<template>
  <div>
    <h2>Most Recent</h2>
    <ul>
      <li v-for="(item, index) in postList" @click="onClickItem(item)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>
