<template>
  <div class="project-section-container">
    <div class="image-text-container">
      <div class="text-container">
        <div class="project-header">
          Projects
        </div>
        <div class="project-texts">
          <p>Coming Soon</p>
        </div>
      </div>
      <img src="../assets/Porsche_Rear.jpg" alt="Another image">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class ProjectsSection extends Vue{
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

.project-header{
  font-size: 150px;
  padding-left: 60px;
  margin-top: 30px;
  color: rgb(255, 255, 255);
}

.project-texts{
  font-size: 35px;
  margin-top: 40px;
  padding-left: 60px;
}

</style>