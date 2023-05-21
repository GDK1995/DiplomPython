<template>
  <div class="lesson">
    <p v-if="selectedSections === 2" class="heading_xl_h4">{{$t('title_3')}}</p>
    <p v-if="selectedSections === 4" class="heading_xl_h4">{{$t('title_5')}}</p>
    <p v-if="selectedSections === 7" class="heading_xl_h4">{{$t('title_8')}}</p>
    <p v-if="selectedSections === 9" class="heading_xl_h4">{{$t('title_10')}}</p>
    <div class="lesson_info">
      <iframe
        class="video"
        src="/video/Урок3.mp4"
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
  name: 'ThirdVideo',
  props: {
    selectedSections: Number
  }
}
</script>
