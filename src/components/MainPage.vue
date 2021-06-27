<template>
  <div class="main-page-container">
    <NavBar 
      @handleAboutSection="redirectToAboutSection"
    />
    <div class="text-picture-container">
      <div class="picture-container">
        <div class="text-description-container">
          <h1 class="text-header">
            Julian Wan
          </h1>
          <div class="descriptions">
            <h2>Software Developer</h2>
            <h3>Mechanical Engineering Grad</h3>
            <h3>Looking ahead for more</h3>
          </div>
        </div>
        <img src="../assets/porsche-widescreen.jpeg" alt="img here">
      </div>
    </div>
    <div id="about-section">
      <AboutSection/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './NavBar.vue';
import AboutSection from './AboutSection.vue';

@Component({
  components: {
    NavBar,
    AboutSection
  },
})
export default class MainPage extends Vue {

  redirectToAboutSection(){
    const aboutElement = document.getElementById('about-section');
    aboutElement?.scrollIntoView({ behavior:'smooth'});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-page-container {
  display: flex;
  flex-direction: column;
}

.text-picture-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text-description-container {
  position: absolute;
  flex-direction: column;
  padding-left: 60px;
}

.text-header{
  font-size: 150px;
  margin-top: 20px;
  color: rgb(243, 240, 231);
}

.descriptions{
  font-size: 40px;
  color: rgb(216, 208, 208);
}

.picture-container {
  display: block;
}
</style>
