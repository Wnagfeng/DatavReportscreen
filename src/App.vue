<template>
  <div class="wrapper">
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: '',
  components: { RouterView },
};
</script>

<style scoped>
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.wrapper {}
</style>
