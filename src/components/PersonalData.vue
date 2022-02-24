<template>
  <div>
    <h2>Персональные данные</h2>
    <v-input label="Name" labelText="Имя" inputValue="Петр"></v-input>
    <v-input label="Age" labelText="Возраст" inputValue="99"></v-input>
  </div>
</template>
<script>
import VInput from '@/components/ui/VInput.vue';

export default {
  name: 'personal-data',
  components: {
    VInput,
  },
};
</script>
<style>
.v-input {
  margin-top: 10px;
  width: 96%;
}
</style>
