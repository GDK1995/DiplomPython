<template>
  <div class="lesson">
    <p class="heading_xl_h4">{{$t('title_11')}}</p>
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
  name: 'EleventhPractice',
  data () {
    return {
      chapters: [{
        text: `${this.$t('practice_35')}`
      },
      {
        text: `${this.$t('practice_26')}`
      },
      {
        text: `${this.$t('practice_17')}`
      },
      {
        text: `${this.$t('practice_48')}`
      },
      {
        text: `${this.$t('practice_44')}`
      }]
    }
  }
}
</script>
