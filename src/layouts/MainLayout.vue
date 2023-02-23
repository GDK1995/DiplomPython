<template>
  <div>
    <NavbarPage />
    <router-view/>
  </div>
</template>

<script>
import NavbarPage from '@/components/NavbarPage'

export default {
  name: 'MainLayout',
  components: {
    NavbarPage
  }
}
</script>
