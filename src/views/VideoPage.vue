<template>
  <div class="main">
    <div class="main_item">
      <div class="main_item_block">
        <div
          :class="[selectedSections === index ? 'medium_bold_s' : 'medium_s']"
          class="main_item_block_sections"
          v-for="(item, index) in sections"
          :key="item"
          @click="selectedSection(index)">
          {{item}}
        </div>
      </div>
    </div>
    <div class="main_info">
      <div class="main_info_block">
        <FirstVideo
          v-if="selectedSections === 0 || selectedSections === 6|| selectedSections === 8"
          :selectedSections="selectedSections"/>
        <SecondVideo
          v-if="selectedSections === 1 || selectedSections === 10 || selectedSections === 3 || selectedSections === 5"
          :selectedSections="selectedSections"/>
        <ThirdVideo
          v-if="selectedSections === 2 || selectedSections === 7 || selectedSections === 9|| selectedSections === 4"
          :selectedSections="selectedSections"/>
      </div>
    </div>
  </div>
</template>

<script>
import FirstVideo from '@/components/video/FirstVideo'
import SecondVideo from '@/components/video/SecondVideo'
import ThirdVideo from '@/components/video/ThirdVideo'

export default {
  name: 'VideoPage',
  components: {
    FirstVideo, SecondVideo, ThirdVideo
  },
  data () {
    return {
      sections: [`${this.$t('title_1')}`, `${this.$t('title_2')}`, `${this.$t('title_3')}`, `${this.$t('title_4')}`, `${this.$t('title_5')}`, `${this.$t('title_6')}`, `${this.$t('title_7')}`, `${this.$t('title_8')}`, `${this.$t('title_9')}`, `${this.$t('title_10')}`, `${this.$t('title_11')}`],
      selectedSections: 0
    }
  },
  methods: {
    selectedSection: function (index) {
      this.selectedSections = index
    }
  }
}
</script>
