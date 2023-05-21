<template>
  <div class="lesson">
    <p class="heading_xl_h4">{{$t('title_9')}}</p>
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
  name: 'NinthPractice',
  data () {
    return {
      chapters: [{
        text: `${this.$t('practice_40')}`
      },
      {
        text: `${this.$t('practice_41')}`
      },
      {
        text: `${this.$t('practice_42')}`
      },
      {
        text: `${this.$t('practice_43')}`
      },
      {
        text: `${this.$t('practice_44')}`
      }]
    }
  }
}
</script>
