<template>
  <div class="footer">
    <div class="footer__content">
      <p>all rights reserved</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-footer',
};
</script>
<style>
.footer {
  background-color: #fafafa;
  color: #000000;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.85px;
  height: 76px;
}

.footer__content{
  display: flex;
}

.footer__content p {
  margin: auto 0;
}
</style>
