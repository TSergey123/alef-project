<template>
  <div class="wrapper">
    <div class="home">
      <personal-data></personal-data>
      <kids-data></kids-data>
    </div>
  </div>
</template>

<script>

import PersonalData from '@/components/PersonalData.vue';
import KidsData from '@/components/KidsData.vue';

export default {
  name: 'Home',
  components: {
    PersonalData,
    KidsData,
  },
};
</script>
<style>
</style>
