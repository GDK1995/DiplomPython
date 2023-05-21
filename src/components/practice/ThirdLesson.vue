<template>
  <div class="lesson">
    <p class="heading_xl_h4">{{$t('title_3')}}</p>
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
  name: 'ThirdPractice',
  data () {
    return {
      chapters: [{
        text: `${this.$t('practice_11')}`
      },
      {
        text: `${this.$t('practice_12')}`
      },
      {
        text: `${this.$t('practice_13')}`
      },
      {
        text: `${this.$t('practice_14')}`
      },
      {
        text: `${this.$t('practice_15')}`
      }]
    }
  }
}
</script>
