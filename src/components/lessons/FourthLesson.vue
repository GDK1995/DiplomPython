<template>
  <div class="lesson">
    <p v-if="selectedChapter === 0" class="heading_xl_h4">{{$t('title_4')}}</p>
    <div v-if="selectedChapter === 0" class="lesson_block">
      <div
        v-for="(elem, index) in chapters"
        :key="elem"
        class="lesson_block_item"
        @click="selectChapter(index)">
        <p class="medium_bold_l" style="border-bottom: 1px solid var(--gray-2);">
          {{elem.subtitle}}
        </p>
        <p class="medium_s" style="text-align: justify;">
          {{elem.text}}
        </p>
      </div>
    </div>
    <div
      v-if="selectedChapter !== 0"
      class="arrow">
      <svg @click="resetChapter" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0144 3.53126C16.4843 2.8946 15.5385 2.80818 14.9019 3.33823L7.73399 9.3058C6.05399 10.7045 6.05304 13.2839 7.73201 14.6838L14.9217 20.6785C15.558 21.209 16.5038 21.1233 17.0344 20.487C17.5649 19.8508 17.4791 18.9049 16.8429 18.3744L10.034 12.3796C9.79414 12.1796 9.79428 11.8112 10.0343 11.6114L16.8213 5.64378C17.458 5.11373 17.5444 4.16793 17.0144 3.53126Z" fill="#004DE7"/>
      </svg>
      <p @click="resetChapter">Назад</p>
    </div>
    <p v-if="selectedChapter === 1" class="heading_xl_h4">{{$t('chapter_4_1')}}</p>
    <p v-if="selectedChapter === 2" class="heading_xl_h4">{{$t('chapter_4_2')}}</p>
    <p v-if="selectedChapter === 3" class="heading_xl_h4">{{$t('chapter_4_3')}}</p>
    <div
      v-if="selectedChapter !== 0"
      class="lesson_info">
      <div v-if="selectedChapter === 1">
        <p class="medium_m">{{$t('text_4_1')}}</p>
        <p class="medium_m">{{$t('text_4_16')}}</p>
        <p class="medium_m">{{$t('text_4_17')}}</p>
        <p class="medium_m">{{$t('text_4_18')}}</p>
      </div>
      <div v-if="selectedChapter === 2">
        <p class="medium_m">{{$t('text_4_2')}}</p>
        <p class="medium_m">{{$t('text_4_6')}}</p>
        <label class="medium_m">{{$t('text_4_7')}}</label>
        <label class="medium_m">{{$t('text_4_8')}}</label>
        <label class="medium_m">{{$t('text_4_9')}}</label>
        <label class="medium_m">{{$t('text_4_10')}}</label>
        <label class="medium_m">{{$t('text_4_11')}}</label>
        <label class="medium_m">{{$t('text_4_12')}}</label>
        <p class="medium_m">{{$t('text_4_13')}}</p>
        <p class="medium_m">{{$t('text_4_14')}}</p>
        <p class="medium_m">{{$t('text_4_15')}}</p>
      </div>
      <div v-if="selectedChapter === 3">
        <p class="medium_m">{{$t('text_4_3')}}</p>
        <label class="medium_m">{{$t('text_4_4')}}</label>
        <label class="medium_m">{{$t('text_4_5')}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourthLesson',
  data () {
    return {
      chapters: [{
        subtitle: `${this.$t('chapter_4_1')}`,
        text: `${this.$t('text_4_1')}`
      },
      {
        subtitle: `${this.$t('chapter_4_2')}`,
        text: `${this.$t('text_4_2')}`
      },
      {
        subtitle: `${this.$t('chapter_4_3')}`,
        text: `${this.$t('text_4_3')}`
      }],
      selectedChapter: 0
    }
  },
  methods: {
    selectChapter: function (index) {
      this.selectedChapter = index + 1
    },
    resetChapter: function () {
      this.selectedChapter = 0
    }
  }
}
</script>
