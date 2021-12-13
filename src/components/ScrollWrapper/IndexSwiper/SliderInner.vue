<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'SliderInner',
  props: { data: Object },

  setup() {},
})
</script>

<template>
  <a :href="'https://ke.qq.com/course/' + data.course_id">
    <img :src="data.img" :alt="data.course_name" />
  </a>
</template>

<style lang="scss" scoped></style>
