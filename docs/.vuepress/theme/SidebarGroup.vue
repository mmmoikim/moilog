<template>
  <div class="sidebar-group" :class="{ first, collapsable }">
    <p class="sidebar-heading" :class="{ open }" @click="$emit('toggle')">
      <span>{{ item.title }}</span>
      <span class="arrow" v-if="collapsable" :class="open ? 'down' : 'right'"></span>
    </p>
    <DropdownTransition>
      <ul class="sidebar-group-items" ref="items" v-if="open || !collapsable">
        <li v-for="child in item.children">
          <SidebarLink :item="child" />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import DropdownTransition from './DropdownTransition.vue'

export default {
  name: 'SidebarGroup',
  props: ['item', 'first', 'open', 'collapsable'],
  components: { SidebarLink, DropdownTransition }
}
</script>

<style lang="stylus">
.sidebar-group {
  &:not(.first) {
    margin-top: 1em;
  }

  .sidebar-group {
    padding-left: 0.5em;
  }

  &:not(.collapsable) {
    .sidebar-heading {
      cursor: auto;
      color: inherit;
    }
  }
}

.sidebar-heading {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 400 !important;
  color: #646464 !important;
  transition: color 0.15s ease;
  cursor: pointer;
  // text-transform uppercase
  padding: 0 1.5rem;
  margin-top: 0;
  margin-bottom: 0.5rem;

  &.open, &:hover {
    color: inherit;
  }

  .arrow {
    position: relative;
    top: -0.12em;
    left: 0.5em;
  }

  &:.open .arrow {
    top: -0.18em;
  }
}

.sidebar-group-items {
  transition: height 0.1s ease-out;
  overflow: hidden;
}
</style>
