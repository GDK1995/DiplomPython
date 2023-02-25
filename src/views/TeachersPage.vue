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
        <AdminPage
          v-if="selectedSections === 0"/>
        <SecondLesson
          v-if="selectedSections === 1"/>
        <AdminPage
          v-if="selectedSections === 2"/>
      </div>
    </div>
  </div>
</template>

<script>
import SecondLesson from '@/components/lessons/SecondLesson'
import AdminPage from '@/components/users/AdminPage'

export default {
  name: 'MainPage',
  components: {
    SecondLesson, AdminPage
  },
  data () {
    return {
      sections: [`${this.$t('user_1')}`, `${this.$t('user_2')}`, `${this.$t('user_3')}`],
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
