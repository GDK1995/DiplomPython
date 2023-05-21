<template>
  <div class="lesson">
    <p class="heading_xl_h4">{{$t('title_1')}}</p>
    <div
      class="lesson_info"
      v-for="(item, index) in chapters"
      :key="item+index">
      <p class="medium_bold_m">Задача №{{index + 1}}</p>
      <p class="medium_m">{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstPractice',
  data () {
    return {
      chapters: [{
        text: `${this.$t('practice_1')}`
      },
      {
        text: `${this.$t('practice_2')}`
      },
      {
        text: `${this.$t('practice_3')}`
      },
      {
        text: `${this.$t('practice_4')}`
      },
      {
        text: `${this.$t('practice_5')}`
      }]
    }
  }
}
</script>
