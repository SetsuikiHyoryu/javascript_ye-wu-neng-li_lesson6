<script lang="ts">
import IndexSwiper from './IndexSwiper/index.vue'
import MainTitle from './MainTitle/index.vue'
import RecomCourseList from './RecomCourseList/index.vue'
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
  components: { IndexSwiper, MainTitle, RecomCourseList },

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
      <main-title :data="{ field_name: '推薦課程', field: 'all' }" />
      <recom-course-list :recomCourseData="recomCourseData" />

      <div v-if="fieldData.length > 0 && courseData.length">
        <main-title :data="fieldData[0]" />
        <main-title :data="fieldData[1]" />
        <main-title :data="fieldData[2]" />
        <main-title :data="fieldData[3]" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
