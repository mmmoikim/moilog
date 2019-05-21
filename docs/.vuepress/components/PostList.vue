
<script>
import * as moment from 'moment'
moment.locale('ko');
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
      pageNum: 1,
      pageSize: 10
    }
  },
  computed: {
    postList() {
      if (this.list && this.list.length > 0) {
        return this.list.filter((item, index) => {
          return (item.path.indexOf("/post/") > -1 && item.path.indexOf("/post/list") == -1)
        }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  },
  methods: {
    onClickItem(item) {
      this.$router.push({
        path: item.path
      })
    },
    onClickMore() {
      if (this.postList.length > this.pageNum * this.pageSize)
        this.pageNum++;
    }
  },
  filters: {
    dateFormat(date) {
      return moment(date).format("YYYY.M.DD")
    }
  }
}
</script>

<template>
  <div class="list-wrap">
    <h2>MOST RECENT</h2>
    <ul class="post-list">
      <li class="post-item" v-for="(item, index) in postList" v-if="index < pageNum*pageSize" @click="onClickItem(item)">
        <span class="post-title" v-if="item.title">{{item.title}}</span>
        <span class="post-date" v-if="item.frontmatter.date">
          {{item.frontmatter.date | dateFormat}}
        </span>
      </li>
    </ul>
    <div class="more-btn" v-if="pageNum*pageSize <= postList.length" @click="onClickMore">more</div>
  </div>
</template>

<style  lang="stylus">
@import '../theme/styles/config.styl';

.list-wrap {
  h2 {
    border: none;
    color: #3e3e3e;
  }

  .more-btn {
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: #747474;
    text-align: center;
  }

  .more-btn:hover {
    color: $accentColor;
  }

  .post-list {
    margin: 0 !important;
    padding: 0 !important;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    .post-item {
      list-style: none;
      padding: 1rem;
      margin: 0;
      border-bottom: 1px solid #f9f2f2;
      position: relative;

      li {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
      }

      .post-title {
        font-size: 1rem;
      }

      .post-date {
        position: absolute;
        right: 10px;
        bottom: 0px;
        color: #a8a8a8;
        font-size: 0.8rem;
      }
    }

    .post-item:hover {
      background: #f9f2f2;
      color: $accentColor;
    }
  }
}
</style>
