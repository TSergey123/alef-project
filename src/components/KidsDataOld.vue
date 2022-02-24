/* eslint-disable vue/no-deprecated-html-element-is */
<template>
  <div class="kids-data">
    <div class="kids-data__title">
      <h2>Дети(макс. 5)</h2>
      <v-add-button
      v-if="this.count < 5"
      @click="addKid"
      >Добавить ребенка</v-add-button>
    </div>
    <div
    class="kids-data__form"
    v-for="index in count"
    :key="index.id"
    :ref="setNode"
    >
      <v-input label="kid-name" labelText="Имя" inputValue="Петр"></v-input>
      <v-input label="kid-age" labelText="Имя" inputValue="10"></v-input>
      <span @remove-kid="removeKid" class="kids-data__remove">Удалить</span>
    </div>
    <v-submit-button>Сохранить</v-submit-button>
  </div>
</template>
<script>

import VAddButton from '@/components/ui/VAddButton.vue';
import VInput from '@/components/ui/VInput.vue';
import VSubmitButton from '@/components/ui/VSubmitButton.vue';

export default {
  name: 'kids-data',
  components: {
    VInput,
    VAddButton,
    VSubmitButton,
  },
  data() {
    return {
      count: 2,
      kids: [],
    };
  },
  beforeUpdate() {
    this.myNodes = [];
  },
  methods: {
    setNode(el) {
      this.kids.push(el);
    },
    addKid() {
      // this.components.push(VInput);
      this.count += 1;
    },
    removeKid() {
      // this.$emit('remove');
      // this.count -= 1;
      this.$emit('remove-kid', this.index);
    },
  },
  updated() {
    console.log(this.kids);
  },
};
</script>
<style scoped>
.kids-data {
  margin: 20px 0;
}
.kids-data__title {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
}
.kids-data__form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.v-input {
  width: 230px;
}
.kids-data__remove {
  padding-top: 20px;
  color: #01a7fd;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  cursor: pointer;
}
.v-submit {
  margin-top: 20px;
}
</style>
