<script lang="ts">
// Components
import HeaderBackIcon from './BackIcon.vue'
import HeaderLogo from './Logo.vue'
import HeaderListIcon from './ListIcon.vue'

// Dependencies
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Header',
  components: { HeaderBackIcon, HeaderLogo, HeaderListIcon },

  props: {
    displayBackIcon: {
      type: Boolean,
      default: true,
    },

    displayListIcon: {
      type: Boolean,
      default: true,
    },
  },

  setup() {},
})
</script>

<template>
  <div class="header">
    <header-back-icon :isDisplay="displayBackIcon" />
    <header-logo />
    <header-list-icon :isDisplay="displayListIcon" />
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: row;
  height: 0.44rem;
  justify-content: space-between;
}
</style>
