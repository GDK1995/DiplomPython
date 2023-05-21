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
        <FirstLesson
          v-if="selectedSections === 0"/>
        <SecondLesson
          v-if="selectedSections === 1"/>
        <ThirdLesson
          v-if="selectedSections === 2"/>
        <FourthLesson
          v-if="selectedSections === 3"/>
        <FifthLesson
          v-if="selectedSections === 4"/>
        <SixthLesson
          v-if="selectedSections === 5"/>
        <SeventhLesson
          v-if="selectedSections === 6"/>
        <EighthLesson
          v-if="selectedSections === 7"/>
        <NinthLesson
          v-if="selectedSections === 8"/>
        <TenthLesson
          v-if="selectedSections === 9"/>
        <EleventhLesson
          v-if="selectedSections === 10"/>
      </div>
    </div>
  </div>
</template>

<script>
import FirstLesson from '@/components/practice/FirstLesson'
import SecondLesson from '@/components/practice/SecondLesson'
import ThirdLesson from '@/components/practice/ThirdLesson'
import FourthLesson from '@/components/practice/FourthLesson'
import FifthLesson from '@/components/practice/FifthLesson'
import SixthLesson from '@/components/practice/SixthLesson'
import SeventhLesson from '@/components/practice/SeventhLesson'
import EighthLesson from '@/components/practice/EighthLesson'
import NinthLesson from '@/components/practice/NinthLesson'
import TenthLesson from '@/components/practice/TenthLesson'
import EleventhLesson from '@/components/practice/ElevenhLesson'

export default {
  name: 'PracticalPage',
  components: {
    FirstLesson, SecondLesson, ThirdLesson, FourthLesson, FifthLesson, SixthLesson, SeventhLesson, EighthLesson, NinthLesson, TenthLesson, EleventhLesson
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
