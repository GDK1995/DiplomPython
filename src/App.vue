<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout'
import MainLayout from './layouts/MainLayout'

export default {
  components: { EmptyLayout, MainLayout },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'Empty') + 'Layout'
    }
  }
}
</script>

<style lang="scss">
@import "assets/css/index.scss";
</style>
