<template>
  <div class="kids-data">
    <div class="kids-data__title">
      <h2>Дети(макс. 5)</h2>
      <v-add-button v-if="this.kids.length < kidsLimit"
      @click="addKid">Добавить ребенка</v-add-button>
    </div>
    <div
      class="kids-data__form"
      v-for="(kid, index) in kids"
      :key="kid.id"
      v-bind:kidsData="kid"
      @addToPreview="addToPreview"
    >
      <v-input label="kid-name" labelText="Имя" inputValue="Петр"></v-input>
      <v-input label="kid-age" labelText="Возраст" inputValue="10"></v-input>
      <span @click="removeKid(index)" class="kids-data__remove">Удалить</span>
    </div>
    <v-submit-button @click="addToPreview">Сохранить</v-submit-button>
  </div>
</template>
<script>

import VAddButton from '@/components/ui/VAddButton.vue';
import VInput from '@/components/ui/VInput.vue';
import VSubmitButton from '@/components/ui/VSubmitButton.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'kids-data',
  components: {
    VInput,
    VAddButton,
    VSubmitButton,
  },
  props: {
    kidsData: {
      type: Object,
      default() {
        return {
        };
      },
    },
  },
  data() {
    return {
      kidsLimit: 5,
      kids: [],
      preview: [],
      newKid: '',
      labelTextName: 'Имя',
      labelTextAge: 'Возраст',
    };
  },
  computed: {
    ...mapGetters([
      'KIDS',
    ]),
  },
  methods: {
    ...mapActions([
      'ADD_TO_PREVIEW',
    ]),
    addKid() {
      this.kids.push([]);
    },
    removeKid(index) {
      this.kids.splice(index, 1);
    },
    addToPreview(data) {
      // this.$emit('addToPreview', this.kidsData);
      this.ADD_TO_PREVIEW(data);
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
