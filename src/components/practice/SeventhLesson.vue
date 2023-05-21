<template>
  <div class="lesson">
    <p class="heading_xl_h4">{{$t('title_7')}}</p>
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
  name: 'SeventhPractice',
  data () {
    return {
      chapters: [{
        text: `${this.$t('practice_31')}`
      },
      {
        text: `${this.$t('practice_32')}`
      },
      {
        text: `${this.$t('practice_33')}`
      },
      {
        text: `${this.$t('practice_34')}`
      },
      {
        text: `${this.$t('practice_35')}`
      }]
    }
  }
}
</script>
