<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import ListModel from '@/models/list'

const listModel = new ListModel()

export default defineComponent({
  setup() {
    onMounted(async () => {
      const fileData = await listModel.getCourseFields()
      const courseData = await listModel.getCourses('all')

      console.log(fileData, courseData)
    })
  },
})
</script>

<template>
  <div class="ListPage">list</div>
</template>
