<script>
import ProjectIndex from './views/projects/Index.vue'

import AppHeader from './components/AppHeader.vue';

export default {
    
  components: { AppHeader }
}

</script>

<template>
  
 <AppHeader></AppHeader>
 <router-view></router-view>
  
  
</template>

<style lang="scss">
@use './styles/general.scss';

</style>


