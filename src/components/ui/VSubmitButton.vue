<template lang="">
  <div class="v-submit">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'v-submit-button',
};
</script>
<style>
  .v-submit {
    border: 1px solid #01A7FD;
    background-color: #01A7FD;
    border-radius: 25px;
    padding: 10px 20px;
    color: #FFFFFF;
    width: fit-content;
    cursor: pointer;
  }
</style>
