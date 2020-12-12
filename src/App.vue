<template>
<<<<<<< HEAD
 <!-- <Home/> -->
 <SearchPage/>
 <!-- <InfoPage/> -->

=======
<div>
  <router-view></router-view>
</div>
>>>>>>> 1bb415265e456707fb5397b6754d38f73a34819c
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

