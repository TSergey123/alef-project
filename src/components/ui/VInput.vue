<template>
  <div class="v-input">
    <label
    class="v-input__label"
    :for="label">
    {{ labelText }}</label>
    <input
    class="v-input__input"
    type="text"
    placeholder="placeHolder"
    :id="label"
    :value="inputValue" />
  </div>
</template>
<script>
export default {
  name: 'v-input',
  props: {
    label: {
      type: String,
      default: 'Label',
    },
    labelText: {
      type: String,
      default: 'Label',
    },
    inputValue: {
      type: String,
      default: 'Label',
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.v-input {
  position: relative;
}
.v-input__input {
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  background-color: #ffffff;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 8px;
  padding-left: 15px;
}

.v-input__label {
  font-size: 13px;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.48);
  position: absolute;
  top: 5px;
  left: 15px;
  cursor: pointer;
}
</style>
