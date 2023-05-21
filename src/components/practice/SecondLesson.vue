<template>
  <div class="lesson">
    <p class="heading_xl_h4">{{$t('title_2')}}</p>
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
  name: 'SecondPractice',
  data () {
    return {
      chapters: [{
        text: `${this.$t('practice_6')}`
      },
      {
        text: `${this.$t('practice_7')}`
      },
      {
        text: `${this.$t('practice_8')}`
      },
      {
        text: `${this.$t('practice_9')}`
      },
      {
        text: `${this.$t('practice_10')}`
      }]
    }
  }
}
</script>
