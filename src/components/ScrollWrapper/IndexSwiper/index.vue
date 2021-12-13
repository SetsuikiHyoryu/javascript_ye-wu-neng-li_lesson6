<script lang="ts">
import SliderInner from './SliderInner.vue'
import { defineComponent, ref } from '@vue/composition-api'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default defineComponent({
  name: 'IndexSwiper',
  components: { Swiper, SwiperSlide, SliderInner },

  props: {
    swiperData: Array,
  },

  setup() {
    const swiperBox = ref()

    const swiperOption = ref({
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      loop: true,
      loopedSlides: 1,
      autoplay: true,
    })

    return { swiperBox, swiperOption }
  },
})
</script>

<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <swiper :options="swiperOption" ref="swiperBox">
        <swiper-slide v-for="(item, index) in swiperData" :key="index">
          <slider-inner :data="item" />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
