<script lang="ts">
import RecomCourseItem from './Item.vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'RecomCourseList',
  components: { RecomCourseItem },
  props: { recomCourseData: Array },

  setup() {},
})
</script>

<template>
  <div class="recom-course-board">
    <recom-course-item
      v-for="(item, index) in recomCourseData"
      :key="index"
      :data="item"
    />
  </div>
</template>

<style lang="scss" scoped></style>
