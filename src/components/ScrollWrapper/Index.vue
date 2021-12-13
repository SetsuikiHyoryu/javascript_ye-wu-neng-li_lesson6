<script lang="ts">
import IndexSwiper from './IndexSwiper/index.vue'
import {
  defineComponent,
  onMounted,
  ref,
  reactive,
  toRefs,
} from '@vue/composition-api'
import BetterScroll, { BScrollInstance } from 'better-scroll'
import IndexModel from '@/models/Index'

const indexModel = new IndexModel()

export default defineComponent({
  name: 'IndexScrollWrapper',
  components: { IndexSwiper },

  setup() {
    const wrapper = ref<HTMLElement>()
    const scroll = ref<BScrollInstance>()

    const state = reactive({
      swiperData: [],
      fieldData: [],
      courseData: [],
      recomCourseData: [],
    })

    onMounted(async () => {
      await setCourseData()

      scroll.value = new BetterScroll(
        wrapper.value as HTMLElement,

        {
          mouseWheel: true,
          click: true,
          tap: true,
        } as any
      )
    })

    const setCourseData = async (): Promise<void> => {
      const { swipers, fields, courses, recomCourses } = (
        await indexModel.getCourseDatas()
      ).result

      state.swiperData = swipers
      state.fieldData = fields
      state.courseData = courses
      state.recomCourseData = recomCourses
    }

    return { wrapper, ...toRefs(state) }
  },
})
</script>

<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <index-swiper :swiperData="swiperData" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
