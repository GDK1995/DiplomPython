<template>
  <div class="lesson">
    <p class="heading_xl_h4">{{$t('title_6')}}</p>
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
  name: 'SixthPractice',
  data () {
    return {
      chapters: [{
        text: `${this.$t('practice_26')}`
      },
      {
        text: `${this.$t('practice_27')}`
      },
      {
        text: `${this.$t('practice_28')}`
      },
      {
        text: `${this.$t('practice_29')}`
      },
      {
        text: `${this.$t('practice_30')}`
      }]
    }
  }
}
</script>
