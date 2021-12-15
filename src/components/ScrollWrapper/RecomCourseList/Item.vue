<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'RecomCourseItem',
  props: { data: Object },

  setup() {},
})
</script>

<template>
  <div id="RecomCourseItem" class="course-item">
    <a :href="'https://ke.qq.com/course/' + data.course_id">
      <div class="img-wrap">
        <img :src="data.course_img" :alt="data.course_name" />
      </div>

      <div class="info-wrap">
        <h1 class="course-name">{{ data.course_name }}</h1>

        <p class="teacher-info">
          <img :src="data.teacher_img" :alt="data.teacher_name" />
          <span>{{ data.teacher_name }}</span>
        </p>

        <p class="course-price">￥{{ data.price }}.00</p>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.course-item {
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  height: 0.8rem;
  margin: 0 0 0.1rem;
  position: relative;

  .img-wrap {
    height: 100%;
    width: 1.43rem;
  }

  .info-wrap {
    box-sizing: border-box;
    height: 100%;
    left: 0;
    padding: 0.05rem 0.1rem 0.05rem 1.53rem;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .course-name {
    font-size: 0.14rem;
    line-height: 0.18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .teacher-info {
    margin: 0.03rem;

    img {
      border-radius: 50%;
      height: 0.25rem;
      width: 0.25rem;
    }

    span {
      color: #666;
      font-size: 0.12rem;
      vertical-align: middle;
    }
  }

  .course-price {
    color: #f40;
    font-size: 0.14rem;
    margin: 0.06rem 0 0;
  }
}
</style>
