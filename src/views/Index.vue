<script lang="ts">
import PageHeader from '@/components/Header/index.vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'IndexPage',

  components: {
    PageHeader,
  },

  setup() {},
})
</script>

<template>
  <div class="container">
    <page-header :displayBackIcon="false" :displayListIcon="true" />
  </div>
</template>

<style lang="scss" scoped>
div {
  color: red;
}
</style>
