<template lang="">
  <div class="add-button">
    <span>+</span>
    <span><slot></slot></span>
  </div>
</template>
<script>
export default {
  name: 'v-add-button',
};
</script>
<style>
.add-button {
  color: #01A7FD;
  border: 2px solid #01A7FD;
  border-radius: 25px;
  width: 204px;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: name;
  justify-content: center;
  align-content: center;
  max-height: 44px;
  cursor: pointer;
}

.add-button span {
  margin: auto 5px;
}
</style>
