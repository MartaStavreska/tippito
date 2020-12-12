<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>
import Home from './components/Home-page.vue'
import SearchPage from './components/Search-page.vue'
import InfoPage from './components/Info-page.vue'

export default {
  name: 'App',
  components: {
     Home,
     SearchPage,
     InfoPage
  }
}
</script>

