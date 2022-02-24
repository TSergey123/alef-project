<template>
  <div class="preview"
  v-for="item in preview_item_data"
  :key="item.key"
  :preview_item_data="item"
  :previewData="KIDS"
  >
    <div class="personal-data">
      <h3>персональные данные</h3>
    </div>
    <div class="kids-data">
      <h3>Дети</h3>
      <p>{{preview_item_data.name}}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'preview',
  props: {
    preview_item_data: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters([
      'KIDS',
    ]),
  },
};
</script>
<style>
</style>
