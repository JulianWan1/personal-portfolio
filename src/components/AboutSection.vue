<template>
  <div class="about-section-container">
    <div class="image-text-container">
      <div class="text-container">
        <div class="about-header">
          About Me
        </div>
        <div class="about-texts">
          <p>This is the paragraph section</p>
        </div>
      </div>
      <img src="../assets/AT.jpeg" alt="Another image">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class AboutSection extends Vue{
}
</script>

<style scoped>
.image-text-continer{
  display: block;
}

.text-container{
  position:absolute;
  padding-left: 60px;
  margin-top: 30px;
  color: rgb(255, 255, 255);
}

.about-header{
  font-size: 150px;
  padding-left: 60px;
  margin-top: 30px;
  color: rgb(255, 255, 255);
}

.about-texts{
  font-size: 35px;
  margin-top: 40px;
  padding-left: 60px;
}

</style>