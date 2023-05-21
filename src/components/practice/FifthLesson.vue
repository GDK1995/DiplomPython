<template>
  <div class="lesson">
    <p class="heading_xl_h4">{{$t('title_5')}}</p>
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
  name: 'FifthPractice',
  data () {
    return {
      chapters: [{
        text: `${this.$t('practice_21')}`
      },
      {
        text: `${this.$t('practice_22')}`
      },
      {
        text: `${this.$t('practice_23')}`
      },
      {
        text: `${this.$t('practice_24')}`
      },
      {
        text: `${this.$t('practice_25')}`
      }]
    }
  }
}
</script>
