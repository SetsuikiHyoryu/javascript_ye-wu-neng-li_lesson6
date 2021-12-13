<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HeaderListIcon',

  props: {
    isDisplay: {
      type: Boolean,
      default: true,
    },
  },

  setup() {},
})
</script>

<template>
  <div class="list-icon">
    <router-link to="List">
      <i class="iconfont icon-cc-list" v-if="isDisplay"></i>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.list-icon {
  align-items: center;
  color: #000;
  display: flex;
  height: 0.44rem;
  justify-content: center;
  width: 0.44rem;
}

.iconfont {
  font-size: 0.25rem;
}
</style>
