<template>
  <div class="lesson">
    <p class="heading_xl_h4">{{$t('title_8')}}</p>
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
  name: 'EighthPractice',
  data () {
    return {
      chapters: [{
        text: `${this.$t('practice_36')}`
      },
      {
        text: `${this.$t('practice_37')}`
      },
      {
        text: `${this.$t('practice_38')}`
      },
      {
        text: `${this.$t('practice_39')}`
      },
      {
        text: `${this.$t('practice_35')}`
      }]
    }
  }
}
</script>
