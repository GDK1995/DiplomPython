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
        <TeachersPage
          v-if="selectedSections === 0"/>
        <StudentsPage
          v-if="selectedSections === 1"/>
        <AdminPage
          v-if="selectedSections === 2"/>
      </div>
    </div>
  </div>
</template>

<script>
import AdminPage from '@/components/users/AdminPage'
import TeachersPage from '@/components/users/TeachersPage'
import StudentsPage from '@/components/users/StudentsPage'

export default {
  name: 'MainPage',
  components: {
    TeachersPage, AdminPage, StudentsPage
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
