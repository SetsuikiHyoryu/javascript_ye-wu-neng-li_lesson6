<script lang="ts">
import PageHeader from '@/components/Header/index.vue'
import IndexScrollWrapper from '@/components/ScrollWrapper/Index.vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'IndexPage',

  components: {
    PageHeader,
    IndexScrollWrapper,
  },

  setup() {},
})
</script>

<template>
  <div class="container">
    <page-header :displayBackIcon="false" :displayListIcon="true" />
    <index-scroll-wrapper />
  </div>
</template>

<style lang="scss" scoped>
div {
  color: red;
}
</style>
