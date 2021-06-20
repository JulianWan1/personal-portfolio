<template>
  <div class="main-page-container">
    <div class="nav-bar-container">
      This is where the nav bar resides
    </div>
    <div class="text-picture-container">
      <div class="text-description-container">
        <h1>This is the main Header</h1>
        <h2>This is the second main header</h2>
        <h3>These are texts</h3>
        <h3>These are more texts</h3>
      </div>
      <div class="picture-container">
        <img src="../assets/kyriakos-grizzly-flames.jpeg" alt="img here">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class MainPage extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-page-container {
  display: flex;
  flex-direction: column;
}
.nav-bar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
}
.text-picture-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between  ;
}
.text-description-container {
  display: flex;
  flex-direction: column;
}
.picture-container {
  display: flex;
}
</style>
