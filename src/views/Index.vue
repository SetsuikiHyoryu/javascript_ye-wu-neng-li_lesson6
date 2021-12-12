<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import IndexModel from '@/models/index'

const indexModel = new IndexModel()

export default defineComponent({
  name: 'IndexPage',

  setup() {
    onMounted(async () => {
      const data = await indexModel.getCourseDatas()
      console.log(data)
    })
  },
})
</script>

<template>
  <div class="IndexPage">index</div>
</template>

<style lang="scss" scoped>
div {
  color: red;
}
</style>
