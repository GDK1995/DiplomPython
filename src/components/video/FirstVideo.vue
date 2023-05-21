<template>
  <div class="lesson">
    <p v-if="selectedSections === 0" class="heading_xl_h4">{{$t('title_1')}}</p>
    <p v-if="selectedSections === 6" class="heading_xl_h4">{{$t('title_7')}}</p>
    <p v-if="selectedSections === 8" class="heading_xl_h4">{{$t('title_9')}}</p>
    <div class="lesson_info">
      <iframe
        class="video"
        src="/video/Урок1.mp4"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstVideo',
  props: {
    selectedSections: Number
  }
}
</script>
