<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: { data: Object },

  setup() {},
})
</script>

<template>
  <div class="main-title">
    <h1>{{ data.field_name }}</h1>

    <router-link :to="{ path: '/list', query: { field: data.field } }">
      <span>更多課程<i class="iconfont icon-arrow-right" /></span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.main-title {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 0.44rem;
  justify-content: space-between;
  line-height: 0.44rem;
  padding: 0 0.1rem;

  a {
    margin: -0.03rem 0 0;
  }

  h1 {
    font-size: 0.16rem;
  }

  span {
    color: #999;
    font-size: 0.12rem;

    .iconfont {
      font-size: 0.1rem;
    }
  }
}
</style>
