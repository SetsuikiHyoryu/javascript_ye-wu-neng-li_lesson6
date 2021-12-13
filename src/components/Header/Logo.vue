<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HeaderLogo',

  setup() {},
})
</script>

<template>
  <div class="logo-wrap"></div>
</template>

<style lang="scss" scoped>
.logo-wrap {
  background: url('//9.idqqimg.com/edu/logo192-3x_621b1c1fc1dd9a9eff1800acff237e5c.png#unsprite')
    no-repeat;
  background-size: 1.06rem 0.44rem;
  height: 0.44rem;
  margin: 0 auto;
  width: 1.06rem;
}
</style>
