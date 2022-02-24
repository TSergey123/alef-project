<template>
  <div class="header">
    <router-link to="/">
      <div class="header__logo">
        <img src="../assets/logo.png" width="175" height="32" alt="logo" />
      </div>
    </router-link>
    <div class="header__nav">
      <ul class="header__list">
        <li class="header__list-item">
          <router-link to="/">Форма</router-link>
        </li>
        <li class="header__list-item">
          <router-link to="/preview">Превью</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-header',
};
</script>
<style>
.header {
  display: flex;
  flex-direction: row;
  position: relative;
}

.header__logo {
  position: absolute;
  top: 15px;
  left: 0;
}

.header__nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.header__list {
  padding: 0;
  list-style-type: none;
  display: flex;
  font-family: Montserrat, Arial, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: rgba(17, 17, 17, 0.48);
}
.header__list-item {
  cursor: pointer;
}
.header__list-item:not(:last-child) {
  margin-right: 24px;
}
a {
  text-decoration: none;
  color: unset;
}
</style>
