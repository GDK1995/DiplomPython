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
        <FirstTest v-if="selectedTest === 1"/>
      </div>
    </div>
  </div>
</template>

<script>
import FirstTest from '@/components/test/FirstTest'

export default {
  name: 'TestPage',
  components: {
    FirstTest
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
        title: `${this.$t('test_5')}`,
        subtitle: `${this.$t('test_2_1')}`
      },
      {
        title: `${this.$t('test_6')}`,
        subtitle: `${this.$t('test_5_1')}`
      },
      {
        title: `${this.$t('test_1')}`,
        subtitle: `${this.$t('test_1_1')}`
      },
      {
        title: `${this.$t('test_1')}`,
        subtitle: `${this.$t('test_1_1')}`
      },
      {
        title: `${this.$t('test_1')}`,
        subtitle: `${this.$t('test_1_1')}`
      },
      {
        title: `${this.$t('test_1')}`,
        subtitle: `${this.$t('test_1_1')}`
      },
      {
        title: `${this.$t('test_1')}`,
        subtitle: `${this.$t('test_1_1')}`
      }],
      selectedTest: 0
    }
  },
  methods: {
    selectedTests: function (index) {
      this.selectedTest = index + 1
    }
  }
}
</script>
