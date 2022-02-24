<template>
  <v-header></v-header>
  <div class="wrapper">
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>-->
    <router-view />
  </div>
  <v-footer></v-footer>
</template>
<script>

import VHeader from '@/components/VHeader.vue';
import VFooter from '@/components/VFooter.vue';

export default {
  name: 'App',
  components: {
    VHeader,
    VFooter,
  },
};
</script>
<style>
#app {
  font-family: Montserrat, Arial, sans-serif;
  color: #111111;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
}

.wrapper {
  width: 616px;
  margin: 0 auto;
  margin-bottom: 50px;
}

.footer{
  position: fixed;
  bottom: 0;
}
</style>
