<template>
  <div class="navbar">
    <div class="navbar_block">
      <router-link to="/"
        @click.native="selectTab('lesson')"
        :class="[selected === 'lesson' ? 'selected_tab' : '']"
        class="navbar_block_list medium_bold_m">
        Обучение
      </router-link>
      <router-link to="/teacher"
        @click.native="selectTab('teacher')"
        :class="[selected === 'teacher' ? 'selected_tab' : '']"
        class="navbar_block_list medium_bold_m">
        Пользователи
      </router-link>
      <router-link to="/log"
        @click.native="selectTab('log')"
        :class="[selected === 'log' ? 'selected_tab' : '']"
        class="navbar_block_list medium_bold_m">
        Журнал
      </router-link>
      <router-link to="/test"
        @click.native="selectTab('test')"
        :class="[selected === 'test' ? 'selected_tab' : '']"
        class="navbar_block_list medium_bold_m">
        Тестирование
      </router-link>
    </div>
    <div class="navbar_bttn">
      <button @click="logout" class="medium_s">
        ВЫЙТИ
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarPage',
  data () {
    return {
      selected: localStorage.getItem('nav')
    }
  },
  methods: {
    selectTab: function (item) {
      this.selected = item
      localStorage.setItem('nav', this.selected)
    },
    // logout: function () {
    //   this.$router.push('/login')
    //   localStorage.clear()
    // }
    async logout () {
      await this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
          localStorage.clear()
        })
    }
  }
}
</script>
