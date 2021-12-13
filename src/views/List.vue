<script lang="ts">
import PageHeader from '@/components/Header/index.vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ListPage',

  components: {
    PageHeader,
  },

  setup() {},
})
</script>

<template>
  <div class="container">
    <page-header :displayBackIcon="true" :displayListIcon="false" />
  </div>
</template>

<style lang="scss" scoped>
div {
  color: red;
}
</style>
