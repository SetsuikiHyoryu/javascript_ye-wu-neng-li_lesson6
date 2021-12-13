<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useRouter } from '@/hooks'

export default defineComponent({
  name: 'HeaderBackIcon',

  props: {
    isDisplay: {
      type: Boolean,
      default: true,
    },
  },

  setup() {
    const router = useRouter()

    const goBack = (): void => {
      router.go(-1)
    }

    return { goBack }
  },
})
</script>

<template>
  <div class="back-icon">
    <i class="iconfont icon-arrow-left" v-if="isDisplay" @click="goBack" />
  </div>
</template>

<style lang="scss" scoped>
.back-icon {
  align-items: center;
  color: #000;
  display: flex;
  height: 0.44rem;
  justify-content: center;
  width: 0.44rem;
}
</style>
