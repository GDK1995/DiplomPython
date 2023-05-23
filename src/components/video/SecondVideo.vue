<template>
  <div class="lesson">
    <p v-if="selectedSections === 1" class="heading_xl_h4">{{$t('title_2')}}</p>
    <p v-if="selectedSections === 3" class="heading_xl_h4">{{$t('title_4')}}</p>
    <p v-if="selectedSections === 5" class="heading_xl_h4">{{$t('title_6')}}</p>
    <p v-if="selectedSections === 10" class="heading_xl_h4">{{$t('title_11')}}</p>
    <div class="lesson_info">
      <iframe
        class="video"
        src="/video/Урок2.mp4"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
        sandbox>
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondVideo',
  props: {
    selectedSections: Number
  }
}
</script>
