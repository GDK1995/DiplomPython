<template>
  <div class="main">
    <div class="main_test">
      <div
        v-if="selectedTest === 0"
        class="main_test_block">
        <div
          v-for="(item, index) in test"
          :key="item + index"
          @click="selectedTests(index)"
          class="main_test_block_item">
          <div class="main_test_block_title">
            <p class="medium_bold_l" style="border-bottom: 1px solid var(--gray-2);">{{item.title}}</p>
            <p>{{item.subtitle}}</p>
          </div>
          <div class="start_test medium_s">
            <p>Начать</p>
          </div>
        </div>
      </div>
      <div class="main_test_block">
        <FirstTest
          v-if="selectedTest === 1"
          @reset-test="reset"/>
        <SecondTest
          v-if="selectedTest === 2"
          @reset-test="reset"/>
        <ThirdTest
          v-if="selectedTest === 3"
          @reset-test="reset"/>
        <FourthTest
          v-if="selectedTest === 4"
          @reset-test="reset"/>
        <FifthTest
          v-if="selectedTest === 5"
          @reset-test="reset"/>
        <SixthTest
          v-if="selectedTest === 6"
          @reset-test="reset"/>
        <SeventhTest
          v-if="selectedTest === 7"
          @reset-test="reset"/>
        <EighthTest
          v-if="selectedTest === 8"
          @reset-test="reset"/>
        <NinthTest
          v-if="selectedTest === 9"
          @reset-test="reset"/>
        <TenthTest
          v-if="selectedTest === 10"
          @reset-test="reset"/>
      </div>
    </div>
  </div>
</template>

<script>
import FirstTest from '@/components/test/FirstTest'
import SecondTest from '@/components/test/SecondTest'
import ThirdTest from '@/components/test/ThirdTest'
import FourthTest from '@/components/test/FourthTest'
import FifthTest from '@/components/test/FifthTest'
import SixthTest from '@/components/test/SixthTest'
import SeventhTest from '@/components/test/SeventhTest'
import EighthTest from '@/components/test/EighthTest'
import NinthTest from '@/components/test/NinthTest'
import TenthTest from '@/components/test/TenthTest'

export default {
  name: 'TestPage',
  components: {
    FirstTest, SecondTest, ThirdTest, FourthTest, FifthTest, SixthTest, TenthTest, NinthTest, EighthTest, SeventhTest
  },
  data () {
    return {
      test: [{
        title: `${this.$t('test_1')}`,
        subtitle: `${this.$t('test_1_1')}`
      },
      {
        title: `${this.$t('test_2')}`,
        subtitle: `${this.$t('test_2_1')}`
      },
      {
        title: `${this.$t('test_3')}`,
        subtitle: `${this.$t('test_3_1')}`
      },
      {
        title: `${this.$t('test_4')}`,
        subtitle: `${this.$t('test_4_1')}`
      },
      {
        title: `${this.$t('title_4')}`,
        subtitle: `${this.$t('test_2_1')}`
      },
      {
        title: `${this.$t('title_5')}`,
        subtitle: `${this.$t('test_5_1')}`
      },
      {
        title: `${this.$t('title_6')}`,
        subtitle: `${this.$t('test_1_1')}`
      },
      {
        title: `${this.$t('title_7')}`,
        subtitle: `${this.$t('test_1_1')}`
      },
      {
        title: `${this.$t('chapter_7_3')}`,
        subtitle: `${this.$t('test_1_1')}`
      },
      {
        title: `${this.$t('chapter_8_1')}`,
        subtitle: `${this.$t('test_1_1')}`
      }],
      selectedTest: 0
    }
  },
  methods: {
    selectedTests: function (index) {
      this.selectedTest = index + 1
    },
    reset: function () {
      this.selectedTest = 0
    }
  }
}
</script>
